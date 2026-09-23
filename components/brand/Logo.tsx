import LogoMark from "./LogoMark";

interface Props {
  variant?: "compact" | "full";
  className?: string;
}

export default function Logo({ variant = "compact", className = "" }: Props) {
  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <LogoMark className="w-14 h-14 text-crema mb-6" />
        <span className="font-serif text-lg tracking-[0.42em] text-crema pl-[0.42em]">
          TOLDOS Y LONAS
        </span>
        <span className="font-sans text-[11px] font-medium tracking-[0.62em] text-oro mt-2 pl-[0.62em]">
          GUADALAJARA
        </span>
        <span className="block w-24 h-px bg-oro/60 my-4" />
        <span className="font-sans text-[9px] tracking-[0.34em] text-crema/60 pl-[0.34em]">
          PROTECCIÓN SOLAR · DISEÑO · CONFORT
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="w-9 h-9 md:w-10 md:h-10 text-crema shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-[13px] md:text-[15px] tracking-[0.32em] text-crema">
          TOLDOS Y LONAS
        </span>
        <span className="font-sans text-[8px] md:text-[9px] font-medium tracking-[0.58em] text-oro mt-1.5">
          GUADALAJARA
        </span>
        <span className="hidden md:block font-sans text-[6.5px] tracking-[0.26em] text-crema/45 mt-1.5">
          PROTECCIÓN SOLAR · DISEÑO · CONFORT
        </span>
      </div>
    </div>
  );
}
