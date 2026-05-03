/**
 * Servicios reales de Mudanzas Russafa (extraídos de mudanzasrussafa.com),
 * adaptados al ámbito de Gandia y La Safor.
 */

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
    slug: "mudanzas-particulares",
    shortTitle: "Mudanzas particulares",
    title: "Mudanzas particulares en Gandia",
    description: "Desmontamos, protegemos y movemos tu hogar como si fuese nuestro.",
    longDescription:
      "Mudarte de casa en Gandia puede ser un desafío, pero con nosotros todo será más sencillo. Nos encargamos de cada detalle, desde el embalaje hasta el transporte. Y si prefieres encargarte tú mismo del embalaje, te proporcionamos los materiales necesarios para que tus pertenencias estén bien protegidas.",
    bullets: [
      "Desmontaje y montaje de muebles incluido",
      "Embalaje profesional con materiales de calidad",
      "Tramitación de permisos de estacionamiento",
      "Equipo propio formado en mudanzas",
      "Seguro de responsabilidad civil incluido",
      "Presupuesto cerrado por escrito",
    ],
    keywords: ["mudanzas particulares Gandia", "mudanzas hogar Gandia", "mudar de casa Gandia"],
  },
  {
    slug: "mudanzas-pequenas",
    shortTitle: "Mudanzas pequeñas",
    title: "Mudanzas pequeñas y económicas en Gandia",
    description: "¿Pocos muebles? Los presupuestos más económicos de La Safor.",
    longDescription:
      "Si lo que necesitas es trasladar pocos muebles o realizar una mudanza de menor escala en Gandia, también podemos ayudarte. Ofrecemos un servicio ágil y económico para que el proceso sea rápido y sin complicaciones, pero con la misma calidad y cuidado que caracteriza a nuestras mudanzas más grandes. ¿Eres flexible con la fecha? Podemos ajustarte aún más el precio.",
    bullets: [
      "Servicio ideal para pisos pequeños o estudios",
      "Tarifas reducidas con flexibilidad de fechas",
      "El mismo cuidado que en mudanzas grandes",
      "Presupuesto sin compromiso en 24h",
      "Cobertura completa en La Safor",
    ],
    keywords: ["mudanzas pequeñas Gandia", "mudanzas baratas Gandia", "mudanzas económicas Gandia"],
  },
  {
    slug: "mudanzas-oficinas",
    shortTitle: "Mudanzas de oficinas",
    title: "Mudanzas de oficinas en Gandia",
    description: "Organizamos y trasladamos tu empresa con logística adaptada.",
    longDescription:
      "Sabemos lo importante que es para las empresas minimizar el tiempo de inactividad durante una mudanza. Por eso, nos especializamos en traslados de oficinas en Gandia. Nos encargamos de todo: desde el embalaje de documentación hasta el montaje del mobiliario en tu nueva ubicación. Con nosotros, tu negocio estará operativo en el menor tiempo posible.",
    bullets: [
      "Planificación previa con tu responsable",
      "Mudanzas en fines de semana o nocturnas",
      "Etiquetado y trazabilidad de cada caja",
      "Embalaje específico para equipos informáticos",
      "Montaje completo en destino",
      "Coordinador único durante todo el proceso",
    ],
    keywords: ["mudanzas oficinas Gandia", "traslado empresa Gandia", "mudanza corporativa Gandia"],
  },
  {
    slug: "mudanzas-nacionales",
    shortTitle: "Mudanzas nacionales",
    title: "Mudanzas nacionales desde Gandia",
    description: "Rutas habituales entre Gandia y el resto de España.",
    longDescription:
      "Disponemos de diferentes rutas habituales entre Gandia y el resto del país. Si te mudas a Madrid, Barcelona, Sevilla, Bilbao o cualquier otro punto de España, nosotros nos encargamos. Tenemos experiencia en mudanzas a larga distancia con la misma garantía y profesionalidad que en una mudanza local.",
    bullets: [
      "Rutas regulares a Madrid, Barcelona, Sevilla y Bilbao",
      "Mudanzas a cualquier punto de España bajo demanda",
      "Camiones propios con seguimiento GPS",
      "Seguro de mercancías de larga distancia",
      "Plazos de entrega cerrados",
    ],
    keywords: ["mudanzas nacionales Gandia", "mudanzas larga distancia Gandia", "mudanza España"],
  },
  {
    slug: "mudanzas-internacionales",
    shortTitle: "Mudanzas internacionales",
    title: "Mudanzas internacionales desde Gandia",
    description: "Te llevamos a cualquier país de Europa con todo el papeleo resuelto.",
    longDescription:
      "Si te mudas a Francia, Alemania, Reino Unido, Países Bajos o cualquier otro país europeo, nos encargamos de todo el proceso, incluyendo la documentación aduanera. Nuestra experiencia en mudanzas internacionales garantiza que tus enseres lleguen a destino en perfectas condiciones y dentro del plazo acordado.",
    bullets: [
      "Cobertura europea completa",
      "Gestión documental y aduanera incluida",
      "Embalaje específico para transporte internacional",
      "Seguro internacional de mercancías",
      "Coordinación puerta a puerta",
    ],
    keywords: ["mudanzas internacionales Gandia", "mudanza Europa Gandia", "mudanza extranjero"],
  },
  {
    slug: "guardamuebles",
    shortTitle: "Guardamuebles",
    title: "Guardamuebles en Gandia y La Safor",
    description: "Guardamos tus muebles el tiempo que necesites, sin permanencia.",
    longDescription:
      "Ofrecemos un servicio de guardamuebles el tiempo que necesites. Disponemos de espacios desde pocos metros cuadrados hasta naves completas, vigilados 24 horas y con control de humedad. Sin permanencia mínima: alquilas los días que necesites. Ideal para mudanzas escalonadas, reformas o si te marchas temporalmente al extranjero.",
    bullets: [
      "Espacios desde 2 m² hasta naves completas",
      "Vigilancia 24/7 y control de humedad",
      "Sin permanencia mínima",
      "Acceso a tus muebles cuando lo necesites",
      "Inventario detallado de cada caja",
    ],
    keywords: ["guardamuebles Gandia", "trastero Gandia", "almacenaje muebles Gandia"],
  },
  {
    slug: "embalaje-de-contenidos",
    shortTitle: "Embalaje de contenidos",
    title: "Embalaje de contenidos en Gandia",
    description: "Embalamos tus muebles y enseres para que no tengas que preocuparte de nada.",
    longDescription:
      "Utilizamos materiales de alta calidad para proteger cada objeto, asegurando que lleguen en perfecto estado a su destino. Nuestro equipo embala cuadros, espejos, lámparas, vajilla, libros y todo tipo de objetos delicados con técnicas profesionales. Si contratas el servicio completo y al final no usas algunas cajas, te las regalamos.",
    bullets: [
      "Cajas de cartón doble canal",
      "Papel burbuja y mantas para muebles",
      "Embalaje específico para objetos delicados",
      "Etiquetado por habitación",
      "Si no usas las cajas, te las regalamos",
    ],
    keywords: ["embalaje mudanzas Gandia", "cajas mudanza Gandia", "embalar muebles Gandia"],
  },
  {
    slug: "desmontaje-y-montaje",
    shortTitle: "Desmontaje y montaje",
    title: "Desmontaje y montaje de muebles en Gandia",
    description: "Desmontamos tus muebles y los volvemos a montar en la nueva ubicación.",
    longDescription:
      "Nos ocupamos de desmontar tus muebles antes del traslado y volverlos a montar en su destino para que no tengas que preocuparte. Tenemos experiencia con armarios empotrados, camas, mesas, librerías Ikea, muebles modulares y muebles de obra. Conservamos toda la tornillería en bolsas etiquetadas para que el montaje sea perfecto.",
    bullets: [
      "Equipo con herramientas profesionales",
      "Especialistas en armarios complejos y modulares",
      "Tornillería organizada y etiquetada",
      "Reparación de pequeños daños durante el desmontaje",
      "Montaje rápido en destino",
    ],
    keywords: ["desmontaje muebles Gandia", "montaje muebles Gandia", "armar muebles Gandia"],
  },
  {
    slug: "elevador-montamuebles",
    shortTitle: "Elevador montamuebles",
    title: "Elevador montamuebles en Gandia",
    description: "Elevadores de hasta 30 metros para pisos altos sin ascensor.",
    longDescription:
      "Contamos con elevadores montamuebles de hasta 30 metros de altura para facilitar el acceso en mudanzas de pisos altos o en edificios sin ascensor. Es la solución más rápida, segura y económica para subir o bajar muebles voluminosos sin riesgo de daños y sin necesidad de subirlos por la escalera.",
    bullets: [
      "Elevadores de hasta 30 metros de altura",
      "Operarios con carnet específico",
      "Tramitación de permisos de calle incluida",
      "Mucho más rápido que subir por escalera",
      "Sin riesgo de daños en muebles ni paredes",
    ],
    keywords: ["elevador muebles Gandia", "montamuebles Gandia", "subir muebles piso alto Gandia"],
  },
  {
    slug: "vaciado-de-viviendas",
    shortTitle: "Vaciado de viviendas",
    title: "Vaciado de viviendas en Gandia",
    description: "Vaciado integral de viviendas con traslado al ecoparque.",
    longDescription:
      "Disponemos de servicio de vaciado integral de viviendas y traslado al ecoparque o al lugar que indiques. Es el servicio ideal para herencias, viviendas que vas a reformar o pisos que se ponen en venta y necesitan estar vacíos. Nos llevamos absolutamente todo, dejamos la casa limpia y gestionamos los residuos.",
    bullets: [
      "Vaciado integral en 1-2 días",
      "Separación y reciclaje de residuos",
      "Traslado al ecoparque incluido",
      "Casa limpia al terminar",
      "Ideal para herencias y reformas",
    ],
    keywords: ["vaciado pisos Gandia", "vaciar vivienda Gandia", "vaciado herencias Gandia"],
  },
];
