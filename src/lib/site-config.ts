/**
 * Configuración central del sitio.
 * Datos reales tomados de mudanzasrussafa.com.
 */

export const SITE = {
  name: "Mudanzas Gandia",
  legalName: "Mudanzas Russafa",
  legalEntity: "ADAPTED SERVICES 2000, SL",
  domain: "mudanzasgandia.com",
  url: "https://mudanzasgandia.com",
  defaultTitle: "Mudanzas en Gandia 🥇 | Mudanzas Russafa",
  defaultDescription:
    "Empresa de mudanzas en Gandia y La Safor. Mudanzas particulares, oficinas, pequeñas, nacionales e internacionales. Guardamuebles, embalaje y vaciado de viviendas. Presupuesto sin compromiso.",
  tagline: "Cada cambio es una nueva oportunidad",
  taglineFull: "Cada cambio es una nueva oportunidad. Y cada oportunidad comienza con una decisión.",
  locale: "es-ES",
  language: "es",

  // Contacto real (extraído de mudanzasrussafa.com)
  phone: "603 280 171",
  phoneSecondary: "680 701 702",
  phoneClean: "+34603280171",
  whatsapp: "+34603280171",
  email: "comercial@mudanzasrussafa.com",

  // Dirección sede principal Russafa (Torrente)
  address: {
    street: "Tonellet, 54, Pol. Industrial Mas del Jutge",
    city: "Torrente",
    region: "Valencia",
    postalCode: "46900",
    country: "ES",
  },

  // Coordenadas Gandia para schema local
  geo: {
    latitude: 38.9685,
    longitude: -0.1819,
  },

  // Otras sedes (de la matriz)
  otherOffices: [
    { street: "C. Enrique Soriano, 4", city: "Moncada", postalCode: "46113", region: "Valencia" },
    { street: "C. Bélgica 136", city: "Castellón de la Plana", postalCode: "12006", region: "Castellón" },
  ],

  // Horario comercial real
  openingHours: [
    { day: ["Mon", "Tue", "Wed", "Thu", "Fri"], open: "08:30", close: "19:30" },
  ],
  openingHoursText: "Lunes a viernes de 8:30 a 19:30",

  // Marca paraguas
  parentBrand: {
    name: "Mudanzas Russafa",
    url: "https://mudanzasrussafa.com",
  },

  // Redes / asociaciones reales
  social: {
    instagram: "",
    facebook: "",
    google: "",
  },

  associations: [
    { name: "FEDEM", description: "Federación Española de Mudanzas", url: "https://www.fedem.es/" },
    { name: "FVET", description: "Federación Valenciana de Transporte y Logística", url: "https://fvet.es/" },
    { name: "AEMCV", description: "Asociación Empresarios de Mudanzas Comunidad Valenciana", url: "https://aemcv.es/" },
  ],

  // Programas oficiales de la matriz
  programs: ["EMPYME 2025", "Labora Avalem Experiència 2023", "Ara empreses 2025"],

  yearsExperience: 15,
} as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, me gustaría pedir presupuesto para una mudanza en Gandia.";

export const buildWhatsappUrl = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

export const buildPhoneUrl = (alt = false) =>
  alt ? `tel:+34680701702` : `tel:${SITE.phoneClean}`;
