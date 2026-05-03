"use client";

import Link from "next/link";
import { buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-russafa-pacific text-russafa-cream border-t border-russafa-high/20 shadow-[0_-8px_24px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-3 divide-x divide-russafa-high/15">
        <a
          href={buildPhoneUrl()}
          className="flex flex-col items-center justify-center py-3 gap-1 active:bg-russafa-pacific-deep transition-colors"
          aria-label="Llamar"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">Llamar</span>
        </a>
        <a
          href={buildWhatsappUrl()}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center py-3 gap-1 active:bg-russafa-pacific-deep transition-colors"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 22a9.87 9.87 0 0 1-5.03-1.378l-.36-.214-3.74.982.998-3.648-.235-.374A9.86 9.86 0 0 1 2.16 12c0-5.45 4.44-9.884 9.89-9.884 2.64 0 5.12 1.03 6.99 2.898A9.825 9.825 0 0 1 21.93 12c0 5.45-4.43 9.884-9.88 9.884Z" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>
        <Link
          href="/#presupuesto"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-russafa-high text-russafa-pacific active:bg-russafa-vibrant transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H17V0h-2v2H9V0H7v2H4.5C3.12 2 2.01 3.12 2.01 4.5L2 20.5C2 21.88 3.12 23 4.5 23h15c1.38 0 2.5-1.12 2.5-2.5v-16C22 3.12 20.88 2 19.5 2zm0 18.5h-15V8h15v12.5z" />
          </svg>
          <span className="text-[10px] font-extrabold uppercase tracking-wider">Presupuesto</span>
        </Link>
      </div>
    </div>
  );
}
