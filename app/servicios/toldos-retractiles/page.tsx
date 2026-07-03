import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

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
  alternates: { canonical: `${SITE_URL}/servicios/toldos-retractiles` },
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

export default function ToldosRetractilesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-oro transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-oro transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-oro">Toldos Retráctiles</span>
          </nav>
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Sistemas retráctiles
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Toldos Retráctiles{" "}
            <span className="text-oro">en Guadalajara</span>
          </h1>
          <div className="w-16 h-px bg-oro mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Instalamos sistemas retráctiles manuales y motorizados de las mejores
            marcas europeas. Brazos articulados, cofres, pérgolas bioclimáticas y
            automatización Somfy para el máximo confort.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-arena" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="features-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-carbon text-center mb-14"
          >
            Sistemas disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-arena-oscura p-8 hover:border-oro/50 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-bold text-carbon mb-3">
                  {f.title}
                </h3>
                <p className="text-carbon/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why retractable */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="why-heading"
            className="font-serif text-3xl font-bold text-carbon text-center mb-10"
          >
            ¿Por qué elegir un toldo retráctil?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "☀️",
                title: "Protección solar",
                desc: "Reduce hasta 95% la radiación UV en tu terraza.",
              },
              {
                icon: "🌧️",
                title: "Protección climática",
                desc: "Disfruta tu espacio bajo lluvia ligera y viento moderado.",
              },
              {
                icon: "📱",
                title: "Control inteligente",
                desc: "Motorización con app, voz o sensor automático.",
              },
            ].map((item) => (
              <div key={item.title}>
                <span className="text-4xl mb-4 block" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="font-serif text-lg font-bold text-carbon mb-2">
                  {item.title}
                </h3>
                <p className="text-carbon/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rojo">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Solicita tu cotización de toldo retráctil
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Te visitamos, medimos y te entregamos presupuesto sin costo ni compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-rojo font-semibold text-sm hover:bg-arena transition-colors"
            >
              Cotizar por WhatsApp →
            </a>
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-rojo transition-colors"
            >
              Enviar formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
