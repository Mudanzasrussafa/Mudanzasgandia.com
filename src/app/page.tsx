import Link from "next/link";
import type { Metadata } from "next";
import { SERVICES } from "@/data/services";
import { ZONES } from "@/data/zones";
import { SITE, buildPhoneUrl, buildWhatsappUrl } from "@/lib/site-config";
import BudgetForm from "@/components/BudgetForm";
import { RussafaIcon, type RussafaIconName } from "@/components/RussafaIcons";
import RussafaIsotype from "@/components/RussafaIsotype";
import Associations from "@/components/Associations";

export const metadata: Metadata = {
  title: "Mudanzas en Gandia 🥇 | Mudanzas Russafa",
  description:
    "Empresa de mudanzas en Gandia y La Safor. Mudanzas particulares, oficinas, pequeñas, nacionales e internacionales. Guardamuebles, embalaje y vaciado de viviendas. Presupuesto cerrado sin compromiso.",
  alternates: { canonical: SITE.url },
};

const PROCESS_STEPS = [
  {
    n: "1",
    title: "Contacta con nosotros",
    text: "Completa nuestro formulario o llámanos para hablar con uno de nuestros expertos.",
  },
  {
    n: "2",
    title: "Visita a tu domicilio",
    text: "Un técnico se desplazará a tu domicilio para analizar todos los detalles de tu mudanza.",
  },
  {
    n: "3",
    title: "Recibe tu presupuesto",
    text: "Te enviaremos un presupuesto detallado en menos de 24 horas.",
  },
  {
    n: "4",
    title: "Aceptación y fecha",
    text: "Una vez aceptado, fijamos la fecha y gestionamos los permisos necesarios.",
  },
  {
    n: "5",
    title: "El día de la mudanza",
    text: "Nos encargamos de todo para que tu mudanza sea rápida y sin complicaciones.",
  },
];

const WHY_US: Array<{ title: string; text: string; icon: RussafaIconName }> = [
  {
    title: "Seguridad y tranquilidad",
    text: "Tus pertenencias están en buenas manos. Contamos con seguros de responsabilidad civil que cubren cualquier imprevisto durante el traslado.",
    icon: "seguros",
  },
  {
    title: "Los mejores precios",
    text: "Ofrecemos precios competitivos, manteniendo siempre la máxima calidad en nuestros servicios. Nos adaptamos a tu presupuesto.",
    icon: "mejores-precios",
  },
  {
    title: "Presupuestos detallados",
    text: "Nuestros presupuestos son transparentes y detallados. Te explicamos todo desde el principio para evitar sorpresas.",
    icon: "presupuestos-detallados",
  },
  {
    title: "Atención personalizada",
    text: "Te asignamos un coordinador que estará contigo durante todo el proceso, asegurándose de que cada detalle se gestione con eficacia.",
    icon: "atencion-rapida",
  },
];

// Servicios destacados (los 3 principales en el bloque "Los Mejores Servicios")
const MAIN_SERVICES: Array<{ slug: string; title: string; text: string; cta: string; icon: RussafaIconName }> = [
  {
    slug: "mudanzas-particulares",
    title: "Mudanzas Particulares",
    text: "Desmontamos, protegemos y movemos tu hogar como si fuese nuestro.",
    cta: "Saber más",
    icon: "mudanzas-particulares",
  },
  {
    slug: "mudanzas-oficinas",
    title: "Mudanzas de oficinas",
    text: "Organizamos y trasladamos tu empresa con una logística adaptada a tus necesidades.",
    cta: "Más info",
    icon: "mudanzas-oficinas",
  },
  {
    slug: "mudanzas-pequenas",
    title: "Mudanzas pequeñas",
    text: "Ofrecemos los presupuestos más económicos de La Safor. ¿Eres flexible con la fecha?",
    cta: "Cuéntame más",
    icon: "mudanzas-pequenas",
  },
  {
    slug: "mudanzas-nacionales",
    title: "Mudanzas nacionales",
    text: "Disponemos de diferentes rutas habituales entre Gandia y el resto del país.",
    cta: "Leer más",
    icon: "mudanzas-nacionales",
  },
  {
    slug: "guardamuebles",
    title: "Guardamuebles",
    text: "Ofrecemos un servicio de guardamuebles en Gandia el tiempo que necesites.",
    cta: "Cuéntame más",
    icon: "guardamuebles",
  },
];

// Servicios adicionales (bloque inferior)
const ADDITIONAL_SERVICES: Array<{ slug: string; title: string; text: string; cta: string; icon: RussafaIconName }> = [
  {
    slug: "embalaje-de-contenidos",
    title: "Embalaje de contenidos",
    text: "Embalamos tus muebles y enseres para que no tengas que preocuparte de nada.",
    cta: "Leer más",
    icon: "embalaje",
  },
  {
    slug: "desmontaje-y-montaje",
    title: "Desmontaje y montaje",
    text: "Desmontamos tus muebles y los volvemos a montar en la nueva ubicación.",
    cta: "Saber más",
    icon: "desmontaje-montaje",
  },
  {
    slug: "elevador-montamuebles",
    title: "Elevador montamuebles",
    text: "Contamos con elevador montamuebles en Gandia de hasta 30 metros de altura.",
    cta: "Cuéntame más",
    icon: "elevador-montamuebles",
  },
  {
    slug: "vaciado-de-viviendas",
    title: "Vaciado de viviendas",
    text: "Disponemos de servicio de vaciado integral de viviendas y traslado al ecoparque.",
    cta: "Más info",
    icon: "vaciado-viviendas",
  },
];

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza en Gandia?",
    a: "El precio de una mudanza en Gandia depende de varios factores, como la distancia, el volumen de los objetos o los servicios que necesites. En Mudanzas Russafa te ofrecemos presupuestos detallados y sin compromiso, con toda la información que necesitas desde el primer momento. Para una mudanza local, los precios suelen ir desde 250 € hasta 1.200 €.",
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

export default function Home() {
  return (
    <>
      {/* ────────────────── HERO ────────────────── */}
      <section className="relative overflow-hidden bg-russafa-pacific text-russafa-cream bg-noise">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />

        {/* Isotipo R oficial gigante decorativo */}
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-16 lg:-right-12 lg:-top-20 w-[26rem] lg:w-[40rem] opacity-[0.07] pointer-events-none select-none"
        >
          <RussafaIsotype variant="withEyes" tone="vibrant" size={640} decorative />
        </div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-russafa-high/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Columna izquierda: copy */}
            <div>
              <p className="animate-rise inline-flex items-center gap-2 rounded-full border border-russafa-high/30 bg-russafa-high/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-russafa-high">
                <span className="w-1.5 h-1.5 rounded-full bg-russafa-high animate-pulse" />
                Empresa de mudanzas en Gandia y La Safor
              </p>

              <h1 className="animate-rise animate-rise-delay-1 mt-8 font-display-tight text-5xl sm:text-7xl lg:text-[6.5rem] text-russafa-cream uppercase">
                Mudanzas
                <br />
                en{" "}
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

              <p className="animate-rise animate-rise-delay-2 mt-8 max-w-xl text-lg lg:text-xl text-russafa-cream/85 leading-relaxed">
                Cada cambio es una <strong className="text-russafa-high">nueva oportunidad.</strong> Y
                cada oportunidad comienza con una <strong className="text-russafa-high">decisión.</strong>
              </p>
              <p className="animate-rise animate-rise-delay-2 mt-4 text-russafa-cream/70">
                Pide presupuesto sin compromiso. Te respondemos en menos de 24 horas.
              </p>

              <div className="animate-rise animate-rise-delay-3 mt-10 flex flex-wrap gap-3">
                <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-primary text-base">
                  {SITE.phone}
                  <span aria-hidden="true">→</span>
                </a>
                <a href={buildWhatsappUrl()} target="_blank" rel="noopener" className="btn-russafa btn-russafa-ghost">
                  WhatsApp
                </a>
              </div>

              {/* Stats */}
              <dl className="animate-rise animate-rise-delay-4 mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-2xl">
                <div className="border-l-2 border-russafa-high pl-4">
                  <dt className="font-display text-3xl lg:text-4xl text-russafa-high">+15</dt>
                  <dd className="mt-1 text-xs text-russafa-cream/60 uppercase tracking-wider">años de experiencia</dd>
                </div>
                <div className="border-l-2 border-russafa-high pl-4">
                  <dt className="font-display text-3xl lg:text-4xl text-russafa-high">+3.000</dt>
                  <dd className="mt-1 text-xs text-russafa-cream/60 uppercase tracking-wider">mudanzas realizadas</dd>
                </div>
                <div className="border-l-2 border-russafa-high pl-4">
                  <dt className="font-display text-3xl lg:text-4xl text-russafa-high">4.9★</dt>
                  <dd className="mt-1 text-xs text-russafa-cream/60 uppercase tracking-wider">valoración media</dd>
                </div>
                <div className="border-l-2 border-russafa-high pl-4">
                  <dt className="font-display text-3xl lg:text-4xl text-russafa-high">24h</dt>
                  <dd className="mt-1 text-xs text-russafa-cream/60 uppercase tracking-wider">respuesta presupuesto</dd>
                </div>
              </dl>
            </div>

            {/* Columna derecha: formulario */}
            <div className="animate-rise animate-rise-delay-3">
              <div className="bg-russafa-cream rounded-3xl p-6 lg:p-8 shadow-2xl">
                <h2 className="font-display text-2xl text-russafa-pacific mb-2">
                  Pide tu presupuesto
                </h2>
                <p className="text-sm text-russafa-gray mb-6">
                  Sin compromiso · Respuesta en 24h
                </p>
                <BudgetForm />
              </div>
            </div>
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

      {/* ────────────────── INTRO ────────────────── */}
      <section className="py-20 lg:py-24 bg-russafa-cream">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific mb-8">
            Empresa de Mudanzas en <span className="text-russafa-vibrant">Gandia</span>
          </h2>
          <div className="space-y-5 text-russafa-pacific text-lg leading-relaxed">
            <p>
              <strong>Mudanzas Russafa</strong> es una empresa especializada en mudanzas y el
              transporte de muebles y enseres en Gandia y toda La Safor. Somos una compañía valenciana
              que prestamos servicios tanto a particulares como a empresas. Nuestros operarios realizan
              cualquier tipo de mudanzas y traslados en la Comunidad Valenciana, en el ámbito nacional
              y en gran parte de Europa.
            </p>
            <p>
              Realizamos las <strong>mudanzas más económicas y competitivas de La Safor</strong>. Te
              asesoramos y ayudamos a planificar mudanzas a Gandia o desde Gandia de la forma más
              barata, segura y rápida. Nos adaptamos a cada cliente configurando presupuestos a
              medida y flexibles para que se ajusten a las particularidades de cada mudanza.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────── SERVICIOS PRINCIPALES ────────────────── */}
      <section id="servicios" className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
              Lo que hacemos
            </p>
            <h2 className="font-display-tight text-4xl lg:text-6xl text-russafa-pacific">
              Los Mejores Servicios para <span className="text-russafa-vibrant">Mudanzas</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MAIN_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group relative overflow-hidden rounded-3xl bg-russafa-cream border border-russafa-pacific/8 p-8 hover:border-russafa-vibrant hover:shadow-[0_24px_60px_-20px_rgba(2,64,61,0.25)] transition-all duration-300"
              >
                <div className="flex justify-end mb-4">
                  <RussafaIcon name={s.icon} size={120} />
                </div>
                <h3 className="font-display text-2xl text-russafa-pacific mb-3">{s.title}</h3>
                <p className="text-russafa-gray text-sm leading-relaxed mb-6">{s.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-russafa-pacific group-hover:text-russafa-vibrant transition-colors">
                  {s.cta}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </span>
                <div className="absolute -bottom-1 left-0 h-1 w-0 bg-russafa-vibrant group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── ¿CÓMO TRABAJAMOS? ────────────────── */}
      <section id="proceso" className="py-20 lg:py-24 bg-russafa-pacific text-russafa-cream relative overflow-hidden bg-noise">
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-high mb-4">
              Cómo trabajamos
            </p>
            <h2 className="font-display-tight text-4xl lg:text-6xl">
              ¿Cómo trabajamos tus <span className="text-russafa-high">mudanzas en Gandia?</span>
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-russafa-cream/75 leading-relaxed">
              Si estás pensando en contratar una empresa de mudanzas en Gandia, ponte en contacto
              con nosotros para obtener un presupuesto gratis. Nos diferenciamos por nuestro trato
              personalizado y familiar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="text-center lg:text-left">
                <div className="w-16 h-16 rounded-full bg-russafa-high text-russafa-pacific font-display text-3xl flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  {step.n}
                </div>
                <h3 className="font-display text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-russafa-cream/70 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── ¿POR QUÉ ELEGIRNOS? ────────────────── */}
      <section className="py-20 lg:py-24 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
              Por qué Russafa
            </p>
            <h2 className="font-display-tight text-4xl lg:text-6xl text-russafa-pacific">
              ¿Por qué elegirnos para tus <span className="text-russafa-vibrant">mudanzas en Gandia?</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((p) => (
              <div key={p.title} className="bg-white rounded-3xl p-8 border border-russafa-pacific/8 hover:border-russafa-vibrant transition-colors">
                <div className="mb-5">
                  <RussafaIcon name={p.icon} size={88} />
                </div>
                <h3 className="font-display text-xl text-russafa-pacific mb-3">{p.title}</h3>
                <p className="text-russafa-gray text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── SERVICIOS ADICIONALES ────────────────── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="font-display-tight text-4xl lg:text-6xl text-russafa-pacific">
              Servicios <span className="text-russafa-vibrant">Adicionales</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADDITIONAL_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group block bg-russafa-cream rounded-3xl p-6 border border-russafa-pacific/8 hover:border-russafa-vibrant transition-colors"
              >
                <div className="mb-4">
                  <RussafaIcon name={s.icon} size={88} />
                </div>
                <h3 className="font-display text-xl text-russafa-pacific mb-2">{s.title}</h3>
                <p className="text-russafa-gray text-sm leading-relaxed mb-4">{s.text}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-russafa-pacific group-hover:text-russafa-vibrant transition-colors">
                  {s.cta} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── ZONAS LA SAFOR ────────────────── */}
      <section id="zonas" className="py-20 lg:py-24 bg-russafa-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
                Dónde llegamos
              </p>
              <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific mb-6">
                Toda <span className="text-russafa-vibrant">La Safor</span> y mucho más.
              </h2>
              <p className="text-russafa-gray leading-relaxed mb-6">
                Realizamos mudanzas desde Gandia a otros municipios como Oliva, Daimús, Bellreguard,
                Tavernes, Xeraco, Real de Gandia, Beniarjó, Miramar, Denia, Calpe… además de mudanzas
                en Valencia y Castellón.
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
                  className="group flex items-center justify-between rounded-2xl border border-russafa-pacific/10 bg-white p-5 hover:border-russafa-vibrant hover:bg-russafa-vibrant/5 transition-all"
                >
                  <div>
                    <h3 className="font-display text-xl text-russafa-pacific">{z.name}</h3>
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

      {/* ────────────────── ASOCIACIONES ────────────────── */}
      <Associations />

      {/* ────────────────── FAQ ────────────────── */}
      <section className="py-20 lg:py-24 bg-russafa-cream" id="faq">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-russafa-vibrant mb-4">
              Preguntas frecuentes
            </p>
            <h2 className="font-display-tight text-4xl lg:text-5xl text-russafa-pacific">
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
                  <h3 className="font-display text-lg text-russafa-pacific">{f.q}</h3>
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

      {/* ────────────────── CIERRE / CTA ────────────────── */}
      <section
        id="contacto"
        className="py-20 lg:py-24 bg-russafa-pacific text-russafa-cream relative overflow-hidden bg-noise"
      >
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div
          aria-hidden="true"
          className="absolute -left-32 -bottom-32 lg:-left-20 w-[28rem] lg:w-[36rem] opacity-[0.08] pointer-events-none select-none"
        >
          <RussafaIsotype variant="withEyes" tone="high" size={576} decorative />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display-tight text-4xl lg:text-6xl mb-6">
            <span className="text-russafa-high">Tu tranquilidad</span> es nuestra meta.
          </h2>
          <p className="text-lg lg:text-xl text-russafa-cream/80 mb-10 max-w-2xl mx-auto">
            Confía en nosotros, y haremos que todo sea más sencillo de lo que imaginas.
            Llámanos o envíanos un mensaje, y nos encargaremos de que tu mudanza en Gandia
            sea un éxito.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={buildPhoneUrl()} className="btn-russafa btn-russafa-primary text-base">
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
          <p className="mt-8 text-sm text-russafa-cream/50">
            {SITE.openingHoursText} · Sábados con cita previa
          </p>
        </div>
      </section>
    </>
  );
}
