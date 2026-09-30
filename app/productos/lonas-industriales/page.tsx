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
  title: "Lonas Industriales Guadalajara — Bodegas, Naves y Andenes",
  description:
    "Fabricamos lonas industriales en Guadalajara: cubiertas para bodegas, andenes de carga, cortinas divisorias y membranas técnicas Versaidag. Resistencia UV, agua y viento.",
  keywords: [
    "lonas industriales Guadalajara",
    "lonas para bodega",
    "cortinas industriales divisorias",
    "cubiertas para andenes de carga",
    "membranas Versaidag",
  ],
  alternates: { canonical: `${SITE_URL}/productos/lonas-industriales` },
};

const APPLICATIONS = [
  {
    title: "Cubiertas para bodegas",
    desc: "Lonas tensadas sobre estructura para almacenar y proteger mercancía y maquinaria a cielo abierto.",
  },
  {
    title: "Andenes de carga",
    desc: "Cubiertas y faldones que protegen las maniobras de carga y descarga del sol y la lluvia.",
  },
  {
    title: "Cortinas divisorias",
    desc: "Cortinas industriales para separar áreas de trabajo, controlar polvo y conservar la temperatura.",
  },
  {
    title: "Grandes claros",
    desc: "Membranas técnicas tensadas que cubren superficies amplias con un mínimo de apoyos.",
  },
];

const SPECS = [
  { title: "Membranas técnicas", desc: "Lonas de PVC y membranas Versaidag de alta tenacidad para uso industrial." },
  { title: "Resistencia al clima", desc: "Materiales con protección UV, impermeables y calculados para cargas de viento." },
  { title: "Fabricación a la medida", desc: "Corte, termosellado y confección en nuestra planta de Guadalajara." },
  { title: "Instalación especializada", desc: "Equipo con experiencia en montaje de estructuras y tensado en altura." },
];

// Temporary photos (lib/images.ts) — replace with real installation photos
const GALLERY = galleryFor("lonas-industriales", [
  "Cubierta de lona industrial para bodega",
  "Membrana tensada sobre nave industrial",
  "Cubierta para andén de carga",
  "Cortina industrial divisoria en planta",
  "Cubierta de gran claro en patio de maniobras",
  "Lona tensada en almacén de la zona metropolitana",
]);

export default function LonasIndustrialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Escala industrial"
        title={
          <>
            Lonas <span className="text-champagne">Industriales</span>
          </>
        }
        subtitle="Cubiertas y cortinas de alta resistencia para bodegas, naves y centros de distribución. Materiales técnicos fabricados a la medida de tu operación."
        image={IMAGES.pageHero.industriales}
        imageAlt="Edificio contemporáneo con fachada de madera y metal"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Lonas Industriales" },
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
        title="Lonas industriales en obra"
        subtitle="Cubiertas y lonas para empresas de Guadalajara, El Salto y la zona metropolitana."
        images={GALLERY}
      />

      <RelatedProducts productId="lonas-industriales" />


      <CtaSection
        title="Cotiza tu proyecto industrial"
        text="Revisamos tus planos o visitamos la planta para proponerte la lona, la estructura y el sistema de tensado adecuados."
      />
    </>
  );
}
