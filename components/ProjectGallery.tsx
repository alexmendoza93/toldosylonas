"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

export interface GalleryImage {
  src: string;
  alt: string;
  category: "Residencial" | "Comercial" | "Industrial" | "Especial";
  // width and height for Next.js Image optimization
  width: number;
  height: number;
}

// Placeholder images — replace with real project photos
// Place photos in public/images/projects/ and update this list
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/projects/placeholder-1.svg",
    alt: "Toldo residencial en terraza de casa en Zapopan",
    category: "Residencial",
    width: 800,
    height: 600,
  },
  {
    src: "/images/projects/placeholder-2.svg",
    alt: "Sistema comercial en restaurante de Guadalajara",
    category: "Comercial",
    width: 800,
    height: 600,
  },
  {
    src: "/images/projects/placeholder-3.svg",
    alt: "Toldo retráctil en jardín residencial",
    category: "Residencial",
    width: 800,
    height: 600,
  },
  {
    src: "/images/projects/placeholder-4.svg",
    alt: "Cubierta textil en terraza de hotel en Guadalajara",
    category: "Comercial",
    width: 800,
    height: 600,
  },
  {
    src: "/images/projects/placeholder-5.svg",
    alt: "Lona industrial para bodega en zona metropolitana",
    category: "Industrial",
    width: 800,
    height: 600,
  },
  {
    src: "/images/projects/placeholder-6.svg",
    alt: "Proyecto especial - pérgola con vela de sombra",
    category: "Especial",
    width: 800,
    height: 600,
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
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-sm border transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-rojo text-white border-rojo"
                  : "bg-white text-carbon border-arena-oscura hover:border-rojo hover:text-rojo"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            className="group relative aspect-[4/3] overflow-hidden bg-arena-oscura text-left"
            aria-label={`Ver foto: ${img.alt}`}
          >
            {/* Placeholder gradient (replace with Next.js Image when photos are available) */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, hsl(${(i * 60) % 360} 20% 30%) 0%, hsl(${(i * 60 + 40) % 360} 15% 20%) 100%)`,
              }}
              aria-hidden="true"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/40 transition-colors duration-300" />

            {/* Category badge */}
            <span className="absolute top-3 left-3 px-2 py-0.5 bg-carbon/60 text-white text-[10px] font-semibold tracking-wide rounded-full backdrop-blur-sm">
              {img.category}
            </span>

            {/* Zoom icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Alt text for SEO */}
            <p className="sr-only">{img.alt}</p>
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
      />
    </>
  );
}
