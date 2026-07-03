import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE_URL, CONTACT, SOCIAL } from "@/lib/constants";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Header */}
      <section className="bg-carbon py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-4">
            Hablemos
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cotización{" "}
            <span className="text-oro">sin compromiso</span>
          </h1>
          <div className="w-16 h-px bg-oro mx-auto mb-6" />
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cuéntanos tu proyecto y te respondemos con un presupuesto
            personalizado en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 sm:py-28 bg-arena">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Social & email */}
      <section className="py-14 bg-white border-t border-arena-oscura">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-oro uppercase mb-3">
                Instagram
              </h3>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-carbon/70 text-sm hover:text-rojo transition-colors"
              >
                @toldosylonasguadalajara
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-oro uppercase mb-3">
                Correo
              </h3>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-carbon/70 text-sm hover:text-rojo transition-colors"
              >
                {CONTACT.email}
              </a>
            </div>
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] text-oro uppercase mb-3">
                Ubicación
              </h3>
              <p className="text-carbon/70 text-sm">{CONTACT.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
