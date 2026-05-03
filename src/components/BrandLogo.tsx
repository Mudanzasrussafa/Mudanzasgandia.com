import { SITE } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "full" | "wordmark" | "isotipo";
  color?: "vibrant" | "high" | "pacific" | "cream" | "yellow";
  className?: string;
};

const COLORS = {
  vibrant: "#6BCE42", // verde principal
  high: "#A6FF33",     // énfasis
  pacific: "#02403D",  // base
  cream: "#E7E3D0",    // crema
  yellow: "#FFF800",   // amarillo
};

/**
 * Isotipo R OFICIAL Russafa — reproducción del manual.
 * La R tiene un perfil característico con cuerpo cuadrado y pierna
 * inclinada. El triángulo del centro se queda transparente al fondo.
 */
function Isotipo({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "1em", height: "1em" }}
    >
      <path
        fill={fill}
        d="M30 25 H110 C145 25, 165 50, 165 80 C 165 105, 150 125, 125 132 L 170 175 H 125 L 80 130 V 175 H 30 Z M 80 70 V 95 H 105 C 115 95, 122 88, 122 80 C 122 72, 115 70, 105 70 Z"
      />
    </svg>
  );
}

/**
 * Logo Russafa adaptado a Mudanzas Gandia.
 * Para mudanzasgandia.com mostramos el wordmark RUSSAFA con
 * subline localizada "MUDANZAS EN GANDIA".
 */
export default function BrandLogo({
  variant = "full",
  color = "pacific",
  className = "",
}: BrandLogoProps) {
  const fill = COLORS[color];

  if (variant === "isotipo") {
    return (
      <span className={`inline-block ${className}`} aria-label={SITE.legalName}>
        <Isotipo fill={fill} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label={SITE.legalName}>
      <span className="text-[2em] leading-none">
        <Isotipo fill={fill} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.4em] tracking-tight"
          style={{ color: fill, lineHeight: 0.85, fontWeight: 700 }}
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
