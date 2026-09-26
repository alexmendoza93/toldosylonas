import Reveal from "@/components/ui/Reveal";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <section className="bg-noir border-y border-linea" aria-label="Estadísticas de la empresa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.1}
              className={`text-center py-12 md:py-16 border-linea ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="type-stat text-champagne mb-3">
                {stat.value}
              </p>
              <p className="type-label text-crema/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
