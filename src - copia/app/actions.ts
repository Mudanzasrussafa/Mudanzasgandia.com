"use server";

/**
 * Server action que recibe los datos del formulario de presupuesto.
 *
 * IMPORTANTE: este es un placeholder. Para que funcione realmente,
 * conéctalo a uno de estos servicios (recomiendo Resend por simplicidad):
 *
 * 1. RESEND (recomendado) — añade RESEND_API_KEY en .env y descomenta el bloque
 * 2. WEBHOOK (Zapier / Make) — pon la URL en BUDGET_WEBHOOK_URL
 * 3. FORMSPREE — sustituye este action por POST directo a Formspree
 *
 * Por ahora solo registra en consola y devuelve éxito para que la UI funcione.
 */

export type BudgetFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export async function submitBudgetRequest(
  _prev: BudgetFormState,
  formData: FormData,
): Promise<BudgetFormState> {
  const data = {
    name: formData.get("name")?.toString().trim() ?? "",
    phone: formData.get("phone")?.toString().trim() ?? "",
    email: formData.get("email")?.toString().trim() ?? "",
    origin: formData.get("origin")?.toString().trim() ?? "",
    destination: formData.get("destination")?.toString().trim() ?? "",
    date: formData.get("date")?.toString().trim() ?? "",
    type: formData.get("type")?.toString().trim() ?? "",
    notes: formData.get("notes")?.toString().trim() ?? "",
  };

  // Validación mínima
  if (!data.name || !data.phone) {
    return {
      status: "error",
      message: "Por favor, indícanos al menos tu nombre y teléfono.",
    };
  }

  // ────────────────────────────────────────────────────────────
  // OPCIÓN 1 — RESEND (recomendado)
  // npm install resend
  // ────────────────────────────────────────────────────────────
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "web@mudanzasgandia.com",
  //   to: "info@mudanzasgandia.com",
  //   subject: `Nueva solicitud de presupuesto — ${data.name}`,
  //   text: JSON.stringify(data, null, 2),
  // });

  // ────────────────────────────────────────────────────────────
  // OPCIÓN 2 — WEBHOOK (Zapier, Make, n8n…)
  // ────────────────────────────────────────────────────────────
  // if (process.env.BUDGET_WEBHOOK_URL) {
  //   await fetch(process.env.BUDGET_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   });
  // }

  // De momento solo log en servidor — para verificar conexión
  console.log("[presupuesto] solicitud recibida:", data);

  return {
    status: "success",
    message: "Hemos recibido tu solicitud. Te llamamos en menos de 24h.",
  };
}
