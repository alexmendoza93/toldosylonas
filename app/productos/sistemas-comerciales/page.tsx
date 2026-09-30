import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Toldos Comerciales Guadalajara — Restaurantes, Hoteles y Negocios",
  description:
    "Toldos comerciales en Guadalajara para restaurantes, hoteles, plazas y negocios. Terrazas techadas, marquesinas con logotipo y cortinas enrollables. Cotiza sin compromiso.",
  keywords: [
    "toldos comerciales Guadalajara",
    "toldos para restaurante",
    "marquesinas con logotipo",
    "toldos para hoteles",
    "techado de terrazas comerciales",
  ],
  alternates: { canonical: `${SITE_URL}/productos/sistemas-comerciales` },
};

const SOLUTIONS = [
  {
    name: "Terrazas de restaurante",
    use: "Restaurantes y cafés",
    desc: "Cubiertas y palillerías que convierten la terraza en área útil con sol, lluvia o frío.",
  },
  {
    name: "Marquesinas con marca",
    use: "Locales y fachadas",
    desc: "Toldos con logotipo impreso o rotulado que hacen visible tu negocio desde la calle.",
  },
  {
    name: "Cortinas enrollables",
    use: "Cierres perimetrales",
    desc: "Cierres transparentes o de tela que protegen del viento y la lluvia sin cerrar el espacio.",
  },
  {
    name: "Cubiertas para hoteles",
    use: "Albercas y eventos",
    desc: "Sombra elegante para albercas, jardines y áreas de eventos que cuidan la experiencia del huésped.",
  },
];

const BENEFITS = [
  { title: "Más mesas, todo el año", desc: "Una terraza protegida se usa en temporada de lluvias y en las horas de más sol." },
  { title: "Imagen de marca", desc: "Colores y logotipo integrados al toldo para que tu fachada trabaje por tu negocio." },
  { title: "Uso intensivo", desc: "Estructuras y telas técnicas pensadas para abrir y cerrar a diario." },
  { title: "Instalación coordinada", desc: "Planeamos la obra para interrumpir lo menos posible la operación de tu negocio." },
];

// Temporary photos (lib/images.ts) — replace with real installation photos
const GALLERY = galleryFor("sistemas-comerciales", [
  { caption: "Terraza · Restaurante", alt: "Terraza de restaurante techada en Guadalajara" },
  { caption: "Cubierta · Hotel", alt: "Cubierta textil en área de alberca de hotel" },
  { caption: "Sombra · Club de playa", alt: "Sombra para camastros en club de playa" },
  { caption: "Cubierta · Jardín de eventos", alt: "Cubierta para jardín de eventos" },
  { caption: "Palillería · Café", alt: "Palillería en terraza de café" },
  { caption: "Cortinas · Terraza", alt: "Cortinas enrollables en terraza comercial" },
]);

export default function SistemasComercialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Espacios que venden"
        title={
          <>
            Sistemas <span className="text-champagne">Comerciales</span>
          </>
        }
        subtitle="Toldos y cubiertas para restaurantes, hoteles y negocios que quieren aprovechar cada metro de su exterior y proyectar una imagen impecable."
        image={IMAGES.pageHero.comerciales}
        imageAlt="Terraza de hotel con palmeras y alberca al atardecer"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Sistemas Comerciales" },
        ]}
      />

      {/* Solutions */}
      <section className="py-28 md:py-40 bg-noir" aria-labelledby="solutions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="solutions-heading" eyebrow="Soluciones" title="Para cada tipo de negocio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 0.08}
                className="group flex flex-col bg-carbon border border-linea p-8 transition-all duration-700 ease-lux hover:-translate-y-1 hover:border-oro/50"
              >
                <span className="block type-label text-oro mb-6">{s.use}</span>
                <h3 className="type-h3 text-white mb-4">{s.name}</h3>
                <p className="type-small text-crema/60 flex-1">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 md:py-40 bg-grafito texture-lino" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading id="benefits-heading" eyebrow="Beneficios" title="Una inversión que se nota" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.1} className="flex gap-6">
                <span className="mt-2 w-2 h-2 rotate-45 bg-oro shrink-0" />
                <div>
                  <h3 className="type-label text-white mb-3">
                    {b.title}
                  </h3>
                  <p className="type-small text-crema/60">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductGallery
        id="gallery-heading"
        title="Negocios que confían en nosotros"
        subtitle="Restaurantes, hoteles y espacios comerciales en la Zona Metropolitana de Guadalajara."
        images={GALLERY}
      />

      <CtaSection
        title="Cotiza el sistema para tu negocio"
        text="Conocemos tu operación, visitamos el lugar y te entregamos una propuesta con diseño, materiales y tiempos de instalación."
      />
    </>
  );
}
