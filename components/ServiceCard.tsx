import Link from "next/link";
import {
  Home,
  Building2,
  Factory,
  Star,
  ChevronsUpDown,
  Layers,
  Wrench,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  home: Home,
  building: Building2,
  factory: Factory,
  star: Star,
  expand: ChevronsUpDown,
  layers: Layers,
  wrench: Wrench,
};

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  href: string;
  variant?: "light" | "dark";
}

export default function ServiceCard({
  title,
  shortDesc,
  icon,
  href,
  variant = "light",
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon] ?? Star;
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      className={`group relative flex flex-col p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isDark
          ? "bg-carbon-suave border-white/10 hover:border-oro/40"
          : "bg-white border-arena-oscura hover:border-oro/60 hover:shadow-oro/10"
      }`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center mb-5 rounded-sm transition-colors duration-300 ${
          isDark
            ? "bg-rojo/10 text-oro group-hover:bg-rojo/20"
            : "bg-arena text-rojo group-hover:bg-rojo group-hover:text-white"
        }`}
      >
        <Icon size={22} aria-hidden="true" />
      </div>

      {/* Text */}
      <h3
        className={`font-serif text-lg font-semibold mb-2 transition-colors duration-200 ${
          isDark ? "text-white group-hover:text-oro" : "text-carbon group-hover:text-rojo"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-relaxed flex-1 ${
          isDark ? "text-white/50" : "text-carbon/60"
        }`}
      >
        {shortDesc}
      </p>

      {/* Arrow */}
      <div
        className={`flex items-center gap-1 mt-5 text-xs font-semibold tracking-wide transition-colors duration-200 ${
          isDark ? "text-oro/60 group-hover:text-oro" : "text-rojo/60 group-hover:text-rojo"
        }`}
      >
        Ver más
        <ArrowRight
          size={12}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
