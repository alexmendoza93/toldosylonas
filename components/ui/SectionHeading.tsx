import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  id?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  id,
  align = "center",
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-16 md:mb-20 ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
      <h2
        id={id}
        className="type-h2 text-white"
      >
        {title}
      </h2>
      <span className={`divider-oro mt-7 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="type-body text-crema/65 mt-7 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
