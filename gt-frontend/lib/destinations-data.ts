export interface Destination {
  id: string
  slug: string
  title: string
  location: string
  duration: string
  price: string
  priceValue: number
  image: string
  description: string
  highlights: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  included: string[]
  excluded: string[]
  difficulty: "Easy" | "Moderate" | "Challenging"
  bestTime: string
  groupSize: string
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "serengeti-national-park",
    title: "Serengeti National Park",
    location: "Tanzania",
    duration: "5 Days",
    price: "From $2,500",
    priceValue: 2500,
    image: "/serengeti-safari-landscape-with-wildlife.jpg",
    description:
      "Experience the world-famous Serengeti ecosystem, home to the Great Migration and an abundance of wildlife including lions, leopards, elephants, and cheetahs.",
    highlights: [
      "Witness the Great Wildebeest Migration",
      "Big Five game viewing",
      "Hot air balloon safari at sunrise",
      "Visit traditional Maasai villages",
      "Expert wildlife photography opportunities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Serengeti",
        description:
          "Meet at Kilimanjaro Airport and transfer to Serengeti National Park. Evening game drive to spot lions, elephants, and giraffes.",
      },
      {
        day: 2,
        title: "Full Day Game Drive",
        description:
          "Early morning and afternoon game drives exploring the central Serengeti. Picnic lunch in the bush.",
      },
      {
        day: 3,
        title: "Hot Air Balloon Safari",
        description: "Optional hot air balloon ride at sunrise followed by champagne breakfast. Afternoon game drive.",
      },
      {
        day: 4,
        title: "Maasai Cultural Experience",
        description: "Visit a traditional Maasai village and learn about their culture. Evening game drive.",
      },
      {
        day: 5,
        title: "Final Game Drive & Departure",
        description: "Morning game drive, then transfer back to Arusha and departure.",
      },
    ],
    included: [
      "Airport transfers",
      "Accommodation in luxury tented camps",
      "All meals during safari",
      "Professional guide and 4x4 safari vehicle",
      "Park entrance fees",
      "Bottled water",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Hot air balloon ride ($550)",
      "Gratuities",
    ],
    difficulty: "Easy",
    bestTime: "June to October",
    groupSize: "2-8 people",
  },
  {
    id: "2",
    slug: "masai-mara-reserve",
    title: "Masai Mara Reserve",
    location: "Kenya",
    duration: "7 Days",
    price: "From $3,200",
    priceValue: 3200,
    image: "/masai-mara-wildlife-safari-sunset.jpg",
    description:
      "Discover Kenya's premier wildlife reserve, renowned for exceptional game viewing year-round and the dramatic river crossings of the Great Migration.",
    highlights: [
      "River crossing spectacle during migration season",
      "Abundant predator sightings",
      "Luxury safari lodge accommodation",
      "Bush walks with Maasai guides",
      "Sundowner experiences in the savanna",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Masai Mara",
        description: "Flight from Nairobi to Masai Mara. Afternoon game drive upon arrival.",
      },
      {
        day: 2,
        title: "Full Day in the Mara",
        description: "Full day game drives exploring different areas of the reserve.",
      },
      {
        day: 3,
        title: "Mara River",
        description: "Visit the Mara River to witness wildlife and possible migration crossings.",
      },
      {
        day: 4,
        title: "Bush Walk & Cultural Visit",
        description: "Guided bush walk with Maasai warriors and village cultural experience.",
      },
      {
        day: 5,
        title: "Big Cat Territory",
        description: "Focus on tracking lions, cheetahs, and leopards in their territories.",
      },
      {
        day: 6,
        title: "Conservation Experience",
        description: "Visit local conservation projects and learn about wildlife protection efforts.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Morning game drive, then flight back to Nairobi.",
      },
    ],
    included: [
      "Domestic flights",
      "Luxury lodge accommodation",
      "All meals and beverages",
      "Professional guide",
      "All park fees",
      "Bush walks",
    ],
    excluded: ["International flights", "Visa fees", "Travel insurance", "Personal purchases", "Tips for guides"],
    difficulty: "Easy",
    bestTime: "July to October",
    groupSize: "2-6 people",
  },
  {
    id: "3",
    slug: "ngorongoro-crater",
    title: "Ngorongoro Crater",
    location: "Tanzania",
    duration: "4 Days",
    price: "From $2,000",
    priceValue: 2000,
    image: "/ngorongoro-crater-landscape-elephants.jpg",
    description:
      "Explore the world's largest intact volcanic caldera, a natural sanctuary with the highest density of wildlife in Africa.",
    highlights: [
      "Crater floor game drives",
      "Black rhino sightings",
      "Olduvai Gorge archaeological site",
      "Stunning volcanic landscape views",
      "Visit Lake Magadi flamingos",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Crater Rim",
        description: "Transfer from Arusha to Ngorongoro. Evening at crater rim lodge with spectacular views.",
      },
      {
        day: 2,
        title: "Crater Floor Safari",
        description: "Descend 600m to the crater floor for full day game viewing. Picnic lunch by hippo pool.",
      },
      {
        day: 3,
        title: "Olduvai Gorge & Cultural Tour",
        description: "Visit the archaeological site and Maasai cultural experience.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning leisure time, then transfer back to Arusha.",
      },
    ],
    included: [
      "All transfers",
      "Lodge accommodation",
      "All meals",
      "Crater fees and permits",
      "Professional guide",
      "Crater descent",
    ],
    excluded: ["International flights", "Alcoholic beverages", "Travel insurance", "Personal items", "Gratuities"],
    difficulty: "Easy",
    bestTime: "Year-round",
    groupSize: "2-6 people",
  },
  {
    id: "4",
    slug: "tarangire-national-park",
    title: "Tarangire National Park",
    location: "Tanzania",
    duration: "3 Days",
    price: "From $1,500",
    priceValue: 1500,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Famous for large elephant herds and ancient baobab trees, Tarangire offers intimate wildlife encounters in a stunning landscape.",
    highlights: [
      "Large elephant populations",
      "Ancient baobab trees",
      "Tree-climbing lions",
      "Over 550 bird species",
      "Walking safaris available",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire",
        description: "Morning drive to Tarangire. Afternoon game drive focusing on elephants.",
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Full day exploring the park with picnic lunch. Optional walking safari.",
      },
      {
        day: 3,
        title: "Morning Drive & Return",
        description: "Early morning game drive, then return to Arusha.",
      },
    ],
    included: ["Transport in 4x4 vehicle", "Lodge accommodation", "All meals", "Park fees", "Professional guide"],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Tips"],
    difficulty: "Easy",
    bestTime: "June to October",
    groupSize: "2-6 people",
  },
  {
    id: "5",
    slug: "lake-manyara-national-park",
    title: "Lake Manyara National Park",
    location: "Tanzania",
    duration: "2 Days",
    price: "From $900",
    priceValue: 900,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Compact park offering diverse habitats from groundwater forest to alkaline lake, famous for tree-climbing lions.",
    highlights: [
      "Tree-climbing lions",
      "Flamingo flocks on the lake",
      "Forest elephants",
      "Canopy walkway experience",
      "Hot springs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Game Drive",
        description: "Transfer to Lake Manyara. Afternoon game drive through forest and lakeshore.",
      },
      {
        day: 2,
        title: "Canopy Walk & Departure",
        description: "Morning canopy walkway experience, final game drive, and return to Arusha.",
      },
    ],
    included: ["All transportation", "Lodge accommodation", "Meals", "Park entrance", "Guide services"],
    excluded: ["Flights", "Insurance", "Personal items", "Gratuities"],
    difficulty: "Easy",
    bestTime: "Year-round",
    groupSize: "2-6 people",
  },
  {
    id: "6",
    slug: "mount-kilimanjaro-trek",
    title: "Mount Kilimanjaro Trek",
    location: "Tanzania",
    duration: "8 Days",
    price: "From $4,500",
    priceValue: 4500,
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Summit Africa's highest peak via the scenic Lemosho Route, offering the best acclimatization and success rates.",
    highlights: [
      "Reach Uhuru Peak at 5,895m",
      "Traverse multiple climate zones",
      "Stunning mountain vistas",
      "Professional mountain guides",
      "High summit success rate",
    ],
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa",
        description: "Registration and trek through rainforest to first camp.",
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1",
        description: "Ascend onto Shira Plateau with moorland scenery.",
      },
      {
        day: 3,
        title: "Shira 1 to Shira 2",
        description: "Acclimatization day crossing the Shira Plateau.",
      },
      {
        day: 4,
        title: "Shira 2 to Barranco",
        description: "Climb to Lava Tower (4,600m) then descend for acclimatization.",
      },
      {
        day: 5,
        title: "Barranco to Karanga",
        description: "Climb Barranco Wall and traverse to Karanga Camp.",
      },
      {
        day: 6,
        title: "Karanga to Barafu",
        description: "Short climb to high camp. Rest and prepare for summit.",
      },
      {
        day: 7,
        title: "Summit Day",
        description: "Midnight start for Uhuru Peak. Descend to Mweka Camp.",
      },
      {
        day: 8,
        title: "Mweka to Gate",
        description: "Final descent through rainforest and certificate ceremony.",
      },
    ],
    included: [
      "Mountain permits and fees",
      "Camping equipment",
      "All meals on mountain",
      "Professional guides and porters",
      "Rescue fees",
    ],
    excluded: ["International flights", "Visa", "Travel insurance", "Personal gear", "Tips for crew"],
    difficulty: "Challenging",
    bestTime: "January-March, June-October",
    groupSize: "2-12 people",
  },
]
