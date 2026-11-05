import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { formatDay } from "@/lib/shop";

export const OBJECTS = ["chaussures", "sac", "ceinture", "cle", "autre"] as const;
export type ObjectId = (typeof OBJECTS)[number];

/** Réparations proposées selon l'objet (libellés dans locales → devis.repairs). */
export const REPAIRS: Record<ObjectId, readonly string[]> = {
  chaussures: ["talons", "patins", "ressemelage", "couture", "fermeture", "teinture", "entretien", "elargissement"],
  sac: ["couture", "fermeture", "anses", "doublure", "teinture"],
  ceinture: ["raccourcir", "trous", "boucle", "couture"],
  cle: ["cle-plate", "cle-securite", "cle-voiture", "badge"],
  autre: [],
};
const ALL_REPAIRS = [...new Set(Object.values(REPAIRS).flat())];

export const DELAYS = ["pas-presse", "semaine", "urgent", "date"] as const;
export const MAX_PHOTOS = 3;

export type Devis = {
  object: ObjectId | "";
  repairs: string[];
  repair: string;
  delay: (typeof DELAYS)[number] | "";
  date: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const emptyDevis = (): Devis => ({ object: "", repairs: [], repair: "", delay: "", date: "", name: "", phone: "", email: "", message: "" });

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pick = <T extends string>(v: unknown, list: readonly T[]): T | "" => (list.includes(v as T) ? (v as T) : "");

/** Nettoie une demande reçue côté serveur ; null si l'essentiel manque. */
export function parseDevis(v: unknown): Devis | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const object = pick(o.object, OBJECTS);
  const allowed = object ? REPAIRS[object] : ALL_REPAIRS;
  const q: Devis = {
    object,
    repairs: Array.isArray(o.repairs) ? [...new Set(o.repairs.filter((x): x is string => typeof x === "string" && allowed.includes(x)))] : [],
    repair: str(o.repair, 600),
    delay: pick(o.delay, DELAYS),
    date: ISO.test(str(o.date, 10)) ? str(o.date, 10) : "",
    name: str(o.name, 120),
    phone: str(o.phone, 30),
    email: str(o.email, 160),
    message: str(o.message, 1500),
  };
  if (!q.object || !q.name || !isPhone(q.phone)) return null;
  if (!q.repairs.length && !q.repair && !q.message) return null;
  if (q.email && !isEmail(q.email)) q.email = "";
  if (q.delay !== "date") q.date = "";
  return q;
}

/** Récapitulatif lisible (e-mail atelier, confirmation client), dans une langue donnée. */
export function devisMessage(q: Devis, lang: Locale, d: Dict, opts: { title?: boolean; photos?: number } = {}) {
  const m = d.devis.message;
  const f = d.devis.fields;
  const c = lang === "fr" ? " :" : ":";
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  const repairs = q.repairs.map((r) => d.devis.repairs[r as keyof Dict["devis"]["repairs"]] ?? r).join(", ");
  const delay = q.delay ? (q.delay === "date" && q.date ? `${f.delays.date} ${formatDay(q.date, lang)}` : f.delays[q.delay]) : "";
  const blocks = [
    opts.title === false ? [] : [`*${m.title}*`],
    [line(m.object, q.object ? f.objects[q.object] : ""), line(m.repairs, repairs), line(m.repair, q.repair), line(m.delay, delay)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.email, q.email), line(m.message, q.message)],
    [opts.photos ? `${m.photos}${c} ${opts.photos}` : ""],
  ];
  return blocks
    .map((x) => x.filter(Boolean).join("\n"))
    .filter(Boolean)
    .join("\n\n");
}
