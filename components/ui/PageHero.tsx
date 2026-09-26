import Image from "next/image";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image: string;
  imageAlt: string;
  breadcrumb?: Crumb[];
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumb,
}: Props) {
  return (
    <section className="relative min-h-[68vh] flex items-end overflow-hidden bg-noir">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-ken-burns"
      />
      {/* Fade into the dark page below; the rest of the photo stays clear */}
      <div className="absolute inset-x-0 -bottom-px h-64 bg-linear-to-t from-noir to-transparent" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 md:pb-24 text-center text-shadow-lg text-shadow-noir/50">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-3 type-meta text-crema/45 mb-10"
          >
            {breadcrumb.map((c, i) => (
              <span key={c.label} className="flex items-center gap-3">
                {i > 0 && <span className="text-oro/50">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-oro transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-oro">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="eyebrow mb-6">{eyebrow}</span>
        <h1 className="type-display text-white">
          {title}
        </h1>
        <span className="divider-oro mx-auto mt-8" />
        {subtitle && (
          <p className="type-lead text-crema/70 max-w-2xl mx-auto mt-8">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
