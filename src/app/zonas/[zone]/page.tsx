import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ZONES } from "@/data/zones";
import { SERVICES } from "@/data/services";
import { SITE, buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";
import BudgetForm from "@/components/BudgetForm";
import { LassoLeg } from "@/components/RussafaIcons";

type Props = { params: Promise<{ zone: string }> };

export async function generateStaticParams() {
  return ZONES.map((z) => ({ zone: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone } = await params;
  const z = ZONES.find((x) => x.slug === zone);
  if (!z) return {};

  const title = `Mudanzas ${z.name} · Empresa de mudanzas y guardamuebles`;
  const description = `Mudanzas en ${z.name}: presupuesto cerrado, equipo profesional y seguro incluido. ${z.description} Pídenos presupuesto sin compromiso.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/mudanzas-${z.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE.url}/mudanzas-${z.slug}`,
    },
  };
}

export default async function ZonePage({ params }: Props) {
  const { zone } = await params;
  const z = ZONES.find((x) => x.slug === zone);
  if (!z) notFound();

  const otherZones = ZONES.filter((x) => x.slug !== zone).slice(0, 6);

  return (
    <>
      <section className="relative bg-russafa-pacific text-russafa-cream overflow-hidden bg-noise pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-20 text-[28rem] leading-none font-display text-russafa-high/10 select-none pointer-events-none"
        >
          R
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <nav className="text-xs text-russafa-cream/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-russafa-high">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#zonas" className="hover:text-russafa-high">
              Zonas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-russafa-cream">{z.name}</span>
          </nav>

          <p className="inline-flex items-center gap-2 rounded-full border border-russafa-high/30 bg-russafa-high/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-russafa-high mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-russafa-high" /> Mudanzas locales
          </p>

          <h1 className="font-display-tight text-5xl lg:text-8xl max-w-4xl">
            Mudanzas en{" "}
            <span className="text-russafa-high">{z.name}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg lg:text-xl text-russafa-cream/80">
            {z.description} Llevamos años haciendo mudanzas en {z.name} con presupuesto cerrado, sin
            sorpresas y con seguro incluido.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#presupuesto" className="btn-russafa btn-russafa-primary">
              Pedir presupuesto
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={buildWhatsappUrl(`Hola, me gustaría hacer una mudanza en ${z.name}`)}
              target="_blank"
              rel="noopener"
              className="btn-russafa btn-russafa-ghost"
            >
              WhatsApp
            </a>
          </div>

          <div className="hidden lg:block absolute right-12 bottom-20 w-40 h-40 text-russafa-high/30">
            <LassoLeg className="w-full h-full" />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <div>
              <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific mb-6">
                Especialistas en mudanzas en {z.name}
              </h2>
              <div className="space-y-4 text-russafa-pacific leading-relaxed">
                <p>
                  Conocemos {z.name} como nuestra propia casa. Sabemos qué calles tienen acceso
                  complicado, dónde hay que pedir permisos al ayuntamiento y qué edificios necesitan
                  elevador para subir los muebles.
                </p>
                <p>
                  Por eso, cuando contratas tu mudanza en {z.name} con nosotros, te llevas mucho más
                  que un camión: te llevas un equipo que ya ha hecho cientos de traslados en la zona y
                  que tiene todo previsto antes de que llegue el día.
                </p>
                <p>
                  Te damos un <strong>presupuesto cerrado por escrito</strong>, sin sorpresas. Si no
                  usas las cajas que te llevamos, te las regalamos. Y si necesitas guardamuebles
                  antes, durante o después de la mudanza, también lo tenemos cubierto.
                </p>
              </div>
            </div>

            <aside className="rounded-3xl bg-russafa-pacific text-russafa-cream p-8 lg:p-10 lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-high mb-4">
                Contacta ahora
              </p>
              <p className="font-display text-3xl mb-6">¿Mudanza en {z.name}?</p>
              <p className="text-russafa-cream/80 mb-8 text-sm">
                Te respondemos con presupuesto cerrado en menos de 24 horas.
              </p>
              <div className="space-y-3">
                <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-primary w-full">
                  {SITE.phone}
                </a>
                <a
                  href={buildWhatsappUrl(`Hola, mudanza en ${z.name}`)}
                  target="_blank"
                  rel="noopener"
                  className="btn-russafa btn-russafa-ghost w-full"
                >
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>

          <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific mb-10">
            Servicios disponibles en {z.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group bg-white rounded-2xl p-6 border border-russafa-pacific/10 hover:border-russafa-vibrant transition-colors"
              >
                <h3 className="font-display text-xl text-russafa-pacific mb-2">{s.shortTitle}</h3>
                <p className="text-russafa-gray text-sm">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="presupuesto" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific mb-8 text-center">
            Presupuesto para tu mudanza en {z.name}
          </h2>
          <BudgetForm />
        </div>
      </section>

      <section className="py-20 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl text-russafa-pacific mb-8">
            Otras zonas en La Safor
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {otherZones.map((other) => (
              <Link
                key={other.slug}
                href={`/mudanzas-${other.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-russafa-pacific/10 bg-white p-4 hover:border-russafa-vibrant transition-colors"
              >
                <span className="font-display text-lg text-russafa-pacific">
                  Mudanzas {other.name}
                </span>
                <span
                  className="text-russafa-pacific/30 group-hover:text-russafa-vibrant group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: `${SITE.name} · ${z.name}`,
            url: `${SITE.url}/mudanzas-${z.slug}`,
            telephone: SITE.phone,
            areaServed: { "@type": "City", name: z.name },
            address: {
              "@type": "PostalAddress",
              addressLocality: z.name,
              addressRegion: "Valencia",
              addressCountry: "ES",
            },
          }),
        }}
      />
    </>
  );
}
