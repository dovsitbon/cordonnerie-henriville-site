import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import { fill, type Dict, type Locale } from "@/lib/i18n";
import { img } from "@/lib/media";
import { hourLabel, upcomingClosures, weekRows } from "@/lib/shop";
import { href } from "@/lib/routes";
import { intlLocale } from "@/lib/locales";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { PhoneIcon, PinIcon, StarIcon, Stitch } from "@/components/icons";

export const alt = (d: Dict, src: string) => d.alt[src.split("/").pop()!.replace(/\.\w+$/, "") as keyof Dict["alt"]] ?? "";

/** Photo de public/media avec ses vraies dimensions et son texte alternatif dans la langue de la page. */
export function Photo({ src, d, className = "", sizes, priority = false }: { src: string; d: Dict; className?: string; sizes: string; priority?: boolean }) {
  const i = img(src);
  return <Image src={i.src} width={i.width} height={i.height} alt={alt(d, src)} sizes={sizes} priority={priority} quality={80} className={className} />;
}

/**
 * Emplacement photo : la vraie photo si elle existe (data/photos.json), sinon un panneau de cuir crème surpiqué
 * avec le dessin de l'objet. Jamais de fausse photo.
 */
export function Slot({ src, d, sizes, className = "", icon, label, priority = false, dark = false, imgClass = "" }: { src: string | null; d: Dict; sizes: string; className?: string; icon?: ReactNode; label?: string; priority?: boolean; dark?: boolean; imgClass?: string }) {
  if (src)
    return (
      <div className={`overflow-hidden bg-cream-deep ${className}`}>
        <Photo src={src} d={d} sizes={sizes} priority={priority} className={`size-full object-cover ${imgClass}`} />
      </div>
    );
  return (
    <div className={`slot grid place-items-center ${dark ? "dark text-brass-light" : "text-brass"} ${className}`} aria-hidden="true">
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        {icon}
        {label && <span className={`eyebrow !tracking-[0.24em] ${dark ? "!text-brass-light" : "!text-cognac/80"}`}>{label}</span>}
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, lead, center = false, id, light = false }: { eyebrow: string; title: string; lead?: string; center?: boolean; id?: string; light?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-brass-light" : ""}`}>{eyebrow}</p>
      <Stitch className={`mt-4 h-1.5 w-14 ${light ? "text-brass-light" : "text-brass"} ${center ? "mx-auto" : ""}`} />
      <h2 id={id} className="display mt-5 text-[clamp(2.1rem,4.6vw,3.4rem)]">
        {title}
      </h2>
      {lead && <p className={`lead mt-5 ${light ? "!text-paper/75" : ""}`}>{lead}</p>}
    </Reveal>
  );
}

/** Note Google (4,8/5, 188 avis), avec la date du relevé. */
export function Rating({ lang, d, className = "" }: { lang: Locale; d: Dict; className?: string }) {
  const r = site.rating;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(r.value);
  const date = new Intl.DateTimeFormat(intlLocale[lang], { month: "long", year: "numeric" }).format(new Date(r.asOf));
  return (
    <a href={site.maps} target="_blank" rel="noopener" className={`inline-flex items-center gap-2 ${className}`} title={fill(d.rating.asOf, { date })}>
      <span className="flex text-brass" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span>
        {fill(d.rating.label, { value })} · {fill(d.rating.count, { count: r.count })}
      </span>
    </a>
  );
}

export function PhoneLink({ className = "", label }: { className?: string; label?: string }) {
  return (
    <a href={`tel:${site.tel}`} className={className}>
      <PhoneIcon /> {label ?? site.phone}
    </a>
  );
}

/** Horaires de la semaine (data/horaires.json) et fermetures à venir. */
export function HoursTable({ lang, d }: { lang: Locale; d: Dict }) {
  const rows = weekRows();
  const today = new Date().toISOString().slice(0, 10);
  const closures = upcomingClosures(today);
  return (
    <div>
      <table className="w-full text-[0.9375rem]">
        <tbody>
          {rows.map((r) => (
            <tr key={r.day} className="border-b border-line/70 last:border-0">
              <th scope="row" className="py-2 text-start font-light capitalize">
                {d.days[r.day]}
              </th>
              <td className={`py-2 text-end tabular-nums ${r.ranges ? "" : "text-muted"}`}>{r.ranges ? r.ranges.map(([a, b]) => `${hourLabel(a, lang)} – ${hourLabel(b, lang)}`).join(", ") : d.infos.closedDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {closures.length > 0 && (
        <p className="mt-4 text-[0.875rem] text-muted">
          {d.infos.closures}
          {lang === "fr" ? " : " : ": "}
          {closures
            .map((c) => {
              const f = new Intl.DateTimeFormat(intlLocale[lang], { day: "numeric", month: "long", timeZone: "UTC" });
              const from = f.format(new Date(c.from));
              return `${c.label[lang]} (${c.from === c.to ? from : `${from} – ${f.format(new Date(c.to))}`})`;
            })
            .join(", ")}
        </p>
      )}
    </div>
  );
}

/** Infos pratiques : adresse, carte, horaires, accès, téléphone. */
export function InfosBlock({ lang, d }: { lang: Locale; d: Dict }) {
  const i = d.infos;
  return (
    <section id="infos" aria-labelledby="infos-title" className="border-t border-line">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
        <div>
          <SectionHead eyebrow={i.eyebrow} title={i.title} id="infos-title" />
          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">{i.address}</dt>
              <dd className="mt-3 leading-relaxed">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-2 inline-flex items-center gap-1.5 text-[0.9375rem]">
                  <PinIcon /> {i.route}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{i.phone}</dt>
              <dd className="mt-3">
                <PhoneLink className="display inline-flex items-center gap-2 text-[1.7rem]" />
                <div className="mt-2 text-[0.875rem] text-muted">
                  <OpenStatus />
                </div>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">{i.hours}</dt>
              <dd className="mt-3">
                <HoursTable lang={lang} d={d} />
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">{i.access}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{i.accessText}</dd>
            </div>
          </dl>
        </div>
        <Reveal className="min-h-[22rem] overflow-hidden bg-cream-deep lg:min-h-0">
          <iframe title={i.mapTitle} src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="size-full min-h-[22rem] border-0 grayscale-[0.35] sepia-[0.15]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Faq({ d, className = "" }: { d: Dict; className?: string }) {
  return (
    <section aria-labelledby="faq-title" className={`mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHead eyebrow={d.faq.eyebrow} title={d.faq.title} id="faq-title" />
        <div className="divide-y divide-line border-y border-line">
          {d.faq.items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.0625rem] font-normal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="display text-[1.6rem] leading-none text-brass transition-transform duration-500 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Bloc d'appel à l'action « Demander un devis / Appeler ». */
export function DevisCta({ lang, d, label, query = "" }: { lang: Locale; d: Dict; label?: string; query?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <Link href={`${href(lang, "devis")}${query}`} className="btn-solid cognac">
        {label ?? d.nav.devis}
      </Link>
      <PhoneLink className="inline-flex items-center gap-2 text-[1.0625rem]" />
    </div>
  );
}
