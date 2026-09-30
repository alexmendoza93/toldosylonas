import { ClockIcon } from "@/components/icons/LuxuryIcons";
import { BUSINESS_HOURS } from "@/lib/constants";

// "09:00" → "9:00"
const formatTime = (time: string) => time.replace(/^0/, "");

interface Props {
  // "panel" is the framed block for the contact page; "compact" fits the footer.
  variant?: "panel" | "compact";
  className?: string;
}

export default function BusinessHours({
  variant = "panel",
  className = "",
}: Props) {
  const compact = variant === "compact";

  return (
    <div
      className={`${compact ? "" : "border border-linea p-8 md:p-10"} ${className}`}
    >
      <div
        className={`flex items-center gap-4 ${compact ? "justify-center lg:justify-start mb-5" : "flex-col mb-8"}`}
      >
        <ClockIcon
          className={`text-oro shrink-0 ${compact ? "w-6 h-6" : "w-11 h-11"}`}
        />
        <h3 className={"text-oro"}>Horario de atención</h3>
      </div>

      <dl
        className={`flex flex-col gap-4 ${compact ? "" : "max-w-sm mx-auto"}`}
      >
        {BUSINESS_HOURS.map(({ label, slots }) => (
          <div key={label} className="flex items-baseline gap-4 text-left">
            <dt
              className={`type-small shrink-0 ${slots.length ? "text-crema/80" : "text-crema/45"}`}
            >
              {label}
            </dt>
            {/* Hairline leader between day and hours */}
            <span
              className="flex-1 border-b border-dotted border-oro/30 translate-y-[-0.3em]"
              aria-hidden="true"
            />
            <dd className="type-small text-right tabular-nums">
              {slots.length ? (
                slots.map(([opens, closes]) => (
                  <span key={opens} className="block text-champagne">
                    {formatTime(opens)} – {formatTime(closes)}
                  </span>
                ))
              ) : (
                <span className="text-crema/45">Cerrado</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
