"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BRANDS } from "@/lib/constants";

export default function BrandsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-arena-oscura py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-oro text-xs font-semibold tracking-[0.35em] uppercase mb-3">
            Materiales
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-carbon">
            Marcas de referencia mundial
          </h2>
          <p className="text-carbon/60 text-sm mt-3 max-w-xl mx-auto">
            Trabajamos exclusivamente con fabricantes líderes para garantizar
            calidad, durabilidad y estética en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col items-center justify-center p-5 bg-white border border-arena-oscura hover:border-oro/50 hover:shadow-md transition-all duration-300 text-center"
            >
              {/* Brand initial letter as visual placeholder */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: brand.color }}
                aria-hidden="true"
              >
                {brand.name[0]}
              </div>
              <p className="font-serif font-bold text-carbon text-sm tracking-wide mb-0.5">
                {brand.name}
              </p>
              <p className="text-carbon/40 text-[10px] tracking-wide">
                {brand.country}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
