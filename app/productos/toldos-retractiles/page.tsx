import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";
import { ShieldIcon, ComfortIcon, RetractableIcon } from "@/components/icons/LuxuryIcons";

export const metadata: Metadata = {
  title: "Toldos Retráctiles Guadalajara — Motorizados y Manuales",
  description:
    "Instalamos toldos retráctiles en Guadalajara. Sistemas motorizados Somfy, brazos articulados, pérgolas bioclimáticas. Manual y motorizado con sensor de viento. Cotiza hoy.",
  keywords: [
    "toldos retractiles Guadalajara",
    "toldo motorizado Guadalajara",
    "toldo retractil brazos articulados",
    "toldo motorizado Somfy",
  ],
  alternates: { canonical: `${SITE_URL}/productos/toldos-retractiles` },
};

const FEATURES = [
  {
    title: "Brazos articulados",
    desc: "El sistema más popular. Extensión horizontal hasta 6m con inclinación regulable. Ideal para terrazas y balcones.",
  },
  {
    title: "Toldo cofre",
    desc: "Protege la tela y mecanismo dentro de un cofre de aluminio cuando está recogido. Estética premium, mayor durabilidad.",
  },
  {
    title: "Pérgola bioclimática",
    desc: "Lamas orientables que regulan el paso de luz y ventilación. Cierre total con cristal o lonas laterales.",
  },
  {
    title: "Motorización Somfy",
    desc: "Control por app, control remoto o activación por sensor de viento y lluvia. Compatible con domótica.",
  },
];

const WHY = [
  { Icon: ShieldIcon, title: "Protección solar", desc: "Reduce hasta 95% la radiación UV en tu terraza." },
  { Icon: ComfortIcon, title: "Protección climática", desc: "Disfruta tu espacio bajo lluvia ligera y viento moderado." },
  { Icon: RetractableIcon, title: "Control inteligente", desc: "Motorización con app, voz o sensor automático." },
];

// Temporary photos (lib/images.ts) — replace with real installation photos
const GALLERY = galleryFor("toldos-retractiles", [
  { caption: "Brazos articulados · Terraza", alt: "Toldo retráctil de brazos articulados en terraza residencial" },
  { caption: "Toldo cofre · Deck", alt: "Toldo cofre retráctil sobre deck de madera" },
  { caption: "Pérgola bioclimática · Alberca", alt: "Pérgola bioclimática junto a alberca en Zapopan" },
  { caption: "Motorizado Somfy · Sala exterior", alt: "Toldo retráctil motorizado con control Somfy en sala exterior" },
  { caption: "Brazos articulados · Fachada", alt: "Toldo retráctil sobre fachada de residencia contemporánea" },
  { caption: "Sistema Llaza · Hotel", alt: "Toldos retráctiles Llaza en terraza de hotel" },
]);

export default function ToldosRetractilesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sistemas retráctiles"
        title={
          <>
            Toldos Retráctiles <span className="text-champagne">en Guadalajara</span>
          </>
        }
        subtitle="Sistemas retráctiles manuales y motorizados de las mejores marcas europeas. Brazos articulados, cofres, pérgolas bioclimáticas y automatización Somfy para el máximo confort."
        image={IMAGES.pageHero.retractiles}
        imageAlt="Terraza de madera con camastros frente al mar"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Toldos Retráctiles" },
        ]}
      />

      {/* Systems */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="features-heading" eyebrow="Catálogo" title="Sistemas disponibles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 2) * 0.1}
                className="group bg-carbon border border-linea p-10 md:p-12 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-meta text-oro/60 mb-6">
                  0{i + 1}
                </span>
                <h3 className="type-h3 text-white mb-4 transition-colors group-hover:text-champagne">
                  {f.title}
                </h3>
                <p className="type-small text-crema/60">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Beneficios" title="¿Por qué un toldo retráctil?" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 text-center">
            {WHY.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Icon className="w-12 h-12 text-oro mx-auto mb-7" />
                <h3 className="type-label text-white mb-3">
                  {title}
                </h3>
                <p className="type-small text-crema/60">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery
        id="gallery-heading"
        title="Toldos retráctiles instalados"
        subtitle="Sistemas manuales y motorizados en terrazas, fachadas y hoteles de la Zona Metropolitana de Guadalajara."
        images={GALLERY}
      />

      <CtaSection
        title="Solicita tu cotización de toldo retráctil"
        text="Te visitamos, medimos y te entregamos presupuesto sin costo ni compromiso."
      />
    </>
  );
}
