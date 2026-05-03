import Link from "next/link";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
import { SITE, buildPhoneUrl } from "@/lib/site-config";
import { SERVICES } from "@/data/services";
import { ZONES } from "@/data/zones";

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
                  <span className="text-russafa-high">●</span> +15 años de experiencia
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="sticky top-0 z-40 bg-russafa-cream/95 backdrop-blur-md border-b border-russafa-pacific/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between gap-6">
            <Link
              href="/"
              className="text-base hover:opacity-80 transition-opacity shrink-0"
              aria-label="Inicio"
            >
              <BrandLogo variant="full" tone="corporativo" width={150} />
            </Link>

            {/* Navegación con menús desplegables */}
            <nav className="hidden lg:flex items-center gap-7">
              {/* Servicios */}
              <div className="relative group">
                <button className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors flex items-center gap-1">
                  Servicios
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor" aria-hidden="true">
                    <path d="M6 9L2 4h8z" />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-russafa-pacific/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="p-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicios/${s.slug}`}
                        className="block px-4 py-2.5 rounded-xl text-sm text-russafa-pacific hover:bg-russafa-cream hover:text-russafa-vibrant transition-colors"
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mudanzas Locales */}
              <div className="relative group">
                <button className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors flex items-center gap-1">
                  Mudanzas locales
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="currentColor" aria-hidden="true">
                    <path d="M6 9L2 4h8z" />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 rounded-2xl bg-white shadow-2xl border border-russafa-pacific/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <div className="p-2">
                    {ZONES.map((z) => (
                      <Link
                        key={z.slug}
                        href={`/mudanzas-${z.slug}`}
                        className="block px-4 py-2.5 rounded-xl text-sm text-russafa-pacific hover:bg-russafa-cream hover:text-russafa-vibrant transition-colors"
                      >
                        Mudanzas {z.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/#zonas"
                className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors"
              >
                Zonas
              </Link>
              <Link
                href="/#proceso"
                className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors"
              >
                Cómo trabajamos
              </Link>
              <Link
                href="/#contacto"
                className="text-sm font-semibold text-russafa-pacific hover:text-russafa-vibrant transition-colors"
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center gap-3 shrink-0">
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
                href="/#contacto"
                className="btn-russafa btn-russafa-primary text-sm hidden md:inline-flex"
              >
                Presupuesto
                <span aria-hidden="true">→</span>
              </Link>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
