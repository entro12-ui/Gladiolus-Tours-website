export interface Destination {
  id: string
  slug: string
  title: string
  location: string
  circuit: "northern" | "southern" | "eastern" | "western" | "islands" | "mountain"
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
    circuit: "northern",
    duration: "5 Days",
    price: "From $2,500",
    priceValue: 2500,
    image: "/gallery/zebra-00.webp",
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
    id: "3",
    slug: "ngorongoro-crater",
    title: "Ngorongoro Crater",
    location: "Tanzania",
    circuit: "northern",
    duration: "4 Days",
    price: "From $2,000",
    priceValue: 2000,
    image: "/gallery/lunch-00.webp",
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
    circuit: "northern",
    duration: "3 Days",
    price: "From $1,500",
    priceValue: 1500,
    image: "/gallery/elephant-00.webp",
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
    circuit: "northern",
    duration: "2 Days",
    price: "From $900",
    priceValue: 900,
    image: "/gallery/gt-tourist-vehicle-01.webp",
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
    circuit: "mountain",
    duration: "8 Days",
    price: "From $4,500",
    priceValue: 4500,
    image: "/gallery/tour-guide.webp",
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
  {
    id: "7",
    slug: "ruaha-national-park",
    title: "Ruaha National Park",
    location: "Tanzania",
    circuit: "southern",
    duration: "4 Days",
    price: "From $2,200",
    priceValue: 2200,
    image: "/gallery/lion-00.webp",
    description:
      "Discover Tanzania's wild south: dramatic river landscapes, fewer vehicles, and exceptional predator sightings in remote Ruaha.",
    highlights: [
      "Remote, crowd-free game drives",
      "Strong lion and leopard sightings",
      "Great birding along the Great Ruaha River",
      "Guided walks in select areas",
      "Cinematic sundowners in the bush",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly-in & Evening Drive",
        description: "Arrive via airstrip transfer. Settle into camp and head out for a golden-hour game drive.",
      },
      {
        day: 2,
        title: "Full Day Ruaha",
        description: "Morning and afternoon drives exploring riverbeds and woodland plains with a bush picnic lunch.",
      },
      {
        day: 3,
        title: "Walking Safari Option",
        description: "Optional guided walk for tracks and ecology, followed by a relaxed afternoon game drive.",
      },
      {
        day: 4,
        title: "Final Drive & Departure",
        description: "Early game drive then transfer to the airstrip for your onward flight.",
      },
    ],
    included: [
      "Park fees",
      "Accommodation",
      "Meals",
      "Professional guide",
      "Game drives",
      "Transfers within Ruaha",
    ],
    excluded: ["Flights", "Travel insurance", "Personal expenses", "Tips"],
    difficulty: "Easy",
    bestTime: "June to October",
    groupSize: "2-6 people",
  },
  {
    id: "8",
    slug: "nyerere-national-park",
    title: "Nyerere National Park",
    location: "Tanzania",
    circuit: "southern",
    duration: "3 Days",
    price: "From $1,850",
    priceValue: 1850,
    image: "/gallery/gt-tourist-vehicle-00.webp",
    description:
      "Explore the Rufiji River ecosystem with a mix of classic game drives and water-based adventures in one of Africa's largest protected areas.",
    highlights: [
      "Boat safaris on the Rufiji",
      "Excellent elephant and hippo sightings",
      "Soft-adventure walking safari options",
      "Relaxed pace and fewer vehicles",
      "Beautiful riverine sunsets",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & River Cruise",
        description: "Arrive and settle into camp. Enjoy a late afternoon boat safari on the river.",
      },
      {
        day: 2,
        title: "Game Drives",
        description: "Morning drive across floodplains. Afternoon drive focusing on predators and waterholes.",
      },
      {
        day: 3,
        title: "Morning Activity & Departure",
        description: "Optional short walk or final drive, then transfer to your onward connection.",
      },
    ],
    included: ["Accommodation", "Meals", "Park fees", "Boat safari", "Game drives", "Guide services"],
    excluded: ["Flights", "Travel insurance", "Personal purchases", "Tips"],
    difficulty: "Easy",
    bestTime: "June to October",
    groupSize: "2-8 people",
  },
  {
    id: "9",
    slug: "zanzibar-island-escape",
    title: "Zanzibar Island Escape",
    location: "Tanzania",
    circuit: "islands",
    duration: "4 Days",
    price: "From $1,300",
    priceValue: 1300,
    image: "/gallery/beer.webp",
    description:
      "Finish your safari with warm ocean breezes, dhow cruises, and slow mornings on Zanzibar's white-sand coastline.",
    highlights: [
      "Beachfront relaxation",
      "Stone Town exploration",
      "Snorkeling and reef excursions",
      "Dhow sunset cruise",
      "Swahili cuisine and spice tours",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Time",
        description: "Transfer to your hotel and settle into island pace with a sunset swim.",
      },
      {
        day: 2,
        title: "Stone Town & Culture",
        description: "Explore Stone Town's lanes and markets, then enjoy a relaxed evening by the sea.",
      },
      {
        day: 3,
        title: "Ocean Excursion",
        description: "Choose snorkeling, sandbank picnics, or a reef cruise depending on conditions and preference.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Enjoy a final morning on the beach, then transfer to the airport.",
      },
    ],
    included: ["Transfers", "Accommodation", "Breakfast", "Selected excursions"],
    excluded: ["Flights", "Lunch and dinner", "Travel insurance", "Personal expenses"],
    difficulty: "Easy",
    bestTime: "June to March",
    groupSize: "2-8 people",
  },
  {
    id: "10",
    slug: "saadani-national-park",
    title: "Saadani National Park",
    location: "Tanzania",
    circuit: "eastern",
    duration: "3 Days",
    price: "From $1,600",
    priceValue: 1600,
    image: "/gallery/sunset.webp",
    description:
      "Where bush meets beach: Saadani blends coastal landscapes with wildlife viewing for a unique Tanzania extension.",
    highlights: [
      "Coastal safari landscapes",
      "Game drives with a seaside backdrop",
      "Boat trips and river wildlife",
      "Relaxed, low-crowd atmosphere",
      "Perfect for short add-ons",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Afternoon Drive",
        description: "Arrive and enjoy an afternoon drive through coastal plains and river corridors.",
      },
      {
        day: 2,
        title: "Game Drive + River Option",
        description: "Morning game drive, then optional river trip depending on season and water levels.",
      },
      {
        day: 3,
        title: "Final Morning & Departure",
        description: "Short morning activity and transfer out.",
      },
    ],
    included: ["Accommodation", "Meals", "Park fees", "Game drives", "Guide services"],
    excluded: ["Flights", "Travel insurance", "Personal expenses", "Tips"],
    difficulty: "Easy",
    bestTime: "June to October",
    groupSize: "2-8 people",
  },
  {
    id: "11",
    slug: "mahale-mountains-national-park",
    title: "Mahale Mountains National Park",
    location: "Tanzania",
    circuit: "western",
    duration: "5 Days",
    price: "From $3,400",
    priceValue: 3400,
    image: "/gallery/Olduvai-Gorge-01.webp",
    description:
      "Venture to Lake Tanganyika for chimpanzee trekking in Mahale—one of Tanzania's most rewarding and remote primate experiences.",
    highlights: [
      "Chimpanzee trekking",
      "Lake Tanganyika scenery",
      "Hiking in forested mountains",
      "Remote fly-in adventure",
      "Excellent for nature lovers",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Lakeshore",
        description: "Arrive by air/boat transfer, settle in, and enjoy the lakeshore setting.",
      },
      {
        day: 2,
        title: "Chimp Trek",
        description: "Morning trek in search of chimpanzees with expert trackers.",
      },
      {
        day: 3,
        title: "Second Trek or Hike",
        description: "Choose another trek or a longer forest hike depending on conditions.",
      },
      {
        day: 4,
        title: "Lake Time",
        description: "Relax with swimming, kayaking, or a gentle boat excursion.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Transfer out for your onward travel.",
      },
    ],
    included: ["Park fees", "Accommodation", "Meals", "Chimp trekking", "Local transfers"],
    excluded: ["Flights", "Travel insurance", "Personal expenses", "Tips"],
    difficulty: "Moderate",
    bestTime: "June to October",
    groupSize: "2-6 people",
  },
]
