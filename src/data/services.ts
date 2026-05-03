export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  bullets: string[];
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "mudanzas-locales",
    title: "Mudanzas locales en Gandia",
    shortTitle: "Mudanzas locales",
    description:
      "Traslados rápidos y cuidadosos dentro de Gandia y La Safor. Embalaje, transporte y montaje incluidos.",
    longDescription:
      "Conocemos cada calle de Gandia, desde el centro hasta la Playa, pasando por Beniopa, Benipeixcar o el Grau. Coordinamos permisos de aparcamiento, accesos complicados y mudanzas con elevador cuando hace falta. Sin sorpresas, con presupuesto cerrado.",
    bullets: [
      "Embalaje profesional con material de primera",
      "Desmontaje y montaje de muebles",
      "Elevador y permisos de ayuntamiento",
      "Seguro a todo riesgo incluido",
    ],
    keywords: ["mudanzas Gandia", "mudanzas locales Gandia", "mudanzas baratas Gandia"],
  },
  {
    slug: "mudanzas-nacionales",
    title: "Mudanzas nacionales desde Gandia",
    shortTitle: "Mudanzas nacionales",
    description:
      "Trasladamos tu hogar o negocio desde Gandia a cualquier punto de España con seguimiento y plazos cerrados.",
    longDescription:
      "Flota propia y rutas habituales hacia Madrid, Barcelona, Andalucía y Norte. Planificamos el trayecto, gestionamos la logística y te damos un único interlocutor durante todo el proceso.",
    bullets: [
      "Trayectos directos sin transbordos",
      "Seguimiento del envío en tiempo real",
      "Equipos especializados en montaje",
      "Cobertura nacional completa",
    ],
    keywords: ["mudanzas nacionales Gandia", "mudanzas Gandia Madrid", "mudanzas Gandia Barcelona"],
  },
  {
    slug: "mudanzas-internacionales",
    title: "Mudanzas internacionales",
    shortTitle: "Mudanzas internacionales",
    description:
      "Gestión integral de mudanzas a Europa y resto del mundo: trámites aduaneros, embalaje export y transporte multimodal.",
    longDescription:
      "Si te mudas fuera de España, nos encargamos de toda la cadena: embalaje certificado, documentación aduanera, transporte por carretera, marítimo o aéreo, y entrega en destino. Asesoramiento personalizado en cada paso.",
    bullets: [
      "Trámites aduaneros gestionados",
      "Embalaje export certificado",
      "Transporte marítimo, aéreo y por carretera",
      "Red de partners en Europa y América",
    ],
    keywords: ["mudanzas internacionales Gandia", "mudanzas Europa", "mudanzas extranjero Valencia"],
  },
  {
    slug: "guardamuebles",
    title: "Guardamuebles en Gandia",
    shortTitle: "Guardamuebles",
    description:
      "Almacenamiento seguro por días, semanas o meses. Trasteros vigilados con acceso flexible y seguro.",
    longDescription:
      "Espacios desde pocos metros cuadrados hasta contenedores completos. Instalaciones limpias, secas y vigiladas 24/7. Ideal para reformas, mudanzas en dos tiempos, segundas residencias o necesidades de empresa.",
    bullets: [
      "Vigilancia 24/7 y control de accesos",
      "Espacios desde 2 m² hasta naves",
      "Sin permanencia mínima",
      "Recogida y entrega a domicilio",
    ],
    keywords: ["guardamuebles Gandia", "trasteros Gandia", "almacenaje muebles La Safor"],
  },
  {
    slug: "mudanzas-oficinas",
    title: "Mudanzas de oficinas y empresas",
    shortTitle: "Oficinas y empresas",
    description:
      "Traslado de oficinas con la mínima interrupción de tu actividad. Fines de semana, nocturno y por fases.",
    longDescription:
      "Planificamos el traslado en función de tu calendario laboral. Equipos especializados en mobiliario de oficina, archivos, equipos informáticos y servidores. Coordinamos con tu IT para minimizar el tiempo offline.",
    bullets: [
      "Traslados nocturnos y de fin de semana",
      "Coordinación con equipo IT",
      "Embalaje específico para electrónica",
      "Plan de mudanza por fases si procede",
    ],
    keywords: ["mudanzas oficinas Gandia", "mudanzas empresas Valencia", "traslado oficina Gandia"],
  },
  {
    slug: "embalaje",
    title: "Servicio de embalaje profesional",
    shortTitle: "Embalaje",
    description:
      "Material y mano de obra especializada para que cada objeto llegue intacto. Incluye obras de arte y delicados.",
    longDescription:
      "Cajas de doble onda, papel cebolla, mantas de protección, espumas a medida, embalaje exterior para obras de arte y antigüedades. Etiquetado por estancias para descarga ordenada.",
    bullets: [
      "Material de embalaje incluido",
      "Embalaje específico para objetos delicados",
      "Etiquetado por estancias",
      "Si no usas las cajas, te las regalamos",
    ],
    keywords: ["embalaje mudanza Gandia", "cajas mudanza Gandia", "embalaje profesional"],
  },
];
