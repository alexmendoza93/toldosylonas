import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";
import { ShieldIcon, ComfortIcon, RetractableIcon } from "@/components/icons/LuxuryIcons";

export const metadata: Metadata = {
  title: "Toldos Retráctiles Guadalajara — Motorizados y Manuales",
  description:
    "Toldos retráctiles en Guadalajara: brazo invisible, punto recto, cofre y caída vertical. Con manivela, motor o control remoto y sensores Somfy de sol, viento y lluvia. Cotización gratis.",
  keywords: [
    "toldos retractiles Guadalajara",
    "toldo motorizado Guadalajara",
    "toldo brazo invisible",
    "toldo motorizado Somfy",
  ],
  alternates: { canonical: `${SITE_URL}/productos/toldos-retractiles` },
};

const FEATURES = [
  {
    title: "Brazo invisible",
    desc: "Brazos articulados que se pliegan bajo el toldo y desaparecen al recogerlo. Ideal para terrazas, cocheras y balcones.",
  },
  {
    title: "Brazo con punto recto",
    desc: "Brazos que abaten la tela hacia el frente para proteger ventanas y aparadores del sol directo.",
  },
  {
    title: "Tejadillo y cofre",
    desc: "Protegen tela y mecanismo cuando el toldo está recogido. Con manivela o con motor, más durabilidad y mejor acabado.",
  },
  {
    title: "Caída vertical",
    desc: "Lona que baja en vertical sobre guías o cables para cerrar costados de terrazas y fachadas del sol bajo.",
  },
];

const WHY = [
  { Icon: ShieldIcon, title: "Protección solar", desc: "Reduce hasta 95% la radiación UV en tu terraza." },
  { Icon: ComfortIcon, title: "Protección climática", desc: "Disfruta tu espacio bajo lluvia ligera y viento moderado." },
  { Icon: RetractableIcon, title: "Control inteligente", desc: "Motor Somfy con interruptor, control remoto o sensores de sol, viento y lluvia." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("toldos-retractiles", [
  "Toldo retráctil negro de brazo invisible sobre patio con plantas",
  "Toldo retráctil negro extendido sobre terraza residencial",
  "Toldo retráctil beige sobre cochera",
  "Instalación de toldo retráctil en fachada contemporánea",
  "Toldo retráctil beige visto desde abajo",
  "Brazo articulado de toldo retráctil",
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
        subtitle="Toldos enrollables de brazo invisible o de punto recto, con manivela o motor. Mecanismos y lonas importados o nacionales, con automatización Somfy."
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
        subtitle="Sistemas manuales y motorizados en terrazas, cocheras y fachadas de la Zona Metropolitana de Guadalajara."
        images={GALLERY}
      />

      <RelatedProducts productId="toldos-retractiles" />


      <CtaSection
        title="Solicita tu cotización de toldo retráctil"
        text="Te visitamos, medimos y te entregamos presupuesto sin costo ni compromiso."
      />
    </>
  );
}
