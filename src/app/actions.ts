"use server";

import { Resend } from "resend";

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

  // Verificar que las variables de entorno están configuradas
  const apiKey = process.env.RESEND_API_KEY;
  const emailDestino = process.env.EMAIL_DESTINO;

  if (!apiKey || !emailDestino) {
    console.error("[presupuesto] Faltan variables de entorno RESEND_API_KEY o EMAIL_DESTINO");
    return {
      status: "error",
      message: "Error de configuración del servidor. Por favor, llámanos al 603 280 171.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #02403D; color: #E7E3D0; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; color: #6BCE42;">Nueva solicitud de presupuesto</h1>
          <p style="margin: 8px 0 0 0; color: #E7E3D0;">mudanzasgandia.com</p>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #ddd;">
          <h2 style="color: #02403D; margin-top: 0;">Datos del cliente</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Nombre:</td><td style="padding: 8px 0;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Teléfono:</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #02403D;">${data.phone}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td style="padding: 8px 0;">${data.email || "<em>no facilitado</em>"}</td></tr>
          </table>
          <h2 style="color: #02403D; margin-top: 24px;">Detalles de la mudanza</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Desde:</td><td style="padding: 8px 0;">${data.origin || "<em>no indicado</em>"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Hasta:</td><td style="padding: 8px 0;">${data.destination || "<em>no indicado</em>"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Fecha aprox:</td><td style="padding: 8px 0;">${data.date || "<em>flexible</em>"}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Tipo:</td><td style="padding: 8px 0;">${data.type || "<em>no indicado</em>"}</td></tr>
          </table>
          ${data.notes ? `<h2 style="color: #02403D; margin-top: 24px;">Comentarios</h2><p style="background: white; padding: 12px; border-radius: 4px; border-left: 4px solid #6BCE42;">${data.notes}</p>` : ""}
          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 13px;">
            <p>Lead recibido desde <strong>mudanzasgandia.com</strong></p>
            <p>Recuerda responder en menos de 24h para mantener la promesa de la web.</p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Mudanzas Gandia <onboarding@resend.dev>",
      to: emailDestino,
      replyTo: data.email || undefined,
      subject: `Nueva solicitud de presupuesto — ${data.name}`,
      html: emailHtml,
    });

    return {
      status: "success",
      message: "Hemos recibido tu solicitud. Te llamamos en menos de 24h.",
    };
  } catch (error) {
    console.error("[presupuesto] Error al enviar email:", error);
    return {
      status: "error",
      message: "No hemos podido enviar tu solicitud. Por favor, llámanos al 603 280 171.",
    };
  }
}
