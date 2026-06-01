import { resolveSafariSlug } from "./route-aliases"

export type SafariDay = {
  day: number | string
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
  category: "itinerary" | "info"
}

export const safariPackages: SafariPackage[] = [
  {
    id: "big-five",
    slug: "big-five",
    title: "3 Days Big Five Safari",
    region: "Northern Tanzania",
    duration: "3 Days",
    price: "From $1,200",
    description: "Perfect short safari for first-time visitors wanting to see the Big Five in Tarangire and Lake Manyara.",
    image: "/gallery/saf1.jpeg",
    category: "itinerary",
    highlights: ["Big Five wildlife", "Tarangire elephants", "Lake Manyara scenery", "Private 4x4 vehicle", "Budget-friendly"],
    itinerary: [
      { day: 1, title: "Arusha to Tarangire", description: "Transfer to Tarangire National Park with afternoon game drive." },
      { day: 2, title: "Full Day Tarangire", description: "Full day game drive focusing on elephants and lions." },
      { day: 3, title: "Lake Manyara & Return", description: "Morning in Lake Manyara then return to Arusha." },
    ],
    includes: ["Park fees", "Accommodation", "Meals", "Private guide", "4x4 vehicle"],
  },
  {
    id: "big-five-short",
    slug: "big-five-short",
    title: "3 Days Big Five Short Escape",
    region: "Northern Tanzania",
    duration: "3 Days",
    price: "From $1,200",
    description: "Intensive 3-day safari focusing on the Big Five in Tarangire and Lake Manyara.",
    image: "/gallery/saf3.jpeg",
    category: "itinerary",
    highlights: ["Compact itinerary", "Big Five focus", "Ideal for short stays", "Private vehicle", "Expert guide"],
    itinerary: [
      { day: 1, title: "Tarangire", description: "Transfer and game drive in Tarangire National Park." },
      { day: 2, title: "Full Day Tarangire", description: "Extended wildlife viewing in Tarangire." },
      { day: 3, title: "Lake Manyara", description: "Morning game drive then return to Arusha." },
    ],
    includes: ["Park fees", "Accommodation", "Meals", "Guide", "Transport"],
  },
  {
    id: "wonders-of-tanzania",
    slug: "wonders-of-tanzania",
    title: "6 Days Wonders of Tanzania",
    region: "Northern Tanzania",
    duration: "6 Days",
    price: "From $2,800",
    description: "Comprehensive safari covering Tarangire, Serengeti, and Ngorongoro Crater.",
    image: "/gallery/saf2.jpeg",
    category: "itinerary",
    highlights: ["Serengeti plains", "Ngorongoro Crater", "Tarangire elephants", "Mid-range lodges", "Balanced pacing"],
    itinerary: [
      { day: 1, title: "Tarangire", description: "Arusha to Tarangire National Park." },
      { day: "2-3", title: "Serengeti", description: "Game drives in Serengeti National Park." },
      { day: "4-5", title: "Ngorongoro", description: "Crater descent and wildlife viewing." },
      { day: 6, title: "Return", description: "Return to Arusha." },
    ],
    includes: ["All park fees", "Accommodation", "Full board meals", "Private guide", "4x4 Land Cruiser"],
  },
  {
    id: "bush-and-beach",
    slug: "bush-and-beach",
    title: "8 Days Luxury Bush & Beach Safari",
    region: "Northern Tanzania & Zanzibar",
    duration: "8 Days",
    price: "From $5,400",
    description: "Combine luxury safari in Serengeti and Ngorongoro with relaxation on Zanzibar beaches.",
    image: "/gallery/saff.jpeg",
    category: "itinerary",
    highlights: ["Northern Circuit safari", "Zanzibar beach extension", "Stone Town visit", "Luxury lodges", "Private transfers"],
    itinerary: [
      { day: "1-5", title: "Northern Circuit", description: "Tarangire, Serengeti, and Ngorongoro safari." },
      { day: 6, title: "Fly to Zanzibar", description: "Transfer to Zanzibar beach resort." },
      { day: 7, title: "Beach & Culture", description: "Stone Town and spice tour options." },
      { day: 8, title: "Departure", description: "Beach morning and airport transfer." },
    ],
    includes: ["Safari logistics", "Domestic flight to Zanzibar", "Beach hotel", "Selected excursions", "Private guide"],
  },
  {
    id: "great-migration",
    slug: "great-migration-safari",
    title: "Serengeti Great Migration Safari",
    region: "Northern Tanzania",
    duration: "8 Days",
    price: "From $4,600",
    description: "Witness the world's most dramatic wildlife spectacle: the Great Wildebeest Migration.",
    image: "/gallery/saf6.jpeg",
    category: "itinerary",
    highlights: ["Mara River Crossings", "Big Five Sightings", "Private 4x4 Vehicle", "Luxury Tented Camps"],
    itinerary: [
      { day: 1, title: "Arrival in Arusha", description: "Transfer to your lodge for a briefing." },
      { day: "2-3", title: "Central Serengeti", description: "Game drives in the heart of big cat country." },
      { day: "4-6", title: "Northern Serengeti", description: "Tracking the migration herds near the Mara River." },
      { day: 7, title: "Ngorongoro Crater", description: "Descent into the Eden of Africa." },
      { day: 8, title: "Departure", description: "Return to Arusha for your flight home." }
    ],
    includes: ["All Park Fees", "Private Guide", "Full Board Meals", "4x4 Land Cruiser"]
  },
  {
    id: "private-tours",
    slug: "private-tours",
    title: "Tailor-Made Private Safari Tours",
    region: "All Tanzania",
    duration: "Custom",
    price: "Custom Pricing",
    description: "Exclusively designed itineraries for couples, families, or small groups seeking total flexibility.",
    image: "/gallery/privatesafar.jpeg",
    category: "itinerary",
    highlights: ["Dedicated Private Guide", "Custom Daily Schedule", "Handpicked Lodges", "Private 4x4 Cruiser"],
    itinerary: [
      { day: "Note", title: "Customizable Days", description: "We build the itinerary around your specific interests and pace." }
    ],
    includes: ["Private Transport", "Expert Naturalist Guide", "Personalized Planning"]
  },
  {
    id: "safari-vehicles",
    slug: "safari-vehicles",
    title: "Our 4x4 Safari Land Cruisers",
    region: "Logistics",
    duration: "Tech Specs",
    price: "Included in Tours",
    description: "Our fleet consists of specially modified 4x4 Land Cruisers designed for the rugged Tanzanian terrain.",
    image: "/gallery/safariM.jpeg",
    category: "info",
    highlights: ["Pop-up Roof for 360° Viewing", "In-car Charging Points", "Fridge for Cold Drinks", "Long-range Radio"],
    itinerary: [
      { day: "Feature", title: "Comfort", description: "Extended frames for extra legroom and large windows." },
      { day: "Safety", title: "Maintenance", description: "Every vehicle is serviced after every single safari trip." }
    ],
    includes: ["Window Seat Guaranteed", "Snorkel for River Crossing", "Reference Books & Binoculars"]
  },
  {
    id: "packing-list",
    slug: "packing-list",
    title: "Safari Packing List Essentials",
    region: "Preparation",
    duration: "Checklist",
    price: "Expert Guide",
    description: "Ensure you have everything you need for a comfortable and safe adventure in the bush.",
    image: "/gallery/saf7.jpeg",
    category: "info",
    highlights: ["Neutral Colored Clothing", "Sun Protection", "Quality Binoculars", "Anti-Malaria Meds"],
    itinerary: [
      { day: "Clothes", title: "What to Wear", description: "Layers are key. Mornings are cold, afternoons are hot. Avoid blue/black (tsetse flies)." },
      { day: "Gear", title: "Essential Tech", description: "Camera, spare batteries, and power banks are vital for remote areas." }
    ],
    includes: ["Standard Checklist", "Visa Requirements", "Health Tips"]
  },
  {
    id: "honeymoon-safari",
    slug: "honeymoon-safari",
    title: "Romantic Honeymoon Safaris",
    region: "Romantic Tanzania",
    duration: "7-12 Days",
    price: "From $5,200",
    description: "Combine the thrill of the wild with intimate luxury in Africa's most romantic settings.",
    image: "/gallery/bandsafari.jpeg",
    category: "itinerary",
    highlights: ["Private Bush Dinners", "Star-bed Stays", "Zanzibar Extensions", "Hot Air Balloon Safari"],
    itinerary: [
      { day: "Vibe", title: "Intimate Luxury", description: "We select smaller, remote camps that prioritize privacy and romance." }
    ],
    includes: ["Couple's Massage", "Champaign Sundowners", "Private Transfers"]
  }
]

export function getSafariBySlug(slug: string): SafariPackage | undefined {
  const resolved = resolveSafariSlug(slug)
  return safariPackages.find((pkg) => pkg.slug === resolved)
}