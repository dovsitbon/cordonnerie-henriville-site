// Génère CONTENU.md : tous les textes du site en français et en anglais, les tarifs et délais,
// pour relecture et validation par l'atelier.   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));
const fr = await json("locales/fr.json");
const en = await json("locales/en.json");
const tarifs = await json("data/tarifs.json");
const annonces = await json("data/annonces.json");
const horaires = await json("data/horaires.json");
const site = await json("data/site.json");

const out = [];
const w = (s = "") => out.push(s);
const strip = (s) => s.replace(/<br>/g, " ").replace(/<\/?em>/g, "*");

w("# Cordonnerie Henriville : contenu du site");
w();
w("Tous les textes du site, en français et en anglais, pour relecture avec l'atelier. Les corrections se font dans `locales/fr.json` et `locales/en.json` ; tarifs, délais, horaires, annonces, photos et avant / après dans `data/*.json`. Ce fichier se régénère avec `npm run contenu`.");
w();
w(`Rien n'a été inventé côté chiffres : **aucun prix n'est renseigné** (affiché « sur devis ») tant que l'atelier ne les a pas donnés. Les délais sont des ordres de grandeur **à valider**. La note Google (${site.rating.value}/5, ${site.rating.count} avis) est celle relevée le ${site.rating.asOf}. Les avis ne sont pas cités : le site reprend seulement leurs thèmes (prix honnêtes, vrai travail d'artisan).`);
w();
w("Voir aussi : [INFOS-A-DEMANDER.md](INFOS-A-DEMANDER.md) et [assets/A-PHOTOGRAPHIER.md](assets/A-PHOTOGRAPHIER.md).");
w();

w("## Tarifs et délais (`data/tarifs.json`)");
w();
for (const c of tarifs.categories) {
  w(`### ${c.name.fr} / ${c.name.en}`);
  w();
  w("| Prestation | Délai indicatif | Prix « à partir de » |");
  w("|---|---|---|");
  for (const s of c.items) w(`| **${s.name.fr}**<br>*${s.name.en}* | ${s.delay ? `${s.delay.fr} (à valider)` : "à remplir"} | ${s.price == null ? "à remplir" : `${s.price} €`}${s.confirm ? " · **prestation à confirmer**" : ""} |`);
  w();
}

w("## Horaires (`data/horaires.json`)");
w();
const days = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
for (const d of [1, 2, 3, 4, 5, 6, 0]) {
  const r = horaires.week[String(d)];
  w(`- ${days[d]} : ${r ? r.map(([a, b]) => `${a} – ${b}`).join(", ") : "fermé"}`);
}
w();
w(`Fermetures exceptionnelles : ${horaires.closures.map((c) => `${c.label.fr} (${c.from === c.to ? c.from : `${c.from} → ${c.to}`})`).join(", ")}.`);
w();

w("## Bandeau d'annonces (`data/annonces.json`)");
w();
w(`- **Par défaut** : ${annonces.default.text.fr} *(${annonces.default.text.en})*`);
for (const a of annonces.items) w(`- **${a.from} → ${a.to}** : ${a.text.fr} *(${a.text.en})* — lien « ${a.link.fr} »`);
w();

w("## Textes du site");
w();
w("Chaque ligne : clé, français, anglais. Les textes marqués **à valider** demandent une confirmation de l'atelier.");
w();
const flags = {
  "faq.items.1": "à valider (délais)",
  "faq.items.3": "à valider (clés reproduites)",
  "faq.items.4": "à valider (moyens de paiement)",
  "faq.items.5": "à valider (objets oubliés)",
  "devis.eyebrow": "à valider (devis gratuit ?)",
  "blocks.cles": "à valider (types de clés)",
  "tiles.items.serrurerie": "à valider (prestations de serrurerie)",
  "pages.cles.list": "à valider (types de clés)",
  "pages.cles.serrurerie": "à valider (serrurerie)",
  "metier": "à valider (parcours, titre de Maître Artisan)",
  "infos.accessText": "à valider (accès, stationnement)",
};
const flagOf = (key) => Object.entries(flags).find(([k]) => key === k || key.startsWith(`${k}.`))?.[1];

const SKIP = new Set(["alt", "days"]);
function walk(a, b, key = "") {
  if (typeof a === "string") {
    const f = flagOf(key);
    w(`| \`${key}\` | ${strip(a).replace(/\n/g, "<br>")} | ${strip(b ?? "").replace(/\n/g, "<br>")} |${f ? ` **${f}** |` : " |"}`);
    return;
  }
  if (Array.isArray(a)) return a.forEach((x, i) => walk(x, b?.[i], `${key}.${i}`));
  for (const k of Object.keys(a)) walk(a[k], b?.[k], key ? `${key}.${k}` : k);
}
for (const section of Object.keys(fr)) {
  if (SKIP.has(section)) continue;
  w(`### ${section}`);
  w();
  w("| Clé | Français | English | |");
  w("|---|---|---|---|");
  walk(fr[section], en[section], section);
  w();
}

w("## Textes alternatifs des photos");
w();
w("| Photo | Français | English |");
w("|---|---|---|");
for (const k of Object.keys(fr.alt)) w(`| ${k} | ${fr.alt[k]} | ${en.alt[k]} |`);
w();

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n"));
console.log("CONTENU.md écrit");
