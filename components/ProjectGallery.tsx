"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

export interface GalleryImage {
  src: string;
  alt: string;
  category: "Residencial" | "Comercial" | "Industrial" | "Especial";
  // width and height for Next.js Image optimization
  width: number;
  height: number;
}

// Temporary photos (lib/images.ts) — replace with real project photos
// placed in public/images/projects/
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: IMAGES.gallery[0],
    alt: "Toldo residencial en terraza de casa en Zapopan",
    category: "Residencial",
    width: 1600,
    height: 1067,
  },
  {
    src: IMAGES.gallery[1],
    alt: "Sistema comercial en restaurante de Guadalajara",
    category: "Comercial",
    width: 1600,
    height: 1067,
  },
  {
    src: IMAGES.gallery[2],
    alt: "Toldo retráctil en jardín residencial",
    category: "Residencial",
    width: 1600,
    height: 1067,
  },
  {
    src: IMAGES.gallery[3],
    alt: "Cubierta textil en terraza de hotel en Guadalajara",
    category: "Comercial",
    width: 1600,
    height: 1067,
  },
  {
    src: IMAGES.gallery[4],
    alt: "Lona industrial para bodega en zona metropolitana",
    category: "Industrial",
    width: 1600,
    height: 1067,
  },
  {
    src: IMAGES.gallery[5],
    alt: "Proyecto especial - pérgola con vela de sombra",
    category: "Especial",
    width: 1600,
    height: 1067,
  },
];

const CATEGORIES = ["Todos", "Residencial", "Comercial", "Industrial", "Especial"] as const;

interface Props {
  limit?: number;
  showFilters?: boolean;
}

export default function ProjectGallery({ limit, showFilters = true }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered =
    activeCategory === "Todos"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-3 mb-14 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] tracking-[0.3em] uppercase border transition-colors duration-500 ${
                activeCategory === cat
                  ? "bg-oro text-noir border-oro"
                  : "text-crema/70 border-linea hover:border-oro hover:text-oro"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {displayed.map((img, i) => (
          <motion.button
            key={img.src}
            onClick={() => {
              const realIndex = GALLERY_IMAGES.indexOf(img);
              setLightboxIndex(realIndex);
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden bg-carbon text-left"
            aria-label={`Ver foto: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover grayscale brightness-75 transition-all duration-1000 ease-lux group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-noir/90 via-noir/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-[9px]! mb-2">{img.category}</span>
                <p className="text-crema text-sm leading-snug max-w-[26ch] translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </div>
              <span className="w-10 h-10 shrink-0 border border-oro/60 text-oro flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={GALLERY_IMAGES.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
        styles={{ container: { backgroundColor: "rgba(17, 17, 17, 0.97)" } }}
      />
    </>
  );
}
