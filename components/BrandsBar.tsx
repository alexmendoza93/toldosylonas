import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { BRANDS } from "@/lib/constants";

export default function BrandsBar() {
  return (
    <section className="bg-noir py-28 md:py-36" aria-labelledby="brands-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="brands-heading"
          eyebrow="Materiales"
          title="Marcas de referencia mundial"
          subtitle="Trabajamos exclusivamente con fabricantes líderes para garantizar calidad, durabilidad y estética en cada proyecto."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-linea">
          {BRANDS.map((brand, i) => (
            <Reveal
              key={brand.name}
              delay={i * 0.06}
              className="group flex flex-col items-center justify-center py-12 px-4 border-r border-b border-linea text-center transition-colors duration-500 hover:bg-carbon"
            >
              <p className="type-h3 text-crema/55 transition-colors duration-500 group-hover:text-champagne">
                {brand.name.toUpperCase()}
              </p>
              <p className="type-meta text-crema/30 mt-2">
                {brand.country}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
