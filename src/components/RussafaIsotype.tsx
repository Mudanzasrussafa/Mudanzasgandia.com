/**
 * RussafaIsotype — La R aislada (isotipo) del manual de identidad.
 *
 * Existen dos familias:
 *
 * 1. RECURSO_2 → R con dos "ojos" característicos (^^).
 *    Es el isotipo oficial reconocible. Usar para favicon,
 *    decoración con personalidad, og-image, redes sociales.
 *
 * 2. RECURSO → R simple sin ojos. Más sobrio, ideal como
 *    patrón decorativo de fondo o cuando los ojos compiten
 *    con otro contenido.
 *
 * Variantes de color disponibles:
 *   - corporativo  → Pacific Green #02403d (fondos claros)
 *   - vibrant      → Pacific con ojos verde lima #6bce42
 *   - high         → Pacific con ojos amarillo verde #a6ff33
 *   - yellow       → Pacific con ojos amarillo #fff800
 *   - negativo     → Blanco completo (fondos oscuros / fotos)
 *   - positivo     → Negro neutro
 */

import Image from "next/image";

type IsotypeProps = {
  /**
   * "withEyes"  → RECURSO_2: R con los ojos característicos
   * "simple"    → RECURSO: R sin ojos, sobria
   */
  variant?: "withEyes" | "simple";
  /**
   * Color del isotipo
   */
  tone?: "corporativo" | "vibrant" | "high" | "yellow" | "negativo" | "positivo";
  /**
   * Anchura en píxeles (la altura se calcula a 1:1)
   */
  size?: number;
  className?: string;
  /**
   * Si true, oculta del lector de pantalla (decorativo)
   */
  decorative?: boolean;
};

const SRC_WITH_EYES: Record<string, string> = {
  corporativo: "/brand/RECURSO_2_CORPORATIVO.svg",
  vibrant: "/brand/RECURSO_2_COLOR_PACIFIC_GREEN.svg",
  high: "/brand/RECURSO_2_COLOR_VIBRANT_GREEN.svg",
  yellow: "/brand/RECURSO_2_COLOR_HIGH_YELLOW.svg",
  negativo: "/brand/RECURSO_2_NEGATIVO_TRAZADO.svg",
  positivo: "/brand/RECURSO_2_POSITIVO.svg",
};

const SRC_SIMPLE: Record<string, string> = {
  corporativo: "/brand/RECURSO_NEGATIVO.svg", // se invierte por CSS si quieres
  vibrant: "/brand/RECURSO_NEGATIVO.svg",
  high: "/brand/RECURSO_NEGATIVO.svg",
  yellow: "/brand/RECURSO_NEGATIVO.svg",
  negativo: "/brand/RECURSO_NEGATIVO.svg",
  positivo: "/brand/RECURSO_NEGATIVO_TRAZADO.svg",
};

export default function RussafaIsotype({
  variant = "withEyes",
  tone = "corporativo",
  size = 64,
  className = "",
  decorative = false,
}: IsotypeProps) {
  const sources = variant === "withEyes" ? SRC_WITH_EYES : SRC_SIMPLE;
  const src = sources[tone] ?? sources.corporativo;

  return (
    <Image
      src={src}
      alt={decorative ? "" : "Russafa"}
      aria-hidden={decorative ? true : undefined}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
      unoptimized
      priority={size >= 200}
    />
  );
}
