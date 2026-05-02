export type Zone = {
  slug: string;
  name: string;
  description: string;
  population?: number;
  distance?: string;
};

export const ZONES: Zone[] = [
  {
    slug: "gandia",
    name: "Gandia",
    description: "Centro, Corea, Roís de Corella, Beniopa, Benipeixcar y todos los barrios.",
    population: 75000,
  },
  {
    slug: "playa-de-gandia",
    name: "Playa de Gandia",
    description: "Mudanzas en primera y segunda línea de playa, Grau y zona urbana.",
    distance: "4 km",
  },
  {
    slug: "oliva",
    name: "Oliva",
    description: "Mudanzas en Oliva pueblo, playa y urbanizaciones.",
    population: 26000,
    distance: "10 km",
  },
  {
    slug: "daimus",
    name: "Daimús",
    description: "Mudanzas en Daimús pueblo y playa.",
    distance: "5 km",
  },
  {
    slug: "bellreguard",
    name: "Bellreguard",
    description: "Mudanzas y guardamuebles en Bellreguard.",
    distance: "6 km",
  },
  {
    slug: "tavernes-de-la-valldigna",
    name: "Tavernes de la Valldigna",
    description: "Mudanzas en Tavernes y la comarca de la Valldigna.",
    population: 17000,
    distance: "20 km",
  },
  {
    slug: "xeraco",
    name: "Xeraco",
    description: "Mudanzas en Xeraco pueblo y playa.",
    distance: "10 km",
  },
  {
    slug: "real-de-gandia",
    name: "Real de Gandia",
    description: "Mudanzas en El Real de Gandia.",
    distance: "3 km",
  },
  {
    slug: "beniarjo",
    name: "Beniarjó",
    description: "Mudanzas en Beniarjó y municipios cercanos.",
    distance: "4 km",
  },
  {
    slug: "miramar",
    name: "Miramar",
    description: "Mudanzas en Miramar pueblo y playa.",
    distance: "7 km",
  },
];
