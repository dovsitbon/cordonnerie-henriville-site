import site from "@/data/site.json";
import horaires from "@/data/horaires.json";
import { getDict, type Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { categories } from "@/lib/tarifs";
import { slot } from "@/lib/media";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const BUSINESS_ID = `${site.url}/#atelier`;

/**
 * Schema.org : schema.org n'a pas de type « ShoeRepair » ; on déclare LocalBusiness + Locksmith,
 * précisé par additionalType (cordonnier). Adresse, horaires, note Google datée, tarifs, Instagram.
 */
export function businessJsonLd(lang: Locale) {
  const d = getDict(lang);
  const week = horaires.week as unknown as Record<string, [string, string][] | null>;
  const hours = Object.entries(week).flatMap(([day, ranges]) => (ranges ?? []).map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: DAYS[Number(day)], opens, closes })));
  const images = [`${site.url}/og.jpg`, ...[slot("hero"), slot("metier"), slot("facade")].filter(Boolean).map((p) => `${site.url}${p}`)];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Locksmith"],
        additionalType: "http://www.productontology.org/id/Shoemaker",
        "@id": BUSINESS_ID,
        name: site.name,
        legalName: site.legal.company,
        description: d.meta.description,
        slogan: lang === "fr" ? "On répare, on ne jette pas" : "We repair, we don’t throw away",
        url: `${site.url}/${lang}`,
        image: images,
        logo: `${site.url}/logo.svg`,
        telephone: site.phoneIntl,
        priceRange: "€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.maps,
        openingHoursSpecification: hours,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
          bestRating: 5,
          worstRating: 1,
          description: `Google, ${site.rating.asOf}`,
        },
        areaServed: [{ "@type": "City", name: "Amiens" }, { "@type": "Place", name: "Henriville, Amiens" }],
        knowsAbout: categories.map((c) => c.name[lang]),
        hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: lang === "fr" ? "Maître Artisan" : "Master Craftsman (Maître Artisan)", recognizedBy: { "@type": "Organization", name: "Chambre de métiers et de l’artisanat" } },
        sameAs: [site.instagram, site.facebook],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.tarifs.title,
          itemListElement: categories.map((c) => ({
            "@type": "OfferCatalog",
            name: c.name[lang],
            itemListElement: c.items.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s.name[lang] },
              ...(s.price != null ? { priceSpecification: { "@type": "PriceSpecification", minPrice: s.price, priceCurrency: "EUR" } } : {}),
            })),
          })),
        },
        makesOffer: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: d.pages.cles.title, url: `${site.url}${href(lang, "cles")}` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: d.pages.ressemelage.title, url: `${site.url}${href(lang, "ressemelage")}` } },
        ],
        potentialAction: { "@type": "QuoteAction", target: `${site.url}${href(lang, "devis")}` },
      },
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: ["fr", "en"], publisher: { "@id": BUSINESS_ID } },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbJsonLd(lang: Locale, name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/${lang}` },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}
