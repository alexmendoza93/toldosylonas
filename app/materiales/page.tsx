import type { Metadata } from "next";
import { BRANDS, SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Materiales Premium — Sunbrella, Sattler, Versaidag, Llaza",
  description:
    "Usamos las mejores marcas del mundo: Sunbrella, Sattler, Versaidag, Llaza, Somfy y Renolite. Conoce los materiales que hacen que nuestros toldos duren más y luzcan mejor.",
  keywords: [
    "telas para toldos",
    "Sunbrella Guadalajara",
    "Sattler telas",
    "toldos premium materiales",
    "Somfy motorización toldos",
  ],
  alternates: { canonical: `${SITE_URL}/materiales` },
};

export default function MaterialesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Calidad certificada
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Materiales de{" "}
            <span className="text-oro">referencia mundial</span>
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            La diferencia entre un toldo que dura 2 años y uno que dura 15 está
            en los materiales. Trabajamos solo con fabricantes que han demostrado
            su calidad durante décadas.
          </p>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-20 sm:py-28 bg-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANDS.map((brand) => (
              <article
                key={brand.name}
                className="bg-white border border-arena-oscura p-8 hover:border-oro/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shrink-0"
                    style={{ backgroundColor: brand.color }}
                    aria-hidden="true"
                  >
                    {brand.name[0]}
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-carbon">
                      {brand.name}
                    </h2>
                    <span className="text-carbon/40 text-xs tracking-wide">
                      {brand.country}
                    </span>
                  </div>
                </div>
                <p className="text-carbon/60 text-sm leading-relaxed">
                  {brand.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why materials matter */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              id="why-heading"
              className="font-serif text-3xl font-bold text-carbon"
            >
              ¿Por qué importan los materiales?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: "15 años",
                label: "Vida útil promedio",
                desc: "Con materiales premium bien mantenidos, tu toldo dura más de una década.",
              },
              {
                stat: "95%",
                label: "Bloqueo UV",
                desc: "Las telas certificadas bloquean casi toda la radiación ultravioleta dañina.",
              },
              {
                stat: "0 hongos",
                label: "Tratamiento antifúngico",
                desc: "Los materiales de calidad resisten humedad y moho sin tratamientos adicionales.",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-4xl font-bold text-oro mb-1">
                  {item.stat}
                </p>
                <p className="text-carbon font-semibold text-sm mb-2">
                  {item.label}
                </p>
                <p className="text-carbon/60 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rojo">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Tienes dudas sobre qué material elegir?
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Te asesoramos gratuitamente para que tu inversión sea la correcta.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rojo font-semibold text-sm hover:bg-arena transition-colors"
          >
            Asesoría por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
