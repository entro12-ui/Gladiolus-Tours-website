import type { HomeContent } from "./types"

export const frHomeContent: HomeContent = {
  metadata: {
    title: "Safaris et circuits en Tanzanie | Serengeti, Kilimandjaro et Zanzibar | Gladiolus Tours",
    description:
      "Gladiolus Tours propose des forfaits safari en Tanzanie pour tous les budgets — des safaris en groupe économiques aux circuits privés premium. Explorez le Serengeti, le Ngorongoro, le Kilimandjaro, Tarangire et Zanzibar avec des experts locaux de confiance.",
    keywords: [
      "forfaits safari Tanzanie",
      "safaris abordables Tanzanie",
      "safari économique Tanzanie",
      "safari Serengeti",
      "safari familial Tanzanie",
      "safari privé Tanzanie",
      "safari africain de luxe",
      "trek Kilimandjaro",
      "circuits cratère Ngorongoro",
      "agence safari Arusha",
      "safari Grande Migration",
      "vacances plage Zanzibar",
      "experts voyage Tanzanie",
      "safari groupe Tanzanie",
      "safari milieu de gamme Tanzanie",
    ],
    openGraphTitle: "Forfaits safari en Tanzanie pour chaque voyageur | Gladiolus Tours",
    openGraphDescription:
      "Des aventures économiques aux safaris privés premium — explorez Serengeti, Ngorongoro, Kilimandjaro, Tarangire et Zanzibar avec Gladiolus Tours.",
    twitterTitle: "Safaris en Tanzanie pour tous les budgets | Gladiolus Tours",
    twitterDescription:
      "Safaris en Tanzanie du budget au premium — forfaits Serengeti, Kilimandjaro et Zanzibar adaptés à vous.",
    openGraphLocale: "fr_FR",
  },
  hero: {
    badge: "Tanzanie · Kilimandjaro · Zanzibar · Tous Budgets",
    title: "Safaris en Tanzanie de Luxe et Abordables,",
    titleHighlight: "Treks du Kilimandjaro et Vacances a Zanzibar",
    description:
      "Decouvrez la Tanzanie avec des offres flexibles concues pour chaque voyageur et chaque budget - des safaris de groupe economiques et aventures familiales milieu de gamme aux experiences privees premium a travers le Serengeti, le Ngorongoro, le Kilimandjaro, Tarangire et Zanzibar.",
    descriptionBold: "chaque voyageur et chaque budget",
    rating: "4.9/5",
    guests: "2 800+ voyageurs",
    experience: "22 ans d'experience",
    planAdventure: "Planifiez votre aventure",
    whatsappQuote: "Devis WhatsApp rapide",
    scroll: "Defiler",
    trustedExperts: "Experts locaux de confiance",
    trustedSubtext: "Bases a Arusha, Tanzanie",
    stats: [
      { value: "2 800+", label: "Voyageurs satisfaits" },
      { value: "22", label: "Ans d'experience" },
      { value: "Tous", label: "Budgets bienvenus" },
      { value: "100%", label: "Plans sur mesure" },
    ],
  },
  intro: {
    eyebrow: "Bienvenue chez Gladiolus Tours",
    title: "Experiences authentiques en Tanzanie",
    titleLine2: "Pour chaque voyageur",
    description:
      "Chez Gladiolus Tours, nous croyons que les experiences inoubliables en Tanzanie doivent etre accessibles a tous. Que vous planifiez un safari economique, une escapade familiale confortable de milieu de gamme, une lune de miel romantique ou une aventure privee premium - notre equipe locale cree des voyages adaptes a votre style et a votre budget.",
    budget: "Economique",
    midRange: "Milieu de gamme",
    premium: "Premium",
    tiers: [
      { tier: "Economique", color: "bg-[#8DAE6F]", label: "Safaris en groupe et partages" },
      { tier: "Milieu de gamme", color: "bg-[#B8A840]", label: "Confortable et flexible" },
      { tier: "Premium", color: "bg-[#2D4A30]", label: "Prive et exclusif" },
    ],
  },
  safariPackages: {
    eyebrow: "Forfaits Safari · Tous Budgets",
    title: "Forfaits safari en Tanzanie concus a la main",
    subtitle:
      "Que vous voyagiez seul avec un petit budget, en famille avec un forfait milieu de gamme, ou que vous recherchiez une experience privee exclusive - nous avons un safari pense pour vous.",
    sampleItinerary: "Itineraire exemple :",
    viewFullItinerary: "Voir l'itineraire complet",
    bookSafari: "Reserver ce safari",
    viewAll: "Voir tous les forfaits safari",
    minPax: "Min {minPax} pers",
    packages: [
      {
        title: "Safari Big Five 3 jours",
        duration: "3 JOURS",
        badge: "MEILLEUR RAPPORT QUALITE-PRIX",
        priceFrom: "A partir de 1 200 $",
        minPax: "4",
        image: "/gallery/safari1.jpeg",
        link: "/safaris/big-five",
        description:
          "Safari court ideal pour les premiers visiteurs voulant voir les Big Five a Tarangire et Manyara.",
        shortItinerary: [
          "Jour 1 : Arusha vers le parc national de Tarangire",
          "Jour 2 : Journee complete de safari a Tarangire",
          "Jour 3 : Lac Manyara vers Arusha",
        ],
        fullItinerary: [
          { day: "Jour 1", activity: "Arusha vers le parc national de Tarangire avec safari" },
          {
            day: "Jour 2",
            activity: "Journee complete de safari a Tarangire, focus elephants et lions",
          },
          { day: "Jour 3", activity: "Matinee au lac Manyara puis retour a Arusha" },
        ],
      },
      {
        title: "6 jours a la decouverte des merveilles de Tanzanie",
        duration: "6 JOURS",
        badge: "LE PLUS POPULAIRE",
        priceFrom: "A partir de 2 800 $",
        minPax: "4",
        image: "/gallery/safari2.jpeg",
        link: "/safaris/wonders-of-tanzania",
        description: "Safari complet couvrant Tarangire, Serengeti et le cratere du Ngorongoro.",
        shortItinerary: [
          "Jour 1 : Arusha vers Tarangire",
          "Jour 2-3 : Parc national du Serengeti",
          "Jour 4-5 : Cratere du Ngorongoro",
          "Jour 6 : Retour a Arusha",
        ],
        fullItinerary: [
          { day: "Jour 1", activity: "Arusha vers le parc national de Tarangire" },
          { day: "Jour 2", activity: "Tarangire vers le Serengeti central" },
          { day: "Jour 3", activity: "Journee complete au Serengeti" },
          { day: "Jour 4", activity: "Serengeti vers le cratere du Ngorongoro" },
          { day: "Jour 5", activity: "Journee complete de safari au cratere du Ngorongoro" },
          { day: "Jour 6", activity: "Ngorongoro vers Arusha" },
        ],
      },
      {
        title: "Safari Grande Migration 7 jours",
        duration: "7 JOURS",
        badge: "SIGNATURE",
        priceFrom: "A partir de 4 000 $",
        minPax: "2",
        image: "/gallery/safari3.jpeg",
        link: "/safaris/great-migration-safari",
        description:
          "Suivez la Grande Migration avec guide prive et camps de luxe dans le Serengeti nord.",
        shortItinerary: [
          "Jour 1-2 : Serengeti central",
          "Jour 3-5 : Serengeti nord (riviere Mara)",
          "Jour 6 : Cratere du Ngorongoro",
          "Jour 7 : Retour a Arusha",
        ],
        fullItinerary: [
          { day: "Jour 1", activity: "Arusha vers le Serengeti central" },
          { day: "Jour 2", activity: "Safaris dans le Serengeti central" },
          { day: "Jour 3", activity: "Transfert vers le Serengeti nord" },
          { day: "Jour 4", activity: "Suivi de la Grande Migration" },
          { day: "Jour 5", activity: "Zone de traversee de la riviere Mara" },
          { day: "Jour 6", activity: "Journee complete au cratere du Ngorongoro" },
          { day: "Jour 7", activity: "Retour a Arusha" },
        ],
      },
      {
        title: "Safari de luxe brousse & plage 8 jours",
        duration: "8 JOURS",
        badge: "PREMIUM",
        priceFrom: "A partir de 5 400 $",
        minPax: "2",
        image: "/gallery/safari4.jpeg",
        link: "/safaris/bush-and-beach",
        description:
          "Combinez un safari de luxe au Serengeti et Ngorongoro avec detente sur les plages de Zanzibar.",
        shortItinerary: [
          "Jour 1-5 : Safari du circuit nord",
          "Jour 6-8 : Detente balneaire a Zanzibar",
        ],
        fullItinerary: [
          { day: "Jour 1", activity: "Arusha vers Tarangire" },
          { day: "Jour 2-4", activity: "Parc national du Serengeti" },
          { day: "Jour 5", activity: "Cratere du Ngorongoro" },
          { day: "Jour 6", activity: "Vol vers Zanzibar" },
          { day: "Jour 7", activity: "Stone Town et visite des epices" },
          { day: "Jour 8", activity: "Detente plage et depart" },
        ],
      },
      {
        title: "Safari Big Five 3 jours",
        duration: "3 JOURS",
        badge: "ESCAPADE COURTE",
        priceFrom: "A partir de 1 200 $",
        minPax: "4",
        image: "/gallery/safari5.jpeg",
        link: "/safaris/big-five-short",
        description:
          "Safari intensif de 3 jours axe sur les Big Five a Tarangire et au lac Manyara.",
        shortItinerary: [
          "Jour 1 : Arusha vers Tarangire",
          "Jour 2 : Journee complete a Tarangire",
          "Jour 3 : Lac Manyara vers Arusha",
        ],
        fullItinerary: [
          { day: "Jour 1", activity: "Transfert vers Tarangire avec safari" },
          {
            day: "Jour 2",
            activity: "Journee complete de safari, focus elephants et lions",
          },
          { day: "Jour 3", activity: "Matinee au lac Manyara puis retour a Arusha" },
        ],
      },
    ],
  },
  treks: {
    eyebrow: "Aventures en montagne",
    title: "Treks du mont Kilimandjaro et du mont Meru",
    subtitle:
      "Grimpez le plus haut sommet d'Afrique ou explorez le mont Meru dans le parc national d'Arusha. Guides professionnels, itineraires axes sur la securite et taux de reussite eleves au sommet.",
    guidedTrek: "Trek guide",
    viewRoute: "Voir l'itineraire",
    quickQuote: "Devis rapide",
    routes: [
      {
        title: "Route Marangu 5 jours - Ascension du Kilimandjaro",
        duration: "5 JOURS",
        price: "A partir de 2 100 $",
        image: "/gallery/Marangu Route.jpeg",
        link: "/treks/kilimanjaro-marangu-route",
        description:
          "L'itineraire le plus confortable du Kilimandjaro avec hebergement en refuges. Ideal pour les debutants visant une experience classique jusqu'au pic Uhuru (5 895 m).",
        highlight: "Ideal debutants",
      },
      {
        title: "Route Machame 7 jours - Kilimandjaro",
        duration: "7 JOURS",
        price: "A partir de 2 200 $",
        image: "/gallery/Machame Route.jpeg",
        link: "/treks/kilimanjaro-machame-route",
        description:
          "La route la plus populaire du Kilimandjaro, avec paysages varies et l'un des meilleurs taux de reussite au sommet.",
        highlight: "Route la plus populaire",
      },
      {
        title: "Route Lemosho 8 jours - Kilimandjaro",
        duration: "8 JOURS",
        price: "A partir de 2 380 $",
        image: "/gallery/Lemosho Route.jpeg",
        link: "/treks/kilimanjaro-lemosho-route",
        description:
          "Approche pittoresque et isolee avec excellent profil d'acclimatation et experience trek premium.",
        highlight: "Meilleur taux de reussite",
      },
      {
        title: "Route Rongai 6 jours - Kilimandjaro",
        duration: "8 JOURS",
        price: "A partir de 2 150 $",
        image: "/gallery/Rongai Route.jpeg",
        link: "/treks/kilimanjaro-rongai-route",
        description:
          "Approche nord calme pres de la frontiere kenyane, avec conditions seches et ascension progressive.",
        highlight: "Route la moins frequentee",
      },
      {
        title: "Trek du mont Meru 4 jours - Arusha",
        duration: "4 JOURS",
        price: "A partir de 1 000 $",
        image: "/gallery/Mount meru, Arusha national park.jpeg",
        link: "/treks/mount-meru-trek",
        description:
          "Experience riche en faune dans le parc national d'Arusha et excellente acclimatation avant le Kilimandjaro.",
        highlight: "Meilleur trek court",
      },
    ],
  },
  founders: {
    eyebrow: "Direction",
    title: "Rencontrez les fondateurs",
    subtitle:
      "Des professionnels passionnes du voyage en Tanzanie, dedies a des safaris authentiques de classe mondiale grace a une veritable expertise locale.",
    people: [
      {
        name: "Sunday Mtui",
        role: "Co-fondateur et specialiste principal safari",
        image: "/gallery/tour-guide.webp",
        bio: "Avec plus de deux decennies de leadership safari au Serengeti, Ngorongoro et au mont Kilimandjaro - Sunday apporte un savoir local inegale et un accompagnement chaleureux et personnalise.",
      },
      {
        name: "Francois Martin",
        role: "Co-fondateur et consultant voyages international",
        image: "/gallery/photo-00.webp",
        bio: "Specialiste de la planification safari internationale et des partenariats hebergement multi-budgets - Francois aide chaque voyageur a trouver l'option ideale selon son style et ses moyens.",
      },
    ],
  },
  highlights: {
    eyebrow: "Ce que nous offrons",
    title: "Des experiences safari concues autour de vous",
    subtitle:
      "Chaque experience est creee avec soin, expertise locale et flexibilite - des aventures abordables aux voyages prives sur mesure.",
    items: [
      {
        icon: "🚙",
        title: "Land Cruisers 4x4 prives",
        desc: "Vehicules safari dedies aux petits groupes, familles et voyageurs solo.",
      },
      {
        icon: "🏕️",
        title: "Hebergements flexibles",
        desc: "Camps tentes economiques, lodges confortables et suites privees premium.",
      },
      {
        icon: "🧭",
        title: "Guides locaux experts",
        desc: "Guides certifies et passionnes, avec une connaissance profonde des ecosystemes tanzaniens.",
      },
      {
        icon: "✈️",
        title: "Transferts aeroport",
        desc: "Prise en charge fluide depuis les aeroports de Kilimandjaro et Arusha, 24h/24 et 7j/7.",
      },
      {
        icon: "🛩️",
        title: "Safaris en avion",
        desc: "Vols charter vers des parcs recules pour les voyageurs presses ou en quete de confort.",
      },
      {
        icon: "💑",
        title: "Safaris lune de miel",
        desc: "Experiences romantiques en brousse, intimes et inoubliables.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Aventures familiales",
        desc: "Itineraires adaptes aux enfants pour un voyage familial sur, amusant et enrichissant.",
      },
      {
        icon: "📷",
        title: "Expeditions photo",
        desc: "Safaris photo specialises avec positionnement optimal et conseils lumiere.",
      },
    ],
  },
  partners: {
    eyebrow: "Fiable dans le monde entier",
    title: "Recommande par les principales plateformes de voyage",
    subtitle:
      "Reconnu par des voyageurs safari internationaux et des references majeures du voyage en Afrique et dans le monde.",
    alt: "Partenaire de voyage",
  },
  testimonials: {
    eyebrow: "Avis Safari Tanzanie",
    title: "Ce que disent les voyageurs de nos safaris en Tanzanie",
    subtitle:
      "Lisez des experiences authentiques de clients sur les safaris au Serengeti, visites du cratere du Ngorongoro, ascensions du Kilimandjaro et sejours plage a Zanzibar avec notre equipe basee a Arusha.",
    trustBadge: "Note 4.9/5 basee sur 2 800+ voyageurs safari verifies.",
    items: [
      {
        name: "Emily & David - Royaume-Uni",
        location: "Safari Serengeti et Ngorongoro 7 jours",
        review:
          "Gladiolus Tours a organise pour nous un safari inoubliable au Serengeti. Nous avons assiste aux traversees de rivieres de la Grande Migration et vu les Big Five dans le cratere du Ngorongoro. Notre guide a ete competent et professionnel tout au long du voyage.",
      },
      {
        name: "Michael R. - Allemagne",
        location: "Trek Kilimandjaro route Machame",
        review:
          "Gravir le mont Kilimandjaro via la route Machame a ete une experience qui change une vie. L'equipe a assure une excellente acclimatation et securite a chaque etape. Atteindre le pic Uhuru etait incroyable.",
      },
      {
        name: "Sarah M. - Etats-Unis",
        location: "Safari et vacances plage a Zanzibar",
        review:
          "Notre safari en Tanzanie a combine la faune de Tarangire et Serengeti avec des jours de detente a Zanzibar. Tout etait parfaitement organise, des lodges aux transferts. Je recommande fortement Gladiolus Tours.",
      },
    ],
  },
  migration: {
    eyebrow: "Disponibilite limitee",
    title: "Grande Migration du Serengeti 2026",
    subtitle:
      "Assistez a l'un des plus grands spectacles de la nature - les traversees de rivieres des gnous dans le nord du Serengeti. Disponible en formules economiques, milieu de gamme et premium.",
    explore: "Explorer les safaris migration",
    whatsapp: "Devis WhatsApp rapide",
    season: "Haute saison : juillet - septembre 2026 · Reservez tot pour garantir vos dates",
  },
  faq: {
    eyebrow: "Guide Safari Tanzanie",
    title: "Questions frequentes",
    subtitle:
      "Vous planifiez un safari en Tanzanie depuis Arusha ? Voici les reponses aux questions courantes sur les safaris, le Kilimandjaro et les vacances a Zanzibar.",
    items: [
      {
        q: "Quelle est la meilleure periode pour un safari au Serengeti ?",
        a: "De juin a octobre, l'observation de la faune en saison seche est excellente. De juillet a septembre, c'est le pic des traversees de rivieres de la Grande Migration dans le nord du Serengeti. De decembre a mars, la saison des naissances dans le sud du Serengeti est ideale - une excellente option pour les voyageurs au budget limite.",
      },
      {
        q: "Combien de jours faut-il pour un safari en Tanzanie ?",
        a: "La plupart des forfaits safari en Tanzanie durent de 5 a 10 jours, combinant Serengeti, zone de conservation du Ngorongoro, Tarangire et parfois Zanzibar. Des formules plus courtes de 3-4 jours existent aussi pour les voyageurs au budget limite.",
      },
      {
        q: "Le trek du mont Kilimandjaro convient-il aux debutants ?",
        a: "Oui - le Kilimandjaro convient aux debutants en choisissant des itinerares favorables a l'acclimatation comme Lemosho ou Machame. Nos guides bases a Arusha garantissent des tentatives de sommet progressives et securisees pour tous les niveaux.",
      },
      {
        q: "Proposez-vous des safaris pour tous les budgets ?",
        a: "Absolument. Gladiolus Tours propose des safaris de groupe economiques, des forfaits confortables de milieu de gamme et des circuits premium entierement prives. Tous incluent des guides locaux professionnels et des vehicules safari 4x4 - seuls la categorie d'hebergement et la taille du groupe varient.",
      },
    ],
  },
  finalCta: {
    title: "Pret a explorer la Tanzanie a votre facon ?",
    subtitle:
      "Des safaris de groupe abordables aux circuits prives exclusifs - notre equipe basee a Arusha cree l'itineraire ideal selon votre budget et votre style de voyage.",
    primary: "Obtenez votre plan safari sur mesure",
    whatsapp: "Contactez-nous sur WhatsApp rapidement",
  },
  seoLinks: {
    title: "Explorez la Tanzanie avec des experts safari locaux",
    beforeSerengeti: "Decouvrez des aventures safari inoubliables a",
    beforeNgorongoro: ",",
    beforeKili: ",",
    beforeZanzibar: ", ",
    beforeTarangire: ", et ",
    and: ".",
  },
  geo: {
    title: "Safaris en Tanzanie au depart d'Arusha",
    description:
      "Gladiolus Tours opere depuis Usa River, Arusha - la porte d'entree du parc national du Serengeti, de la zone de conservation du Ngorongoro, du parc national de Tarangire, du lac Manyara, du mont Kilimandjaro et de Zanzibar. Tous les budgets sont les bienvenus - safaris de groupe, milieu de gamme et prives disponibles toute l'annee.",
  },
  mobileCta: {
    label: "Tours en Tanzanie · Tous Budgets",
    button: "Planifier mon safari",
  },
  breadcrumbHome: "Accueil",
}
