"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { CameraIcon, CloseIcon, PhoneIcon } from "@/components/icons";
import { DELAYS, emptyDevis, isEmail, isPhone, MAX_PHOTOS, OBJECTS, REPAIRS, type Devis, type ObjectId } from "@/lib/devis";
import { fill } from "@/lib/i18n";
import { parisNow } from "@/lib/shop";

type Errors = Partial<Record<"object" | "repair" | "name" | "phone" | "email" | "photo" | "generic", string>>;
type Done = { notified: boolean; confirmed: boolean };
type Shot = { blob: Blob; url: string };

const MAX_SIDE = 1400;

/** Réduit chaque photo dans le navigateur (JPEG ≤ 1400 px) : trois photos restent sous la limite d'envoi. */
async function shrink(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  return new Promise((ok, ko) => canvas.toBlob((b) => (b ? ok(b) : ko(new Error("photo"))), "image/jpeg", 0.8));
}

/** Catégorie de tarifs (lien « Demander un devis » du tableau) → objet du formulaire. */
const OBJECT_OF: Record<string, ObjectId> = { talons: "chaussures", couture: "chaussures", sacs: "sac", cles: "cle", serrurerie: "cle", petits: "autre" };

function Fieldset({ legend, children, hint, step }: { legend: string; children: ReactNode; hint?: string; step: number }) {
  return (
    <fieldset className="border-t border-line pt-8">
      <legend className="display float-left flex w-full items-baseline gap-4 text-[1.9rem]">
        <span className="text-[0.875rem] font-normal tracking-[0.2em] text-cognac tabular-nums">{String(step).padStart(2, "0")}</span>
        {legend}
      </legend>
      {hint && <p className="clear-left pt-1 text-[0.875rem] text-muted">{hint}</p>}
      <div className="clear-left space-y-7 pt-6">{children}</div>
    </fieldset>
  );
}

function Chip({ type = "checkbox", name, checked, onChange, children }: { type?: "checkbox" | "radio"; name: string; checked: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <label className="chip">
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

const Err = ({ id, children }: { id?: string; children?: string }) =>
  children ? (
    <p id={id} role="alert" className="mt-2 text-[0.875rem] text-[#a3402c]">
      {children}
    </p>
  ) : null;

/**
 * Demande de devis : objet, réparations (selon l'objet) + précisions, 1 à 3 photos, délai, coordonnées, message.
 * Envoi à /api/devis (e-mail à l'atelier avec les photos + confirmation au client, via Resend).
 */
export function DevisForm() {
  const { lang, d } = useLocale();
  const uid = useId();
  const reduce = useReducedMotion();
  const f = d.devis.fields;
  const [q, setQ] = useState<Devis>(emptyDevis);
  const [shots, setShots] = useState<Shot[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Done | null>(null);
  const [minDate, setMinDate] = useState("");
  const topRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const shotsRef = useRef<Shot[]>([]);
  useEffect(() => {
    shotsRef.current = shots;
  }, [shots]);

  // Préremplissage depuis un lien (?o=sac ou ?c=cles depuis le tableau des tarifs)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const o = params.get("o") ?? OBJECT_OF[params.get("c") ?? ""];
    // eslint-disable-next-line react-hooks/set-state-in-effect -- paramètres d'URL, lisibles seulement côté client
    setMinDate(parisNow().iso);
    if (o && (OBJECTS as readonly string[]).includes(o)) setQ((v) => ({ ...v, object: o as ObjectId }));
  }, []);

  useEffect(() => () => shotsRef.current.forEach((s) => URL.revokeObjectURL(s.url)), []);

  const set = <K extends keyof Devis>(k: K, v: Devis[K]) => setQ((x) => ({ ...x, [k]: v }));
  const err = d.devis.errors;

  async function addPhotos(files: FileList | null) {
    setErrors((e) => ({ ...e, photo: undefined }));
    if (!files) return;
    const room = MAX_PHOTOS - shots.length;
    const next: Shot[] = [];
    for (const file of Array.from(files).slice(0, room)) {
      try {
        const blob = await shrink(file);
        next.push({ blob, url: URL.createObjectURL(blob) });
      } catch {
        setErrors((e) => ({ ...e, photo: err.photo }));
      }
    }
    setShots((s) => [...s, ...next].slice(0, MAX_PHOTOS));
    if (fileRef.current) fileRef.current.value = "";
  }

  function removePhoto(i: number) {
    setShots((s) => {
      URL.revokeObjectURL(s[i].url);
      return s.filter((_, j) => j !== i);
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!q.object) next.object = err.object;
    if (!q.repairs.length && !q.repair.trim() && !q.message.trim()) next.repair = err.repair;
    if (!q.name.trim()) next.name = err.name;
    if (!isPhone(q.phone)) next.phone = err.phone;
    if (q.email && !isEmail(q.email)) next.email = err.email;
    setErrors(next);
    if (Object.keys(next).length) {
      document.querySelector<HTMLElement>(`[data-err="${Object.keys(next)[0]}"]`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      return;
    }
    setSending(true);
    try {
      const body = new FormData();
      body.set("lang", lang);
      body.set("data", JSON.stringify(q));
      shots.forEach((s, i) => body.append("photos", s.blob, `photo-${i + 1}.jpg`));
      const r = await fetch("/api/devis", { method: "POST", body });
      const json = (await r.json()) as { ok: boolean } & Done;
      if (!r.ok || !json.ok) throw new Error();
      setDone({ notified: json.notified, confirmed: json.confirmed });
      topRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } catch {
      setErrors({ generic: err.generic });
    } finally {
      setSending(false);
    }
  }

  const fade = reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } };
  const s = d.devis.success;
  const repairs = q.object ? REPAIRS[q.object] : [];

  return (
    <div ref={topRef} className="scroll-mt-32">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div key="done" {...fade} role="status" className="border border-line bg-cream-soft p-8 sm:p-10">
            <p className="display text-[clamp(2rem,4vw,2.6rem)]">{s.title}</p>
            <p className="lead mt-4">{s.text}</p>
            {done.confirmed && <p className="mt-3 text-muted">{s.email}</p>}
            {!done.notified && (
              <div className="mt-6 border-t border-line pt-6">
                <p>{s.notNotified}</p>
                <a href={`tel:${site.tel}`} className="btn-solid cognac mt-4">
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setDone(null);
                setQ(emptyDevis());
                setShots([]);
              }}
              className="link-line mt-8 inline-block text-[0.9375rem]"
            >
              {s.again}
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" {...fade} onSubmit={submit} noValidate className="space-y-12">
            <Fieldset step={1} legend={d.devis.sections.object}>
              <div data-err="object" role="radiogroup" aria-label={d.devis.sections.object}>
                <div className="flex flex-wrap gap-2">
                  {OBJECTS.map((o) => (
                    <Chip key={o} type="radio" name="object" checked={q.object === o} onChange={() => setQ((x) => ({ ...x, object: o, repairs: x.repairs.filter((r) => REPAIRS[o].includes(r)) }))}>
                      {f.objects[o]}
                    </Chip>
                  ))}
                </div>
                <Err>{errors.object}</Err>
              </div>
            </Fieldset>

            <Fieldset step={2} legend={d.devis.sections.repair}>
              <div data-err="repair" className="space-y-6">
                {repairs.length > 0 && (
                  <div role="group" aria-label={f.repairsLabel}>
                    <p className="label">
                      {f.repairsLabel} <span className="text-muted">({f.repairsHint})</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {repairs.map((r) => (
                        <Chip key={r} name="repairs" checked={q.repairs.includes(r)} onChange={() => set("repairs", q.repairs.includes(r) ? q.repairs.filter((x) => x !== r) : [...q.repairs, r])}>
                          {d.devis.repairs[r as keyof typeof d.devis.repairs]}
                        </Chip>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor={`${uid}-r`} className="label">
                    {f.repair}
                  </label>
                  <textarea id={`${uid}-r`} rows={3} value={q.repair} onChange={(e) => set("repair", e.target.value)} placeholder={f.repairPh} className="field resize-y" />
                </div>
                <Err>{errors.repair}</Err>
              </div>
            </Fieldset>

            <Fieldset step={3} legend={d.devis.sections.photos} hint={f.photosHint}>
              <div>
                <input ref={fileRef} id={`${uid}-ph`} type="file" accept="image/*" multiple className="sr-only" onChange={(e) => addPhotos(e.target.files)} />
                <ul className="flex flex-wrap gap-3">
                  {shots.map((sh, i) => (
                    <li key={sh.url} className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:) */}
                      <img src={sh.url} alt="" className="size-24 object-cover sm:size-28" />
                      <button type="button" onClick={() => removePhoto(i)} aria-label={`${f.photoRemove} ${i + 1}`} className="absolute -top-2 -right-2 grid size-8 place-items-center rounded-full bg-ink text-paper">
                        <CloseIcon className="size-3.5" />
                      </button>
                    </li>
                  ))}
                  {shots.length < MAX_PHOTOS && (
                    <li>
                      <label htmlFor={`${uid}-ph`} className="slot grid size-24 cursor-pointer place-items-center text-cognac transition-colors hover:bg-[#e4d4bb] sm:size-28">
                        <span className="flex flex-col items-center gap-1.5 text-center text-[0.75rem] leading-tight">
                          <CameraIcon className="size-6" />
                          {f.photos}
                        </span>
                      </label>
                    </li>
                  )}
                </ul>
                <p className="mt-3 text-[0.8125rem] text-muted tabular-nums">{fill(f.photosCount, { count: shots.length })}</p>
                <Err>{errors.photo}</Err>
              </div>
            </Fieldset>

            <Fieldset step={4} legend={d.devis.sections.delay}>
              <div role="radiogroup" aria-label={d.devis.sections.delay} className="flex flex-wrap items-center gap-2">
                {DELAYS.map((x) => (
                  <Chip key={x} type="radio" name="delay" checked={q.delay === x} onChange={() => set("delay", x)}>
                    {f.delays[x].replace(/ ?:$/, "")}
                  </Chip>
                ))}
              </div>
              {q.delay === "date" && (
                <div className="max-w-xs">
                  <label htmlFor={`${uid}-date`} className="label">
                    {f.date}
                  </label>
                  <input id={`${uid}-date`} type="date" min={minDate} value={q.date} onChange={(e) => set("date", e.target.value)} className="field" />
                </div>
              )}
            </Fieldset>

            <Fieldset step={5} legend={d.devis.sections.contact}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div data-err="name">
                  <label htmlFor={`${uid}-n`} className="label">
                    {f.name}
                  </label>
                  <input id={`${uid}-n`} autoComplete="name" value={q.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-n-e` : undefined} className="field" />
                  <Err id={`${uid}-n-e`}>{errors.name}</Err>
                </div>
                <div data-err="phone">
                  <label htmlFor={`${uid}-p`} className="label">
                    {f.phone}
                  </label>
                  <input id={`${uid}-p`} type="tel" autoComplete="tel" inputMode="tel" value={q.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-p-e` : undefined} className="field" />
                  <Err id={`${uid}-p-e`}>{errors.phone}</Err>
                </div>
                <div data-err="email" className="sm:col-span-2">
                  <label htmlFor={`${uid}-e`} className="label">
                    {f.email} <span className="text-muted">{f.emailHint}</span>
                  </label>
                  <input id={`${uid}-e`} type="email" autoComplete="email" value={q.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${uid}-e-e` : undefined} className="field" />
                  <Err id={`${uid}-e-e`}>{errors.email}</Err>
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-m`} className="label">
                  {f.message}
                </label>
                <textarea id={`${uid}-m`} rows={4} value={q.message} onChange={(e) => set("message", e.target.value)} placeholder={f.messagePh} className="field resize-y" />
              </div>
            </Fieldset>

            <div className="border-t border-line pt-8">
              {errors.generic && (
                <p role="alert" className="mb-4 text-[#a3402c]">
                  {errors.generic}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <button type="submit" disabled={sending} className="btn-solid cognac min-w-56 disabled:opacity-60">
                  {sending ? d.devis.sending : d.devis.submit}
                </button>
                <a href={`tel:${site.tel}`} className="inline-flex items-center gap-2">
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
              <p className="mt-4 text-[0.8125rem] text-muted">{d.devis.privacy}</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
