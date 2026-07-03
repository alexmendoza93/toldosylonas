import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

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
      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Recursos
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-oro">Guías</span> y consejos
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre toldos, materiales y protección
            solar antes de tomar una decisión.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 sm:py-28 bg-arena">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-arena-oscura p-8 hover:border-oro/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-wide text-oro bg-arena px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-xs text-carbon/40"
                  >
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-serif text-xl font-bold text-carbon mb-3">
                  {post.title}
                </h2>
                <p className="text-carbon/60 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>
                <span className="text-rojo text-xs font-semibold tracking-wide">
                  Próximamente →
                </span>
              </article>
            ))}
          </div>

          <div className="mt-12 p-8 bg-carbon text-center">
            <p className="font-serif text-xl font-bold text-white mb-3">
              ¿Tienes una pregunta específica?
            </p>
            <p className="text-white/60 text-sm mb-6">
              Escríbenos directamente y te respondemos con asesoría personalizada.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-oro text-carbon font-semibold text-sm hover:bg-oro-claro transition-colors"
            >
              Preguntar por WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
