import type { Metadata } from "next";
import BrandsBar from "@/components/BrandsBar";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import {
  DiamondIcon,
  ShieldIcon,
  CrownIcon,
  ComfortIcon,
} from "@/components/icons/LuxuryIcons";
import { SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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
    Icon: DiamondIcon,
  },
  {
    title: "Calidad",
    desc: "Usamos únicamente materiales con certificación internacional y vida útil garantizada.",
    Icon: ShieldIcon,
  },
  {
    title: "Confianza",
    desc: "Más de 15 años entregando proyectos a tiempo, dentro del presupuesto y con garantía.",
    Icon: CrownIcon,
  },
  {
    title: "Servicio",
    desc: "Acompañamos al cliente desde el diseño hasta la instalación y el mantenimiento.",
    Icon: ComfortIcon,
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Estudio de diseño exterior"
        title={
          <>
            15 años de <span className="text-champagne">arquitectura exterior</span>
          </>
        }
        subtitle="Somos fabricantes especializados en toldos, lonas y sistemas de protección solar en Guadalajara. Diseñamos, fabricamos e instalamos cada proyecto con el rigor de un estudio de arquitectura."
        image={IMAGES.pageHero.nosotros}
        imageAlt="Residencia contemporánea iluminada al anochecer"
      />

      {/* Values */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="values-heading" eyebrow="Filosofía" title="Nuestros valores" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ title, desc, Icon }, i) => (
              <Reveal
                key={title}
                delay={i * 0.1}
                className="bg-carbon border border-linea p-10 text-center transition-colors duration-500 hover:border-oro/50"
              >
                <Icon className="w-11 h-11 text-oro mx-auto mb-7" />
                <h3 className="type-h3 text-white mb-4">{title}</h3>
                <p className="type-small text-crema/60">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="timeline-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="timeline-heading" eyebrow="Historia" title="Nuestra trayectoria" />
          <ol className="relative border-l border-oro/30 pl-10 flex flex-col gap-14">
            {TIMELINE.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 0.05} className="relative">
                <span className="absolute -left-[45px] top-1.5 w-2.5 h-2.5 rotate-45 bg-oro" />
                <span className="type-h3 text-champagne">
                  {item.year}
                </span>
                <h3 className="type-label text-white mt-3 mb-3">
                  {item.title}
                </h3>
                <p className="type-small text-crema/60">{item.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <BrandsBar />

      <CtaSection
        title="¿Tienes un proyecto en mente?"
        text="Platícanos tu idea y juntos diseñamos la solución perfecta para tu espacio."
        secondary={{ label: "Enviar formulario", href: "/contactenos" }}
      />
    </>
  );
}
