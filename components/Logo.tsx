/**
 * Logo typographique de la Cordonnerie Henriville (l'atelier n'a pas encore de logo dessiné) :
 * un marteau de cordonnier et une clé croisés au trait fin laiton, « CORDONNERIE HENRIVILLE » en capitales,
 * « Maître Artisan · Amiens » en petit. Prend la couleur du texte (currentColor) ; l'emblème reste laiton, sauf `mono`.
 * Pour le remplacer : changer ce composant, public/logo.svg et app/icon.svg (même emblème).
 */
export function Emblem({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={mono ? "currentColor" : "var(--color-brass, #B08D57)"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Marteau : manche du bas à droite vers le haut à gauche, tête perpendiculaire */}
      <path d="M41 41 18.5 18.5" />
      <rect x="5.5" y="11" width="17" height="6" rx="2.2" transform="rotate(-45 14 14)" />
      <path d="M8.4 22.6 5.6 25.4M22.6 8.4l2.8-2.8" />
      {/* Clé : anneau en bas à gauche, panneton en haut à droite */}
      <circle cx="11.5" cy="36.5" r="5.5" />
      <circle cx="11.5" cy="36.5" r="1.8" />
      <path d="M15.4 32.6 40.5 7.5M35.6 12.4l3 3M31.8 16.2l2.4 2.4" />
    </svg>
  );
}

export function Logo({ className = "", title, mono = false, tagline = true }: { className?: string; title?: string; mono?: boolean; tagline?: boolean }) {
  return (
    <svg viewBox={tagline ? "0 0 380 104" : "0 0 380 82"} className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(169 0) scale(0.875)" fill="none" stroke={mono ? "currentColor" : "var(--color-brass, #B08D57)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M41 41 18.5 18.5" />
        <rect x="5.5" y="11" width="17" height="6" rx="2.2" transform="rotate(-45 14 14)" />
        <path d="M8.4 22.6 5.6 25.4M22.6 8.4l2.8-2.8" />
        <circle cx="11.5" cy="36.5" r="5.5" />
        <circle cx="11.5" cy="36.5" r="1.8" />
        <path d="M15.4 32.6 40.5 7.5M35.6 12.4l3 3M31.8 16.2l2.4 2.4" />
      </g>
      <text x="190" y="74" textAnchor="middle" fill="currentColor" style={{ fontFamily: "var(--font-fraunces), Fraunces, Georgia, serif", fontWeight: 500, fontSize: 21, letterSpacing: "0.14em" }}>
        CORDONNERIE HENRIVILLE
      </text>
      {tagline && (
        <text x="190" y="97" textAnchor="middle" fill="currentColor" opacity="0.8" style={{ fontFamily: "var(--font-jost), Jost, 'Helvetica Neue', Arial, sans-serif", fontWeight: 400, fontSize: 10, letterSpacing: "0.3em" }}>
          MAÎTRE ARTISAN · AMIENS
        </text>
      )}
    </svg>
  );
}
