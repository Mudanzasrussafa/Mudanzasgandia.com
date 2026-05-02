/**
 * Configuración central del sitio.
 * Cambia aquí los datos y se actualizan en toda la web.
 */

export const SITE = {
  name: "Mudanzas Gandia",
  legalName: "Mudanzas Russafa",
  domain: "mudanzasgandia.com",
  url: "https://mudanzasgandia.com",
  defaultTitle: "Mudanzas Gandia · Empresa de mudanzas y guardamuebles en La Safor",
  defaultDescription:
    "Empresa de mudanzas en Gandia y La Safor. Mudanzas locales, nacionales e internacionales, guardamuebles, embalaje y traslados de oficinas. Presupuesto sin compromiso.",
  locale: "es-ES",
  language: "es",

  // Contacto — sustituye estos valores por los reales
  phone: "+34 603 28 01 71",
  phoneClean: "+34603280171",
  whatsapp: "+34603280171",
  email: "info@mudanzasgandia.com",

  // Dirección física en Gandia (sustituir por la real)
  address: {
    street: "Calle Ejemplo, 1",
    city: "Gandia",
    region: "Valencia",
    postalCode: "46700",
    country: "ES",
  },

  // Coordenadas para Schema LocalBusiness y Google Maps
  geo: {
    latitude: 38.9685,
    longitude: -0.1819,
  },

  // Horario comercial
  openingHours: [
    { day: ["Mon", "Tue", "Wed", "Thu", "Fri"], open: "09:00", close: "19:00" },
    { day: "Sat", open: "10:00", close: "14:00" },
  ],

  // Marca paraguas
  parentBrand: {
    name: "Mudanzas Russafa",
    url: "https://mudanzasrussafa.com",
  },

  // Redes sociales
  social: {
    instagram: "https://instagram.com/mudanzasrussafa",
    facebook: "https://facebook.com/mudanzasrussafa",
    google: "", // URL de la ficha de Google Business Profile cuando exista
  },
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría pedir presupuesto para una mudanza en Gandia.";

export const buildWhatsappUrl = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

export const buildPhoneUrl = () => `tel:${SITE.phoneClean}`;
