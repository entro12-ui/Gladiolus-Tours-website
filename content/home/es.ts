import type { HomeContent } from "./types"

export const esHomeContent: HomeContent = {
  metadata: {
    title: "Safaris y tours en Tanzania | Serengeti, Kilimanjaro y Zanzíbar | Gladiolus Tours",
    description:
      "Gladiolus Tours ofrece paquetes de safari en Tanzania para todos los presupuestos — desde safaris en grupo económicos hasta circuitos privados premium. Explore el Serengeti, Ngorongoro, Kilimanjaro, Tarangire y Zanzíbar con expertos locales de confianza.",
    keywords: [
      "paquetes safari Tanzania",
      "safaris asequibles Tanzania",
      "safari económico Tanzania",
      "safari Serengeti",
      "safari familiar Tanzania",
      "safari privado Tanzania",
      "safari africano de lujo",
      "trek Kilimanjaro",
      "tours cráter Ngorongoro",
      "agencia safari Arusha",
      "safari Gran Migración",
      "vacaciones playa Zanzíbar",
      "expertos viaje Tanzania",
      "safari grupo Tanzania",
      "safari gama media Tanzania",
    ],
    openGraphTitle: "Paquetes de safari en Tanzania para cada viajero | Gladiolus Tours",
    openGraphDescription:
      "Desde aventuras económicas hasta safaris privados premium — explore Serengeti, Ngorongoro, Kilimanjaro, Tarangire y Zanzíbar con Gladiolus Tours.",
    twitterTitle: "Safaris en Tanzania para todos los presupuestos | Gladiolus Tours",
    twitterDescription:
      "Safaris en Tanzania del presupuesto al premium — paquetes Serengeti, Kilimanjaro y Zanzíbar adaptados a usted.",
    openGraphLocale: "es_ES",
  },
  hero: {
    badge: "Tanzania · Kilimanjaro · Zanzíbar · Todos los Presupuestos",
    title: "Safaris de Lujo y Asequibles en Tanzania,",
    titleHighlight: "Treks al Kilimanjaro y Vacaciones en Zanzíbar",
    description:
      "Descubra Tanzania con ofertas flexibles diseñadas para cada viajero y cada presupuesto: desde safaris en grupo económicos y aventuras familiares de gama media hasta experiencias privadas premium por el Serengeti, Ngorongoro, Kilimanjaro, Tarangire y Zanzíbar.",
    descriptionBold: "cada viajero y cada presupuesto",
    rating: "4.9/5",
    guests: "2.800+ viajeros",
    experience: "22 años de experiencia",
    planAdventure: "Planifique su aventura",
    whatsappQuote: "Presupuesto rápido por WhatsApp",
    scroll: "Desplazar",
    trustedExperts: "Expertos locales de confianza",
    trustedSubtext: "Con sede en Arusha, Tanzania",
    stats: [
      { value: "2.800+", label: "Viajeros satisfechos" },
      { value: "22", label: "Años de experiencia" },
      { value: "Todos", label: "Presupuestos bienvenidos" },
      { value: "100%", label: "Planes a medida" },
    ],
  },
  intro: {
    eyebrow: "Bienvenido a Gladiolus Tours",
    title: "Experiencias auténticas en Tanzania",
    titleLine2: "Para cada viajero",
    description:
      "En Gladiolus Tours creemos que las experiencias inolvidables en Tanzania deben ser accesibles para todos. Ya planee un safari económico, una escapada familiar cómoda de gama media, una luna de miel romántica o una aventura privada premium, nuestro equipo local crea viajes adaptados a su estilo y presupuesto.",
    budget: "Económico",
    midRange: "Gama media",
    premium: "Premium",
    tiers: [
      { tier: "Económico", color: "bg-[#8DAE6F]", label: "Safaris en grupo y compartidos" },
      { tier: "Gama media", color: "bg-[#B8A840]", label: "Cómodo y flexible" },
      { tier: "Premium", color: "bg-[#2D4A30]", label: "Privado y exclusivo" },
    ],
  },
  safariPackages: {
    eyebrow: "Paquetes Safari · Todos los Presupuestos",
    title: "Paquetes de safari en Tanzania diseñados a mano",
    subtitle:
      "Ya viaje solo con un presupuesto ajustado, en familia con un paquete de gama media o busque una experiencia privada exclusiva — tenemos un safari pensado para usted.",
    sampleItinerary: "Itinerario de ejemplo:",
    viewFullItinerary: "Ver el itinerario completo",
    bookSafari: "Reservar este safari",
    viewAll: "Ver todos los paquetes safari",
    minPax: "Mín. {minPax} pers.",
    packages: [
      {
        title: "Safari Big Five 3 días",
        duration: "3 DÍAS",
        badge: "MEJOR RELACIÓN CALIDAD-PRECIO",
        priceFrom: "Desde 1.200 $",
        minPax: "4",
        image: "/gallery/safari1.jpeg",
        link: "/safaris/big-five",
        description:
          "Safari corto ideal para quienes visitan por primera vez y quieren ver los Big Five en Tarangire y Manyara.",
        shortItinerary: [
          "Día 1: Arusha al parque nacional de Tarangire",
          "Día 2: Día completo de safari en Tarangire",
          "Día 3: Lago Manyara a Arusha",
        ],
        fullItinerary: [
          { day: "Día 1", activity: "Arusha al parque nacional de Tarangire con safari" },
          {
            day: "Día 2",
            activity: "Día completo de safari en Tarangire, enfoque en elefantes y leones",
          },
          { day: "Día 3", activity: "Mañana en el lago Manyara y regreso a Arusha" },
        ],
      },
      {
        title: "6 días descubriendo las maravillas de Tanzania",
        duration: "6 DÍAS",
        badge: "EL MÁS POPULAR",
        priceFrom: "Desde 2.800 $",
        minPax: "4",
        image: "/gallery/safari2.jpeg",
        link: "/safaris/wonders-of-tanzania",
        description: "Safari completo que cubre Tarangire, Serengeti y el cráter del Ngorongoro.",
        shortItinerary: [
          "Día 1: Arusha a Tarangire",
          "Día 2-3: Parque nacional del Serengeti",
          "Día 4-5: Cráter del Ngorongoro",
          "Día 6: Regreso a Arusha",
        ],
        fullItinerary: [
          { day: "Día 1", activity: "Arusha al parque nacional de Tarangire" },
          { day: "Día 2", activity: "Tarangire al Serengeti central" },
          { day: "Día 3", activity: "Día completo en el Serengeti" },
          { day: "Día 4", activity: "Serengeti al cráter del Ngorongoro" },
          { day: "Día 5", activity: "Día completo de safari en el cráter del Ngorongoro" },
          { day: "Día 6", activity: "Ngorongoro a Arusha" },
        ],
      },
      {
        title: "Safari Gran Migración 7 días",
        duration: "7 DÍAS",
        badge: "SIGNATURE",
        priceFrom: "Desde 4.000 $",
        minPax: "2",
        image: "/gallery/safari3.jpeg",
        link: "/safaris/great-migration-safari",
        description:
          "Siga la Gran Migración con guía privado y campamentos de lujo en el Serengeti norte.",
        shortItinerary: [
          "Día 1-2: Serengeti central",
          "Día 3-5: Serengeti norte (río Mara)",
          "Día 6: Cráter del Ngorongoro",
          "Día 7: Regreso a Arusha",
        ],
        fullItinerary: [
          { day: "Día 1", activity: "Arusha al Serengeti central" },
          { day: "Día 2", activity: "Safaris en el Serengeti central" },
          { day: "Día 3", activity: "Traslado al Serengeti norte" },
          { day: "Día 4", activity: "Seguimiento de la Gran Migración" },
          { day: "Día 5", activity: "Zona de cruce del río Mara" },
          { day: "Día 6", activity: "Día completo en el cráter del Ngorongoro" },
          { day: "Día 7", activity: "Regreso a Arusha" },
        ],
      },
      {
        title: "Safari de lujo sabana y playa 8 días",
        duration: "8 DÍAS",
        badge: "PREMIUM",
        priceFrom: "Desde 5.400 $",
        minPax: "2",
        image: "/gallery/safari4.jpeg",
        link: "/safaris/bush-and-beach",
        description:
          "Combine un safari de lujo en Serengeti y Ngorongoro con relax en las playas de Zanzíbar.",
        shortItinerary: [
          "Día 1-5: Safari del circuito norte",
          "Día 6-8: Relax en la playa en Zanzíbar",
        ],
        fullItinerary: [
          { day: "Día 1", activity: "Arusha a Tarangire" },
          { day: "Día 2-4", activity: "Parque nacional del Serengeti" },
          { day: "Día 5", activity: "Cráter del Ngorongoro" },
          { day: "Día 6", activity: "Vuelo a Zanzíbar" },
          { day: "Día 7", activity: "Stone Town y visita a las especias" },
          { day: "Día 8", activity: "Relax en la playa y salida" },
        ],
      },
      {
        title: "Safari Big Five 3 días",
        duration: "3 DÍAS",
        badge: "ESCAPADA CORTA",
        priceFrom: "Desde 1.200 $",
        minPax: "4",
        image: "/gallery/safari5.jpeg",
        link: "/safaris/big-five-short",
        description:
          "Safari intensivo de 3 días centrado en los Big Five en Tarangire y el lago Manyara.",
        shortItinerary: [
          "Día 1: Arusha a Tarangire",
          "Día 2: Día completo en Tarangire",
          "Día 3: Lago Manyara a Arusha",
        ],
        fullItinerary: [
          { day: "Día 1", activity: "Traslado a Tarangire con safari" },
          {
            day: "Día 2",
            activity: "Día completo de safari, enfoque en elefantes y leones",
          },
          { day: "Día 3", activity: "Mañana en el lago Manyara y regreso a Arusha" },
        ],
      },
    ],
  },
  treks: {
    eyebrow: "Aventuras en la montaña",
    title: "Treks al monte Kilimanjaro y al monte Meru",
    subtitle:
      "Ascienda la cima más alta de África o explore el monte Meru en el parque nacional de Arusha. Guías profesionales, rutas centradas en la seguridad y altas tasas de éxito en la cumbre.",
    guidedTrek: "Trek guiado",
    viewRoute: "Ver la ruta",
    quickQuote: "Presupuesto rápido",
    routes: [
      {
        title: "Ruta Marangu 5 días - Ascenso al Kilimanjaro",
        duration: "5 DÍAS",
        price: "Desde 2.100 $",
        image: "/gallery/Marangu Route.jpeg",
        link: "/treks/kilimanjaro-marangu-route",
        description:
          "La ruta más cómoda del Kilimanjaro con alojamiento en refugios. Ideal para principiantes que buscan una experiencia clásica hasta el pico Uhuru (5.895 m).",
        highlight: "Ideal para principiantes",
      },
      {
        title: "Ruta Machame 7 días - Kilimanjaro",
        duration: "7 DÍAS",
        price: "Desde 2.200 $",
        image: "/gallery/Machame Route.jpeg",
        link: "/treks/kilimanjaro-machame-route",
        description:
          "La ruta más popular del Kilimanjaro, con paisajes variados y una de las mejores tasas de éxito en la cumbre.",
        highlight: "Ruta más popular",
      },
      {
        title: "Ruta Lemosho 8 días - Kilimanjaro",
        duration: "8 DÍAS",
        price: "Desde 2.380 $",
        image: "/gallery/Lemosho Route.jpeg",
        link: "/treks/kilimanjaro-lemosho-route",
        description:
          "Aproximación pintoresca y aislada con excelente perfil de aclimatación y experiencia de trek premium.",
        highlight: "Mejor tasa de éxito",
      },
      {
        title: "Ruta Rongai 6 días - Kilimanjaro",
        duration: "8 DÍAS",
        price: "Desde 2.150 $",
        image: "/gallery/Rongai Route.jpeg",
        link: "/treks/kilimanjaro-rongai-route",
        description:
          "Aproximación tranquila por el norte, cerca de la frontera con Kenia, con condiciones secas y ascenso progresivo.",
        highlight: "Ruta menos transitada",
      },
      {
        title: "Trek al monte Meru 4 días - Arusha",
        duration: "4 DÍAS",
        price: "Desde 1.000 $",
        image: "/gallery/Mount meru, Arusha national park.jpeg",
        link: "/treks/mount-meru-trek",
        description:
          "Experiencia rica en fauna en el parque nacional de Arusha y excelente aclimatación antes del Kilimanjaro.",
        highlight: "Mejor trek corto",
      },
    ],
  },
  founders: {
    eyebrow: "Dirección",
    title: "Conozca a los fundadores",
    subtitle:
      "Profesionales apasionados del viaje en Tanzania, dedicados a safaris auténticos de clase mundial gracias a una auténtica experiencia local.",
    people: [
      {
        name: "Sunday Mtui",
        role: "Cofundador y especialista principal en safari",
        image: "/gallery/tour-guide.webp",
        bio: "Con más de dos décadas de liderazgo en safaris por el Serengeti, Ngorongoro y el monte Kilimanjaro, Sunday aporta un conocimiento local inigualable y un acompañamiento cálido y personalizado.",
      },
      {
        name: "Francois Martin",
        role: "Cofundador y consultor de viajes internacional",
        image: "/gallery/photo-00.webp",
        bio: "Especialista en planificación de safaris internacionales y alianzas de alojamiento para todos los presupuestos; Francois ayuda a cada viajero a encontrar la opción ideal según su estilo y recursos.",
      },
    ],
  },
  highlights: {
    eyebrow: "Lo que ofrecemos",
    title: "Experiencias safari diseñadas a su medida",
    subtitle:
      "Cada experiencia se crea con cuidado, experiencia local y flexibilidad — desde aventuras asequibles hasta viajes privados a medida.",
    items: [
      {
        icon: "🚙",
        title: "Land Cruisers 4x4 privados",
        desc: "Vehículos safari dedicados para grupos pequeños, familias y viajeros en solitario.",
      },
      {
        icon: "🏕️",
        title: "Alojamientos flexibles",
        desc: "Campamentos de tienda económicos, lodges cómodos y suites privadas premium.",
      },
      {
        icon: "🧭",
        title: "Guías locales expertos",
        desc: "Guías certificados y apasionados, con profundo conocimiento de los ecosistemas tanzanos.",
      },
      {
        icon: "✈️",
        title: "Traslados desde el aeropuerto",
        desc: "Recogida fluida desde los aeropuertos de Kilimanjaro y Arusha, 24 horas al día, 7 días a la semana.",
      },
      {
        icon: "🛩️",
        title: "Safaris en avión",
        desc: "Vuelos charter a parques remotos para viajeros con poco tiempo o que buscan comodidad.",
      },
      {
        icon: "💑",
        title: "Safaris de luna de miel",
        desc: "Experiencias románticas en la sabana, íntimas e inolvidables.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Aventuras familiares",
        desc: "Itinerarios adaptados a niños para un viaje familiar seguro, divertido y enriquecedor.",
      },
      {
        icon: "📷",
        title: "Expediciones fotográficas",
        desc: "Safaris fotográficos especializados con posicionamiento óptimo y consejos de luz.",
      },
    ],
  },
  partners: {
    eyebrow: "De confianza en todo el mundo",
    title: "Recomendado por las principales plataformas de viaje",
    subtitle:
      "Reconocido por viajeros safari internacionales y referencias importantes del turismo en África y en el mundo.",
    alt: "Socio de viajes",
  },
  testimonials: {
    eyebrow: "Opiniones Safari Tanzania",
    title: "Lo que dicen los viajeros sobre nuestros safaris en Tanzania",
    subtitle:
      "Lea experiencias auténticas de clientes sobre safaris en el Serengeti, visitas al cráter del Ngorongoro, ascensos al Kilimanjaro y estancias en la playa de Zanzíbar con nuestro equipo con sede en Arusha.",
    trustBadge: "Valoración 4.9/5 basada en más de 2.800 viajeros safari verificados.",
    items: [
      {
        name: "Emily & David - Reino Unido",
        location: "Safari Serengeti y Ngorongoro 7 días",
        review:
          "Gladiolus Tours nos organizó un safari inolvidable en el Serengeti. Presenciamos los cruces de río de la Gran Migración y vimos los Big Five en el cráter del Ngorongoro. Nuestro guía fue competente y profesional durante todo el viaje.",
      },
      {
        name: "Michael R. - Alemania",
        location: "Trek Kilimanjaro ruta Machame",
        review:
          "Ascender el monte Kilimanjaro por la ruta Machame fue una experiencia que cambia la vida. El equipo garantizó una excelente aclimatación y seguridad en cada etapa. Llegar al pico Uhuru fue increíble.",
      },
      {
        name: "Sarah M. - Estados Unidos",
        location: "Safari y vacaciones en la playa en Zanzíbar",
        review:
          "Nuestro safari en Tanzania combinó la fauna de Tarangire y Serengeti con días de relax en Zanzíbar. Todo estuvo perfectamente organizado, desde los lodges hasta los traslados. Recomiendo encarecidamente Gladiolus Tours.",
      },
    ],
  },
  migration: {
    eyebrow: "Disponibilidad limitada",
    title: "Gran Migración del Serengeti 2026",
    subtitle:
      "Presencie uno de los mayores espectáculos de la naturaleza: los cruces de río de ñus en el norte del Serengeti. Disponible en modalidades económica, gama media y premium.",
    explore: "Explorar safaris de migración",
    whatsapp: "Presupuesto rápido por WhatsApp",
    season: "Temporada alta: julio - septiembre 2026 · Reserve con antelación para asegurar sus fechas",
  },
  faq: {
    eyebrow: "Guía Safari Tanzania",
    title: "Preguntas frecuentes",
    subtitle:
      "¿Planifica un safari en Tanzania desde Arusha? Aquí encontrará respuestas a las preguntas habituales sobre safaris, Kilimanjaro y vacaciones en Zanzíbar.",
    items: [
      {
        q: "¿Cuál es la mejor época para un safari en el Serengeti?",
        a: "De junio a octubre, la observación de fauna en temporada seca es excelente. De julio a septiembre es el pico de los cruces de río de la Gran Migración en el norte del Serengeti. De diciembre a marzo, la temporada de nacimientos en el sur del Serengeti es ideal — una excelente opción para viajeros con presupuesto limitado.",
      },
      {
        q: "¿Cuántos días se necesitan para un safari en Tanzania?",
        a: "La mayoría de los paquetes de safari en Tanzania duran de 5 a 10 días, combinando Serengeti, zona de conservación de Ngorongoro, Tarangire y a veces Zanzíbar. También existen opciones más cortas de 3-4 días para viajeros con presupuesto limitado.",
      },
      {
        q: "¿El trek al monte Kilimanjaro es apto para principiantes?",
        a: "Sí — el Kilimanjaro es apto para principiantes si se eligen rutas favorables a la aclimatación como Lemosho o Machame. Nuestros guías con sede en Arusha garantizan intentos de cumbre progresivos y seguros para todos los niveles.",
      },
      {
        q: "¿Ofrecen safaris para todos los presupuestos?",
        a: "Por supuesto. Gladiolus Tours ofrece safaris en grupo económicos, paquetes cómodos de gama media y circuitos premium totalmente privados. Todos incluyen guías locales profesionales y vehículos safari 4x4 — solo varían la categoría del alojamiento y el tamaño del grupo.",
      },
    ],
  },
  finalCta: {
    title: "¿Listo para explorar Tanzania a su manera?",
    subtitle:
      "Desde safaris en grupo asequibles hasta circuitos privados exclusivos — nuestro equipo con sede en Arusha crea el itinerario ideal según su presupuesto y estilo de viaje.",
    primary: "Obtenga su plan de safari a medida",
    whatsapp: "Contáctenos por WhatsApp rápidamente",
  },
  seoLinks: {
    title: "Explore Tanzania con expertos safari locales",
    beforeSerengeti: "Descubra aventuras safari inolvidables en",
    beforeNgorongoro: ",",
    beforeKili: ",",
    beforeZanzibar: ", ",
    beforeTarangire: ", y ",
    and: ".",
  },
  geo: {
    title: "Safaris en Tanzania con salida desde Arusha",
    description:
      "Gladiolus Tours opera desde Usa River, Arusha — la puerta de entrada al parque nacional del Serengeti, la zona de conservación de Ngorongoro, el parque nacional de Tarangire, el lago Manyara, el monte Kilimanjaro y Zanzíbar. Todos los presupuestos son bienvenidos — safaris en grupo, gama media y privados disponibles todo el año.",
  },
  mobileCta: {
    label: "Tours en Tanzania · Todos los Presupuestos",
    button: "Planificar mi safari",
  },
  breadcrumbHome: "Inicio",
}
