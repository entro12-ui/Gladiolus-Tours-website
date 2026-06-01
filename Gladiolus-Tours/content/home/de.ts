import type { HomeContent } from "./types"

export const deHomeContent: HomeContent = {
  metadata: {
    title: "Tansania Safaris & Touren | Serengeti, Kilimandscharo & Sansibar | Gladiolus Tours",
    description:
      "Gladiolus Tours bietet Tansania-Safari-Pakete für jedes Budget — von günstigen Gruppensafaris bis zu premium Privattouren. Entdecken Sie Serengeti, Ngorongoro, Kilimandscharo, Tarangire und Sansibar mit vertrauenswürdigen lokalen Experten.",
    keywords: [
      "Tansania Safari Pakete",
      "günstige Tansania Safaris",
      "Budget Safari Tansania",
      "Serengeti Safari",
      "Familien Safari Tansania",
      "private Tansania Safari",
      "Luxus Afrika Safari",
      "Kilimandscharo Trekking",
      "Ngorongoro Krater Touren",
      "Arusha Safari Agentur",
      "Große Migration Safari",
      "Sansibar Strandurlaub",
      "Tansania Reiseexperten",
      "Gruppen Safari Tansania",
      "Mittelklasse Tansania Safari",
    ],
    openGraphTitle: "Tansania Safari Pakete für jeden Reisenden | Gladiolus Tours",
    openGraphDescription:
      "Von Budget-Abenteuern bis zu premium Privatsafaris — entdecken Sie Serengeti, Ngorongoro, Kilimandscharo, Tarangire und Sansibar mit Gladiolus Tours.",
    twitterTitle: "Tansania Safaris für jedes Budget | Gladiolus Tours",
    twitterDescription:
      "Tansania Safaris von Budget bis Premium — Serengeti, Kilimandscharo und Sansibar Pakete für Sie zugeschnitten.",
    openGraphLocale: "de_DE",
  },
  hero: {
    badge: "Tansania · Kilimandscharo · Sansibar · Alle Budgets",
    title: "Luxurioese und Preiswerte Tansania-Safaris,",
    titleHighlight: "Kilimandscharo-Treks und Sansibar-Urlaube",
    description:
      "Entdecke Tansania mit flexiblen Paketen fuer jeden Reisetyp und jedes Budget - von guenstigen Gruppen-Safaris und Familienabenteuern im mittleren Segment bis zu privaten Premium-Erlebnissen in Serengeti, Ngorongoro, Kilimandscharo, Tarangire und Sansibar.",
    descriptionBold: "jeden Reisetyp und jedes Budget",
    rating: "4.9/5",
    guests: "2.800+ Gaeste",
    experience: "22 Jahre Erfahrung",
    planAdventure: "Plane dein Abenteuer",
    whatsappQuote: "Schnelles WhatsApp-Angebot",
    scroll: "Scrollen",
    trustedExperts: "Vertrauenswuerdige lokale Experten",
    trustedSubtext: "Sitz in Arusha, Tansania",
    stats: [
      { value: "2.800+", label: "Zufriedene Gaeste" },
      { value: "22", label: "Jahre Erfahrung" },
      { value: "Alle", label: "Budgets willkommen" },
      { value: "100%", label: "Individuelle Plaene" },
    ],
  },
  intro: {
    eyebrow: "Willkommen bei Gladiolus Tours",
    title: "Authentische Tansania-Erlebnisse",
    titleLine2: "Fuer jeden Reisenden",
    description:
      "Bei Gladiolus Tours sind wir ueberzeugt, dass unvergessliche Tansania-Erlebnisse fuer alle zugaenglich sein sollten. Ob du eine Budget-Safari, einen komfortablen Familienurlaub im mittleren Segment, eine romantische Hochzeitsreise oder ein privates Premium-Abenteuer planst - unser lokales Team gestaltet Reisen passend zu deinem Stil und Budget.",
    budget: "Budget",
    midRange: "Mittelklasse",
    premium: "Premium",
    tiers: [
      { tier: "Budget", color: "bg-[#8DAE6F]", label: "Gruppen- & geteilte Safaris" },
      { tier: "Mittelklasse", color: "bg-[#B8A840]", label: "Komfortabel & flexibel" },
      { tier: "Premium", color: "bg-[#2D4A30]", label: "Privat & exklusiv" },
    ],
  },
  safariPackages: {
    eyebrow: "Safari-Pakete · Alle Budgets",
    title: "Handgefertigte Tansania-Safari-Pakete",
    subtitle:
      "Egal ob du allein mit kleinem Budget reist, mit Familie ein Mittelklasse-Paket suchst oder ein exklusives privates Erlebnis wuenschst - wir haben die passende Safari fuer dich.",
    sampleItinerary: "Beispiel-Reiseverlauf:",
    viewFullItinerary: "Vollstaendigen Reiseverlauf ansehen",
    bookSafari: "Diese Safari buchen",
    viewAll: "Alle Safari-Pakete ansehen",
    minPax: "Mind. {minPax} Personen",
    packages: [
      {
        title: "3 Tage Big Five Safari",
        duration: "3 TAGE",
        badge: "BESTES PREIS-LEISTUNGS-VERHAELTNIS",
        priceFrom: "Ab 1.200 $",
        minPax: "4",
        image: "/gallery/safari1.jpeg",
        link: "/safaris/big-five",
        description:
          "Perfekte kurze Safari fuer Erstbesucher, die die Big Five in Tarangire und Manyara sehen moechten.",
        shortItinerary: [
          "Tag 1: Arusha zum Tarangire-Nationalpark",
          "Tag 2: Ganzer Tag Pirschfahrt in Tarangire",
          "Tag 3: Lake Manyara nach Arusha",
        ],
        fullItinerary: [
          { day: "Tag 1", activity: "Arusha zum Tarangire-Nationalpark mit Pirschfahrt" },
          {
            day: "Tag 2",
            activity: "Ganztags-Pirschfahrt in Tarangire mit Fokus auf Elefanten und Loewen",
          },
          { day: "Tag 3", activity: "Morgens am Lake Manyara, danach Rueckfahrt nach Arusha" },
        ],
      },
      {
        title: "6 Tage: Die Wunder Tansanias entdecken",
        duration: "6 TAGE",
        badge: "AM BELIEBTESTEN",
        priceFrom: "Ab 2.800 $",
        minPax: "4",
        image: "/gallery/safari2.jpeg",
        link: "/safaris/wonders-of-tanzania",
        description: "Umfassende Safari durch Tarangire, Serengeti und den Ngorongoro-Krater.",
        shortItinerary: [
          "Tag 1: Arusha nach Tarangire",
          "Tag 2-3: Serengeti-Nationalpark",
          "Tag 4-5: Ngorongoro-Krater",
          "Tag 6: Rueckkehr nach Arusha",
        ],
        fullItinerary: [
          { day: "Tag 1", activity: "Arusha zum Tarangire-Nationalpark" },
          { day: "Tag 2", activity: "Tarangire zur zentralen Serengeti" },
          { day: "Tag 3", activity: "Ganzer Tag in der Serengeti" },
          { day: "Tag 4", activity: "Serengeti zum Ngorongoro-Krater" },
          { day: "Tag 5", activity: "Ganztags-Pirschfahrt im Ngorongoro-Krater" },
          { day: "Tag 6", activity: "Ngorongoro nach Arusha" },
        ],
      },
      {
        title: "7 Tage Great Migration Safari",
        duration: "7 TAGE",
        badge: "SIGNATURE",
        priceFrom: "Ab 4.000 $",
        minPax: "2",
        image: "/gallery/safari3.jpeg",
        link: "/safaris/great-migration-safari",
        description:
          "Folge der Great Migration mit privatem Guide und Luxus-Camps in der noerdlichen Serengeti.",
        shortItinerary: [
          "Tag 1-2: Zentrale Serengeti",
          "Tag 3-5: Noerdliche Serengeti (Mara-Fluss)",
          "Tag 6: Ngorongoro-Krater",
          "Tag 7: Rueckkehr nach Arusha",
        ],
        fullItinerary: [
          { day: "Tag 1", activity: "Arusha zur zentralen Serengeti" },
          { day: "Tag 2", activity: "Pirschfahrten in der zentralen Serengeti" },
          { day: "Tag 3", activity: "Transfer in die noerdliche Serengeti" },
          { day: "Tag 4", activity: "Suche nach der Great Migration" },
          { day: "Tag 5", activity: "Mara-Fluss-Ueberquerungsgebiet" },
          { day: "Tag 6", activity: "Ganzer Tag im Ngorongoro-Krater" },
          { day: "Tag 7", activity: "Rueckfahrt nach Arusha" },
        ],
      },
      {
        title: "8 Tage Luxus Busch & Strand Safari",
        duration: "8 TAGE",
        badge: "PREMIUM",
        priceFrom: "Ab 5.400 $",
        minPax: "2",
        image: "/gallery/safari4.jpeg",
        link: "/safaris/bush-and-beach",
        description:
          "Kombiniere Luxus-Safari in Serengeti & Ngorongoro mit Entspannung an den Straenden Sansibars.",
        shortItinerary: [
          "Tag 1-5: Safari auf der Nordroute",
          "Tag 6-8: Strandentspannung auf Sansibar",
        ],
        fullItinerary: [
          { day: "Tag 1", activity: "Arusha nach Tarangire" },
          { day: "Tag 2-4", activity: "Serengeti-Nationalpark" },
          { day: "Tag 5", activity: "Ngorongoro-Krater" },
          { day: "Tag 6", activity: "Flug nach Sansibar" },
          { day: "Tag 7", activity: "Stone Town & Gewuerz-Tour" },
          { day: "Tag 8", activity: "Strandentspannung und Abreise" },
        ],
      },
      {
        title: "3 Tage Big Five Safari",
        duration: "3 TAGE",
        badge: "KURZAUSZEIT",
        priceFrom: "Ab 1.200 $",
        minPax: "4",
        image: "/gallery/safari5.jpeg",
        link: "/safaris/big-five-short",
        description:
          "Intensive 3-Tage-Safari mit Fokus auf die Big Five in Tarangire und Lake Manyara.",
        shortItinerary: [
          "Tag 1: Arusha nach Tarangire",
          "Tag 2: Ganzer Tag in Tarangire",
          "Tag 3: Lake Manyara nach Arusha",
        ],
        fullItinerary: [
          { day: "Tag 1", activity: "Transfer zum Tarangire-Nationalpark mit Pirschfahrt" },
          {
            day: "Tag 2",
            activity: "Ganztags-Pirschfahrt mit Fokus auf Elefanten und Loewen",
          },
          { day: "Tag 3", activity: "Morgens am Lake Manyara, dann Rueckkehr nach Arusha" },
        ],
      },
    ],
  },
  treks: {
    eyebrow: "Bergabenteuer",
    title: "Mount Kilimandscharo & Mount Meru Treks",
    subtitle:
      "Besteige Afrikas hoechsten Gipfel oder erkunde den Mount Meru im Arusha-Nationalpark. Professionelle Bergfuehrer, sicherheitsorientierte Routen und hohe Gipfelerfolgsraten.",
    guidedTrek: "Gefuehrter Trek",
    viewRoute: "Route ansehen",
    quickQuote: "Schnelles Angebot",
    routes: [
      {
        title: "5 Tage Marangu-Route - Kilimandscharo-Besteigung",
        duration: "5 TAGE",
        price: "Ab 2.100 $",
        image: "/gallery/Marangu Route.jpeg",
        link: "/treks/kilimanjaro-marangu-route",
        description:
          "Die bequemste Kilimandscharo-Route mit Huettenunterkunft. Ideal fuer Einsteiger, die ein klassisches Gipfelerlebnis am Uhuru Peak (5.895 m) suchen.",
        highlight: "Beste Wahl fuer Einsteiger",
      },
      {
        title: "7 Tage Machame-Route - Kilimandscharo",
        duration: "7 TAGE",
        price: "Ab 2.200 $",
        image: "/gallery/Machame Route.jpeg",
        link: "/treks/kilimanjaro-machame-route",
        description:
          "Die beliebteste Kilimandscharo-Trekkingroute mit abwechslungsreicher Landschaft und einer der hoechsten Gipfelerfolgsraten.",
        highlight: "Beliebteste Route",
      },
      {
        title: "8 Tage Lemosho-Route - Kilimandscharo",
        duration: "8 TAGE",
        price: "Ab 2.380 $",
        image: "/gallery/Lemosho Route.jpeg",
        link: "/treks/kilimanjaro-lemosho-route",
        description:
          "Landschaftlich reizvoller und abgelegener Anstieg mit sehr gutem Akklimatisationsprofil und Premium-Trekkingerlebnis.",
        highlight: "Hoechste Erfolgsquote",
      },
      {
        title: "6 Tage Rongai-Route - Kilimandscharo",
        duration: "8 TAGE",
        price: "Ab 2.150 $",
        image: "/gallery/Rongai Route.jpeg",
        link: "/treks/kilimanjaro-rongai-route",
        description:
          "Ruhiger noerdlicher Anstieg nahe der kenianischen Grenze mit trockenen Bedingungen und sanftem Aufstieg.",
        highlight: "Am wenigsten ueberlaufen",
      },
      {
        title: "4 Tage Mount Meru Trek - Arusha",
        duration: "4 TAGE",
        price: "Ab 1.000 $",
        image: "/gallery/Mount meru, Arusha national park.jpeg",
        link: "/treks/mount-meru-trek",
        description:
          "Wildreiche Trekking-Erfahrung im Arusha-Nationalpark und perfekte Akklimatisation fuer den Kilimandscharo.",
        highlight: "Bester kurzer Trek",
      },
    ],
  },
  founders: {
    eyebrow: "Fuehrung",
    title: "Lerne die Gruender kennen",
    subtitle:
      "Leidenschaftliche Tansania-Reiseprofis mit Fokus auf authentische, erstklassige Safari-Erlebnisse und echte lokale Expertise.",
    people: [
      {
        name: "Sunday Mtui",
        role: "Mitgruender & leitender Safari-Spezialist",
        image: "/gallery/tour-guide.webp",
        bio: "Mit ueber zwei Jahrzehnten Safari-Erfahrung in Serengeti, Ngorongoro und am Kilimandscharo bringt Sunday unvergleichliches Lokalwissen und persoenliche, herzliche Betreuung mit.",
      },
      {
        name: "Francois Martin",
        role: "Mitgruender & internationaler Reiseberater",
        image: "/gallery/photo-00.webp",
        bio: "Spezialisiert auf internationale Safari-Planung und Lodge-Partnerschaften fuer unterschiedliche Budgets - Francois findet fuer jeden Reisenden die perfekte Kombination aus Stil und Preis.",
      },
    ],
  },
  highlights: {
    eyebrow: "Was wir anbieten",
    title: "Safari-Erlebnisse, die zu dir passen",
    subtitle:
      "Jedes Erlebnis wird mit Sorgfalt, lokalem Wissen und Flexibilitaet gestaltet - von preiswerten Abenteuern bis zu massgeschneiderten Privat-Reisen.",
    items: [
      {
        icon: "🚙",
        title: "Private 4x4 Land Cruiser",
        desc: "Eigene Safari-Fahrzeuge fuer kleine Gruppen, Familien und Alleinreisende.",
      },
      {
        icon: "🏕️",
        title: "Flexible Unterkuenfte",
        desc: "Guenstige Zeltcamps, komfortable Lodges und private Premium-Suiten verfuegbar.",
      },
      {
        icon: "🧭",
        title: "Erfahrene lokale Guides",
        desc: "Zertifizierte, leidenschaftliche Guides mit tiefem Wissen ueber Tansanias Oekosysteme.",
      },
      {
        icon: "✈️",
        title: "Flughafentransfers",
        desc: "Nahtlose Abholung an den Flughaefen Kilimandscharo und Arusha, rund um die Uhr.",
      },
      {
        icon: "🛩️",
        title: "Fly-In-Safaris",
        desc: "Charterfluege in abgelegene Parks fuer alle mit wenig Zeit oder Wunsch nach mehr Komfort.",
      },
      {
        icon: "💑",
        title: "Hochzeitsreise-Safaris",
        desc: "Romantische Busch-Erlebnisse fuer Paare - intim und unvergesslich.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Familienabenteuer",
        desc: "Kinderfreundliche Routen fuer sicheres, spannendes und lehrreiches Familienreisen.",
      },
      {
        icon: "📷",
        title: "Foto-Expeditionen",
        desc: "Spezielle Foto-Safaris mit optimaler Positionierung und Lichtberatung.",
      },
    ],
  },
  partners: {
    eyebrow: "Weltweit vertraut",
    title: "Empfohlen von fuehrenden Reiseplattformen",
    subtitle:
      "Anerkannt von internationalen Safari-Reisenden und renommierten Reiseplattformen in Afrika und weltweit.",
    alt: "Reisepartner",
  },
  testimonials: {
    eyebrow: "Tansania-Safari-Bewertungen",
    title: "Was Reisende ueber unsere Tansania-Safaris sagen",
    subtitle:
      "Lies echte Gaesteberichte zu Serengeti-Safaris, Ngorongoro-Krater-Touren, Kilimandscharo-Besteigungen und Sansibar-Strandurlaub mit unserem Team aus Arusha.",
    trustBadge: "Bewertet mit 4.9/5 basierend auf 2.800+ verifizierten Safari-Gaesten.",
    items: [
      {
        name: "Emily & David - UK",
        location: "7 Tage Serengeti & Ngorongoro Safari",
        review:
          "Gladiolus Tours hat fuer uns eine unvergessliche Serengeti-Safari organisiert. Wir haben die Flussueberquerungen der Great Migration erlebt und die Big Five im Ngorongoro-Krater gesehen. Unser Guide war waehrend der gesamten Reise kompetent und professionell.",
      },
      {
        name: "Michael R. - Deutschland",
        location: "Kilimandscharo Machame-Route Trek",
        review:
          "Die Besteigung des Kilimandscharo ueber die Machame-Route war lebensveraendernd. Das Team sorgte in jeder Phase fuer hervorragende Akklimatisation und Sicherheit. Den Uhuru Peak zu erreichen war unglaublich.",
      },
      {
        name: "Sarah M. - USA",
        location: "Safari & Sansibar-Strandurlaub",
        review:
          "Unsere Tansania-Safari kombinierte Tierwelt in Tarangire und Serengeti mit entspannten Tagen auf Sansibar. Alles war perfekt organisiert, von den Lodges bis zu den Transfers. Ich empfehle Gladiolus Tours sehr.",
      },
    ],
  },
  migration: {
    eyebrow: "Begrenzte Verfuegbarkeit",
    title: "Serengeti Great Migration 2026",
    subtitle:
      "Erlebe eines der groessten Naturschauspiele - Gnu-Flussueberquerungen in der noerdlichen Serengeti. Verfuegbar als Budget-, Mittelklasse- und Premium-Paket.",
    explore: "Migration-Safaris entdecken",
    whatsapp: "Schnelles WhatsApp-Angebot",
    season: "Hauptsaison: Juli - September 2026 · Frueh buchen, um Termine zu sichern",
  },
  faq: {
    eyebrow: "Tansania Safari Guide",
    title: "Haeufig gestellte Fragen",
    subtitle:
      "Du planst eine Tansania-Safari ab Arusha? Hier findest du Antworten auf haeufige Fragen zu Safaris, Kilimandscharo und Sansibar-Urlaub.",
    items: [
      {
        q: "Wann ist die beste Zeit fuer eine Serengeti-Safari?",
        a: "Von Juni bis Oktober ist die Tierbeobachtung in der Trockenzeit hervorragend. Von Juli bis September ist Hochsaison fuer Great-Migration-Flussueberquerungen in der noerdlichen Serengeti. Von Dezember bis Maerz ist Kalbungszeit in der suedlichen Serengeti - eine tolle Option fuer Reisende mit kleinerem Budget.",
      },
      {
        q: "Wie viele Tage brauche ich fuer eine Tansania-Safari?",
        a: "Die meisten Tansania-Safari-Pakete dauern 5 bis 10 Tage und kombinieren Serengeti, Ngorongoro-Schutzgebiet, Tarangire und optional Sansibar. Kuerzere 3-4-Tage-Pakete sind ebenfalls fuer Budget-Reisende verfuegbar.",
      },
      {
        q: "Ist Kilimandscharo-Trekking fuer Anfaenger geeignet?",
        a: "Ja - der Kilimandscharo ist fuer Erstbesteiger geeignet, wenn man akklimatisationsfreundliche Routen wie Lemosho oder Machame waehlt. Unsere Guides aus Arusha sorgen fuer sichere, schrittweise Gipfelversuche fuer jedes Fitnessniveau.",
      },
      {
        q: "Bietet ihr Safaris fuer alle Budgets an?",
        a: "Absolut. Gladiolus Tours bietet guenstige Gruppen-Safaris, komfortable Mittelklasse-Pakete und komplett private Premium-Touren. Alle beinhalten professionelle lokale Guides und 4x4-Safari-Fahrzeuge - nur Unterkunftskategorie und Gruppengroesse variieren.",
      },
    ],
  },
  finalCta: {
    title: "Bereit, Tansania auf deine Art zu entdecken?",
    subtitle:
      "Von preiswerten Gruppen-Safaris bis zu exklusiven privaten Touren - unser Team in Arusha erstellt die perfekte Tansania-Route fuer dein Budget und deinen Reisestil.",
    primary: "Deinen individuellen Safari-Plan erhalten",
    whatsapp: "Schreib uns auf WhatsApp fuer schnelle Hilfe",
  },
  seoLinks: {
    title: "Entdecke Tansania mit lokalen Safari-Experten",
    beforeSerengeti: "Entdecke unvergessliche Safari-Abenteuer in",
    beforeNgorongoro: ",",
    beforeKili: ",",
    beforeZanzibar: ", ",
    beforeTarangire: ", und ",
    and: ".",
  },
  geo: {
    title: "Tansania-Safaris ab Arusha",
    description:
      "Gladiolus Tours arbeitet von Usa River, Arusha - dem Tor zur Serengeti, zum Ngorongoro-Schutzgebiet, Tarangire-Nationalpark, Lake Manyara, Kilimandscharo und Sansibar. Alle Budgets willkommen - Gruppen-, Mittelklasse- und private Safaris das ganze Jahr ueber verfuegbar.",
  },
  mobileCta: {
    label: "Tansania-Touren · Alle Budgets",
    button: "Meine Safari planen",
  },
  breadcrumbHome: "Startseite",
}
