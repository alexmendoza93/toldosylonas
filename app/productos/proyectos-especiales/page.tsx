import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";
import { CrownIcon, SpecialIcon, ComfortIcon } from "@/components/icons/LuxuryIcons";

export const metadata: Metadata = {
  title: "Arquitectura Textil Guadalajara — Velarias, Velas de Sombra y Pérgolas",
  description:
    "Arquitectura textil en Guadalajara: velarias, velas de sombra, membranas tensadas Ferrari, malla Comercial 95 y cubiertas para eventos. Diseño a la medida. Cotiza hoy.",
  keywords: [
    "arquitectura textil Guadalajara",
    "velarias Guadalajara",
    "velas de sombra Guadalajara",
    "membranas tensadas Ferrari",
    "malla sombra Comercial 95",
  ],
  alternates: { canonical: `${SITE_URL}/productos/proyectos-especiales` },
};

const SOLUTIONS = [
  {
    name: "Velas de sombra",
    use: "Jardines y patios",
    desc: "Velas tensadas en formas geométricas que dan sombra con una silueta escultórica.",
  },
  {
    name: "Velarias",
    use: "Plazas y escuelas",
    desc: "Cubiertas en malla Comercial 95 para andadores, canchas y áreas de convivencia.",
  },
  {
    name: "Membranas tensadas",
    use: "Arquitectura textil",
    desc: "Estructuras en membrana Ferrari que resuelven cubiertas de gran formato con ligereza.",
  },
  {
    name: "Pérgolas y eventos",
    use: "Proyectos a la medida",
    desc: "Pérgolas con tela y cubiertas desmontables para bodas, jardines y eventos especiales.",
  },
];

const WHY = [
  { Icon: SpecialIcon, title: "Diseño único", desc: "Cada proyecto parte de cero: forma, color y estructura pensados para el lugar." },
  { Icon: CrownIcon, title: "Materiales de primera", desc: "Membranas y mallas técnicas de fabricantes reconocidos en arquitectura textil." },
  { Icon: ComfortIcon, title: "Sombra con estilo", desc: "Espacios frescos y protegidos que se convierten en el punto focal del lugar." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("proyectos-especiales", [
  "Toldo perimetral continuo de Plaza Paraíso en Tabachines al atardecer",
  "Toldo perimetral de más de 100 metros lineales en Plaza Paraíso",
  "Instalación del toldo perimetral en Plaza Paraíso, Zapopan",
  "Pérgola con cubierta en roof garden",
  "Pérgola de lamas orientables en terraza residencial",
  "Cubierta de lona tensada a dos aguas",
]);

export default function ProyectosEspecialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Arquitectura textil"
        title={
          <>
            Proyectos <span className="text-champagne">Especiales</span>
          </>
        }
        subtitle="Velarias, velas de sombra, membranas tensadas y pérgolas diseñadas a la medida. Soluciones únicas para espacios que merecen algo fuera de catálogo."
        image={IMAGES.pageHero.especiales}
        imageAlt="Jardín de hotel con palmeras y espejo de agua"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Proyectos Especiales" },
        ]}
      />

      {/* Solutions */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="solutions-heading" eyebrow="Soluciones" title="Arquitectura textil a la medida" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 0.08}
                className="group flex flex-col bg-carbon border border-linea p-8 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-label text-oro mb-6">{s.use}</span>
                <h3 className="type-h3 text-white mb-4">{s.name}</h3>
                <p className="type-small text-crema/60 flex-1">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="why-heading" eyebrow="Beneficios" title="Espacios que se recuerdan" />
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
        title="Proyectos fuera de catálogo"
        subtitle="Plaza Paraíso en Tabachines: el primer toldo en Guadalajara en cubrir un perímetro continuo, con más de 100 metros lineales y 220 m² de tela acrílica de importación."
        images={GALLERY}
      />

      <RelatedProducts productId="proyectos-especiales" />


      <CtaSection
        title="Cuéntanos tu proyecto especial"
        text="Desde un boceto hasta la instalación: diseñamos la forma, elegimos la membrana y calculamos la estructura contigo."
        primaryLabel="Consultar por WhatsApp"
      />
    </>
  );
}
