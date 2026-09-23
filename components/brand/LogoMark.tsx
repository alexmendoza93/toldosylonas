interface Props {
  className?: string;
  title?: string;
}

// Isotipo: open architectural frame, awning slab and gold slats.
export default function LogoMark({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        d="M34 58H8V6h50v14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path d="M11 32 58 15v6L19 36Z" fill="currentColor" />
      <g fill="#B38B4D">
        <rect x="37" y="31" width="2.6" height="27" />
        <rect x="43" y="29" width="2.6" height="29" />
        <rect x="49" y="27" width="2.6" height="31" />
        <rect x="55" y="25" width="2.6" height="33" />
      </g>
    </svg>
  );
}
