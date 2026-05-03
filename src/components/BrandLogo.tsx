/**
 * BrandLogo — Carga el logotipo oficial Russafa en SVG.
 *
 * Variantes oficiales del manual (estudio Lazima):
 *   - LOGOTIPO_CORPORATIVO.svg          → Pacific Green (#02403d) - fondos claros
 *   - LOGOTIPO_COLOR_PACIFIC_GREEN.svg  → Vibrant Green (#6bce42) - fondos Pacific
 *   - LOGOTIPO_COLOR_VIBRANT_GREEN.svg  → High Yellow Green (#a6ff33) - acentos
 *   - LOGOTIPO_NEGATIVO.svg             → Blanco - fotos / fondos oscuros
 *
 * Nota sobre nombres: en el manual los nombres "COLOR_PACIFIC_GREEN"
 * y "COLOR_VIBRANT_GREEN" indican el FONDO sobre el que se aplica
 * la variante, no el color del logo en sí.
 *
 * Para landings localizados (mudanzasgandia.com) añadimos debajo
 * del logo oficial la línea "MUDANZAS EN GANDIA" en mayúsculas
 * tracking ancho, siguiendo las pautas de cobranding del manual.
 */

import Image from "next/image";

type BrandLogoProps = {
  variant?: "full" | "wordmark";
  /**
   * - corporativo (default) → fondos claros (header, secciones cream/white)
   * - vibrant               → fondo Pacific oscuro (footer)
   * - negativo              → blanco para fotos o fondos muy oscuros
   */
  tone?: "corporativo" | "vibrant" | "negativo";
  className?: string;
  width?: number;
};

// Proporción oficial (viewBox 2834.65 × 1020.47)
const LOGO_ASPECT = 2834.65 / 1020.47; // ≈ 2.778

const LOGO_SRC = {
  corporativo: "/brand/LOGOTIPO_CORPORATIVO.svg",
  vibrant: "/brand/LOGOTIPO_COLOR_PACIFIC_GREEN.svg",
  negativo: "/brand/LOGOTIPO_NEGATIVO.svg",
} as const;

const TAGLINE_COLORS = {
  corporativo: "#02403d",
  vibrant: "#a6ff33",
  negativo: "#e7e3d0",
} as const;

export default function BrandLogo({
  variant = "full",
  tone = "corporativo",
  className = "",
  width = 150,
}: BrandLogoProps) {
  const height = Math.round(width / LOGO_ASPECT);
  const src = LOGO_SRC[tone];
  const taglineColor = TAGLINE_COLORS[tone];

  return (
    <span
      className={`inline-flex flex-col items-start ${className}`}
      aria-label="Mudanzas Russafa · Mudanzas en Gandia"
    >
      <Image
        src={src}
        alt="Mudanzas Russafa"
        width={width}
        height={height}
        priority
        style={{
          width: `${width}px`,
          height: "auto",
          objectFit: "contain",
        }}
        unoptimized
      />
      {variant === "full" && (
        <span
          className="font-bold uppercase mt-2"
          style={{
            color: taglineColor,
            fontSize: `${Math.max(9, Math.round(width * 0.072))}px`,
            letterSpacing: "0.18em",
            opacity: tone === "negativo" ? 0.85 : 0.9,
            paddingLeft: "2px",
          }}
        >
          Mudanzas en Gandia
        </span>
      )}
    </span>
  );
}
