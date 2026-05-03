/**
 * Iconografía Russafa — Estilo "lasso" oficial del manual de identidad.
 *
 * Tres iconos característicos basados en el concepto de "movimiento":
 *  - LassoArm: brazo con móvil (contacto / contratación rápida)
 *  - LassoLeg: pierna saltando (agilidad / rapidez)
 *  - LassoStair: pierna subiendo escaleras (proceso / planificación)
 *
 * Todos comparten el mismo lenguaje gráfico: un trazo continuo
 * que dibuja una pierna o brazo con un objeto en el extremo, con
 * un loop "cinta" en medio. Color: Pacific Green sobre fondo claro
 * o High/Vibrant sobre fondo Pacific.
 */

type IconProps = {
  className?: string;
  color?: string;
  strokeWidth?: number;
};

const DEFAULT_COLOR = "currentColor";
const DEFAULT_STROKE = 6;

/* Pierna saltando — concepto: agilidad, "siguiente paso" */
export function LassoLeg({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Zapato superior */}
      <path d="M30 38c12-6 26-8 38-2 4 2 7 5 9 9" fill={color} stroke="none" />
      <ellipse cx="48" cy="38" rx="22" ry="9" fill={color} stroke="none" />
      {/* Trazo continuo desde el tobillo hasta el otro zapato */}
      <path
        data-draw="true"
        d="M75 50 C 95 70, 110 90, 110 110 C 110 130, 90 135, 80 120 C 70 105, 95 95, 120 110 C 145 125, 160 145, 165 165"
      />
      {/* Zapato inferior */}
      <ellipse
        cx="178"
        cy="178"
        rx="22"
        ry="9"
        transform="rotate(35 178 178)"
        fill={color}
        stroke="none"
      />
    </svg>
  );
}

/* Pierna subiendo escaleras — concepto: proceso, planificación */
export function LassoStair({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 240 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Zapato superior derecha */}
      <ellipse
        cx="180"
        cy="55"
        rx="22"
        ry="9"
        transform="rotate(-15 180 55)"
        fill={color}
        stroke="none"
      />
      {/* Trazo continuo con loop */}
      <path
        data-draw="true"
        d="M155 65 C 130 50, 105 55, 95 80 C 88 100, 105 110, 120 100 C 135 90, 130 70, 105 80 C 80 92, 75 130, 95 145"
      />
      {/* Zapato inferior */}
      <ellipse
        cx="80"
        cy="158"
        rx="22"
        ry="9"
        transform="rotate(-10 80 158)"
        fill={color}
        stroke="none"
      />
      {/* Escalera escalonada con líneas finas */}
      <path
        d="M100 175 L130 175 L130 160 L160 160 L160 145 L190 145 L190 130 L220 130"
        strokeWidth={Math.max(2, strokeWidth - 2)}
      />
    </svg>
  );
}

/* Brazo con móvil — concepto: contacto, contratación rápida */
export function LassoArm({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mano arriba (gesto OK) */}
      <circle cx="170" cy="32" r="14" fill={color} stroke="none" />
      <path
        d="M158 28 c -3 -8, 4 -14, 8 -8 M165 22 c -2 -6, 4 -10, 7 -5 M174 22 c 0 -6, 6 -8, 8 -3"
        strokeWidth={Math.max(2, strokeWidth - 2)}
      />
      {/* Trazo continuo brazo con loop */}
      <path
        data-draw="true"
        d="M165 50 C 145 70, 130 95, 135 115 C 140 135, 165 130, 165 110 C 165 90, 130 90, 110 110 C 90 130, 75 150, 60 165"
      />
      {/* Móvil rectángulo */}
      <rect
        x="32"
        y="155"
        width="34"
        height="48"
        rx="5"
        transform="rotate(-25 49 179)"
        fill="none"
      />
      <line
        x1="44"
        y1="170"
        x2="60"
        y2="174"
        transform="rotate(-25 49 179)"
        strokeWidth={Math.max(2, strokeWidth - 2)}
      />
    </svg>
  );
}

/* Caja de mudanza con flecha — útil para procesos y servicios */
export function LassoBox({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Caja */}
      <path d="M40 80 L110 50 L180 80 L180 160 L110 190 L40 160 Z" />
      <path d="M40 80 L110 110 L180 80" />
      <path d="M110 110 L110 190" />
      {/* Cinta de embalar */}
      <path
        d="M75 65 L75 145 L145 175 L145 95 Z"
        fill={color}
        opacity="0.15"
        stroke="none"
      />
    </svg>
  );
}

/* Camión */
export function LassoTruck({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cabina */}
      <path d="M150 60 L195 60 L215 90 L215 130 L150 130 Z" />
      {/* Caja trasera */}
      <rect x="20" y="50" width="130" height="80" rx="4" />
      {/* Ruedas */}
      <circle cx="55" cy="145" r="14" fill={color} stroke="none" />
      <circle cx="55" cy="145" r="6" fill="white" stroke="none" />
      <circle cx="180" cy="145" r="14" fill={color} stroke="none" />
      <circle cx="180" cy="145" r="6" fill="white" stroke="none" />
      {/* Detalle ventana cabina */}
      <path d="M158 70 L188 70 L200 92 L158 92 Z" fill={color} opacity="0.2" stroke="none" />
    </svg>
  );
}

/* Escudo / Seguro */
export function LassoShield({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 15 L175 45 L175 110 C 175 160, 140 195, 100 210 C 60 195, 25 160, 25 110 L25 45 Z" />
      <path d="M65 110 L92 137 L140 85" strokeWidth={strokeWidth + 1} />
    </svg>
  );
}

/* Reloj rápido */
export function LassoClock({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="105" r="80" />
      <path d="M100 55 L100 105 L138 130" />
      <path d="M70 25 L50 40 M130 25 L150 40" />
    </svg>
  );
}

/* Estrella (rating) */
export function LassoStar({
  className = "",
  color = DEFAULT_COLOR,
  strokeWidth = DEFAULT_STROKE,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill={color}
      stroke="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 15 L125 75 L190 82 L142 125 L156 188 L100 158 L44 188 L58 125 L10 82 L75 75 Z" />
    </svg>
  );
}
