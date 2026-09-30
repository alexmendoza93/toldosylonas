import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import BusinessHours from "@/components/BusinessHours";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contacto — Cotización de Toldos en Guadalajara",
  description:
    "Solicita tu cotización de toldos en Guadalajara. Sin costo, sin compromiso. Respondemos en menos de 24 horas. WhatsApp o correo.",
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-5">Contacto</span>
          <h2 className="type-h2 text-white">
            Diseñemos tu espacio
          </h2>
          <span className="divider-oro mx-auto mt-7 mb-8" />
          <p className="type-body text-crema/65 mb-10 max-w-xl mx-auto">
            Cuéntanos tu proyecto y te respondemos en menos de 24 horas con un
            presupuesto personalizado sin compromiso.
          </p>

          <div className="border border-linea p-7 mb-10">
            <p className="type-h3 text-white mb-4">
              ¿Prefieres respuesta inmediata?
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-oro"
            >
              <WhatsAppIcon />
              Escríbenos por WhatsApp
            </a>
          </div>

          <BusinessHours className="mb-10" />

          <ul className="inline-flex flex-col gap-4 text-left">
            {[
              "Respuesta en menos de 24 horas",
              "Cotización sin compromiso",
              "Asesoría de diseño incluida",
              "Fabricación 100% a la medida",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 type-small text-crema/70">
                <span className="w-4 h-px bg-oro shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
