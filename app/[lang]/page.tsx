import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import avantApres from "@/data/avant-apres.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { img, slot, tileSlot } from "@/lib/media";
import { href } from "@/lib/routes";
import { categories, fromPrice } from "@/lib/tarifs";
import { money } from "@/lib/shop";
import { faqJsonLd } from "@/lib/jsonld";
import { DevisCta, Faq, InfosBlock, PhoneLink, Rating, SectionHead, Slot } from "@/components/Blocks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { Emblem } from "@/components/Logo";
import { ArrowIcon, BagIcon, CameraIcon, ClockIcon, DoorIcon, KeyIcon, LockIcon, NeedleIcon, PhoneIcon, ShoeIcon, Stitch, WatchIcon } from "@/components/icons";

type TileId = keyof Dict["tiles"]["items"];
const TILES: { id: TileId; icon: ReactNode; to: (l: Locale) => string }[] = [
  { id: "talons", icon: <ShoeIcon className="size-11" />, to: (l) => href(l, "ressemelage") },
  { id: "couture", icon: <NeedleIcon className="size-11" />, to: (l) => href(l, "home", "tarifs") },
  { id: "sacs", icon: <BagIcon className="size-11" />, to: (l) => href(l, "home", "cuir") },
  { id: "cles", icon: <KeyIcon className="size-11" />, to: (l) => href(l, "cles") },
  { id: "serrurerie", icon: <LockIcon className="size-11" />, to: (l) => href(l, "cles") },
  { id: "petits", icon: <WatchIcon className="size-11" />, to: (l) => href(l, "home", "tarifs") },
];

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  return (
    <section aria-labelledby="hero-title" className="relative">
      <div className="grid lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1fr_1.1fr]">
        <div className="relative order-1 h-[46svh] min-h-72 overflow-hidden bg-ink lg:order-2 lg:h-auto">
          <Slot src={slot("hero")} d={d} priority sizes="(min-width:1024px) 53vw, 100vw" className="settle absolute inset-0" imgClass="object-[50%_55%]" icon={<ShoeIcon className="size-20" />} dark />
        </div>
        <div className="order-2 flex flex-col justify-center px-5 pt-10 pb-12 sm:px-8 lg:order-1 lg:px-10 lg:py-16 xl:ps-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]">
          <p className="eyebrow rise">{h.eyebrow}</p>
          <h1 id="hero-title" className="display rise mt-5 max-w-[12ch] text-[clamp(2.9rem,6.6vw,5.8rem)] [animation-delay:0.1s]" dangerouslySetInnerHTML={{ __html: h.title }} />
          <p className="lead rise mt-6 max-w-md [animation-delay:0.2s]">{h.lead}</p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:0.3s]">
            <Link href={href(lang, "devis")} className="btn-solid cognac">
              {h.devis}
            </Link>
            <Link href={href(lang, "home", "tarifs")} className="btn-line text-ink">
              {h.tarifs}
            </Link>
          </div>
          <div className="rise mt-8 flex flex-col gap-2 text-[0.875rem] text-muted [animation-delay:0.4s] sm:flex-row sm:flex-wrap sm:gap-x-6">
            <Rating lang={lang} d={d} className="hover:text-ink" />
            <OpenStatus />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tiles;
  return (
    <section id="services" aria-labelledby="tiles-title" className="mx-auto max-w-[90rem] px-5 pt-20 pb-20 sm:px-8 lg:px-10 lg:pt-28">
      <SectionHead eyebrow={t.eyebrow} title={t.title} id="tiles-title" />
      <ul className="mt-12 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {TILES.map((tile, i) => {
          const it = t.items[tile.id];
          const p = fromPrice(tile.id);
          return (
            <Reveal as="li" key={tile.id} delay={(i % 3) * 0.06} className="h-full">
              {tileSlot(tile.id) ? (
                <Link href={tile.to(lang)} className="group block">
                  <Slot src={tileSlot(tile.id)} d={d} sizes="(min-width:1024px) 30vw, (min-width:480px) 48vw, 100vw" className="shine aspect-[4/3]" />
                  <h3 className="display mt-5 flex items-center justify-between gap-2 text-[1.6rem]">
                    {it.title}
                    <ArrowIcon className="size-4 shrink-0 text-cognac transition-transform duration-500 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
                  <p className="mt-3 text-[0.875rem] text-cognac tabular-nums">{p != null ? fill(t.from, { price: money(p, lang) }) : t.onQuote}</p>
                </Link>
              ) : (
                <Link href={tile.to(lang)} className="group flex h-full flex-col border border-line bg-cream-soft/70 p-7 transition-colors duration-500 hover:border-ink/40 hover:bg-cream-soft lg:p-9">
                  <span className="text-brass">{tile.icon}</span>
                  <h3 className="display mt-8 flex items-center justify-between gap-2 text-[1.6rem]">
                    {it.title}
                    <ArrowIcon className="size-4 shrink-0 text-cognac transition-transform duration-500 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
                  <p className="mt-6 border-t border-dashed border-brass/50 pt-4 text-[0.875rem] text-cognac tabular-nums">{p != null ? fill(t.from, { price: money(p, lang) }) : t.onQuote}</p>
                </Link>
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Strip({ d }: { d: Dict }) {
  const icons = [<ClockIcon key="c" className="size-8" />, <DoorIcon key="d" className="size-8" />, <CameraIcon key="p" className="size-8" />, <PhoneIcon key="t" className="size-8" />];
  return (
    <section aria-label={d.strip.label} className="bg-green text-paper">
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 gap-px px-0 lg:grid-cols-4">
        {d.strip.items.map((it, i) => {
          const inner = (
            <>
              <span className="text-brass-light">{icons[i]}</span>
              <span className="display mt-5 block text-[1.35rem] sm:text-[1.5rem]">{it.title}</span>
              <span className="mt-2 block text-[0.875rem] leading-relaxed text-paper/75">{it.text}</span>
            </>
          );
          return (
            <Reveal as="li" key={it.title} delay={i * 0.06} className={`px-5 py-10 sm:px-8 lg:px-10 lg:py-14 ${i % 2 ? "border-s border-paper/12" : ""} ${i > 1 ? "border-t border-paper/12 lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
              {i === 3 ? (
                <a href={`tel:${site.tel}`} className="block hover:text-brass-light">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

/** Blocs alternés photo + texte + un seul bouton : l'atelier, les clés, le cuir. */
function Feature({ id, eyebrow, title, text, cta, to, media, flip = false }: { id?: string; eyebrow: string; title: string; text: string; cta: string; to: string; media: ReactNode; flip?: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id ?? eyebrow}-title`} className="mx-auto max-w-[90rem] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-24">
        <Reveal className={flip ? "md:order-2" : ""}>{media}</Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <p className="eyebrow">{eyebrow}</p>
          <Stitch className="mt-4 h-1.5 w-14 text-brass" />
          <h2 id={`${id ?? eyebrow}-title`} className="display mt-5 text-[clamp(2rem,3.8vw,3rem)]">
            {title}
          </h2>
          <p className="lead mt-5">{text}</p>
          <Link href={to} className="btn-line mt-8 text-ink">
            {cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Features({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  // Photo : format portrait ; emplacement en attente : plus bas, pour ne pas peser sur la page.
  const box = (src: string | null) => (src ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/3]");
  return (
    <div className="py-6 lg:py-10">
      <Feature
        id="atelier"
        {...b.atelier}
        to={href(lang, "home", "infos")}
        media={<Slot src={slot("atelier") ?? slot("facade")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("atelier") ?? slot("facade"))} icon={<DoorIcon className="size-16" />} label="Henriville · Amiens" dark />}
      />
      <Feature
        id="cles"
        {...b.cles}
        to={href(lang, "cles")}
        flip
        media={<Slot src={slot("cles")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("cles"))} icon={<KeyIcon className="size-16" />} label={d.tiles.items.cles.title} />}
      />
      <Feature
        id="cuir"
        {...b.cuir}
        to={`${href(lang, "devis")}?o=sac`}
        media={<Slot src={slot("cuir")} d={d} sizes="(min-width:768px) 45vw, 100vw" className={box(slot("cuir"))} imgClass="object-[50%_40%]" icon={<BagIcon className="size-16" />} />}
      />
    </div>
  );
}

function BeforeAfterSection({ lang, d }: { lang: Locale; d: Dict }) {
  const pairs = avantApres.pairs as { id: string; before: string; after: string; alt: Record<Locale, string> }[];
  const t = d.beforeAfter;
  return (
    <section aria-labelledby="ba-title" className="border-y border-line bg-cream-soft">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHead eyebrow={t.eyebrow} title={t.title} lead={pairs.length ? t.lead : t.soon} id="ba-title" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pairs.length
            ? pairs.map((p) => <BeforeAfter key={p.id} pair={{ id: p.id, before: img(p.before), after: img(p.after), alt: p.alt[lang] }} />)
            : t.slots.map((label, i) => (
                <Reveal key={label} delay={i * 0.08}>
                  <figure className="relative">
                    <div className="grid aspect-[16/9] grid-cols-2">
                      <Slot src={null} d={d} sizes="1px" icon={i ? <BagIcon className="size-12" /> : <ShoeIcon className="size-12" />} label={t.before} dark />
                      <Slot src={null} d={d} sizes="1px" icon={i ? <BagIcon className="size-12" /> : <ShoeIcon className="size-12" />} label={t.after} />
                    </div>
                    <span className="absolute inset-y-0 left-1/2 w-px bg-paper" aria-hidden="true" />
                    <figcaption className="mt-4 text-[0.9375rem] text-muted">{label}</figcaption>
                  </figure>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}

function Tarifs({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.tarifs;
  return (
    <section id="tarifs" aria-labelledby="tarifs-title">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-10 lg:py-28">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="tarifs-title" />
          <p className="mt-6 text-[0.875rem] text-muted">{p.note}</p>
          <div className="mt-8">
            <DevisCta lang={lang} d={d} />
          </div>
          <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
        </div>
        <div className="space-y-14">
          {categories.map((c) => (
            <Reveal key={c.id}>
              <table className="w-full border-collapse text-start">
                <caption className="text-start">
                  <span className="flex items-baseline justify-between gap-4 border-b border-ink/80 pb-3">
                    <span className="display text-[1.75rem] sm:text-[1.9rem]">{c.name[lang]}</span>
                    <Link href={`${href(lang, "devis")}?c=${c.id}`} className="link-line shrink-0 text-[0.8125rem] text-cognac">
                      {p.ask}
                    </Link>
                  </span>
                </caption>
                <thead className="sr-only sm:not-sr-only">
                  <tr className="text-[0.6875rem] tracking-[0.2em] text-muted uppercase">
                    <th scope="col" className="pt-4 pb-2 text-start font-normal">
                      {p.head.service}
                    </th>
                    <th scope="col" className="w-52 pt-4 pb-2 text-start font-normal">
                      {p.head.delay}
                    </th>
                    <th scope="col" className="w-36 pt-4 pb-2 text-end font-normal">
                      {p.head.price}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.items.map((s) => (
                    <tr key={s.id} className="grid grid-cols-[1fr_auto] gap-x-6 py-3.5 sm:table-row sm:py-0">
                      <th scope="row" className="text-start text-[1rem] font-light sm:py-3.5">
                        {s.name[lang]}
                      </th>
                      <td className="order-3 col-span-2 text-[0.8125rem] text-muted sm:w-52 sm:py-3.5 sm:text-[0.9375rem]">{s.delay ? s.delay[lang] : s.confirm ? p.confirm : "—"}</td>
                      <td className="text-end text-[0.9375rem] whitespace-nowrap tabular-nums sm:w-36 sm:py-3.5">{s.price != null ? fill(p.from, { price: money(s.price, lang) }) : <span className="text-muted">{p.onQuote}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const value = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB", { maximumFractionDigits: 1 }).format(site.rating.value);
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-[90rem] px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">
      <Reveal className="grid items-center gap-10 border-y border-line py-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="flex items-end gap-5">
          <p className="display text-[clamp(5rem,10vw,7.5rem)] leading-[0.8]">{value}</p>
          <div className="pb-1">
            <p className="eyebrow">{r.eyebrow}</p>
            <Rating lang={lang} d={d} className="mt-2 text-[0.875rem] text-muted hover:text-ink" />
          </div>
        </div>
        <div>
          <h2 id="reviews-title" className="display text-[clamp(1.8rem,3.4vw,2.4rem)]">
            {r.title}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[1.0625rem]">
            {r.themes.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <Stitch className="h-1.5 w-5 text-brass" />
                {t}
              </li>
            ))}
          </ul>
          <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-6 inline-block text-[0.9375rem]">
            {r.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Metier({ lang, d }: { lang: Locale; d: Dict }) {
  const m = d.metier;
  const photo = slot("metier");
  return (
    <section id="metier" aria-labelledby="metier-title" className="bg-ink text-paper">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            {photo ? (
              <figure>
                <Slot src={photo} d={d} sizes="(min-width:1024px) 40vw, 100vw" className="aspect-[4/5]" />
                <figcaption className="mt-3 text-[0.75rem] text-paper/60">{fill(m.credit, { credit: site.legal.photoCredit })}</figcaption>
              </figure>
            ) : (
              <div className="slot dark grid aspect-[4/5] place-items-center text-brass-light" aria-hidden="true">
                <div className="flex flex-col items-center text-center">
                  <Emblem className="size-28" mono />
                  <span className="display mt-8 text-[2.2rem] text-paper">Maître Artisan</span>
                  <span className="eyebrow mt-3 !text-brass-light">Cordonnerie Henriville</span>
                </div>
              </div>
            )}
          </Reveal>
          <div>
            <SectionHead eyebrow={m.eyebrow} title={m.title} id="metier-title" light />
            <Reveal>
              <p className="lead mt-6 !text-paper/80">{m.text}</p>
              <ul className="mt-10 space-y-4 border-t border-paper/15 pt-8">
                {m.points.map((pt) => (
                  <li key={pt} className="flex gap-4 text-paper/85">
                    <Stitch className="mt-3 h-1.5 w-6 shrink-0 text-brass-light" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link href={href(lang, "devis")} className="btn-solid on-dark">
                  {d.nav.devis}
                </Link>
                <PhoneLink className="inline-flex items-center gap-2 text-paper/85 hover:text-paper" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tips({ d }: { d: Dict }) {
  const t = d.metier.tips;
  return (
    <section aria-labelledby="tips-title" className="border-b border-line bg-cream-soft">
      <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionHead eyebrow={t.eyebrow} title={t.title} id="tips-title" />
        <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 0.06} className="bg-cream-soft p-7 lg:p-8">
              <span className="display text-[2.4rem] leading-none text-cognac">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-[1.0625rem] font-normal">{it.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Strip d={d} />
      <Features lang={lang} d={d} />
      <BeforeAfterSection lang={lang} d={d} />
      <Tarifs lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <Metier lang={lang} d={d} />
      <Tips d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}
