import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";
import { ShieldIcon, DiamondIcon, ResidentialIcon } from "@/components/icons/LuxuryIcons";

export const metadata: Metadata = {
  title: "Toldos Residenciales Guadalajara — Terrazas, Jardines y Fachadas",
  description:
    "Toldos residenciales a la medida en Guadalajara y Zapopan. Toldos fijos, capotas, palillerías, toldos para cochera y tipo pérgola con telas Sunbrella y Sattler. Cotización gratis.",
  keywords: [
    "toldos residenciales Guadalajara",
    "toldos para casa Guadalajara",
    "palilleria Siplan",
    "toldos para cochera Guadalajara",
    "toldo para terraza Zapopan",
  ],
  alternates: { canonical: `${SITE_URL}/productos/toldos-residenciales` },
};

const SYSTEMS = [
  {
    title: "Toldo fijo y capota",
    desc: "Estructura con tela tensada para accesos, ventanas y balcones. En línea recta o tipo capota, protección permanente que viste la fachada.",
  },
  {
    title: "Toldo para cochera",
    desc: "Cubre tus autos del sol y la lluvia. Fijo o retráctil, se fabrica al ancho exacto de tu cochera.",
  },
  {
    title: "Palillería",
    desc: "Toldo plegable sobre guías laterales que cubre grandes superficies. Sistemas Siplan para terrazas, patios y jardines.",
  },
  {
    title: "Toldo tipo pérgola",
    desc: "Elegancia y sombra para terrazas y jardines: tela sobre estructura de pérgola para crear una estancia exterior.",
  },
];

const WHY = [
  { Icon: ResidentialIcon, title: "Hecho a tu medida", desc: "Diseñamos cada toldo según la arquitectura y orientación de tu casa." },
  { Icon: DiamondIcon, title: "Telas premium", desc: "Acrílicos Sunbrella, Sattler y Dickson que conservan su color por años." },
  { Icon: ShieldIcon, title: "Protección real", desc: "Sombra y protección UV para que uses tu terraza en cualquier época del año." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("toldos-residenciales", [
  "Toldo retráctil sobre cochera de residencia en Guadalajara",
  "Toldos fijos sobre accesos de casas en coto residencial",
  "Toldos fijos en terraza y acceso de residencia con palmeras",
  "Toldo en ventanal de residencia con jardín",
  "Instalación de toldo fijo en casa de fraccionamiento",
  "Toldo retráctil blanco cubriendo cochera",
]);

export default function ToldosResidencialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Arquitectura exterior residencial"
        title={
          <>
            Toldos <span className="text-champagne">Residenciales</span>
          </>
        }
        subtitle="Fachadas, terrazas, jardines y cocheras que se viven todo el año. Fabricamos e instalamos toldos a la medida de tu casa en Guadalajara y zona metropolitana."
        image={IMAGES.pageHero.residenciales}
        imageAlt="Terraza con pérgola y alberca en residencia contemporánea"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Toldos Residenciales" },
        ]}
      />

      {/* Systems */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="systems-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="systems-heading" eyebrow="Catálogo" title="Sistemas para tu hogar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SYSTEMS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 2) * 0.1}
                className="group bg-carbon border border-linea p-10 md:p-12 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-meta text-oro/60 mb-6">
                  0{i + 1}
                </span>
                <h3 className="type-h3 text-white mb-4 transition-colors group-hover:text-champagne">
                  {s.title}
                </h3>
                <p className="type-small text-crema/60">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Beneficios" title="Tu casa, un espacio más" />
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
        title="Hogares que ya disfrutan su exterior"
        subtitle="Toldos fabricados e instalados por nuestro equipo en residencias de Guadalajara y zona metropolitana."
        images={GALLERY}
      />

      <RelatedProducts productId="toldos-residenciales" />


      <CtaSection
        title="Solicita tu cotización de toldo residencial"
        text="Visitamos tu casa, tomamos medidas y te proponemos el sistema y la tela ideales para tu espacio."
      />
    </>
  );
}
