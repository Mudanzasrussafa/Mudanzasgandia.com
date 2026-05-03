import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { SITE, buildPhoneUrl } from "@/lib/site-config";

const NAV = [
  { label: "Servicios", href: "/#servicios" },
  { label: "Zonas", href: "/#zonas" },
  { label: "Cómo trabajamos", href: "/#proceso" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  return (
    <>
      {/* Barra superior con marquee */}
      <div className="bg-russafa-pacific text-russafa-cream overflow-hidden border-b border-russafa-high/20">
        <div className="flex whitespace-nowrap py-2 text-xs font-semibold uppercase tracking-[0.2em]">
          <div className="animate-marquee flex shrink-0 gap-12 pr-12">
            {Array.from({ length: 2 }).map((_, group) => (
              <div key={group} className="flex shrink-0 gap-12">
                <span className="flex items-center gap-2">
                  <span className="text-russafa-high">●</span> Presupuesto cerrado sin sorpresas
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-russafa-high">●</span> Si no usas las cajas, te las regalamos
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-russafa-high">●</span> Mudanzas en Gandia y toda La Safor
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-russafa-high">●</span> Seguro a todo riesgo incluido
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-russafa-high">●</span> Atendemos sábados
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 z-40 bg-russafa-cream/90 backdrop-blur-md border-b border-russafa-pacific/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className="text-base hover:opacity-80 transition-opacity"
              aria-label="Inicio"
            >
              <BrandLogo variant="full" color="pacific" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-russafa-vibrant group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={buildPhoneUrl()}
                className="hidden md:flex flex-col items-end leading-tight hover:opacity-80 transition-opacity"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-russafa-gray">
                  Llámanos
                </span>
                <span className="text-russafa-pacific font-bold">{SITE.phone}</span>
              </a>
              <Link
                href="/#presupuesto"
                className="btn-russafa btn-russafa-primary text-sm"
              >
                Presupuesto gratis
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
