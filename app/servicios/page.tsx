import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SITE_URL, WHATSAPP_URL } from "@/lib/constants";

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

      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Catálogo de servicios
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Soluciones para{" "}
            <span className="text-oro">cada espacio</span>
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Diseñamos, fabricamos e instalamos toldos y sistemas de protección
            solar para proyectos residenciales, comerciales e industriales en
            Guadalajara y zona metropolitana.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 sm:py-28 bg-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Proceso
            </p>
            <h2
              id="process-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-carbon"
            >
              ¿Cómo trabajamos?
            </h2>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((item) => (
              <li key={item.step} className="relative">
                <span className="block font-serif text-5xl font-bold text-oro/20 mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-carbon mb-2">
                  {item.title}
                </h3>
                <p className="text-carbon/60 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rojo">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿No encuentras lo que necesitas?
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Contamos con experiencia en proyectos especiales. Escríbenos y encontramos la solución.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rojo font-semibold text-sm tracking-wide hover:bg-arena transition-colors duration-200"
          >
            Consultar por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
