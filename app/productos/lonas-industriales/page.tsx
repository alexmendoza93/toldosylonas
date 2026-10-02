import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Lonas a la Medida y Malla Sombra Guadalajara",
  description:
    "Fabricamos lonas a la medida en Guadalajara: lona impermeable para cubiertas y usos industriales, cortinas de lona con cristal para terrazas y malla sombra en seis colores.",
  keywords: [
    "lonas a la medida Guadalajara",
    "malla sombra Guadalajara",
    "cortinas de lona para terraza",
    "lonas industriales Guadalajara",
    "lona impermeable Guadalajara",
  ],
  alternates: { canonical: `${SITE_URL}/productos/lonas-industriales` },
};

const APPLICATIONS = [
  {
    title: "Lona impermeable a la medida",
    desc: "Lonas cortadas y termoselladas a tu medida para recubrir estructuras, techar áreas y proteger mercancía.",
  },
  {
    title: "Cortinas de lona con cristal",
    desc: "Cierres perimetrales de lona con ventanas transparentes para terrazas de restaurante: cortan el viento y la lluvia sin perder la vista.",
  },
  {
    title: "Malla sombra",
    desc: "Bloquea los rayos UV y baja el calor dejando pasar el aire. En beige, gris, negro, verde, café y azul.",
  },
  {
    title: "Usos industriales",
    desc: "Cubiertas para bodegas, andenes de carga y patios de maniobra con lonas de alta resistencia.",
  },
];

const SPECS = [
  { title: "Materiales técnicos", desc: "Lonas de PVC, membranas Versaidag y malla sombra de alta resistencia a la intemperie." },
  { title: "Resistencia al clima", desc: "Materiales con protección UV, impermeables y calculados para cargas de viento." },
  { title: "Fabricación a la medida", desc: "Corte, termosellado y confección en nuestra planta de Guadalajara." },
  { title: "Instalación especializada", desc: "Equipo con experiencia en montaje de estructuras y tensado en altura." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("lonas-industriales", [
  "Cortinas de lona naranja con ventanas de cristal en terraza de restaurante",
  "Terraza de restaurante cerrada con cortinas de lona y cristal",
  "Cierre perimetral de lona con vista al exterior",
  "Cubierta de lona tensada sobre estructura metálica",
  "Plafón de lona tensada en área techada",
  "Instalación de cortinas de lona en restaurante campestre",
]);

export default function LonasIndustrialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Lonas a la medida"
        title={
          <>
            Lonas <span className="text-champagne">y Malla Sombra</span>
          </>
        }
        subtitle="Lonas impermeables a la medida, cortinas de lona con cristal para terrazas y malla sombra. Fabricadas en nuestro taller de Guadalajara."
        image={IMAGES.pageHero.industriales}
        imageAlt="Edificio contemporáneo con fachada de madera y metal"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Lonas y Malla Sombra" },
        ]}
      />

      {/* Applications */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="applications-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="applications-heading" eyebrow="Aplicaciones" title="Soluciones para tu operación" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {APPLICATIONS.map((a, i) => (
              <Reveal
                key={a.title}
                delay={(i % 2) * 0.1}
                className="group bg-carbon border border-linea p-10 md:p-12 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-meta text-oro/60 mb-6">
                  0{i + 1}
                </span>
                <h3 className="type-h3 text-white mb-4 transition-colors group-hover:text-champagne">
                  {a.title}
                </h3>
                <p className="type-small text-crema/60">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="specs-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="specs-heading" eyebrow="Especificaciones" title="Hechas para durar" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {SPECS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.1} className="flex gap-6">
                <span className="mt-2 w-2 h-2 rotate-45 bg-oro shrink-0" />
                <div>
                  <h3 className="type-label text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="type-small text-crema/60">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery
        id="gallery-heading"
        title="Lonas en obra"
        subtitle="Cierres de terraza y cubiertas de lona fabricados e instalados en Guadalajara y zona metropolitana."
        images={GALLERY}
      />

      <RelatedProducts productId="lonas-industriales" />


      <CtaSection
        title="Cotiza tu lona a la medida"
        text="Revisamos tus planos o visitamos la planta para proponerte la lona, la estructura y el sistema de tensado adecuados."
      />
    </>
  );
}
