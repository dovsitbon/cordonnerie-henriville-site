// Icônes au trait fin, dessinées pour le site (1,25 px, bouts arrondis).
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.9A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);
export const InstagramIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);
export const CloseIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const PinIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const StarIcon = ({ className = "size-3.5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="m12 3.2 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
  </svg>
);
export const PlusIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ChevronIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CameraIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2.2l1.5-2h5.6l1.5 2h2.2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
    <circle cx="12" cy="12.8" r="3.4" />
  </svg>
);

// Illustrations des services (trait fin, viewBox 24).
export const ShoeIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M2.5 17V13.6c2.6 0 5.1-.7 7.3-2.2l2.6-1.8c.8-.6 1.9-.5 2.6.1l1.6 1.4c1.4 1.2 3 1.9 4.9 2.1V17Z" />
    <path d="M2.5 17h19M3.2 17v2.2h3.6V17M11 11.8l1.4 1.4M13.2 10.4l1.4 1.4" />
  </svg>
);
export const NeedleIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 20 17.6 6.4" />
    <path d="M16.4 5.2l2.4 2.4" />
    <path d="M18.8 4.4c1.6 1.2.4 4-2.2 4.6-3.2.8-7.4 1.4-6.4 5.2.7 2.6 4.6 2.6 4.8 5.8" strokeDasharray="1.6 1.8" />
  </svg>
);
export const BagIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4.5 9.5h15l-1.3 10.2a1.5 1.5 0 0 1-1.5 1.3H7.3a1.5 1.5 0 0 1-1.5-1.3Z" />
    <path d="M8.5 9.5V7.5a3.5 3.5 0 0 1 7 0v2" />
    <path d="M6.3 12.5h11.4" strokeDasharray="1.2 1.4" />
  </svg>
);
export const KeyIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="7" cy="12" r="4" />
    <circle cx="7" cy="12" r="1.3" />
    <path d="M11 12h10.5M17.5 12v3M20 12v2.2" />
  </svg>
);
export const LockIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3" />
    <rect x="5" y="11" width="14" height="10" rx="1.5" />
    <circle cx="12" cy="15.2" r="1.3" />
    <path d="M12 16.5v2" />
  </svg>
);
export const WatchIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="5.5" />
    <path d="M9.2 7.2 9.8 3h4.4l.6 4.2M9.2 16.8l.6 4.2h4.4l.6-4.2M12 9.6V12l1.6 1.1" />
  </svg>
);
export const ClockIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);
export const DoorIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6.5 21V4h11v17M4 21h16" />
    <circle cx="14.6" cy="12.5" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

/** Couture au point : un fil en pointillés, pour ponctuer les sections. */
export const Stitch = ({ className = "h-2 w-16" }: P) => (
  <svg viewBox="0 0 64 8" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true" preserveAspectRatio="none">
    <path d="M1 4h62" strokeDasharray="4 3" />
  </svg>
);
