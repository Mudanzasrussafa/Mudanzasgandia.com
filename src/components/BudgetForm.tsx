"use client";

import { useActionState } from "react";
import { submitBudgetRequest, type BudgetFormState } from "@/app/actions";

const initialState: BudgetFormState = { status: "idle" };

const FIELD_BASE =
  "w-full rounded-xl border border-russafa-dark/10 bg-russafa-cream px-4 py-3 text-russafa-dark placeholder:text-russafa-gray/60 focus:border-russafa-lime focus:bg-white focus:outline-none transition";

export default function BudgetForm() {
  const [state, formAction, pending] = useActionState(submitBudgetRequest, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-3xl bg-russafa-lime p-10 text-center">
        <div className="text-6xl mb-4" aria-hidden="true">
          ✓
        </div>
        <h3 className="font-display text-3xl text-russafa-dark mb-3">¡Listo!</h3>
        <p className="text-russafa-dark/80 max-w-md mx-auto">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Nombre <span className="text-russafa-lime">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Cómo te llamas"
            className={FIELD_BASE}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Teléfono <span className="text-russafa-lime">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="600 000 000"
            className={FIELD_BASE}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          className={FIELD_BASE}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Desde dónde
          </label>
          <input
            type="text"
            name="origin"
            placeholder="Origen (ciudad o barrio)"
            className={FIELD_BASE}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Hasta dónde
          </label>
          <input
            type="text"
            name="destination"
            placeholder="Destino"
            className={FIELD_BASE}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Fecha aproximada
          </label>
          <input type="date" name="date" className={FIELD_BASE} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
            Tipo de mudanza
          </label>
          <select name="type" className={FIELD_BASE} defaultValue="">
            <option value="" disabled>
              Selecciona…
            </option>
            <option>Mudanza local</option>
            <option>Mudanza nacional</option>
            <option>Mudanza internacional</option>
            <option>Guardamuebles</option>
            <option>Oficina o empresa</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-russafa-dark mb-2">
          Cuéntanos brevemente
        </label>
        <textarea
          name="notes"
          rows={4}
          placeholder="Plantas, ascensor, volumen aproximado, fechas flexibles…"
          className={FIELD_BASE}
        />
      </div>

      {state.status === "error" && (
        <p className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="btn-russafa btn-russafa-dark w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Enviando…" : "Pedir presupuesto gratis"}
        {!pending && <span aria-hidden="true">→</span>}
      </button>

      <p className="text-xs text-russafa-gray text-center">
        Te respondemos en menos de 24h. Sin compromiso, sin sorpresas.
      </p>
    </form>
  );
}
