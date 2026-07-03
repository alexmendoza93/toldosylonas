import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceCard from "@/components/ServiceCard";
import BrandsBar from "@/components/BrandsBar";
import ProjectGallery from "@/components/ProjectGallery";
import { SERVICES, WHATSAPP_URL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Toldos y Lonas Guadalajara | Arquitectura Exterior desde 2009",
  description:
    "Fabricantes de toldos residenciales y comerciales en Guadalajara. 15+ años diseñando espacios exteriores con materiales premium Sunbrella y Sattler. Cotiza sin compromiso.",
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Trust stats */}
      <TrustBar />

      {/* Services preview */}
      <section
        id="servicios"
        className="py-20 sm:py-28 bg-arena"
        aria-labelledby="services-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Soluciones
            </p>
            <h2
              id="services-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-carbon"
            >
              ¿Qué podemos hacer por ti?
            </h2>
            <p className="text-carbon/60 text-sm mt-4 max-w-xl mx-auto">
              Fabricamos a la medida para proyectos residenciales, comerciales e
              industriales en toda la Zona Metropolitana de Guadalajara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-carbon text-carbon text-sm font-semibold tracking-wide hover:bg-carbon hover:text-white transition-colors duration-200 rounded-sm"
            >
              Ver todos los servicios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section
        className="py-20 sm:py-28 bg-white"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
              Portafolio
            </p>
            <h2
              id="projects-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-carbon"
            >
              Proyectos que inspiran
            </h2>
            <p className="text-carbon/60 text-sm mt-4 max-w-xl mx-auto">
              Cada instalación es única. Mira cómo transformamos espacios
              exteriores en toda Guadalajara.
            </p>
          </div>

          <ProjectGallery limit={6} showFilters={false} />

          <div className="text-center mt-10">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-rojo text-white text-sm font-semibold tracking-wide hover:bg-rojo-oscuro transition-colors duration-200 rounded-sm"
            >
              Ver galería completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20 sm:py-28 bg-carbon text-white" aria-labelledby="value-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                Por qué elegirnos
              </p>
              <h2
                id="value-heading"
                className="font-serif text-3xl md:text-4xl font-bold mb-6"
              >
                No vendemos toldos,{" "}
                <span className="text-oro">diseñamos confort</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Con más de 15 años fabricando en Guadalajara, conocemos el clima,
                el estilo y las exigencias de los proyectos de la región. Cada
                toldo que hacemos es una pieza de arquitectura exterior diseñada
                para durar y lucir.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  {
                    title: "Fabricación propia",
                    desc: "Producimos en nuestra planta en Guadalajara — control total de calidad.",
                  },
                  {
                    title: "Materiales premium",
                    desc: "Sunbrella, Sattler, Versaidag — las mejores telas del mundo.",
                  },
                  {
                    title: "Asesoría completa",
                    desc: "Desde el diseño hasta la instalación, te acompañamos en todo.",
                  },
                  {
                    title: "Garantía total",
                    desc: "Respaldamos nuestros materiales y mano de obra con garantía escrita.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="mt-1 w-5 h-5 shrink-0 rounded-full border border-oro flex items-center justify-center">
                      <svg className="w-3 h-3 text-oro" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-white text-sm font-semibold">{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="relative bg-carbon-suave border border-white/10 p-8">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-oro" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-oro" />
                <p className="font-serif text-4xl font-bold text-oro mb-2">&ldquo;</p>
                <blockquote className="font-serif text-xl font-medium text-white italic leading-relaxed mb-6">
                  Creamos espacios exteriores que reflejan tu estilo de vida.
                </blockquote>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Toldos y Lonas Guadalajara · Desde 2009
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <BrandsBar />

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-arena" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Cotización sin compromiso
          </p>
          <h2
            id="cta-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-carbon mb-5"
          >
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-carbon/60 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Cuéntanos tu espacio y en menos de 24 horas te enviamos un
            presupuesto detallado. Sin letra pequeña, sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-rojo text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-rojo-oscuro transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.85L.057 23.054a.75.75 0 0 0 .92.92l5.204-1.47A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.516-5.212-1.416l-.374-.223-3.868 1.092 1.092-3.868-.223-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <Link
              href="/contactenos"
              className="flex items-center justify-center px-8 py-4 border-2 border-carbon text-carbon font-semibold text-sm tracking-wide rounded-sm hover:bg-carbon hover:text-white transition-colors duration-200"
            >
              Enviar formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
