import Link from "next/link";
import BrandLogo from "./BrandLogo";
import RussafaIsotype from "./RussafaIsotype";
import { SITE, buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";
import { SERVICES } from "@/data/services";
import { ZONES } from "@/data/zones";

export default function Footer() {
  const year = new Date().getFullYear();
  const mainServices = SERVICES.slice(0, 6);
  const additionalServices = SERVICES.slice(6);

  return (
    <footer className="bg-russafa-pacific text-russafa-cream relative overflow-hidden bg-noise">
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-russafa-high/10 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 w-[28rem] opacity-[0.06] pointer-events-none select-none"
      >
        <RussafaIsotype variant="withEyes" tone="vibrant" size={448} decorative />
      </div>
      <div className="absolute bg-grid-dark inset-0 opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-20">
        {/* CTA superior */}
        <div className="mb-16 pb-16 border-b border-russafa-high/15">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end">
            <h2 className="font-display-tight text-4xl sm:text-5xl lg:text-6xl text-russafa-cream max-w-3xl">
              ¿Listo para tu <span className="text-russafa-high">siguiente paso</span>?
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener"
                className="btn-russafa btn-russafa-primary"
              >
                WhatsApp
              </a>
              <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-ghost">
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-3">
            <BrandLogo variant="full" tone="vibrant" width={180} />
            <p className="mt-6 text-sm text-russafa-cream/70 leading-relaxed max-w-xs">
              Más de {SITE.yearsExperience} años realizando mudanzas de calidad en Gandia y La Safor.
              Trato personalizado, precios económicos y servicio profesional.
            </p>
            <p className="mt-6 text-xs text-russafa-cream/50">
              Web local del grupo{" "}
              <a
                href={SITE.parentBrand.url}
                target="_blank"
                rel="noopener"
                className="text-russafa-high hover:underline"
              >
                {SITE.parentBrand.name}
              </a>
            </p>
          </div>

          {/* Servicios principales */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-display text-russafa-high text-xl mb-4">Servicios</h3>
            <ul className="space-y-2">
              {mainServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sm text-russafa-cream/80 hover:text-russafa-high transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios adicionales */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-display text-russafa-high text-xl mb-4">Servicios adicionales</h3>
            <ul className="space-y-2">
              {additionalServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sm text-russafa-cream/80 hover:text-russafa-high transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-display text-russafa-high text-xl mb-4">Zonas</h3>
            <ul className="space-y-2">
              {ZONES.slice(0, 8).map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/mudanzas-${z.slug}`}
                    className="text-sm text-russafa-cream/80 hover:text-russafa-high transition-colors"
                  >
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1 lg:col-span-3">
            <h3 className="font-display text-russafa-high text-xl mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={buildPhoneUrl()}
                  className="text-russafa-cream/90 hover:text-russafa-high transition-colors block font-bold"
                >
                  {SITE.phone}
                </a>
                <a
                  href="tel:+34680701702"
                  className="text-russafa-cream/70 hover:text-russafa-high transition-colors block text-xs"
                >
                  {SITE.phoneSecondary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-russafa-cream/80 hover:text-russafa-high transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="text-russafa-cream/60 leading-relaxed text-xs pt-2 border-t border-russafa-high/10">
                <strong className="block text-russafa-cream/80 mb-1">Sede principal</strong>
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}, {SITE.address.region}
              </li>
              <li className="text-russafa-cream/60 leading-relaxed text-xs">
                <strong className="block text-russafa-cream/80 mb-1">Horario</strong>
                {SITE.openingHoursText}
              </li>
            </ul>
          </div>
        </div>

        {/* Asociaciones inline */}
        <div className="mt-12 pt-8 border-t border-russafa-high/15">
          <p className="text-xs text-russafa-cream/50 uppercase tracking-widest mb-4">
            Asociaciones
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {SITE.associations.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener"
                className="text-russafa-cream/60 hover:text-russafa-high transition-colors text-sm"
              >
                {a.name}
              </a>
            ))}
            <span className="text-xs text-russafa-cream/40">·</span>
            {SITE.programs.map((p) => (
              <span key={p} className="text-xs text-russafa-cream/40">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-russafa-high/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-russafa-cream/50">
          <p>
            © {year} {SITE.legalEntity}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/aviso-legal" className="hover:text-russafa-high transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-russafa-high transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-russafa-high transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
