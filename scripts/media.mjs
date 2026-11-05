// Prépare les photos de la Cordonnerie Henriville pour le web.
// Sources : assets/raw/ (Instagram) et assets/<dossier>/ (photos prises sur place).
//   npm run media
// Copie classée dans assets/<dossier>/, version web dans public/media/<dossier>/ (next/image sert ensuite AVIF/WebP),
// dimensions réelles dans data/media-sizes.json. Pour une nouvelle photo : l'ajouter à PICKS, relancer, puis la
// brancher dans data/photos.json (ou data/avant-apres.json).
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = ["hero", "atelier", "avant-apres", "cles", "facade"];

// [fichier source (depuis assets/), dossier, nom, recadrage { top, bottom, left, right } en pixels retirés]
const PICKS = [
  // Photo de profil Instagram : mains à la ponceuse, finition d'un mocassin noir
  ["raw/cordonnerie-henriville_logo.jpg", "hero", "mains-ponceuse-mocassin", {}],
  // Seule publication : teinture d'un sac en cuir rouge. Bas recadré : signature du photographe (@lou.au2gd, crédité en mentions légales)
  ["raw/cordonnerie-henriville_01_DePLoniAGaU.jpg", "atelier", "teinture-sac-cuir-rouge", { bottom: 120 }],
  // À compléter avec les photos prises sur place, par exemple :
  // ["atelier/etabli-outils.jpg", "atelier", "etabli-outils", {}],
  // ["facade/vitrine-rue-gaulthier-de-rumilly.jpg", "facade", "vitrine", {}],
  // ["cles/machine-reproduction.jpg", "cles", "machine-reproduction", {}],
  // ["avant-apres/derby-avant.jpg", "avant-apres", "derby-avant", {}],
];

const sizes = {};
for (const [src, dir, name, c] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  const meta = await sharp(file).metadata();
  const box = { left: c.left ?? 0, top: c.top ?? 0, width: meta.width - (c.left ?? 0) - (c.right ?? 0), height: meta.height - (c.top ?? 0) - (c.bottom ?? 0) };
  await mkdir(path.join(ROOT, "assets", dir), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", dir), { recursive: true });
  const cropped = sharp(file).rotate().extract(box);
  const keep = path.join(ROOT, "assets", dir, `${name}.jpg`);
  if (!src.startsWith(`${dir}/`) || !existsSync(keep)) await cropped.clone().jpeg({ quality: 92 }).toFile(keep);
  const max = dir === "hero" ? 2000 : 1400;
  const info = await cropped.clone().resize({ width: max, height: max, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(ROOT, "public/media", dir, `${name}.jpg`));
  sizes[`/media/${dir}/${name}.jpg`] = [info.width, info.height];
}
for (const dir of DIRS) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });

// Image de partage (Open Graph) 1200 × 630 : les mains, le mocassin et la ponceuse
await sharp(path.join(ROOT, "assets/raw/cordonnerie-henriville_logo.jpg"))
  .extract({ left: 0, top: 300, width: 1080, height: 567 })
  .resize(1200, 630)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${PICKS.length} images prêtes`);
