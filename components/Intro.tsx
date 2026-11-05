"use client";

import { useEffect, useState, type CSSProperties } from "react";

const KEY = "cordonnerie-henriville-intro";
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;
const SEAM = "M6 22C48 14 96 30 150 20";

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond crème, une couture au point se dessine en pointillés cognac, une clé au trait laiton se pose à côté,
 * « CORDONNERIE HENRIVILLE » apparaît puis « Maître Artisan », fondu sur le hero.
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <svg viewBox="0 0 220 44" className="h-14 w-auto overflow-visible" fill="none" strokeLinecap="round" aria-hidden="true">
        <defs>
          <mask id="seam-mask" maskUnits="userSpaceOnUse">
            <path className="intro-draw" pathLength={1} d={SEAM} stroke="#fff" strokeWidth="6" />
          </mask>
        </defs>
        {/* Couture : points cognac, et les trous d'aiguille du cuir en dessous */}
        <path d={SEAM} stroke="var(--color-cognac)" strokeWidth="1.8" strokeDasharray="6 4.5" mask="url(#seam-mask)" />
        {/* Clé au trait laiton */}
        <g className="intro-key" stroke="var(--color-brass)" strokeWidth="1.6" strokeLinejoin="round">
          <circle cx="172" cy="21" r="8" />
          <circle cx="172" cy="21" r="2.4" />
          <path d="M180 21h32M205 21v5M210 21v3.6" />
        </g>
      </svg>
      <p className="intro-fade mt-7 ps-[0.16em] font-[family-name:var(--font-fraunces)] text-[1.55rem] leading-none font-medium tracking-[0.16em] sm:text-[1.9rem]" style={at(0.56)} translate="no" aria-hidden="true">
        CORDONNERIE HENRIVILLE
      </p>
      <p className="intro-fade mt-4 ps-[0.3em] text-[0.6875rem] tracking-[0.3em] text-muted uppercase" style={at(0.72)} translate="no" aria-hidden="true">
        Maître Artisan
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute right-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
