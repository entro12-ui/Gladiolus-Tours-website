export type AdventureItineraryDay = {
  day: number
  title: string
  description: string
}

export type AdventurePackage = {
  name: string
  duration: string
  price: string
  description: string
  includes: string[]
}

export type Adventure = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  highlights: string[]
  itinerary: AdventureItineraryDay[]
  packages: AdventurePackage[]
}

export const adventures: Adventure[] = [
  {
    id: "adventure-kili-northern",
    slug: "kilimanjaro-northern-circuit",
    title: "9 Days Kilimanjaro Trek via Northern Circuit",
    category: "Mountain Climbing",
    description:
      "The Northern Circuit is Kilimanjaro's most scenic trail with generous acclimatization. Expect remote alpine ridges, glacier views, and unhurried summit pacing.",
    image: "/gallery/kili1.jpeg",
    highlights: [
      "Longest acclimatization window for higher summit success",
      "Northern slopes with fewer climbers",
      "Dedicated summit support team",
      "Private crater camp option",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Gear Check",
        description: "Arrive in Arusha, meet your lead guide, and complete a full gear and medical briefing.",
      },
      {
        day: 2,
        title: "Lemosho Gate to Mti Mkubwa",
        description: "Trek through rainforest to the first camp while guides set the acclimatization pace.",
      },
      {
        day: 3,
        title: "Shira Plateau Exploration",
        description: "Cross open moorland with expansive views of the Shira Plateau and distant peaks.",
      },
      {
        day: 4,
        title: "Lava Tower Acclimatization",
        description: "Climb high to Lava Tower for acclimatization and descend to a lower camp for rest.",
      },
      {
        day: 5,
        title: "Northern Circuit Traverse",
        description: "Traverse the northern slope, a quieter route with dramatic alpine scenery.",
      },
      {
        day: 6,
        title: "High Camp & Summit Briefing",
        description: "Reach high camp early, hydrate, and prepare for the overnight summit push.",
      },
      {
        day: 7,
        title: "Summit Day",
        description: "Midnight ascent to Uhuru Peak followed by descent to mid camp for recovery.",
      },
      {
        day: 8,
        title: "Descent to Mweka",
        description: "Descend through moorland and rainforest with celebratory debriefs along the way.",
      },
      {
        day: 9,
        title: "Departure",
        description: "Transfer back to Arusha or onward to safari extensions.",
      },
    ],
    packages: [
      {
        name: "Classic Northern Circuit",
        duration: "9 Days",
        price: "From $3,950",
        description: "Balanced trek with premium camps, full guide team, and private transfers.",
        includes: ["Park fees", "Full-board meals", "Private tents", "Summit certificates"],
      },
      {
        name: "Northern Circuit + Safari",
        duration: "12 Days",
        price: "From $5,900",
        description: "Add three safari days in Tarangire and Ngorongoro after the summit.",
        includes: ["Safari lodge stays", "4x4 vehicle", "Full-board safari", "Park fees"],
      },
    ],
  },
  {
    id: "adventure-walking-safari",
    slug: "walking-safaris",
    title: "Walking Safaris & Indigenous Guide Encounters",
    category: "Walking Safaris",
    description:
      "Slow down to explore on foot with specialist rangers and indigenous guides. Track wildlife, learn bushcraft, and enjoy intimate sundowners in the wild.",
    image: "/gallery/tour-guide.webp",
    highlights: [
      "Guided tracking and bushcraft lessons",
      "Low-impact walking routes",
      "Sunset riverbank sundowners",
      "Community storytelling circles",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Ranger Briefing",
        description: "Meet your walking guide team and learn safety protocols and tracking basics.",
      },
      {
        day: 2,
        title: "Morning Track & Wildlife Signs",
        description: "Follow fresh wildlife tracks and learn to identify key species and habitats.",
      },
      {
        day: 3,
        title: "Indigenous Guide Immersion",
        description: "Spend time with indigenous guides to learn local ecology and cultural traditions.",
      },
      {
        day: 4,
        title: "River Walk & Sundowner",
        description: "Explore water corridors, then relax with a curated riverside sundowner.",
      },
      {
        day: 5,
        title: "Departure or Add-on Safari",
        description: "Transfer onward or extend with a vehicle safari to nearby parks.",
      },
    ],
    packages: [
      {
        name: "Walking Safari Essentials",
        duration: "5 Days",
        price: "From $2,150",
        description: "Guided walks with boutique lodges and daily ranger briefings.",
        includes: ["Walking permits", "Expert ranger", "All meals", "Transfers"],
      },
      {
        name: "Walking + Fly Camp",
        duration: "6 Days",
        price: "From $2,950",
        description: "Includes one night under the stars with a fly camp crew.",
        includes: ["Fly camp setup", "Private chef", "Night watch", "Luxury lodges"],
      },
    ],
  },
  {
    id: "adventure-zanzibar",
    slug: "zanzibar-coast",
    title: "Zanzibar Coast & Spice Culture",
    category: "Beach Holiday",
    description:
      "Wind down on the spice coast with curated Stone Town walks, dhow cruises, and boutique beach stays that blend culture with restoration.",
    image: "/gallery/sunset.webp",
    highlights: [
      "Stone Town heritage walks",
      "Private spice farm tour",
      "Dhow sailing at sunset",
      "Spa and wellness sessions",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Stone Town",
        description: "Check in to a heritage hotel and enjoy a guided evening food tour.",
      },
      {
        day: 2,
        title: "Spice Farm & Culture",
        description: "Visit a spice plantation and explore cultural landmarks with a historian guide.",
      },
      {
        day: 3,
        title: "Beach Transfer",
        description: "Move to the coast for beach time, snorkeling, and spa sessions.",
      },
      {
        day: 4,
        title: "Ocean Experiences",
        description: "Private dhow cruise, reef snorkeling, and chef-led seafood dinner.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisure morning and transfer to the airport.",
      },
    ],
    packages: [
      {
        name: "Spice Coast Escape",
        duration: "5 Days",
        price: "From $1,900",
        description: "Heritage hotel + beachfront retreat with curated experiences.",
        includes: ["Stone Town guide", "Beach resort", "Airport transfers", "Breakfasts"],
      },
      {
        name: "Romance on the Coast",
        duration: "6 Days",
        price: "From $2,450",
        description: "Add private dinners, spa rituals, and sunset sailing.",
        includes: ["Private chef dinner", "Spa rituals", "Dhow cruise", "Butler service"],
      },
    ],
  },
  {
    id: "adventure-northern-circuit",
    slug: "northern-circuit-adventure",
    title: "Adventure Safaris Across the Northern Circuit",
    category: "Adventure Safaris",
    description:
      "Blend game drives with active add-ons—canoeing, cycling, crater rim walks, and photography-focused days tuned to the season’s best wildlife.",
    image: "/gallery/gt-tourist-vehicle-01.webp",
    highlights: [
      "Canoe safaris on Lake Manyara",
      "Crater rim hikes",
      "Photography coaching sessions",
      "Private 4x4 with flexible routing",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Arusha Orientation",
        description: "Welcome briefing with your safari director and gear preparation.",
      },
      {
        day: 2,
        title: "Tarangire Game Drives",
        description: "Morning and evening drives with an optional cycling excursion.",
      },
      {
        day: 3,
        title: "Lake Manyara Canoe",
        description: "Canoe safari followed by village cultural encounters.",
      },
      {
        day: 4,
        title: "Ngorongoro Crater Rim Walk",
        description: "Guided walk along the crater rim with picnic lunch.",
      },
      {
        day: 5,
        title: "Serengeti Photography",
        description: "Golden hour photography sessions with expert guides.",
      },
      {
        day: 6,
        title: "Departure or Extension",
        description: "Extend to Zanzibar or depart from Kilimanjaro Airport.",
      },
    ],
    packages: [
      {
        name: "Northern Adventure Core",
        duration: "6 Days",
        price: "From $3,200",
        description: "Active safari with private guiding and flexible daily pacing.",
        includes: ["Private guide", "Luxury camps", "All meals", "Park fees"],
      },
      {
        name: "Northern Adventure + Zanzibar",
        duration: "9 Days",
        price: "From $4,850",
        description: "Add three Zanzibar beach days with curated cultural stops.",
        includes: ["Beach resort", "Island transfers", "Dhow cruise", "Chef dinner"],
      },
    ],
  },
]
