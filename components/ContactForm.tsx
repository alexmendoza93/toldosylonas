"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { WHATSAPP_URL } from "@/lib/constants";

// TODO: Set your EmailJS credentials before deploying
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 border border-arena-oscura bg-white text-carbon text-sm placeholder:text-carbon/40 focus:outline-none focus:border-oro transition-colors duration-200 rounded-sm";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Left: info */}
      <div>
        <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
          Contacto
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-carbon mb-5">
          Solicita tu cotización
        </h2>
        <p className="text-carbon/60 text-sm leading-relaxed mb-8">
          Cuéntanos tu proyecto y te respondemos en menos de 24 horas con un
          presupuesto personalizado sin compromiso.
        </p>

        {/* WhatsApp option */}
        <div className="p-5 bg-green-50 border border-green-200 rounded-sm mb-6">
          <p className="text-carbon text-sm font-semibold mb-2">
            ¿Prefieres respuesta inmediata?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.85L.057 23.054a.75.75 0 0 0 .92.92l5.204-1.47A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.516-5.212-1.416l-.374-.223-3.868 1.092 1.092-3.868-.223-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Escríbenos por WhatsApp →
          </a>
        </div>

        {/* Trust bullets */}
        <ul className="flex flex-col gap-2">
          {[
            "Respuesta en menos de 24 horas",
            "Cotización sin compromiso",
            "Asesoría personalizada incluida",
            "Fabricación 100% a la medida",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-carbon/70">
              <span className="w-1.5 h-1.5 rounded-full bg-oro flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: form */}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="user_name" className="block text-xs font-semibold text-carbon/60 tracking-wide mb-1.5">
              Nombre *
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              placeholder="Tu nombre"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="user_phone" className="block text-xs font-semibold text-carbon/60 tracking-wide mb-1.5">
              Teléfono *
            </label>
            <input
              id="user_phone"
              name="user_phone"
              type="tel"
              required
              placeholder="33 XXXX XXXX"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="user_email" className="block text-xs font-semibold text-carbon/60 tracking-wide mb-1.5">
            Correo electrónico
          </label>
          <input
            id="user_email"
            name="user_email"
            type="email"
            placeholder="tu@correo.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="project_type" className="block text-xs font-semibold text-carbon/60 tracking-wide mb-1.5">
            Tipo de proyecto *
          </label>
          <select
            id="project_type"
            name="project_type"
            required
            className={inputClass}
          >
            <option value="">Selecciona una opción</option>
            <option value="Toldo residencial">Toldo residencial</option>
            <option value="Sistema comercial">Sistema comercial</option>
            <option value="Toldo retráctil">Toldo retráctil</option>
            <option value="Persiana Roller Screen">Persiana Roller Screen</option>
            <option value="Lona industrial">Lona industrial</option>
            <option value="Proyecto especial">Proyecto especial</option>
            <option value="Mantenimiento">Mantenimiento</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-carbon/60 tracking-wide mb-1.5">
            Cuéntanos tu proyecto
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe brevemente tu espacio, dimensiones aproximadas, colores preferidos..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {status === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-sm">
            ¡Mensaje enviado! Te contactaremos pronto.
          </div>
        )}
        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-sm">
            Error al enviar. Por favor escríbenos por WhatsApp.
          </div>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-4 bg-rojo text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-rojo-oscuro disabled:opacity-60 transition-colors duration-200"
        >
          {status === "sending" ? "Enviando..." : "Solicitar cotización"}
        </button>
      </form>
    </div>
  );
}
