import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galería de Proyectos — Instalaciones en Guadalajara",
  description:
    "Galería de proyectos de toldos en Guadalajara. Instalaciones residenciales, comerciales e industriales realizadas. Transforma tu espacio como lo han hecho cientos de clientes.",
  keywords: [
    "galería toldos Guadalajara",
    "proyectos toldos Guadalajara",
    "instalación toldos",
    "fotos toldos Guadalajara",
  ],
  alternates: { canonical: `${SITE_URL}/galeria` },
};

export default function GaleriaPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Portafolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Galería de{" "}
            <span className="text-oro">proyectos</span>
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proyecto es único. Explora nuestras instalaciones residenciales,
            comerciales e industriales realizadas en Guadalajara y Zona Metropolitana.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery showFilters={true} />
        </div>
      </section>

      {/* Note about adding photos */}
      {/* TODO: Remove this note block once real photos are added to public/images/projects/ */}

      {/* CTA */}
      <section className="py-20 bg-arena">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-carbon mb-4">
            ¿Quieres un proyecto así?
          </h2>
          <p className="text-carbon/60 text-sm mb-8">
            Cada uno de estos proyectos comenzó con una llamada o mensaje.
            El tuyo puede ser el siguiente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rojo text-white font-semibold text-sm hover:bg-rojo-oscuro transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.85L.057 23.054a.75.75 0 0 0 .92.92l5.204-1.47A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.516-5.212-1.416l-.374-.223-3.868 1.092 1.092-3.868-.223-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Solicitar cotización
          </a>
        </div>
      </section>
    </>
  );
}
