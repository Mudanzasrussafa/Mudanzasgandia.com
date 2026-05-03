"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, buildPhoneUrl, buildWhatsAppUrl } from "@/lib/site-config";
import { SERVICES } from "@/data/services";
import { ZONES } from "@/data/zones";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [zonasOpen, setZonasOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServiciosOpen(false);
    setZonasOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
        aria-label="Abrir menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open ? (
        <div
          className="fixed inset-0 bg-russafa-pacific/60 backdrop-blur-sm z-50 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      ) : null}

      <aside
        className={
          "fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-russafa-cream z-50 lg:hidden shadow-2xl transition-transform duration-300 ease-out flex flex-col " +
          (open ? "translate-x-0" : "translate-x-full")
        }
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-russafa-pacific/10">
          <span className="text-sm font-bold uppercase tracking-widest text-russafa-pacific">
            Menu
          </span>
          <button
            onClick={close}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
            aria-label="Cerrar menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-3">
          <button
            onClick={() => setServiciosOpen(!serviciosOpen)}
            className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-semibold text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
          >
            <span>Servicios</span>
            <svg
              viewBox="0 0 12 12"
              className={"w-3 h-3 transition-transform " + (serviciosOpen ? "rotate-180" : "")}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 9L2 4h8z" />
            </svg>
          </button>
          {serviciosOpen ? (
            <div className="pl-3 pb-2 space-y-0.5">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={"/servicios/" + s.slug}
                  onClick={close}
                  className="block px-3 py-2.5 rounded-lg text-sm text-russafa-pacific hover:bg-russafa-pacific/5 hover:text-russafa-vibrant transition-colors"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
          ) : null}

          <button
            onClick={() => setZonasOpen(!zonasOpen)}
            className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-semibold text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
          >
            <span>Mudanzas locales</span>
            <svg
              viewBox="0 0 12 12"
              className={"w-3 h-3 transition-transform " + (zonasOpen ? "rotate-180" : "")}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 9L2 4h8z" />
            </svg>
          </button>
          {zonasOpen ? (
            <div className="pl-3 pb-2 space-y-0.5">
              {ZONES.map((z) => (
                <Link
                  key={z.slug}
                  href={"/mudanzas-" + z.slug}
                  onClick={close}
                  className="block px-3 py-2.5 rounded-lg text-sm text-russafa-pacific hover:bg-russafa-pacific/5 hover:text-russafa-vibrant transition-colors"
                >
                  Mudanzas {z.name}
                </Link>
              ))}
            </div>
          ) : null}

          <Link
            href="/#zonas"
            onClick={close}
            className="block px-3 py-3.5 rounded-xl text-base font-semibold text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
          >
            Zonas
          </Link>
          <Link
            href="/#proceso"
            onClick={close}
            className="block px-3 py-3.5 rounded-xl text-base font-semibold text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
          >
            Como trabajamos
          </Link>
          <Link
            href="/#contacto"
            onClick={close}
            className="block px-3 py-3.5 rounded-xl text-base font-semibold text-russafa-pacific hover:bg-russafa-pacific/5 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="border-t border-russafa-pacific/10 p-4 space-y-2.5 bg-white">
          <Link
            href="/#contacto"
            onClick={close}
            className="btn-russafa btn-russafa-primary w-full justify-center"
          >
            Pedir presupuesto
          </Link>

          <div className="grid grid-cols-2 gap-2">
            
              href={buildPhoneUrl()}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-russafa-pacific text-russafa-cream font-semibold text-sm hover:bg-russafa-pacific/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Llamar
            </a>
            
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-russafa-vibrant text-russafa-pacific font-semibold text-sm hover:bg-russafa-vibrant/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
              </svg>
              WhatsApp
            </a>
          </div>

          
            href={buildPhoneUrl()}
            className="block text-center pt-1"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-russafa-pacific">
              Llamanos
            </span>
            <div className="text-russafa-pacific font-bold">{SITE.phone}</div>
          </a>
        </div>
      </aside>
    </>
  );
}
