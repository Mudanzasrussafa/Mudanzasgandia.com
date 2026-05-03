/**
 * Iconografía Russafa OFICIAL.
 *
 * Los SVGs originales están en /public/icons/ y se cargan
 * mediante <img>. Cada icono se muestra a tamaño completo y
 * conserva la paleta original Russafa (#02403d + #86ff00).
 *
 * Si necesitas un solo color (por ejemplo para usar sobre
 * fondo Pacific), añade la prop `monochrome` y se aplica
 * un filtro CSS para teñirlo.
 */

import Image from "next/image";

export type RussafaIconName =
  | "atencion-rapida"
  | "desmontaje-montaje"
  | "elevador-montamuebles"
  | "embalaje"
  | "guardamuebles"
  | "mejores-precios"
  | "mudanzas-nacionales"
  | "mudanzas-oficinas"
  | "mudanzas-particulares"
  | "mudanzas-pequenas"
  | "presupuestos-detallados"
  | "seguros"
  | "vaciado-viviendas";

const ICON_FILES: Record<RussafaIconName, string> = {
  "atencion-rapida": "ICONO_ATENCION_RAPIDA_Y_PERSONALIZADA.svg",
  "desmontaje-montaje": "ICONO_DESMONTAJE_Y_MONTAJE.svg",
  "elevador-montamuebles": "ICONO_ELEVADOR_MONTAMUEBLES.svg",
  embalaje: "ICONO_EMBALAJE_CONTENIDOS.svg",
  guardamuebles: "ICONO_GUARDAMUEBLES.svg",
  "mejores-precios": "ICONO_MEJORES_PRECIOS_MUDANZAS_PARTICULARES_VALENCIA.svg",
  "mudanzas-nacionales": "ICONO_MUDANZAS_NACIONALES.svg",
  "mudanzas-oficinas": "ICONO_MUDANZAS_OFICINAS_CASTELLON.svg",
  "mudanzas-particulares": "ICONO_MUDANZAS_PARTICULARES_CASTELLON.svg",
  "mudanzas-pequenas": "ICONO_MUDANZAS_PEQUEN_AS_Y_BARATAS_CASTELLON.svg",
  "presupuestos-detallados": "ICONO_PRESUPUESTOS_DETALLADOS.svg",
  seguros: "ICONO_SEGUROS_RESPONSABILIDAD_CIVIL.svg",
  "vaciado-viviendas": "ICONO_VACIADO_VIVIENDAS.svg",
};

const ICON_LABELS: Record<RussafaIconName, string> = {
  "atencion-rapida": "Atención rápida y personalizada",
  "desmontaje-montaje": "Desmontaje y montaje",
  "elevador-montamuebles": "Elevador montamuebles",
  embalaje: "Embalaje de contenidos",
  guardamuebles: "Guardamuebles",
  "mejores-precios": "Mejores precios",
  "mudanzas-nacionales": "Mudanzas nacionales",
  "mudanzas-oficinas": "Mudanzas de oficinas",
  "mudanzas-particulares": "Mudanzas particulares",
  "mudanzas-pequenas": "Mudanzas pequeñas y baratas",
  "presupuestos-detallados": "Presupuestos detallados",
  seguros: "Seguros y responsabilidad civil",
  "vaciado-viviendas": "Vaciado de viviendas",
};

type Props = {
  name: RussafaIconName;
  className?: string;
  size?: number;
  /**
   * Si `true`, fuerza color blanco (útil sobre fondos oscuros).
   * Aplica un filtro CSS que invierte y desatura.
   */
  whiteOnDark?: boolean;
};

export function RussafaIcon({ name, className = "", size = 96, whiteOnDark = false }: Props) {
  const file = ICON_FILES[name];
  const label = ICON_LABELS[name];

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/icons/${file}`}
        alt={label}
        width={size}
        height={size}
        className={
          whiteOnDark
            ? "brightness-0 invert opacity-90 w-full h-full object-contain"
            : "w-full h-full object-contain"
        }
        unoptimized
      />
    </span>
  );
}
