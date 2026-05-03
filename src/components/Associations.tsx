import { SITE } from "@/lib/site-config";

/**
 * Sellos de asociaciones profesionales (FEDEM, FVET, AEMCV).
 * Replica la sección de credibilidad presente en mudanzasrussafa.com.
 */
export default function Associations() {
  return (
    <section className="py-16 bg-white border-y border-russafa-pacific/8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-3">
            Reconocimientos
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-russafa-pacific">
            Empresa asociada a las principales <br className="hidden sm:block" />
            <span className="text-russafa-vibrant">federaciones del sector</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE.associations.map((a) => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noopener"
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-russafa-pacific/10 hover:border-russafa-vibrant hover:bg-russafa-cream/40 transition-all"
            >
              <div className="font-display text-3xl text-russafa-pacific group-hover:text-russafa-vibrant transition-colors mb-2">
                {a.name}
              </div>
              <p className="text-xs text-russafa-gray leading-relaxed">{a.description}</p>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-russafa-gray mt-8">
          {SITE.legalEntity} · Programas oficiales: {SITE.programs.join(" · ")}
        </p>
      </div>
    </section>
  );
}
