import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import { SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog — Consejos sobre Toldos y Protección Solar",
  description:
    "Artículos y consejos sobre toldos, protección solar, materiales y mantenimiento. Todo lo que necesitas saber antes de instalar un toldo en Guadalajara.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

// Placeholder blog posts — replace with real CMS content
const POSTS = [
  {
    slug: "como-elegir-tela-toldo",
    title: "¿Cómo elegir la tela correcta para tu toldo?",
    excerpt:
      "Sunbrella vs Sattler, Screen vs Acrílico. Todo lo que necesitas saber para tomar la mejor decisión según tu clima y presupuesto.",
    date: "2024-06-15",
    category: "Materiales",
  },
  {
    slug: "toldo-retractil-vs-fijo",
    title: "Toldo retráctil vs. toldo fijo: ¿cuál conviene más?",
    excerpt:
      "Comparamos los dos sistemas más populares: instalación, precio, durabilidad y funcionalidad para que elijas el que mejor se adapta a tu espacio.",
    date: "2024-05-20",
    category: "Guías",
  },
  {
    slug: "mantenimiento-toldos-guadalajara",
    title: "Guía de mantenimiento de toldos en Guadalajara",
    excerpt:
      "El clima de Guadalajara puede ser exigente. Aprende cómo limpiar, guardar y revisar tu toldo para que dure muchos años sin perder su aspecto.",
    date: "2024-04-10",
    category: "Mantenimiento",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title={
          <>
            <span className="text-champagne">Guías</span> y consejos
          </>
        }
        subtitle="Todo lo que necesitas saber sobre toldos, materiales y protección solar antes de tomar una decisión."
        image={IMAGES.pageHero.blog}
        imageAlt="Interior con ventanales hacia una terraza"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col border-t border-linea">
            {POSTS.map((post, i) => (
              <Reveal
                as="article"
                key={post.slug}
                delay={i * 0.08}
                className="group py-12 border-b border-linea"
              >
                <div className="flex items-center gap-5 mb-5">
                  <span className="eyebrow text-[9px]!">{post.category}</span>
                  <span className="w-6 h-px bg-linea" />
                  <time dateTime={post.date} className="text-[11px] tracking-wide text-crema/40">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-serif text-xl md:text-2xl text-white tracking-[0.04em] leading-snug mb-4 transition-colors group-hover:text-champagne">
                  {post.title}
                </h2>
                <p className="text-crema/60 text-sm leading-relaxed mb-6 max-w-2xl">{post.excerpt}</p>
                <span className="text-[10px] tracking-[0.3em] uppercase text-oro/70">Próximamente</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Asesoría"
        title="¿Tienes una pregunta específica?"
        text="Escríbenos directamente y te respondemos con asesoría personalizada."
        primaryLabel="Preguntar por WhatsApp"
      />
    </>
  );
}
