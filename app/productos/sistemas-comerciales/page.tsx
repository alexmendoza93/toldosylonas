import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import { SITE_URL } from "@/lib/constants";
import { IMAGES, galleryFor } from "@/lib/images";

export const metadata: Metadata = {
  title: "Toldos Comerciales Guadalajara — Restaurantes, Hoteles y Negocios",
  description:
    "Fabricantes de toldos comerciales en Guadalajara para locales, restaurantes, plazas comerciales, hoteles y constructoras. Fachadas, marquesinas y terrazas. Cotización gratis.",
  keywords: [
    "toldos comerciales Guadalajara",
    "toldos para restaurante",
    "marquesinas con logotipo",
    "toldos para plazas comerciales",
    "techado de terrazas comerciales",
  ],
  alternates: { canonical: `${SITE_URL}/productos/sistemas-comerciales` },
};

const SOLUTIONS = [
  {
    name: "Fachadas de locales",
    use: "Tiendas y boutiques",
    desc: "Toldos fijos y marquesinas en el color de tu marca que hacen visible tu negocio desde la calle.",
  },
  {
    name: "Terrazas de restaurante",
    use: "Restaurantes y cafés",
    desc: "Toldos fijos y retráctiles que convierten la terraza en área útil con sol, lluvia o frío.",
  },
  {
    name: "Cortinas de lona y cristal",
    use: "Cierres perimetrales",
    desc: "Cierres de lona con ventanas transparentes que protegen del viento y la lluvia sin perder la vista.",
  },
  {
    name: "Plazas y constructoras",
    use: "Proyectos de volumen",
    desc: "Como fabricantes mayoristas surtimos plazas comerciales, hoteles y desarrollos completos.",
  },
];

const BENEFITS = [
  { title: "Más mesas, todo el año", desc: "Una terraza protegida se usa en temporada de lluvias y en las horas de más sol." },
  { title: "Imagen de marca", desc: "Colores y logotipo integrados al toldo para que tu fachada trabaje por tu negocio." },
  { title: "Uso intensivo", desc: "Estructuras y telas técnicas pensadas para abrir y cerrar a diario." },
  { title: "Instalación coordinada", desc: "Planeamos la obra para interrumpir lo menos posible la operación de tu negocio." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("sistemas-comerciales", [
  "Toldo negro con iluminación en fachada de boutique",
  "Toldo fijo negro en fachada de local comercial",
  "Toldo negro sobre aparador de tienda de ropa",
  "Toldos rojos en terraza de restaurante",
  "Toldo rojo corrido en fachada de restaurante",
  "Toldo corrido en fachada comercial",
]);

export default function SistemasComercialesPage() {
  return (
    <>
      <PageHero
        eyebrow="Espacios que venden"
        title={
          <>
            Toldos <span className="text-champagne">Comerciales</span>
          </>
        }
        subtitle="Fabricantes de toldos para locales, restaurantes, plazas comerciales, hoteles y constructoras que quieren aprovechar su exterior y proyectar una imagen impecable."
        image={IMAGES.pageHero.comerciales}
        imageAlt="Terraza de hotel con palmeras y alberca al atardecer"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Toldos Comerciales" },
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
        subtitle="Locales, restaurantes y plazas comerciales en la Zona Metropolitana de Guadalajara."
        images={GALLERY}
      />

      <RelatedProducts productId="sistemas-comerciales" />


      <CtaSection
        title="Cotiza el sistema para tu negocio"
        text="Conocemos tu operación, visitamos el lugar y te entregamos una propuesta con diseño, materiales y tiempos de instalación."
      />
    </>
  );
}
