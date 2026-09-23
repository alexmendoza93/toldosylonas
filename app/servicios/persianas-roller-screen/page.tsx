import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import { SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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

const BENEFITS = [
  { title: "Ahorro energético", desc: "Reducen hasta 80% la entrada de calor solar, bajando el uso de aire acondicionado." },
  { title: "Sin perder la vista", desc: "A diferencia de las cortinas opacas, las Screen permiten ver al exterior desde adentro." },
  { title: "Fácil mantenimiento", desc: "Las telas técnicas resisten el polvo y se limpian con un paño húmedo." },
  { title: "Motorización opcional", desc: "Disponible con motor Somfy para control remoto, por app o automático." },
];

export default function PersianasRollerScreenPage() {
  return (
    <>
      <PageHero
        eyebrow="Control solar interior"
        title={
          <>
            Persianas <span className="text-champagne">Roller Screen</span>
          </>
        }
        subtitle="Protección solar interior con visibilidad al exterior. Disponibles en Screen, Sondblock, Sheer Elegance y Blackout. Manuales o motorizadas."
        image={IMAGES.pageHero.roller}
        imageAlt="Recámara elegante con cortinas y luz natural"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: "Roller Screen" },
        ]}
      />

      {/* Fabric types */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="types-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="types-heading" eyebrow="Colección" title="Tipos de tela disponibles" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TYPES.map((type, i) => (
              <Reveal
                key={type.name}
                delay={i * 0.08}
                className="group flex flex-col bg-carbon border border-linea p-8 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="eyebrow text-[9px]! mb-6">{type.benefit}</span>
                <h3 className="font-serif text-xl text-white tracking-[0.06em] mb-4">{type.name}</h3>
                <p className="text-crema/60 text-sm leading-relaxed flex-1">{type.desc}</p>
                <p className="mt-8 pt-5 border-t border-linea text-[10px] tracking-[0.2em] uppercase text-crema/45">
                  Apertura <span className="block text-champagne text-xs mt-1.5 normal-case tracking-wide">{type.openness}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="benefits-heading" eyebrow="Beneficios" title="Ventajas de las Roller Screen" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.1} className="flex gap-6">
                <span className="mt-2 w-2 h-2 rotate-45 bg-oro shrink-0" />
                <div>
                  <h3 className="text-[11px] font-medium tracking-[0.3em] uppercase text-white mb-3">
                    {b.title}
                  </h3>
                  <p className="text-crema/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Solicita tu cotización de Roller Screen"
        text="Medimos a domicilio y te asesoramos en la elección del tipo de tela ideal para tu espacio."
      />
    </>
  );
}
