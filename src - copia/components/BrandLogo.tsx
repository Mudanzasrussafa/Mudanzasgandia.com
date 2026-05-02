import { SITE } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "full" | "wordmark" | "isotipo";
  color?: "lime" | "dark" | "cream";
  className?: string;
};

const COLORS = {
  lime: "#B5E33D",
  dark: "#0E3B36",
  cream: "#F4F1E8",
};

/**
 * Logo Russafa. Para `mudanzasgandia.com` mostramos el wordmark RUSSAFA
 * con subline localizada "MUDANZAS EN GANDIA" en lugar de
 * "MUDANZAS & GUARDAMUEBLES" — coherente con manual + SEO local.
 *
 * El isotipo es una aproximación; sustituye el SVG por el asset oficial
 * del manual de marca cuando lo tengas en /public/brand/isotipo.svg.
 */
export default function BrandLogo({
  variant = "full",
  color = "dark",
  className = "",
}: BrandLogoProps) {
  const fill = COLORS[color];

  const Isotipo = () => (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
      style={{ width: "1em", height: "1em" }}
    >
      {/* Fondo redondeado */}
      <rect x="2" y="2" width="60" height="60" rx="14" fill={fill} />
      {/* Letra R estilizada */}
      <path
        d="M18 50V18h13.5c5.5 0 9.2 3.5 9.2 8.4 0 3.6-2 6.4-5.4 7.6L42 50h-7.6l-5.6-13.6h-3.4V50H18zm7.4-19.2h5.8c2.2 0 3.6-1.4 3.6-3.6s-1.4-3.4-3.6-3.4h-5.8v7z"
        fill={color === "lime" ? COLORS.dark : COLORS.lime}
      />
      {/* Ojos característicos del isotipo Russafa */}
      <circle cx="22" cy="14" r="2.2" fill={color === "lime" ? COLORS.dark : COLORS.lime} />
      <circle cx="30" cy="14" r="2.2" fill={color === "lime" ? COLORS.dark : COLORS.lime} />
    </svg>
  );

  if (variant === "isotipo") {
    return (
      <span className={`inline-block ${className}`} aria-label={SITE.legalName}>
        <Isotipo />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label={SITE.legalName}>
      <span className="text-[2.5em] leading-none">
        <Isotipo />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.6em] tracking-tight"
          style={{ color: fill, lineHeight: 0.85 }}
        >
          RUSSAFA
        </span>
        {variant === "full" && (
          <span
            className="text-[0.55em] font-bold uppercase tracking-[0.18em] mt-1"
            style={{ color: fill, opacity: 0.85 }}
          >
            Mudanzas en Gandia
          </span>
        )}
      </span>
    </span>
  );
}
