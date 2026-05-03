import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { ZONES } from "@/data/zones";
import { SITE, buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";
import BudgetForm from "@/components/BudgetForm";
import {
  LassoLeg,
  LassoStair,
  LassoArm,
  LassoBox,
  LassoTruck,
  LassoShield,
  LassoClock,
  LassoStar,
} from "@/components/RussafaIcons";

export const metadata: Metadata = {
  title: "Mudanzas Gandia · Empresa de mudanzas y guardamuebles en La Safor",
  description:
    "Empresa de mudanzas en Gandia. Locales, nacionales e internacionales + guardamuebles. Presupuesto cerrado, sin sorpresas. Atendemos toda La Safor.",
  alternates: { canonical: SITE.url },
};

const STATS = [
  { value: "+15", label: "años en el sector" },
  { value: "+3.000", label: "mudanzas realizadas" },
  { value: "4.9/5", label: "valoración media" },
  { value: "24h", label: "respuesta presupuesto" },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Hablamos",
    text: "Llámanos o pídenos presupuesto. Escuchamos qué necesitas y te asesoramos sin compromiso.",
    Icon: LassoArm,
  },
  {
    n: "02",
    title: "Visita y presupuesto",
    text: "Si hace falta, vamos a tu casa a ver el volumen. Te damos un precio cerrado por escrito.",
    Icon: LassoBox,
  },
  {
    n: "03",
    title: "Embalaje y traslado",
    text: "Llegamos puntuales. Embalamos, desmontamos, trasladamos y montamos en destino.",
    Icon: LassoTruck,
  },
  {
    n: "04",
    title: "Tu siguiente paso",
    text: "Te entregamos todo colocado y listo. Empieza tu nueva etapa sin haberte preocupado por nada.",
    Icon: LassoStair,
  },
];

const WHY_US = [
  {
    title: "Presupuesto cerrado",
    text: "Lo que decimos es lo que pagas. Sin extras de última hora ni sorpresas.",
    Icon: LassoShield,
  },
  {
    title: "Equipo propio",
    text: "Operarios con formación específica en mudanzas. Nada de subcontratas.",
    Icon: LassoArm,
  },
  {
    title: "Seguro incluido",
    text: "Responsabilidad civil y seguro de mercancías incluido en cada servicio.",
    Icon: LassoBox,
  },
  {
    title: "Acompañamiento",
    text: "Un único interlocutor desde el primer contacto hasta el último mueble.",
    Icon: LassoClock,
  },
];

const TESTIMONIALS = [
  {
    name: "Laura M.",
    location: "Playa de Gandia",
    text: "Mudanza desde un quinto sin ascensor a Oliva en un día. Llegaron a la hora, con todo embalado y montaron los muebles. Sin un rasguño. Muy recomendables.",
    rating: 5,
  },
  {
    name: "Vicente A.",
    location: "Gandia centro",
    text: "Buscaba una empresa seria y la encontré. Presupuesto cerrado, sin extras de última hora. El equipo súper amable y profesional.",
    rating: 5,
  },
  {
    name: "Marta R.",
    location: "Tavernes de la Valldigna",
    text: "Hicieron una mudanza con guardamuebles incluido mientras reformábamos la casa. Todo perfecto, sin daños y con muy buen trato.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza en Gandia?",
    a: "El precio depende del volumen, distancia, planta y accesos. Para una mudanza local en Gandia, los precios suelen ir desde 250 € (un piso pequeño) hasta 1.200 € o más para casas grandes. Pídenos un presupuesto cerrado gratis y te lo decimos exacto en menos de 24 horas.",
  },
  {
    q: "¿Hacéis mudanzas el mismo día u urgentes?",
    a: "Sí, siempre que tengamos disponibilidad. Llámanos cuanto antes al " +
      SITE.phone +
      " y miramos qué podemos hacer. En temporada alta (junio-septiembre) conviene avisar con al menos una semana.",
  },
  {
    q: "¿Cubrís toda La Safor o solo Gandia?",
    a: "Cubrimos Gandia, Playa de Gandia, Oliva, Daimús, Bellreguard, Tavernes de la Valldigna, Xeraco, Real de Gandia, Beniarjó, Miramar y resto de pueblos de La Safor. También salimos a toda España y a nivel internacional.",
  },
  {
    q: "¿Incluís el embalaje?",
    a: "Podemos hacer la mudanza con embalaje incluido (te llevamos las cajas, papel y mantas) o sin él si prefieres embalar tú. Si contratas el servicio completo y al final no usas algunas cajas, te las regalamos.",
  },
  {
    q: "¿Tenéis guardamuebles en Gandia?",
    a: "Sí. Disponemos de espacios de guardamuebles desde pocos metros cuadrados hasta naves completas, vigilados 24/7. Sin permanencia mínima: alquilas los días que necesites.",
  },
  {
    q: "¿Qué seguros incluyen vuestras mudanzas?",
    a: "Todas nuestras mudanzas incluyen seguro de responsabilidad civil y seguro de mercancías. Para objetos de alto valor (obras de arte, antigüedades) podemos contratar coberturas ampliadas a medida.",
  },
];

// Iconos rotando para servicios
const SERVICE_ICONS = [LassoTruck, LassoBox, LassoArm, LassoShield, LassoStair, LassoBox];

export default function Home() {
  return (
    <>
      {/* ────────────────────────────── HERO ────────────────────────────── */}
      <section className="relative overflow-hidden bg-russafa-pacific text-russafa-cream bg-noise">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />

        {/* R isotipo gigante decorativa */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-20 lg:-right-20 lg:-top-10 text-[28rem] lg:text-[40rem] leading-none font-display text-russafa-vibrant/8 select-none pointer-events-none"
        >
          R
        </div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-russafa-high/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-20 pb-28 lg:pt-32 lg:pb-40">
          <div className="max-w-4xl">
            <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-russafa-high/30 bg-russafa-high/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-russafa-high">
              <span className="w-1.5 h-1.5 rounded-full bg-russafa-high animate-pulse" />
              Mudanzas en Gandia y La Safor
            </p>

            <h1 className="animate-rise animate-rise-delay-1 mt-8 font-display-tight text-5xl sm:text-7xl lg:text-[7.5rem] text-russafa-cream">
              Tu siguiente
              <br />
              paso en{" "}
              <span className="relative inline-block text-russafa-high">
                Gandia
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 8 Q 50 2, 100 6 T 200 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="animate-rise animate-rise-delay-2 mt-8 max-w-2xl text-lg lg:text-xl text-russafa-cream/80 leading-relaxed">
              No solo trasladamos cajas. Te acompañamos en el cambio. Con presupuesto
              cerrado, equipo profesional y la confianza de Mudanzas Russafa.
            </p>

            <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
              <Link href="#presupuesto" className="btn-russafa btn-russafa-primary text-base">
                Pedir presupuesto gratis
                <span aria-hidden="true">→</span>
              </Link>
              <a href={buildWhatsappUrl()} target="_blank" rel="noopener" className="btn-russafa btn-russafa-ghost">
                WhatsApp directo
              </a>
            </div>

            {/* Iconos lasso decorativos en el hero */}
            <div className="hidden lg:flex absolute right-12 bottom-32 gap-8 text-russafa-high/30">
              <LassoLeg className="w-32 h-32 animate-rise animate-rise-delay-4" />
            </div>

            {/* Stats inline */}
            <dl className="animate-rise animate-rise-delay-4 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 max-w-3xl">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-russafa-high pl-4">
                  <dt className="font-display text-3xl lg:text-5xl text-russafa-high">{s.value}</dt>
                  <dd className="mt-1 text-xs lg:text-sm text-russafa-cream/60 uppercase tracking-wider">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <svg
          viewBox="0 0 1440 60"
          className="block w-full h-12 text-russafa-cream"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 L0,30 Q360,0 720,30 T1440,30 L1440,60 Z" fill="currentColor" />
        </svg>
      </section>

      {/* ────────────────────────────── SERVICIOS ────────────────────────────── */}
      <section id="servicios" className="py-24 lg:py-32 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-px bg-russafa-pacific/30" />
                Lo que hacemos
              </p>
              <h2 className="font-display-tight text-5xl lg:text-7xl text-russafa-pacific max-w-2xl">
                Servicios completos para
                <span className="text-russafa-vibrant"> mudarte sin estrés</span>
              </h2>
            </div>
            <p className="text-russafa-gray max-w-md">
              Desde una mudanza local en Gandia hasta un traslado internacional, pasando por guardamuebles
              y oficinas. Cada servicio con la misma promesa: nada queda al azar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i] ?? LassoBox;
              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-russafa-pacific/8 p-8 hover:border-russafa-vibrant hover:shadow-[0_24px_60px_-20px_rgba(2,64,61,0.25)] transition-all duration-300"
                >
                  <div className="absolute top-6 right-6 w-16 h-16 text-russafa-pacific/15 group-hover:text-russafa-vibrant transition-colors duration-300">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="absolute top-6 left-6 font-display text-3xl text-russafa-cream group-hover:text-russafa-high transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-3xl text-russafa-pacific mb-3 mt-20 max-w-[80%] leading-tight">
                    {s.shortTitle}
                  </h3>
                  <p className="text-russafa-gray text-sm leading-relaxed mb-6">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-russafa-pacific group-hover:text-russafa-vibrant transition-colors">
                    Ver más
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                  <div className="absolute -bottom-1 left-0 h-1 w-0 bg-russafa-vibrant group-hover:w-full transition-all duration-500" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────── POR QUÉ NOSOTROS ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-russafa-pacific text-russafa-cream relative overflow-hidden bg-noise">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-high mb-4">
              Por qué Russafa
            </p>
            <h2 className="font-display-tight text-5xl lg:text-7xl">
              Cuidamos tu mudanza
              <br />
              <span className="text-russafa-high">como cuidamos la nuestra.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-russafa-high/15 rounded-3xl overflow-hidden">
            {WHY_US.map((p) => (
              <div key={p.title} className="bg-russafa-pacific p-8 lg:p-10">
                <div className="w-14 h-14 mb-6 text-russafa-high">
                  <p.Icon className="w-full h-full" />
                </div>
                <h3 className="font-display text-2xl text-russafa-high mb-3">{p.title}</h3>
                <p className="text-russafa-cream/70 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────── PROCESO ────────────────────────────── */}
      <section id="proceso" className="py-24 lg:py-32 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
              Cómo trabajamos
            </p>
            <h2 className="font-display-tight text-5xl lg:text-7xl text-russafa-pacific">
              Cuatro pasos. <span className="text-russafa-vibrant">Cero estrés.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-russafa-pacific/20" />

            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="relative">
                <div className="w-24 h-24 rounded-full bg-russafa-high flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0 group hover:scale-110 transition-transform">
                  <span className="font-display text-3xl text-russafa-pacific">{step.n}</span>
                </div>
                <div className="w-12 h-12 mb-4 mx-auto lg:mx-0 text-russafa-pacific">
                  <step.Icon className="w-full h-full" />
                </div>
                <h3 className="font-display text-2xl text-russafa-pacific mb-3 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-russafa-gray text-sm leading-relaxed text-center lg:text-left">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────── ZONAS ────────────────────────────── */}
      <section id="zonas" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
                Dónde llegamos
              </p>
              <h2 className="font-display-tight text-5xl lg:text-6xl text-russafa-pacific mb-6">
                Toda <span className="text-russafa-vibrant">La Safor</span> y mucho más.
              </h2>
              <p className="text-russafa-gray leading-relaxed mb-8">
                Cubrimos Gandia y todos los municipios de La Safor con la misma rapidez y trato. Y si te
                mudas a Madrid, Barcelona o Berlín, también vamos.
              </p>
              <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-dark">
                Llámanos {SITE.phone}
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {ZONES.map((z) => (
                <Link
                  key={z.slug}
                  href={`/mudanzas-${z.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-russafa-pacific/10 p-5 hover:border-russafa-vibrant hover:bg-russafa-vibrant/5 transition-all"
                >
                  <div>
                    <h3 className="font-display text-xl text-russafa-pacific group-hover:text-russafa-pacific-deep">
                      {z.name}
                    </h3>
                    {z.distance && (
                      <p className="text-xs text-russafa-gray mt-1">{z.distance} de Gandia</p>
                    )}
                  </div>
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
        </div>
      </section>

      {/* ────────────────────────────── TESTIMONIOS ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
                Lo que dicen
              </p>
              <h2 className="font-display-tight text-5xl lg:text-7xl text-russafa-pacific flex items-center gap-3">
                <span className="text-russafa-yellow inline-flex items-center gap-2">
                  <LassoStar className="w-12 h-12" /> 4.9
                </span>{" "}
                sobre 5
              </h2>
            </div>
            <p className="text-russafa-gray max-w-md">
              Más de 500 reseñas de clientes en Google, Facebook y boca a boca. Esto es lo que cuentan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="bg-white rounded-3xl p-8 border border-russafa-pacific/8 hover:border-russafa-vibrant transition-colors relative"
              >
                <div className="text-russafa-yellow mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <LassoStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <blockquote className="text-russafa-pacific leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <footer className="flex items-center gap-3 pt-4 border-t border-russafa-pacific/8">
                  <div className="w-10 h-10 rounded-full bg-russafa-vibrant flex items-center justify-center font-display text-russafa-pacific">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-russafa-pacific text-sm">{t.name}</div>
                    <div className="text-xs text-russafa-gray">{t.location}</div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────── PRESUPUESTO ────────────────────────────── */}
      <section
        id="presupuesto"
        className="py-24 lg:py-32 bg-russafa-pacific text-russafa-cream relative overflow-hidden bg-noise"
      >
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div
          aria-hidden="true"
          className="absolute -left-32 -bottom-32 text-[30rem] leading-none font-display text-russafa-high/8 select-none pointer-events-none"
        >
          R
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-high mb-4">
                Presupuesto sin compromiso
              </p>
              <h2 className="font-display-tight text-5xl lg:text-6xl mb-6">
                Cuéntanos <span className="text-russafa-high">lo que necesitas</span> y te respondemos
                en 24h.
              </h2>
              <p className="text-russafa-cream/70 leading-relaxed mb-8">
                Rellena el formulario y te llamamos. Si lo prefieres, escríbenos por WhatsApp o llámanos
                directamente.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={buildPhoneUrl()}
                  className="btn-russafa btn-russafa-primary"
                >
                  {SITE.phone}
                </a>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener"
                  className="btn-russafa btn-russafa-ghost"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-russafa-cream rounded-3xl p-8 lg:p-10 shadow-2xl">
              <BudgetForm />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────── FAQ ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-russafa-cream" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
              Preguntas frecuentes
            </p>
            <h2 className="font-display-tight text-5xl lg:text-6xl text-russafa-pacific">
              Todo lo que <span className="text-russafa-vibrant">quieres saber.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-russafa-pacific/10 bg-white open:border-russafa-vibrant hover:border-russafa-pacific/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6">
                  <h3 className="font-display text-xl text-russafa-pacific">{f.q}</h3>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full bg-russafa-cream flex items-center justify-center text-russafa-pacific group-open:bg-russafa-vibrant group-open:rotate-45 transition-all font-display text-xl"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-russafa-gray leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQS.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>
    </>
  );
}
