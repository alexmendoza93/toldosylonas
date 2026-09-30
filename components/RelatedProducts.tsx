import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PRODUCTS, RELATED_PRODUCTS } from "@/lib/constants";

interface Props {
  // id of the current product page (see PRODUCTS in lib/constants.ts)
  productId: string;
}

// Cross-links to other products at the end of a product page.
export default function RelatedProducts({ productId }: Props) {
  const related = (RELATED_PRODUCTS[productId] ?? [])
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  if (related.length === 0) return null;

  return (
    <section
      className="py-28 md:py-40 bg-noir border-t border-linea"
      aria-labelledby="related-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="related-heading"
          eyebrow="Explora más"
          title="Productos relacionados"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((product, i) => (
            // On the 2-column tablet grid show only two cards, so none is left alone
            <Reveal
              key={product.id}
              delay={i * 0.1}
              className={`h-full ${i === 2 ? "sm:max-lg:hidden" : ""}`}
            >
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
