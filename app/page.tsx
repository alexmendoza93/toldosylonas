import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import BrandsBar from "@/components/BrandsBar";
import ProjectGallery from "@/components/ProjectGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {
  DiamondIcon,
  ShieldIcon,
  CrownIcon,
  ComfortIcon,
  ArrowIcon,
} from "@/components/icons/LuxuryIcons";
import { SERVICES, WHATSAPP_URL, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Toldos y Lonas Guadalajara | Arquitectura Exterior desde 2009",
  description:
    "Fabricantes de toldos residenciales y comerciales en Guadalajara. 15+ años diseñando espacios exteriores con materiales premium Sunbrella y Sattler. Cotiza sin compromiso.",
  alternates: { canonical: SITE_URL },
};

const PILLARS = [
  {
    Icon: DiamondIcon,
    title: "Diseño",
    desc: "Soluciones a la medida con estética y armonía arquitectónica.",
  },
  {
    Icon: ShieldIcon,
    title: "Protección",
    desc: "Materiales de alto desempeño y tecnología de vanguardia.",
  },
  {
    Icon: CrownIcon,
    title: "Exclusividad",
    desc: "Productos premium para proyectos únicos e irrepetibles.",
  },
  {
    Icon: ComfortIcon,
    title: "Confort",
    desc: "Disfruta tus espacios exteriores todo el día, todo el año.",
  },
];

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <>
      <Hero />

      <TrustBar />

      {/* Brand pillars */}
      <section className="bg-noir py-28 md:py-40" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="pillars-heading"
            eyebrow="Nuestra esencia"
            title="Diseño, protección y confort en cada detalle"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 0.1}
                className={`flex flex-col items-center text-center px-8 py-10 border-linea ${
                  i > 0 ? "lg:border-l" : ""
                } ${i % 2 === 1 ? "sm:border-l" : ""} ${i > 0 ? "border-t sm:border-t-0" : ""} ${
                  i >= 2 ? "sm:border-t lg:border-t-0" : ""
                }`}
              >
                <Icon className="w-12 h-12 text-oro mb-7" />
                <h3 className="text-[12px] font-medium tracking-[0.34em] uppercase text-champagne mb-4">
                  {title}
                </h3>
                <p className="text-crema/60 text-sm leading-relaxed max-w-[24ch]">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section
        id="servicios"
        className="bg-grafito texture-lino py-28 md:py-40"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="services-heading"
            eyebrow="Catálogo"
            title="Soluciones de arquitectura exterior"
            subtitle="Fabricamos a la medida para proyectos residenciales, comerciales e industriales en toda la Zona Metropolitana de Guadalajara."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1} className="h-full">
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-16">
            <Link href="/servicios" className="btn-oro">
              Ver catálogo completo
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative bg-noir overflow-hidden" aria-labelledby="manifesto-heading">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <div className="relative min-h-[50vh] lg:min-h-full">
            <Image
              src={IMAGES.manifesto}
              alt="Terraza con pérgolas y cortinas al atardecer frente al mar"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-noir/25" />
            <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-transparent via-transparent to-noir" />
          </div>

          <div className="flex items-center px-6 sm:px-12 lg:px-20 py-24">
            <Reveal className="max-w-xl">
              <span className="eyebrow mb-8">Mensaje de marca</span>
              <p className="font-serif text-2xl md:text-3xl leading-snug text-crema tracking-[0.04em]">
                Creamos espacios exteriores que reflejan{" "}
                <span className="text-champagne">tu estilo de vida.</span>
              </p>
              <span className="divider-oro my-12" />
              <h2
                id="manifesto-heading"
                className="text-[12px] font-medium tracking-[0.42em] uppercase text-white mb-3"
              >
                No instalamos toldos.
              </h2>
              <p className="font-script text-5xl md:text-6xl text-oro leading-tight">
                Diseñamos experiencias.
              </p>
              <p className="text-crema/60 text-[15px] leading-relaxed mt-10">
                Desde 2009 fabricamos en Guadalajara cada pieza como un elemento de
                arquitectura: telas Sunbrella y Sattler, estructuras de aluminio y
                automatización Somfy, integradas al carácter de tu espacio.
              </p>
              <Link href="/nosotros" className="btn-oro mt-12">
                Conoce el estudio
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-noir py-28 md:py-40 border-t border-linea" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="projects-heading"
            eyebrow="Portafolio"
            title="Proyectos que inspiran"
            subtitle="Cada instalación es única. Descubre cómo transformamos espacios exteriores en toda Guadalajara."
          />
          <ProjectGallery limit={6} showFilters={false} />
          <Reveal className="text-center mt-16">
            <Link href="/galeria" className="btn-oro">
              Ver galería completa
              <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      <BrandsBar />

      {/* Final CTA */}
      <section className="relative py-36 md:py-48 overflow-hidden" aria-labelledby="cta-heading">
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-noir/80" />
        <Reveal className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-6">Arquitectura Exterior</span>
          <h2
            id="cta-heading"
            className="font-serif text-3xl md:text-5xl leading-tight text-white tracking-[0.04em]"
          >
            ¿Listo para transformar tu espacio?
          </h2>
          <span className="divider-oro mx-auto my-10" />
          <p className="text-crema/70 text-[15px] leading-relaxed mb-12 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y en menos de 24 horas te enviamos una
            propuesta de diseño y presupuesto detallado. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-oro-solid">
              Cotizar por WhatsApp
            </a>
            <Link href="/contactenos" className="btn-oro">
              Enviar formulario
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
