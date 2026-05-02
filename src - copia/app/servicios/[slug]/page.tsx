import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { SITE, buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";
import BudgetForm from "@/components/BudgetForm";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `${SITE.url}/servicios/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${SITE.url}/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero del servicio */}
      <section className="relative bg-russafa-dark text-russafa-cream overflow-hidden bg-noise pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <nav className="text-xs text-russafa-cream/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-russafa-lime">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/#servicios" className="hover:text-russafa-lime">
              Servicios
            </Link>
            <span className="mx-2">/</span>
            <span className="text-russafa-cream">{service.shortTitle}</span>
          </nav>

          <h1 className="font-display-tight text-5xl lg:text-7xl max-w-4xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg lg:text-xl text-russafa-cream/80">
            {service.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#presupuesto" className="btn-russafa btn-russafa-primary">
              Pedir presupuesto
              <span aria-hidden="true">→</span>
            </Link>
            <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-ghost">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Cuerpo */}
      <section className="py-20 bg-russafa-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <p className="text-russafa-dark text-lg leading-relaxed mb-12">{service.longDescription}</p>

          <h2 className="font-display text-3xl text-russafa-dark mb-6">Qué incluye</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-12">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-white border border-russafa-dark/10 rounded-2xl p-4"
              >
                <span
                  className="shrink-0 w-6 h-6 rounded-full bg-russafa-lime flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                <span className="text-russafa-dark text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-russafa-dark text-russafa-cream p-8 lg:p-10 mb-12">
            <p className="font-display text-3xl mb-4">¿Te ayudamos?</p>
            <p className="text-russafa-cream/80 mb-6">
              Cuéntanos qué necesitas y te damos un presupuesto cerrado en menos de 24 horas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={buildWhatsappUrl(`Hola, me interesa: ${service.title}`)}
                target="_blank"
                rel="noopener"
                className="btn-russafa btn-russafa-primary"
              >
                WhatsApp
              </a>
              <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-ghost">
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="presupuesto" className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
          <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-dark mb-8 text-center">
            Pide tu presupuesto para {service.shortTitle.toLowerCase()}
          </h2>
          <BudgetForm />
        </div>
      </section>

      {/* Otros servicios */}
      <section className="py-20 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <h2 className="font-display text-3xl text-russafa-dark mb-8">Otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-russafa-dark/10 hover:border-russafa-lime transition-colors"
              >
                <h3 className="font-display text-xl text-russafa-dark group-hover:text-russafa-dark-deep mb-2">
                  {s.shortTitle}
                </h3>
                <p className="text-russafa-gray text-sm">{s.description}</p>
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
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@type": "MovingCompany", name: SITE.legalName, url: SITE.url },
            areaServed: { "@type": "City", name: "Gandia" },
          }),
        }}
      />
    </>
  );
}
