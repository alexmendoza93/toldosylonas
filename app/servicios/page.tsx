import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const PROCESS = [
  {
    step: "01",
    title: "Cotización",
    desc: "Nos platican su proyecto, visitamos el espacio y entregamos presupuesto detallado sin costo.",
  },
  {
    step: "02",
    title: "Diseño",
    desc: "Seleccionamos materiales, colores y sistemas que se adapten al estilo y necesidades del espacio.",
  },
  {
    step: "03",
    title: "Fabricación",
    desc: "Fabricamos en nuestra planta de Guadalajara con control de calidad en cada etapa.",
  },
  {
    step: "04",
    title: "Instalación",
    desc: "Instalamos con equipo especializado y dejamos todo funcionando con garantía escrita.",
  },
];

export const metadata: Metadata = {
  title: "Servicios — Toldos Residenciales, Comerciales e Industriales",
  description:
    "Fabricamos toldos residenciales, comerciales e industriales en Guadalajara. Toldos retráctiles, persianas Roller Screen, lonas y cubiertas especiales. Cotiza sin compromiso.",
  keywords: [
    "toldos Guadalajara",
    "protección solar Guadalajara",
    "toldos comerciales",
    "toldos residenciales",
    "persianas roller screen Guadalajara",
  ],
  alternates: { canonical: `${SITE_URL}/servicios` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Toldos y Lonas Guadalajara",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.shortDesc,
    url: `${SITE_URL}${s.href}`,
  })),
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHero
        eyebrow="Arquitectura Exterior"
        title={
          <>
            Soluciones para <span className="text-champagne">cada espacio</span>
          </>
        }
        subtitle="Diseñamos, fabricamos e instalamos toldos y sistemas de protección solar para proyectos residenciales, comerciales e industriales en Guadalajara y zona metropolitana."
        image={IMAGES.pageHero.servicios}
        imageAlt="Terraza con pérgola y alberca en residencia contemporánea"
        breadcrumb={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
      />

      {/* Catalog */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="catalog-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="catalog-heading"
            eyebrow="Catálogo"
            title="Nuestras líneas de producto"
            subtitle="Pasa el cursor sobre cada pieza para conocer sus detalles técnicos."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.id}
                delay={(i % 3) * 0.1}
                className="h-full scroll-mt-28"
              >
                <div id={service.id} className="h-full">
                  <ServiceCard {...service} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="process-heading" eyebrow="Proceso" title="¿Cómo trabajamos?" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {PROCESS.map((item, i) => (
              <Reveal as="li" key={item.step} delay={i * 0.1} className="border-t border-oro/40 pt-8">
                <span className="block type-stat text-oro/35 mb-6">{item.step}</span>
                <h3 className="type-label text-white mb-3">
                  {item.title}
                </h3>
                <p className="type-small text-crema/60">{item.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection
        title="¿No encuentras lo que necesitas?"
        text="Contamos con experiencia en proyectos especiales. Escríbenos y diseñamos la solución a tu medida."
        primaryLabel="Consultar por WhatsApp"
      />
    </>
  );
}
