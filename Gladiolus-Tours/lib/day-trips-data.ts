export interface DayTrip {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  highlight: string
  duration: string
  location: string
  pricePerPerson: number[]
  image: string
  gallery: string[]
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: {
    time: string
    activity: string
  }[]
}

export const dayTrips: DayTrip[] = [
  {
    id: "chemka-hot-springs",
    slug: "chemka-hot-springs",
    title: "Chemka Hot Springs Day Trip",
    shortTitle: "Chemka Hot Springs",
    description:
      "Escape to the crystal-clear waters of Chemka Hot Springs, a natural paradise nestled in the foothills of Mount Kilimanjaro. Enjoy a refreshing swim in the turquoise pools, relax on the sandy shores, and soak in the warm mineral-rich waters surrounded by lush vegetation.",
    highlight: "Swim in crystal-clear natural hot springs",
    duration: "Full Day",
    location: "Kikuletwa, Kilimanjaro",
    pricePerPerson: [156, 96, 68, 60],
    image: "/gallery/chemka-00.webp",
    gallery: [
      "/gallery/chemka-00.webp",
      "/gallery/chemka.jpeg",
      "/gallery/chemka1.jpeg",
      "/gallery/chemka2.jpeg",
      "/gallery/chemka-01.webp",
      "/gallery/chemka-02.webp",
    ],
    highlights: [
      "Swimming in crystal-clear natural hot springs",
      "Relaxing on sandy beaches",
      "Traditional lunch by the pool",
      "Scenic drive through coffee plantations",
      "Photography opportunities",
    ],
    included: [
      "Park entrance fees",
      "Professional guide",
      "Private transport",
      "Lunch (local cuisine)",
      "Drinking water",
    ],
    notIncluded: [
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
    ],
    itinerary: [
      { time: "07:00", activity: "Pick up from your hotel in Arusha" },
      { time: "08:30", activity: "Scenic drive to Chemka Hot Springs via coffee plantations" },
      { time: "09:30", activity: "Arrival at Chemka Hot Springs, change into swimwear" },
      { time: "10:00", activity: "Swimming and relaxation in the natural pools" },
      { time: "12:30", activity: "Lunch served by the poolside" },
      { time: "14:00", activity: "Free time for more swimming and exploration" },
      { time: "15:30", activity: "Departure back to Arusha" },
      { time: "17:00", activity: "Drop off at your hotel" },
    ],
  },
  {
    id: "lake-duluti",
    slug: "lake-duluti",
    title: "Lake Duluti Day Trip",
    shortTitle: "Lake Duluti",
    description:
      "Discover the tranquil beauty of Lake Duluti, a stunning crater lake located just outside Arusha. Take a guided walk through the surrounding forest, spot various bird species, and enjoy a peaceful canoe ride on the calm waters.",
    highlight: "Canoe ride on a scenic crater lake",
    duration: "Half Day / Full Day",
    location: "Arusha",
    pricePerPerson: [144, 96, 77, 72],
    image: "/gallery/duluti-00.webp",
    gallery: [
      "/gallery/duluti-00.webp",
      "/gallery/duluti-01.webp",
      "/gallery/duluti-02.webp",
    ],
    highlights: [
      "Guided forest walk around the lake",
      "Canoeing on the crater lake",
      "Bird watching (over 200 species)",
      "Picnic lunch by the lake",
      "Cultural encounter with local communities",
    ],
    included: [
      "Park entrance fees",
      "Professional guide",
      "Private transport",
      "Canoe rental",
      "Lunch (for full day)",
      "Drinking water",
    ],
    notIncluded: [
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance",
    ],
    itinerary: [
      { time: "08:00", activity: "Pick up from your hotel in Arusha" },
      { time: "09:00", activity: "Arrival at Lake Duluti, meet your guide" },
      { time: "09:30", activity: "Guided forest walk around the crater rim" },
      { time: "11:00", activity: "Canoeing on Lake Duluti" },
      { time: "12:30", activity: "Picnic lunch by the lake" },
      { time: "14:00", activity: "Bird watching and photography" },
      { time: "15:30", activity: "Departure back to Arusha" },
      { time: "16:30", activity: "Drop off at your hotel" },
    ],
  },
  {
    id: "arusha-town-tour",
    slug: "arusha-town-tour",
    title: "Arusha Town Tour",
    shortTitle: "Town Tour",
    description:
      "Discover Arusha with a local guide — cultural heritage sites, bustling markets, and the vibrant daily life of Tanzania's safari capital.",
    highlight: "Guided cultural walk through Arusha",
    duration: "Half Day",
    location: "Arusha",
    pricePerPerson: [120, 80, 65, 55],
    image: "/gallery/tour-guide.webp",
    gallery: ["/gallery/tour-guide.webp", "/gallery/photo-00.webp"],
    highlights: [
      "Central Arusha landmarks",
      "Local history and culture",
      "Market visits",
      "Craft and curio stops",
      "Flexible private pacing",
    ],
    included: ["Professional guide", "Private transport", "Bottled water"],
    notIncluded: ["Meals", "Shopping purchases", "Tips"],
    itinerary: [
      { time: "09:00", activity: "Hotel pickup in Arusha" },
      { time: "09:30", activity: "Walking tour of central Arusha" },
      { time: "11:00", activity: "Visit cultural sites and markets" },
      { time: "12:30", activity: "Optional lunch recommendation" },
      { time: "13:30", activity: "Return to hotel" },
    ],
  },
  {
    id: "curios-gift-shops",
    slug: "curios-gift-shops",
    title: "Curios & Gift Shops Tour",
    shortTitle: "Curios & Gifts",
    description:
      "Browse Arusha's best curio shops and artisan studios for Maasai beadwork, Tinga Tinga paintings, carvings, and handmade souvenirs.",
    highlight: "Authentic Tanzanian crafts and gifts",
    duration: "Half Day",
    location: "Arusha",
    pricePerPerson: [100, 70, 55, 50],
    image: "/gallery/lunch-01.webp",
    gallery: ["/gallery/lunch-01.webp", "/gallery/photo-00.webp"],
    highlights: [
      "Artisan workshops",
      "Fair-trade curio shops",
      "Maasai beadwork",
      "Tinga Tinga art",
      "Shipping advice available",
    ],
    included: ["Guide", "Transport between shops", "Bottled water"],
    notIncluded: ["Purchases", "Shipping costs", "Tips"],
    itinerary: [
      { time: "09:00", activity: "Pickup and briefing" },
      { time: "09:30", activity: "Visit selected curio shops and studios" },
      { time: "12:00", activity: "Free time for shopping" },
      { time: "13:00", activity: "Return to hotel" },
    ],
  },
  {
    id: "local-markets",
    slug: "local-markets",
    title: "Local Markets Tour",
    shortTitle: "Local Markets",
    description:
      "Experience Arusha's colorful markets — fresh produce, spices, textiles, and the everyday rhythm of local Tanzanian life.",
    highlight: "Immersive market experience",
    duration: "Half Day",
    location: "Arusha",
    pricePerPerson: [95, 65, 52, 48],
    image: "/gallery/lunch-02.webp",
    gallery: ["/gallery/lunch-02.webp", "/gallery/photo-00.webp"],
    highlights: [
      "Central market walk",
      "Spices and produce",
      "Textiles and crafts",
      "Local food tastings",
      "Photography-friendly",
    ],
    included: ["Local guide", "Market tour", "Transport", "Water"],
    notIncluded: ["Food purchases", "Personal shopping", "Tips"],
    itinerary: [
      { time: "08:30", activity: "Morning market pickup" },
      { time: "09:00", activity: "Guided walk through main market halls" },
      { time: "11:00", activity: "Spice and produce section" },
      { time: "12:00", activity: "Return to hotel" },
    ],
  },
]

export const getDayTripBySlug = (slug: string): DayTrip | undefined => {
  return dayTrips.find((trip) => trip.slug === slug)
}

export const getDayTripById = (id: string): DayTrip | undefined => {
  return dayTrips.find((trip) => trip.id === id)
}
