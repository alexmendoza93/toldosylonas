import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/ui/PageHero";
import { SITE_URL, CONTACT, SOCIAL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contacto — Cotización de Toldos en Guadalajara",
  description:
    "Solicita tu cotización de toldos en Guadalajara. Sin costo, sin compromiso. Respondemos en menos de 24 horas. WhatsApp, correo o formulario.",
  keywords: [
    "cotizar toldos Guadalajara",
    "presupuesto toldo Guadalajara",
    "contacto toldos",
  ],
  alternates: { canonical: `${SITE_URL}/contactenos` },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Cotización de Toldos — Toldos y Lonas Guadalajara",
  url: `${SITE_URL}/contactenos`,
};

export default function ContactenosPage() {
  const channels = [
    { label: "Instagram", value: "@toldosylonasguadalajara", href: SOCIAL.instagram, external: true },
    { label: "Correo", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: "Ubicación", value: CONTACT.address },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <PageHero
        eyebrow="Hablemos"
        title={
          <>
            Cotización <span className="text-champagne">sin compromiso</span>
          </>
        }
        subtitle="Cuéntanos tu proyecto y te respondemos con un presupuesto personalizado en menos de 24 horas hábiles."
        image={IMAGES.pageHero.contacto}
        imageAlt="Terraza de madera con camastros junto a la alberca"
      />

      <section className="py-24 md:py-32 bg-noir">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <section className="py-16 bg-grafito border-t border-linea">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {channels.map((c) => (
              <div key={c.label}>
                <h3 className="eyebrow mb-4">{c.label}</h3>
                {c.href ? (
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-crema/70 text-sm hover:text-champagne transition-colors break-words"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-crema/70 text-sm">{c.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
