import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-noir/90 backdrop-blur border border-oro text-oro shadow-[0_10px_30px_-10px_rgb(0_0_0/0.8)] transition-colors duration-500 group-hover:bg-oro group-hover:text-noir">
        <WhatsAppIcon className="w-6 h-6" />
      </span>

      <span className="absolute right-[4.25rem] top-1/2 -translate-y-1/2 whitespace-nowrap bg-noir border border-linea text-crema type-meta px-4 py-2 opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none">
        Cotizar por WhatsApp
      </span>
    </a>
  );
}
