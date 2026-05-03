import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-russafa-pacific text-russafa-cream flex items-center justify-center bg-noise relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="relative text-center px-6">
        <p className="font-display text-[12rem] lg:text-[18rem] leading-none text-russafa-high">
          404
        </p>
        <h1 className="font-display-tight text-3xl lg:text-5xl mt-4">
          Esta página se ha mudado.
        </h1>
        <p className="text-russafa-cream/70 mt-4 max-w-md mx-auto">
          No encontramos lo que buscas. Pero tu siguiente paso te está esperando en otra dirección.
        </p>
        <Link href="/" className="btn-russafa btn-russafa-primary mt-8">
          Volver al inicio
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
