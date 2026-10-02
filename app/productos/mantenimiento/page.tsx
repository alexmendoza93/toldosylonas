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
  title: "Mantenimiento de Toldos Guadalajara — Reparación y Refacciones",
  description:
    "Mantenimiento y reparación de toldos en Guadalajara. Refacciones para toldos retráctiles, palillerías y sistemas motorizados, limpieza de telas y cambio de lona.",
  keywords: [
    "mantenimiento toldos Guadalajara",
    "reparacion toldos Guadalajara",
    "refacciones toldos retractiles",
    "cambio de lona toldo",
    "reparacion toldo motorizado",
  ],
  alternates: { canonical: `${SITE_URL}/productos/mantenimiento` },
};

const INCLUDES = [
  {
    title: "Revisión y ajuste",
    desc: "Revisamos brazos, guías, tornillería y tensión de la tela, y ajustamos todo para que opere sin esfuerzo.",
  },
  {
    title: "Limpieza de telas",
    desc: "Limpieza de telas acrílicas y técnicas con productos adecuados para no dañar su color ni su tratamiento.",
  },
  {
    title: "Cambio de lona",
    desc: "Reemplazamos la tela desgastada aprovechando tu estructura, con opciones Sunbrella, Sattler y Dickson.",
  },
  {
    title: "Refacciones y accesorios",
    desc: "Venta de brazos, soportes, mecanismos, tubos, tornillería y motores Somfy para toldos y persianas.",
  },
];

const BENEFITS = [
  { title: "Más años de vida", desc: "Un toldo revisado a tiempo evita desgastes que terminan en reemplazos completos." },
  { title: "Operación segura", desc: "Mecanismos ajustados y tela bien tensada resisten mejor el viento y la lluvia." },
  { title: "Como nuevo", desc: "Una tela limpia o renovada devuelve a tu terraza o fachada su mejor imagen." },
  { title: "Cualquier marca", desc: "Atendemos toldos instalados por nosotros o por otros fabricantes." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("mantenimiento", [
  "Soporte de brazo para toldo retráctil",
  "Mecanismo de manivela para toldo enrollable",
  "Brazos articulados de toldo retráctil con lona roja",
  "Instalación de toldo en fachada",
  "Instalación de toldo en terraza de restaurante",
  "Showroom con muestrarios de telas para toldos",
]);

export default function MantenimientoPage() {
  return (
    <>
      <PageHero
        eyebrow="Cuidamos tu inversión"
        title={
          <>
            Mantenimiento <span className="text-champagne">y Refacciones</span>
          </>
        }
        subtitle="Revisión, limpieza, refacciones y cambio de lona para que tu toldo luzca y funcione como el primer día."
        image={IMAGES.pageHero.mantenimiento}
        imageAlt="Sala contemporánea abierta hacia la terraza"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Mantenimiento y Refacciones" },
        ]}
      />

      {/* Includes */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="includes-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="includes-heading" eyebrow="Servicio" title="¿Qué incluye?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {INCLUDES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 0.1}
                className="group bg-carbon border border-linea p-10 md:p-12 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-meta text-oro/60 mb-6">
                  0{i + 1}
                </span>
                <h3 className="type-h3 text-white mb-4 transition-colors group-hover:text-champagne">
                  {item.title}
                </h3>
                <p className="type-small text-crema/60">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="benefits-heading" eyebrow="Beneficios" title="¿Por qué dar mantenimiento?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.1} className="flex gap-6">
                <span className="mt-2 w-2 h-2 rotate-45 bg-oro shrink-0" />
                <div>
                  <h3 className="type-label text-white mb-3">
                    {b.title}
                  </h3>
                  <p className="type-small text-crema/60">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery
        id="gallery-heading"
        title="Piezas, mecanismos y taller"
        subtitle="Refacciones originales, instalación y mantenimiento en Guadalajara y zona metropolitana."
        images={GALLERY}
      />

      <RelatedProducts productId="mantenimiento" />


      <CtaSection
        title="Agenda el mantenimiento de tu toldo"
        text="Mándanos fotos de tu toldo por WhatsApp y te decimos qué necesita y cuánto cuesta."
        primaryLabel="Agendar por WhatsApp"
      />
    </>
  );
}
