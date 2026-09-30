// Fine-line geometric icon set (gold, stroke 1.25) matching the brand board.

interface IconProps {
  className?: string;
}

function Base({
  className = "w-10 h-10",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const DiamondIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 8h20l9 11-19 22L5 19z" />
    <path d="M5 19h38M19 8l-5 11 10 22 10-22-5-11" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M24 5 8 11v11c0 10 7 18 16 21 9-3 16-11 16-21V11z" />
    <path d="m17 24 5 5 9-10" />
  </Base>
);

export const CrownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 16l8 9 9-14 9 14 8-9-4 20H11z" />
    <path d="M11 40h26" />
    <circle cx="7" cy="14" r="1.5" />
    <circle cx="24" cy="9" r="1.5" />
    <circle cx="41" cy="14" r="1.5" />
  </Base>
);

export const ComfortIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 22 24 8l19 14" />
    <path d="M9 19v21h30V19" />
    <path d="M15 40v-7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7M15 34h18" />
  </Base>
);

export const ResidentialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 40h36M10 40V22l14-11 14 11v18" />
    <path d="M6 24 24 14l18 10" />
    <path d="M20 40V30h8v10" />
  </Base>
);

export const CommercialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 42h36M9 42V20h30v22" />
    <path d="M6 20 10 9h28l4 11" />
    <path d="M12 20v3a3 3 0 0 0 6 0v-3 3a3 3 0 0 0 6 0v-3 3a3 3 0 0 0 6 0v-3 3a3 3 0 0 0 6 0v-3" />
    <path d="M20 42V31h8v11" />
  </Base>
);

export const IndustrialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 40h38M8 40V24c8-10 24-10 32 0v16" />
    <path d="M15 40V29h18v11M15 33h18M15 37h18" />
  </Base>
);

export const SpecialIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 40h36M10 40V18M38 40V18" />
    <path d="M8 18c6 6 26 6 32 0" />
    <path d="M8 18 24 8l16 10" />
  </Base>
);

export const RetractableIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 8v34M6 12h6" />
    <path d="M6 12 40 22v4L6 18" />
    <path d="M12 14l14 18M26 32l8-8" />
    <path d="M40 26v4" />
  </Base>
);

export const RollerIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="8" y="7" width="32" height="5" rx="2.5" />
    <path d="M11 12v22h26V12" />
    <path d="M11 18h26M11 24h26M11 30h26" />
    <path d="M24 34v4" />
    <circle cx="24" cy="40" r="1.5" />
  </Base>
);

export const MaintenanceIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M29 7a9 9 0 0 0-8 12L7 33a3.5 3.5 0 0 0 5 5l14-14a9 9 0 0 0 12-8l-6 3-5-5z" />
  </Base>
);

export const InstagramIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="8" y="8" width="32" height="32" rx="9" />
    <circle cx="24" cy="24" r="7.5" />
    <circle cx="33.5" cy="14.5" r="1.25" />
  </Base>
);

export const FacebookIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M35 5h-5.5A9.5 9.5 0 0 0 20 14.5V20h-6v7.5h6V43h7.5V27.5H33l1.5-7.5h-7v-4.5a2.5 2.5 0 0 1 2.5-2.5H35z" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="6" y="11" width="36" height="26" rx="1.5" />
    <path d="m6 13 18 13 18-13" />
  </Base>
);

export const ArrowIcon = ({ className = "w-4 h-4" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.25}
    className={className}
    aria-hidden="true"
  >
    <path d="M3 12h17M14 6l6 6-6 6" />
  </svg>
);

export const PRODUCT_ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  home: ResidentialIcon,
  building: CommercialIcon,
  factory: IndustrialIcon,
  star: SpecialIcon,
  expand: RetractableIcon,
  layers: RollerIcon,
  wrench: MaintenanceIcon,
};
