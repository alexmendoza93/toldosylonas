import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";
import { ShieldIcon, DiamondIcon, ResidentialIcon } from "@/components/icons/LuxuryIcons";

export const metadata: Metadata = {
  title: "Toldos Residenciales Guadalajara — Terrazas, Jardines y Fachadas",
  description:
    "Toldos residenciales a la medida en Guadalajara y Zapopan. Palillerías Siplan, toldos fijos, cortinas para terraza y telas Sunbrella y Sattler. Cotiza sin compromiso.",
  keywords: [
    "toldos residenciales Guadalajara",
    "toldos para casa Guadalajara",
    "palilleria Siplan",
    "cortinas para terraza",
    "toldo para terraza Zapopan",
  ],
  alternates: { canonical: `${SITE_URL}/productos/toldos-residenciales` },
};

const SYSTEMS = [
  {
    title: "Palillería",
    desc: "Toldo plegable sobre guías laterales que cubre grandes superficies. Sistemas Siplan para terrazas, patios y jardines.",
  },
  {
    title: "Toldo fijo",
    desc: "Estructura de aluminio con tela tensada para cocheras, accesos y ventanas. Protección permanente con líneas limpias.",
  },
  {
    title: "Cortinas para terraza",
    desc: "Cierres verticales enrollables que protegen del sol lateral, el viento y la lluvia sin perder la vista al jardín.",
  },
  {
    title: "Toldo de fachada",
    desc: "Toldos de ventana y balcón que controlan el calor dentro de casa y visten la fachada con un acabado arquitectónico.",
  },
];

const WHY = [
  { Icon: ResidentialIcon, title: "Hecho a tu medida", desc: "Diseñamos cada toldo según la arquitectura y orientación de tu casa." },
  { Icon: DiamondIcon, title: "Telas premium", desc: "Acrílicos Sunbrella, Sattler y Dickson que conservan su color por años." },
  { Icon: ShieldIcon, title: "Protección real", desc: "Sombra y protección UV para que uses tu terraza en cualquier época del año." },
];

// Temporary photos (lib/images.ts) — replace with real installation photos
const GALLERY = galleryFor("toldos-residenciales", [
  { caption: "Palillería · Terraza", alt: "Palillería Siplan cubriendo terraza con alberca" },
  { caption: "Toldo fijo · Acceso", alt: "Toldo fijo de aluminio en acceso de residencia" },
  { caption: "Cortinas · Deck", alt: "Cortinas para terraza sobre deck de madera" },
  { caption: "Toldo de fachada · Balcón", alt: "Toldo de fachada en balcón residencial" },
  { caption: "Palillería · Jardín", alt: "Palillería sobre área de jardín en Zapopan" },
  { caption: "Cortinas · Sala exterior", alt: "Cortinas enrollables en sala exterior de residencia" },
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
        subtitle="Terrazas, jardines y fachadas que se viven todo el año. Diseñamos, fabricamos e instalamos toldos a la medida de tu casa en Guadalajara y zona metropolitana."
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
        subtitle="Proyectos residenciales en Guadalajara, Zapopan y Tlajomulco."
        images={GALLERY}
      />

      <CtaSection
        title="Solicita tu cotización de toldo residencial"
        text="Visitamos tu casa, tomamos medidas y te proponemos el sistema y la tela ideales para tu espacio."
      />
    </>
  );
}
