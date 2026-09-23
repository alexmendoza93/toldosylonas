import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import { BRANDS, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const WHY = [
  {
    stat: "15 años",
    label: "Vida útil promedio",
    desc: "Con materiales premium bien mantenidos, tu toldo dura más de una década.",
  },
  {
    stat: "95%",
    label: "Bloqueo UV",
    desc: "Las telas certificadas bloquean casi toda la radiación ultravioleta dañina.",
  },
  {
    stat: "0 hongos",
    label: "Tratamiento antifúngico",
    desc: "Los materiales de calidad resisten humedad y moho sin tratamientos adicionales.",
  },
];

export const metadata: Metadata = {
  title: "Materiales Premium — Sunbrella, Sattler, Versaidag, Llaza",
  description:
    "Usamos las mejores marcas del mundo: Sunbrella, Sattler, Versaidag, Llaza, Somfy y Renolite. Conoce los materiales que hacen que nuestros toldos duren más y luzcan mejor.",
  keywords: [
    "telas para toldos",
    "Sunbrella Guadalajara",
    "Sattler telas",
    "toldos premium materiales",
    "Somfy motorización toldos",
  ],
  alternates: { canonical: `${SITE_URL}/materiales` },
};

export default function MaterialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Calidad certificada"
        title={
          <>
            Materiales de <span className="text-champagne">referencia mundial</span>
          </>
        }
        subtitle="La diferencia entre un toldo que dura 2 años y uno que dura 15 está en los materiales. Trabajamos solo con fabricantes que han demostrado su calidad durante décadas."
        image={IMAGES.pageHero.materiales}
        imageAlt="Sala contemporánea con ventanales y luz cálida"
      />

      {/* Brands */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="brands-heading" eyebrow="Aliados" title="Las marcas detrás de cada proyecto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand, i) => (
              <Reveal
                as="article"
                key={brand.name}
                delay={(i % 3) * 0.1}
                className="group bg-carbon border border-linea p-10 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="eyebrow text-[9px]! mb-5">{brand.country}</span>
                <h2 className="font-serif text-2xl text-white tracking-[0.14em] mb-5 transition-colors group-hover:text-champagne">
                  {brand.name.toUpperCase()}
                </h2>
                <span className="block w-8 h-px bg-oro/60 mb-5" />
                <p className="text-crema/60 text-sm leading-relaxed">{brand.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why materials matter */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Desempeño" title="¿Por qué importan los materiales?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
            {WHY.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <p className="font-serif text-4xl md:text-5xl text-champagne mb-4">{item.stat}</p>
                <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-white mb-3">
                  {item.label}
                </p>
                <p className="text-crema/60 text-sm leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="¿Dudas sobre qué material elegir?"
        text="Te asesoramos sin costo para que tu inversión sea la correcta."
        primaryLabel="Asesoría por WhatsApp"
      />
    </>
  );
}
