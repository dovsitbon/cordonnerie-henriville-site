// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser en vitrine ou au comptoir.
//   npm run affichette   →   public/affichette-cordonnerie-henriville-a5.pdf
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr/devis`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const CREAM = hex("#F6EFE4");
const INK = hex("#1B1714");
const COGNAC = hex("#8A4B26");
const BRASS = hex("#B08D57");
const MUTED = hex("#5F5248");
const LINE = hex("#DED0BB");

const pdf = await PDFDocument.create();
pdf.setTitle("Cordonnerie Henriville : affichette A5");
pdf.setAuthor("Cordonnerie Henriville");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const serif = await pdf.embedFont(StandardFonts.TimesRoman);
const serifI = await pdf.embedFont(StandardFonts.TimesRomanItalic);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });

// Photo du haut : les mains à la ponceuse, en bandeau
const photo = await sharp(path.join(ROOT, "public/media/hero/mains-ponceuse-mocassin.jpg")).resize(1200, 600, { fit: "cover", position: "centre" }).jpeg({ quality: 88 }).toBuffer();
const img = await pdf.embedJpg(photo);
const photoH = 210;
page.drawImage(img, { x: 0, y: H - photoH, width: W, height: photoH });

const center = (text, font, size, y, color = INK, spacing = 0) => {
  const width = font.widthOfTextAtSize(text, size) + spacing * (text.length - 1);
  let x = (W - width) / 2;
  if (!spacing) return page.drawText(text, { x, y, size, font, color });
  for (const ch of text) {
    page.drawText(ch, { x, y, size, font, color });
    x += font.widthOfTextAtSize(ch, size) + spacing;
  }
};

// Emblème : marteau et clé croisés, au trait laiton (même dessin que le logo, viewBox 48)
let y = H - photoH - 22;
const s = 0.72;
const ox = (W - 48 * s) / 2;
const oy = y;
const draw = (d) => page.drawSvgPath(d, { x: ox, y: oy, scale: s, borderColor: BRASS, borderWidth: 1.6 });
draw("M41 41 18.5 18.5");
draw("M8.4 22.6 5.6 25.4M22.6 8.4l2.8-2.8");
draw("M15.4 32.6 40.5 7.5M35.6 12.4l3 3M31.8 16.2l2.4 2.4");
// tête du marteau (rectangle tourné de -45°) tracée en polygone
draw("M22.1 10.1 17.9 5.9 5.9 17.9 10.1 22.1Z");
draw("M17 36.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 1 1 11 0Z");

y -= 48;
center("CORDONNERIE HENRIVILLE", serif, 19, y, INK, 2.4);
y -= 15;
center("MAÎTRE ARTISAN · AMIENS", sans, 7, y, MUTED, 2);

y -= 34;
center("On répare, on ne jette pas", serifI, 22, y, COGNAC);
y -= 18;
center("Chaussures, cuir, sacs, clés et badges, serrurerie", serif, 11.5, y, MUTED);

// QR code vers la demande de devis
const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#1B1714", light: "#F6EFE4" }, errorCorrectionLevel: "M" });
const qr = await pdf.embedPng(qrPng);
const qrS = 96;
y -= 22 + qrS;
page.drawImage(qr, { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 15;
center("Devis gratuit par photo : scannez", sans, 8.5, y, INK);
y -= 12;
center(url.replace(/^https?:\/\//, ""), sans, 8, y, COGNAC);

// Pied : couture en pointillés + infos pratiques
y -= 18;
for (let x = 60; x < W - 60; x += 7) page.drawLine({ start: { x, y }, end: { x: Math.min(x + 4, W - 60), y }, thickness: 0.9, color: COGNAC });
y -= 17;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}  ·  ${site.phone}`, sans, 8.5, y);
y -= 13;
center("Du mardi au samedi, 7 h 15 – 19 h sans interruption  ·  sans rendez-vous", sans, 8.5, y);
y -= 13;
center(`${site.instagramHandle}  ·  ${String(site.rating.value).replace(".", ",")}/5 sur Google (${site.rating.count} avis)`, sans, 8, y, MUTED);
page.drawLine({ start: { x: 0, y: H - photoH }, end: { x: W, y: H - photoH }, thickness: 0.5, color: LINE });

const file = path.join(ROOT, "public/affichette-cordonnerie-henriville-a5.pdf");
await writeFile(file, await pdf.save());
console.log("affichette prête :", url);
