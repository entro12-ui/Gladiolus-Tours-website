export type SafariDay = {
  day: number
  title: string
  description: string
}

export type SafariPackage = {
  id: string
  slug: string
  title: string
  region: string
  duration: string
  price: string
  description: string
  image: string
  highlights: string[]
  itinerary: SafariDay[]
  includes: string[]
}

export const safariPackages: SafariPackage[] = [
  {
    id: "safari-migration",
    slug: "great-migration-signature",
    title: "Great Migration Signature",
    region: "Northern",
    duration: "8 Days",
    price: "From $4,600",
    description:
      "Track the Great Migration with a private guide, fly-camps, and sunrise river crossings in the northern Serengeti.",
    image: "/gallery/zebra-00.webp",
    highlights: [
      "Private river-crossing drives",
      "Mobile camps near migration herds",
      "Ngorongoro crater descent",
      "Sundowners in the Serengeti",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Meet your guide, settle into a boutique lodge, and review the migration route.",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description: "Game drives among elephant herds and baobab groves.",
      },
      {
        day: 3,
        title: "Central Serengeti",
        description: "Fly into Serengeti and enjoy golden-hour wildlife drives.",
      },
      {
        day: 4,
        title: "Northern Serengeti",
        description: "Position for migration crossings with flexible game drives.",
      },
      {
        day: 5,
        title: "River Crossing Safari",
        description: "Full day tracking herds along the Mara River.",
      },
      {
        day: 6,
        title: "Ngorongoro Highlands",
        description: "Transfer to the crater rim and enjoy views and lodge downtime.",
      },
      {
        day: 7,
        title: "Ngorongoro Crater",
        description: "Descend into the crater for a full-day wildlife safari.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Return to Arusha and depart or continue to Zanzibar.",
      },
    ],
    includes: [
      "Private 4x4 safari vehicle",
      "Luxury tented camps",
      "All meals and park fees",
      "Domestic flights",
      "Professional guide",
    ],
  },
  {
    id: "safari-southern",
    slug: "southern-wilderness",
    title: "Southern Wilderness Explorer",
    region: "Southern",
    duration: "7 Days",
    price: "From $3,750",
    description:
      "Fly into Ruaha and Nyerere for boat safaris, big cats, and off-grid luxury in Tanzania's wild south.",
    image: "/gallery/sunset.webp",
    highlights: [
      "Boat safaris on the Rufiji",
      "Remote wilderness camps",
      "Walking safaris",
      "Low-traffic game drives",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dar es Salaam to Nyerere",
        description: "Charter flight to Nyerere and afternoon boat safari.",
      },
      {
        day: 2,
        title: "Nyerere National Park",
        description: "Full day of game drives with predator tracking.",
      },
      {
        day: 3,
        title: "Fly to Ruaha",
        description: "Transfer to Ruaha for sundowner drives and lodge relaxation.",
      },
      {
        day: 4,
        title: "Ruaha Game Drives",
        description: "Explore baobab valleys and lion territories.",
      },
      {
        day: 5,
        title: "Walking Safari",
        description: "Guided walking safari and bush breakfast.",
      },
      {
        day: 6,
        title: "Cultural Encounters",
        description: "Meet local communities and learn about conservation initiatives.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Return to Dar es Salaam for onward travel.",
      },
    ],
    includes: [
      "Charter flights",
      "Luxury lodges",
      "Boat safari experiences",
      "Walking safari permits",
      "All meals and park fees",
    ],
  },
  {
    id: "safari-coastal",
    slug: "safari-and-sea",
    title: "Safari + Zanzibar Coast",
    region: "Coastal",
    duration: "10 Days",
    price: "From $5,200",
    description:
      "Blend classic game drives with Zanzibar beach time, spice tours, and oceanfront villas.",
    image: "/hero/hero-02.webp",
    highlights: [
      "Serengeti and Ngorongoro",
      "Stone Town heritage walk",
      "Private dhow cruise",
      "Beachfront villas",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description: "Transfer to a boutique lodge and safari briefing.",
      },
      {
        day: 2,
        title: "Lake Manyara",
        description: "Game drives and lake-edge picnic.",
      },
      {
        day: 3,
        title: "Serengeti",
        description: "Drive to Serengeti with en-route game viewing.",
      },
      {
        day: 4,
        title: "Serengeti Safari",
        description: "Full day of game drives with flexible pacing.",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description: "Descend into the crater for wildlife viewing.",
      },
      {
        day: 6,
        title: "Fly to Zanzibar",
        description: "Arrive in Stone Town for a sunset walk and dinner.",
      },
      {
        day: 7,
        title: "Spice & Culture",
        description: "Private spice tour and cultural experience.",
      },
      {
        day: 8,
        title: "Beach Day",
        description: "Relax on the coast with optional water sports.",
      },
      {
        day: 9,
        title: "Dhow Cruise",
        description: "Sunset dhow sailing and seafood dinner.",
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer to Zanzibar airport for onward travel.",
      },
    ],
    includes: [
      "Domestic flights",
      "Luxury safari camps",
      "Beach resort stays",
      "Private transfers",
      "All meals and park fees",
    ],
  },
]
