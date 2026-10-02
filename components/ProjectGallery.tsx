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

// Real installation photos (lib/images.ts → IMAGES.projects)
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    ...IMAGES.projects[0],
    alt: "Toldos fijos en fachadas de casas en coto residencial",
    category: "Residencial",
  },
  {
    ...IMAGES.projects[1],
    alt: "Toldo retráctil sobre cochera en residencia de Guadalajara",
    category: "Residencial",
  },
  {
    ...IMAGES.projects[2],
    alt: "Toldo retráctil en fachada residencial con jardín",
    category: "Residencial",
  },
  {
    ...IMAGES.projects[3],
    alt: "Toldo negro con iluminación en fachada de boutique",
    category: "Comercial",
  },
  {
    ...IMAGES.projects[4],
    alt: "Toldos rojos en terraza de restaurante",
    category: "Comercial",
  },
  {
    ...IMAGES.projects[5],
    alt: "Toldo corrido en fachada comercial",
    category: "Comercial",
  },
  {
    ...IMAGES.projects[6],
    alt: "Toldo fijo en fachada de local comercial",
    category: "Comercial",
  },
  {
    ...IMAGES.projects[7],
    alt: "Cortinas de lona con cristal en terraza de restaurante campestre",
    category: "Industrial",
  },
  {
    ...IMAGES.projects[8],
    alt: "Cierre perimetral de lona naranja con ventanas de cristal",
    category: "Industrial",
  },
  {
    ...IMAGES.projects[9],
    alt: "Cubierta de lona tensada sobre estructura metálica",
    category: "Industrial",
  },
  {
    ...IMAGES.projects[10],
    alt: "Plaza Paraíso en Tabachines: toldo perimetral continuo de más de 100 metros lineales",
    category: "Especial",
  },
  {
    ...IMAGES.projects[11],
    alt: "Pérgola con cubierta en roof garden",
    category: "Especial",
  },
  {
    ...IMAGES.projects[12],
    alt: "Toldo retráctil negro sobre patio con jardín",
    category: "Residencial",
  },
  {
    ...IMAGES.projects[13],
    alt: "Cortinas exteriores enrollables en residencia",
    category: "Residencial",
  },
  {
    ...IMAGES.projects[14],
    alt: "Toldo a rayas en fachada de local comercial",
    category: "Comercial",
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
              className={`px-5 py-2.5 type-meta border transition-colors duration-500 ${
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
              className="object-cover brightness-75 transition-all duration-1000 ease-lux group-hover:brightness-90 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-noir/90 via-noir/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
              <div>
                <span className="block type-label text-oro mb-2">{img.category}</span>
                <p className="type-small text-crema max-w-[26ch] translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
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
