"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
    "w-full px-0 py-3 bg-transparent border-0 border-b border-linea text-crema text-[15px] placeholder:text-crema/30 focus:outline-none focus:border-oro transition-colors duration-500 rounded-none";
  const labelClass =
    "block text-[10px] font-medium text-crema/55 tracking-[0.3em] uppercase mb-1";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
      {/* Left: info */}
      <div className="lg:col-span-5">
        <span className="eyebrow mb-5">Contacto</span>
        <h2 className="font-serif text-3xl md:text-4xl leading-tight text-white tracking-[0.04em]">
          Diseñemos tu espacio
        </h2>
        <span className="divider-oro mt-7 mb-8" />
        <p className="text-crema/65 text-[15px] leading-relaxed mb-10">
          Cuéntanos tu proyecto y te respondemos en menos de 24 horas con un
          presupuesto personalizado sin compromiso.
        </p>

        <div className="border border-linea p-7 mb-10">
          <p className="font-serif text-white tracking-[0.06em] mb-4">
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

        <ul className="flex flex-col gap-4">
          {[
            "Respuesta en menos de 24 horas",
            "Cotización sin compromiso",
            "Asesoría de diseño incluida",
            "Fabricación 100% a la medida",
          ].map((item) => (
            <li key={item} className="flex items-center gap-4 text-sm text-crema/70">
              <span className="w-4 h-px bg-oro shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="lg:col-span-7 flex flex-col gap-9 bg-carbon border border-linea p-8 sm:p-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
          <div>
            <label htmlFor="user_name" className={labelClass}>
              Nombre *
            </label>
            <input id="user_name" name="user_name" type="text" required placeholder="Tu nombre" className={inputClass} />
          </div>
          <div>
            <label htmlFor="user_phone" className={labelClass}>
              Teléfono *
            </label>
            <input id="user_phone" name="user_phone" type="tel" required placeholder="33 XXXX XXXX" className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="user_email" className={labelClass}>
            Correo electrónico
          </label>
          <input id="user_email" name="user_email" type="email" placeholder="tu@correo.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor="project_type" className={labelClass}>
            Tipo de proyecto *
          </label>
          <select id="project_type" name="project_type" required className={`${inputClass} [&>option]:bg-carbon`}>
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
          <label htmlFor="message" className={labelClass}>
            Cuéntanos tu proyecto
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe tu espacio, dimensiones aproximadas, estilo..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {status === "success" && (
          <p role="status" className="border-l-2 border-oro pl-4 text-champagne text-sm">
            Mensaje enviado. Te contactaremos pronto.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="border-l-2 border-red-400/70 pl-4 text-red-300 text-sm">
            Error al enviar. Por favor escríbenos por WhatsApp.
          </p>
        )}

        <button type="submit" disabled={status === "sending"} className="btn-oro-solid w-full">
          {status === "sending" ? "Enviando..." : "Solicitar cotización"}
        </button>
      </form>
    </div>
  );
}
