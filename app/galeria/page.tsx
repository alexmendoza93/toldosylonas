import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import { SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

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
      <PageHero
        eyebrow="Portafolio"
        title={
          <>
            Galería de <span className="text-champagne">proyectos</span>
          </>
        }
        subtitle="Cada proyecto es único. Explora nuestras instalaciones residenciales, comerciales e industriales en Guadalajara y Zona Metropolitana."
        image={IMAGES.pageHero.galeria}
        imageAlt="Hotel con palmeras y alberca al atardecer"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery showFilters={true} />
        </div>
      </section>

      <CtaSection
        title="¿Quieres un proyecto así?"
        text="Cada uno de estos proyectos comenzó con una conversación. El tuyo puede ser el siguiente."
        primaryLabel="Solicitar cotización"
      />
    </>
  );
}
