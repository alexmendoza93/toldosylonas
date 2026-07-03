import type { Metadata } from "next";
import BrandsBar from "@/components/BrandsBar";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nosotros — Quiénes Somos",
  description:
    "Conoce la historia de Toldos y Lonas Guadalajara. Más de 15 años fabricando toldos de calidad en Guadalajara, Jalisco. Misión, valores y equipo.",
  alternates: { canonical: `${SITE_URL}/nosotros` },
};

const TIMELINE = [
  {
    year: "2009",
    title: "Fundación",
    desc: "Toldos y Lonas Guadalajara abre sus puertas con un taller propio y el compromiso de ofrecer la mejor calidad en protección solar.",
  },
  {
    year: "2012",
    title: "Expansión comercial",
    desc: "Comenzamos a atender proyectos comerciales — restaurantes, hoteles y centros comerciales en toda la Zona Metropolitana.",
  },
  {
    year: "2015",
    title: "Alianzas internacionales",
    desc: "Firmamos acuerdos de distribución con Sunbrella, Sattler y Versaidag para llevar los mejores materiales del mundo a nuestros clientes.",
  },
  {
    year: "2019",
    title: "Automatización",
    desc: "Incorporamos la línea de sistemas motorizados Somfy para ofrecer toldos inteligentes con control por app.",
  },
  {
    year: "2024",
    title: "Hoy",
    desc: "Más de 500 proyectos terminados, 15 años de trayectoria y el mismo compromiso de calidad y servicio con el que empezamos.",
  },
];

const VALUES = [
  {
    title: "Diseño",
    desc: "Cada toldo es un elemento arquitectónico que debe integrarse al estilo del espacio.",
    icon: "◈",
  },
  {
    title: "Calidad",
    desc: "Usamos únicamente materiales con certificación internacional y vida útil garantizada.",
    icon: "◆",
  },
  {
    title: "Confianza",
    desc: "Más de 15 años entregando proyectos a tiempo, dentro del presupuesto y con garantía.",
    icon: "◉",
  },
  {
    title: "Servicio",
    desc: "Acompañamos al cliente desde el diseño hasta la instalación y el mantenimiento.",
    icon: "◎",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Quiénes somos
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            15 años transformando{" "}
            <span className="text-oro">espacios exteriores</span>
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Somos fabricantes especializados en toldos, lonas y sistemas de
            protección solar en Guadalajara. Diseñamos, fabricamos e instalamos
            cada proyecto con el rigor de un estudio de arquitectura exterior.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-arena" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="values-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-carbon text-center mb-14"
          >
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-arena-oscura p-8 text-center hover:border-oro/50 hover:shadow-md transition-all duration-300"
              >
                <span className="text-4xl text-oro block mb-4" aria-hidden="true">
                  {v.icon}
                </span>
                <h3 className="font-serif text-xl font-bold text-carbon mb-3">
                  {v.title}
                </h3>
                <p className="text-carbon/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Historia
            </p>
            <h2
              id="timeline-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-carbon"
            >
              Nuestra trayectoria
            </h2>
          </div>
          <ol className="relative border-l-2 border-arena-oscura pl-8 flex flex-col gap-10">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-oro border-2 border-white flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
                <span className="text-oro text-xs font-bold tracking-[0.2em]">
                  {item.year}
                </span>
                <h3 className="font-serif text-lg font-bold text-carbon mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-carbon/60 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brands */}
      <BrandsBar />

      {/* CTA */}
      <section className="py-20 bg-rojo">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-white/70 text-sm mb-8">
            Platícanos tu idea y juntos diseñamos la solución perfecta.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rojo font-semibold text-sm tracking-wide hover:bg-arena transition-colors duration-200"
          >
            Cotizar por WhatsApp →
          </a>
        </div>
      </section>
    </>
  );
}
