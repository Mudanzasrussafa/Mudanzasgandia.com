import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mudanzas Russafa · Mudanzas en Gandia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#02403D",
          padding: "70px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Isotipo R gigante decorativa al fondo */}
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -80,
            width: 720,
            height: 720,
            opacity: 0.15,
            display: "flex",
          }}
        >
          <svg
            viewBox="0 0 2834.65 2834.65"
            xmlns="http://www.w3.org/2000/svg"
            width={720}
            height={720}
          >
            <path
              fill="#A6FF33"
              d="M2280.85,2084.89c-372.66,0-645.93-123.22-790.52-356.78l-19.99-32.31,486.85,2.74c504.38,2.73,903.42-452.14,806.13-947.14-2.69-13.7-5.81-27.64-9.31-41.62C2632.76,225.65,2192.13,52.34,1817.55,52.34H43.75v2729.98h749.17v-1048.45l68.17,161.83c172.51,409.08,643.75,886.63,1403.87,886.63h525.93v-697.14s-426.53-.27-510.05-.27Z"
            />
            <path
              fill="#A6FF33"
              d="M1229.56,1011.71l-165.07-395.88-165.07,395.88h-161.07l242.95-560.95h167.75l241.52,560.95h-161.01Z"
            />
            <path
              fill="#A6FF33"
              d="M2137.12,1011.71l-165.07-395.88-165.07,395.88h-161.04l242.92-560.95h167.75l241.55,560.95h-161.04Z"
            />
          </svg>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            color: "#A6FF33",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          ● Empresa de mudanzas en La Safor
        </div>

        {/* Título */}
        <div
          style={{
            color: "#E7E3D0",
            fontSize: 110,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 16,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Mudanzas
        </div>
        <div
          style={{
            color: "#A6FF33",
            fontSize: 110,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -2,
            marginBottom: 40,
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          en Gandia
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#E7E3D0",
            opacity: 0.85,
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.3,
            maxWidth: 800,
            display: "flex",
          }}
        >
          Cada cambio es una nueva oportunidad. Y cada oportunidad comienza con una decisión.
        </div>

        {/* Footer línea */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#E7E3D0",
            fontSize: 22,
            opacity: 0.6,
          }}
        >
          <div style={{ display: "flex" }}>RUSSAFA · Mudanzas & Guardamuebles</div>
          <div style={{ display: "flex" }}>mudanzasgandia.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
