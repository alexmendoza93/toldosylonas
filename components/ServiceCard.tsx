import Image from "next/image";
import Link from "next/link";
import { SERVICE_ICONS, SpecialIcon, ArrowIcon } from "@/components/icons/LuxuryIcons";
import { IMAGES } from "@/lib/images";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  href: string;
  specs?: string[];
}

export default function ServiceCard({
  id,
  title,
  shortDesc,
  icon,
  href,
  specs = [],
}: ServiceCardProps) {
  const Icon = SERVICE_ICONS[icon] ?? SpecialIcon;
  const image = IMAGES.services[id];

  return (
    <Link
      href={href}
      className="group relative flex flex-col h-full bg-carbon border border-linea overflow-hidden transition-all duration-700 ease-lux hover:-translate-y-2 hover:border-oro/50 hover:shadow-[0_30px_60px_-30px_rgb(179_139_77/0.35)]"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-grafito">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover grayscale-35 brightness-75 transition-all duration-1200 ease-lux group-hover:scale-105 group-hover:grayscale-0"
          />
        )}
        <div className="absolute inset-0 bg-noir/0 transition-colors duration-500 group-hover:bg-noir/65" />
        <div className="absolute inset-0 bg-linear-to-t from-carbon via-carbon/10 to-transparent" />

        {/* Technical details, revealed on hover */}
        {specs.length > 0 && (
          <ul className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2 translate-y-4 opacity-0 transition-all duration-500 ease-lux group-hover:translate-y-0 group-hover:opacity-100">
            {specs.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[11px] tracking-[0.12em] text-crema">
                <span className="w-3 h-px bg-oro shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Text */}
      <div className="relative flex flex-col flex-1 px-7 pb-8 pt-2">
        <Icon className="w-9 h-9 text-oro mb-5" />
        <h3 className="font-serif text-lg text-white tracking-[0.06em] mb-3 transition-colors duration-300 group-hover:text-champagne">
          {title}
        </h3>
        <p className="text-crema/60 text-sm leading-relaxed flex-1">{shortDesc}</p>
        <span className="flex items-center gap-3 mt-7 text-[10px] tracking-[0.3em] uppercase text-oro/70 transition-colors duration-300 group-hover:text-oro">
          Descubrir
          <ArrowIcon className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
