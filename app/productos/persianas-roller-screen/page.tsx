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
  title: "Persianas Roller y Cortinas Exteriores Guadalajara — Screen, Sondblock, Sheer",
  description:
    "Fabricamos persianas roller en Guadalajara: Screen, Sondblock y Sheer Elegance para interior, y cortinas exteriores Dickson Sunworker para terrazas. Manuales o motorizadas.",
  keywords: [
    "persianas roller screen Guadalajara",
    "persiana screen Guadalajara",
    "persiana sondblock",
    "persiana sheer elegance",
    "cortinas exteriores para terraza",
  ],
  alternates: { canonical: `${SITE_URL}/productos/persianas-roller-screen` },
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
    openness: "Opaca",
    desc: "Tela que bloquea la luz para dormitorios, salas de juntas y espacios que requieren oscurecimiento y privacidad.",
    benefit: "Mayor privacidad",
  },
  {
    name: "Sheer Elegance",
    openness: "Transparente + tela",
    desc: "Combina voile y tela Screen en una misma persiana. Filtra la luz suavemente con un acabado de alta costura.",
    benefit: "Elegancia premium",
  },
  {
    name: "Dickson Sunworker",
    openness: "Exterior",
    desc: "Cortina enrollable de exterior para cerrar terrazas y pórticos del sol bajo y el viento, con la vista despejada.",
    benefit: "Terrazas protegidas",
  },
];

const BENEFITS = [
  { title: "Ahorro energético", desc: "Reducen hasta 80% la entrada de calor solar, bajando el uso de aire acondicionado." },
  { title: "Sin perder la vista", desc: "A diferencia de las cortinas opacas, las Screen permiten ver al exterior desde adentro." },
  { title: "Fácil mantenimiento", desc: "Las telas técnicas resisten el polvo y se limpian con un paño húmedo." },
  { title: "Motorización opcional", desc: "Disponible con motor Somfy para control remoto, por app o automático." },
];

// Real installation photos (lib/images.ts)
const GALLERY = galleryFor("persianas-roller-screen", [
  "Cortinas screen negras cerrando terraza de noche",
  "Cortina exterior enrollable screen en terraza",
  "Cortinas exteriores enrollables en fachada de residencia",
  "Cortinas roller exteriores en terraza de residencia con jardín",
  "Terraza cerrada con cortinas screen de noche",
  "Residencia con cortinas exteriores iluminada de noche",
]);

export default function PersianasRollerScreenPage() {
  return (
    <>
      <PageHero
        eyebrow="Control solar interior"
        title={
          <>
            Persianas <span className="text-champagne">y Cortinas</span>
          </>
        }
        subtitle="Persianas roller para interior en Screen, Sondblock y Sheer Elegance, y cortinas exteriores Dickson Sunworker para terrazas. Manuales o motorizadas."
        image={IMAGES.pageHero.roller}
        imageAlt="Recámara elegante con cortinas y luz natural"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Productos", href: "/productos" },
          { label: "Persianas y Cortinas" },
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
                <span className="block type-label text-oro mb-6">{type.benefit}</span>
                <h3 className="type-h3 text-white mb-4">{type.name}</h3>
                <p className="type-small text-crema/60 flex-1">{type.desc}</p>
                <p className="mt-8 pt-5 border-t border-linea type-meta text-crema/45">
                  Apertura <span className="block type-small text-champagne mt-1.5 normal-case tracking-normal">{type.openness}</span>
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
        title="Roller Screen en espacios reales"
        subtitle="Cortinas exteriores y persianas instaladas a la medida en residencias y negocios de Guadalajara."
        images={GALLERY}
      />

      <RelatedProducts productId="persianas-roller-screen" />


      <CtaSection
        title="Solicita tu cotización de Roller Screen"
        text="Medimos a domicilio y te asesoramos en la elección del tipo de tela ideal para tu espacio."
      />
    </>
  );
}
