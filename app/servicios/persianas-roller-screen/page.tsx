import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Persianas Roller Screen Guadalajara — Screen, Sondblock, Sheer",
  description:
    "Persianas Roller Screen en Guadalajara. Tela Screen, Sondblock y Sheer Elegance. Control solar con visibilidad al exterior. Motorización disponible. Cotiza sin compromiso.",
  keywords: [
    "persianas roller screen Guadalajara",
    "persiana screen Guadalajara",
    "persiana sondblock",
    "persiana sheer elegance",
    "control solar interior",
  ],
  alternates: { canonical: `${SITE_URL}/servicios/persianas-roller-screen` },
};

const TYPES = [
  {
    name: "Screen",
    openness: "3% – 10%",
    desc: "Permite ver el exterior mientras reduce el calor. Ideal para oficinas y salones con vista.",
    benefit: "Visibilidad máxima",
  },
  {
    name: "Sondblock",
    openness: "1% – 3%",
    desc: "Mayor privacidad y bloqueo solar. Perfecto para dormitorios y espacios que requieren mayor oscurecimiento.",
    benefit: "Mayor privacidad",
  },
  {
    name: "Sheer Elegance",
    openness: "Transparente + tela",
    desc: "Combina voile y tela Screen en una misma persiana. Filtra la luz suavemente con un acabado de alta costura.",
    benefit: "Elegancia premium",
  },
  {
    name: "Blackout",
    openness: "0% (oscurecimiento total)",
    desc: "Oscurecimiento total para proyectores, dormitorios o espacios que requieren control de luz completo.",
    benefit: "Oscurecimiento total",
  },
];

export default function PersianasRollerScreenPage() {
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
            <span className="text-oro">Persianas Roller Screen</span>
          </nav>
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Control solar interior
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Persianas{" "}
            <span className="text-oro">Roller Screen</span>
          </h1>
          <div className="w-16 h-px bg-oro mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Protección solar interior con visibilidad al exterior. Disponibles en
            Screen, Sondblock, Sheer Elegance y Blackout. Manuales o motorizadas
            para ventanas, puertas y espacios amplios.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 sm:py-28 bg-arena" aria-labelledby="types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="types-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-carbon text-center mb-14"
          >
            Tipos de tela disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TYPES.map((type) => (
              <div
                key={type.name}
                className="bg-white border border-arena-oscura p-6 hover:border-oro/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 bg-arena rounded-sm flex items-center justify-center mb-4">
                  <span className="text-rojo font-bold text-sm">RS</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-carbon mb-1">
                  {type.name}
                </h3>
                <span className="text-xs text-oro font-semibold tracking-wide block mb-3">
                  {type.benefit}
                </span>
                <p className="text-carbon/60 text-sm leading-relaxed mb-3">
                  {type.desc}
                </p>
                <p className="text-carbon/40 text-xs">
                  Apertura: <strong>{type.openness}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-carbon text-center mb-10">
            Ventajas de las Roller Screen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Ahorro energético", desc: "Reducen hasta 80% la entrada de calor solar, bajando el uso de aire acondicionado." },
              { title: "Sin perder la vista", desc: "A diferencia de las cortinas opacas, las Screen permiten ver al exterior desde adentro." },
              { title: "Fácil mantenimiento", desc: "Las telas técnicas resisten el polvo y se limpian con un paño húmedo." },
              { title: "Motorización optional", desc: "Disponible con motor Somfy para control remoto, por app o automático." },
            ].map((b) => (
              <div key={b.title} className="flex gap-4">
                <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-oro flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-bold text-carbon mb-1">{b.title}</h3>
                  <p className="text-carbon/60 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-rojo">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
            Solicita tu cotización de Roller Screen
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Medimos a domicilio y te asesoramos en la elección del tipo de tela ideal para tu espacio.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rojo font-semibold text-sm hover:bg-arena transition-colors"
          >
            Cotizar por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
