"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export interface ProductGalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Props {
  images: ProductGalleryImage[];
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  id?: string;
}

// Editorial mosaic on desktop: one tall feature photo, then a rhythm of
// smaller frames. Repeats every 6 photos.
const MOSAIC = [
  { span: "lg:col-span-7 lg:row-span-2", sizes: "(min-width: 1024px) 58vw, (min-width: 640px) 50vw, 100vw" },
  { span: "lg:col-span-5", sizes: "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" },
  { span: "lg:col-span-5", sizes: "(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw" },
  { span: "lg:col-span-4", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
  { span: "lg:col-span-4", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
  { span: "lg:col-span-4", sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" },
];

// Photo gallery for a single product page, placed before the closing CTA.
export default function ProductGallery({
  images,
  eyebrow = "Galería",
  title,
  subtitle,
  id = "product-gallery-heading",
}: Props) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section className="py-28 md:py-40 bg-noir" aria-labelledby={id}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-60 gap-3">
          {images.map((img, i) => {
            const cell = MOSAIC[i % MOSAIC.length];
            // On tablets the first and last photo of each set span both
            // columns so the 2-column grid never ends with an orphan.
            const wide = i % 6 === 0 || i % 6 === 5;
            return (
              <Reveal
                key={img.src}
                delay={(i % 3) * 0.08}
                className={`${cell.span} ${wide ? "sm:col-span-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className={`group relative block w-full h-full aspect-4/3 ${wide ? "sm:aspect-video" : ""} lg:aspect-auto overflow-hidden bg-carbon cursor-zoom-in`}
                  aria-label={`Ver foto: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes={cell.sizes}
                    className="object-cover grayscale brightness-75 transition-all duration-1000 ease-lux group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
                  />
                  {/* Hairline gold frame that settles in on hover */}
                  <span className="pointer-events-none absolute inset-4 border border-oro/0 transition-all duration-700 ease-lux group-hover:inset-3 group-hover:border-oro/40" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height,
        }))}
        styles={{ container: { backgroundColor: "rgba(17, 17, 17, 0.97)" } }}
      />
    </section>
  );
}
