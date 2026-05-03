/**
 * Zonas geográficas — pueblos de La Safor donde operamos.
 * Cada zona genera una página SEO en /mudanzas-{slug}.
 */

export type Zone = {
  slug: string;
  name: string;
  description: string;
  distance?: string;
};

export const ZONES: Zone[] = [
  {
    slug: "gandia",
    name: "Gandia",
    description: "Capital de La Safor. Mudanzas en el centro, Grau, Corea, Plaza Major y todos los barrios.",
  },
  {
    slug: "playa-de-gandia",
    name: "Playa de Gandia",
    description: "Mudanzas en la zona playa, edificios de altura, Venecia, San Pedro y todo el litoral.",
    distance: "5 km",
  },
  {
    slug: "oliva",
    name: "Oliva",
    description: "Mudanzas en Oliva pueblo, Oliva Nova y Pego. Mudanzas locales y a Valencia capital.",
    distance: "10 km",
  },
  {
    slug: "daimus",
    name: "Daimús",
    description: "Mudanzas en Daimús y Guardamar de la Safor. Pueblos pequeños, mudanzas rápidas.",
    distance: "4 km",
  },
  {
    slug: "bellreguard",
    name: "Bellreguard",
    description: "Mudanzas en Bellreguard, Miramar y Piles. Cobertura completa en la costa.",
    distance: "6 km",
  },
  {
    slug: "tavernes-de-la-valldigna",
    name: "Tavernes de la Valldigna",
    description: "Mudanzas en Tavernes, Benifairó y Simat de la Valldigna. Norte de La Safor.",
    distance: "20 km",
  },
  {
    slug: "xeraco",
    name: "Xeraco",
    description: "Mudanzas en Xeraco, Xeresa y Playa de Xeraco. Mudanzas locales y a costa.",
    distance: "10 km",
  },
  {
    slug: "real-de-gandia",
    name: "Real de Gandia",
    description: "Mudanzas en Real de Gandia, Beniarjó y Almoines. Mudanzas en el interior.",
    distance: "3 km",
  },
  {
    slug: "beniarjo",
    name: "Beniarjó",
    description: "Mudanzas en Beniarjó, Palmera y Rafelcofer. Pueblos del corazón de La Safor.",
    distance: "5 km",
  },
  {
    slug: "miramar",
    name: "Miramar",
    description: "Mudanzas en Miramar y Piles. Costa de La Safor, edificios bajos y casas.",
    distance: "8 km",
  },
];
