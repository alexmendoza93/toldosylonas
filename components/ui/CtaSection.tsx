import Link from "next/link";
import Reveal from "./Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  text: string;
  primaryLabel?: string;
  secondary?: { label: string; href: string };
}

// Closing call-to-action shared by the inner pages.
export default function CtaSection({
  eyebrow = "Arquitectura Exterior",
  title,
  text,
  primaryLabel = "Cotizar por WhatsApp",
  secondary,
}: Props) {
  return (
    <section className="relative py-28 md:py-36 bg-grafito texture-lino border-t border-linea">
      <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="eyebrow mb-6">{eyebrow}</span>
        <h2 className="type-h2 text-white">
          {title}
        </h2>
        <span className="divider-oro mx-auto my-8" />
        <p className="type-body text-crema/65 mb-12 max-w-xl mx-auto">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-oro-solid">
            {primaryLabel}
          </a>
          {secondary && (
            <Link href={secondary.href} className="btn-oro">
              {secondary.label}
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
