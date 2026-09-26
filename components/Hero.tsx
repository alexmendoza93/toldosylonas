"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-noir">
      <Image
        src={IMAGES.hero}
        alt="Residencia contemporánea con terraza iluminada al atardecer"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-ken-burns"
      />

      {/* Fade into the dark page below; the rest of the photo stays clear */}
      <div className="absolute inset-x-0 -bottom-px h-172 bg-linear-to-t from-noir to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center text-shadow-lg text-shadow-noir/50">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="eyebrow mb-8"
        >
          Protección Solar · Desde 2009
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease }}
          className="type-display text-white"
        >
          Transformamos tus espacios en{" "}
          <span className="text-champagne">experiencias extraordinarias</span>
        </motion.h1>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="divider-oro mx-auto my-10 w-24"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="type-lead text-white/80 max-w-2xl mx-auto mb-12"
        >
          Toldos, pérgolas y sistemas de protección solar diseñados a la medida
          para residencias y espacios comerciales en Guadalajara.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-oro w-full sm:w-auto"
          >
            Solicitar diseño
          </a>
          <Link
            href="/galeria"
            className="group type-action text-white/90 hover:text-white transition-colors"
          >
            Ver proyectos
            <span className="block h-px w-full bg-oro/50 mt-2 origin-left transition-transform duration-500 group-hover:scale-x-50" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="type-meta text-crema/40">
          Descubre
        </span>
        <span className="relative block w-px h-12 bg-crema/15 overflow-hidden">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-oro"
          />
        </span>
      </motion.div>
    </section>
  );
}
