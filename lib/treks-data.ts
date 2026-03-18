export type TrekDifficulty = "Easy" | "Moderate" | "Challenging"

export interface Trek {
  id: string
  slug: string
  title: string
  location: string
  region: "northern" | "southern" | "eastern" | "western" | "coast"
  duration: string
  elevation: string
  difficulty: TrekDifficulty
  bestTime: string
  permits: string
  image: string
  description: string
  highlights: string[]
}

export const majorMountainTreks: Trek[] = [
  {
    id: "kili-machame",
    slug: "kilimanjaro-machame-route",
    title: "Mount Kilimanjaro — Machame Route",
    location: "Kilimanjaro National Park",
    region: "northern",
    duration: "7 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June-October, January-March",
    permits: "Park fees and mountain permits required",
    image: "/gallery/sunset.webp",
    description:
      "The classic 'Whiskey Route' with dramatic scenery and strong acclimatization. A great fit for trekkers who want varied landscapes and a high summit success rate.",
    highlights: [
      "Rainforest to alpine desert transitions",
      "Barranco Wall scramble",
      "Balanced acclimatization profile",
      "Sunrise summit push",
      "Iconic crater views",
    ],
  },
  {
    id: "kili-lemosho",
    slug: "kilimanjaro-lemosho-route",
    title: "Mount Kilimanjaro — Lemosho Route",
    location: "Kilimanjaro National Park",
    region: "northern",
    duration: "8 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June-October, January-March",
    permits: "Park fees and mountain permits required",
    image: "/gallery/zebra-00.webp",
    description:
      "A premium, scenic approach with excellent acclimatization. Lemosho starts on the quiet western side of the mountain and joins the main summit routes later.",
    highlights: [
      "Quieter trailhead and wide-open views",
      "Strong acclimatization for summit success",
      "Shira Plateau panoramas",
      "Professional guide + porter support",
      "Sunrise at Uhuru Peak",
    ],
  },
  {
    id: "kili-marangu",
    slug: "kilimanjaro-marangu-route",
    title: "Mount Kilimanjaro — Marangu Route",
    location: "Kilimanjaro National Park",
    region: "northern",
    duration: "6 Days",
    elevation: "5,895m (Uhuru Peak)",
    difficulty: "Challenging",
    bestTime: "June-October, January-March",
    permits: "Park fees and mountain permits required",
    image: "/gallery/lion-00.webp",
    description:
      "Known as the 'Coca-Cola Route', Marangu is the only Kilimanjaro route that uses mountain huts. It’s a straightforward path but with less acclimatization time.",
    highlights: [
      "Hut accommodation (no camping)",
      "Direct, established trail",
      "Shorter itinerary option",
      "Classic Kibo summit night",
      "Great for logistics simplicity",
    ],
  },
  {
    id: "meru",
    slug: "mount-meru-trek",
    title: "Mount Meru Trek",
    location: "Arusha National Park",
    region: "northern",
    duration: "4 Days",
    elevation: "4,566m (Socialist Peak)",
    difficulty: "Challenging",
    bestTime: "June-October, January-February",
    permits: "Park fees, permits, and armed ranger required",
    image: "/gallery/tour-guide.webp",
    description:
      "A steep, rewarding volcanic trek in Arusha National Park. Ideal for acclimatization before Kilimanjaro and for wildlife-rich lower slopes.",
    highlights: [
      "Excellent acclimatization climb",
      "Potential wildlife sightings on approach",
      "Ridge walk with big views",
      "Shorter summit itinerary",
      "Arusha National Park scenery",
    ],
  },
  {
    id: "lengai",
    slug: "ol-doinyo-lengai-night-hike",
    title: "Ol Doinyo Lengai Night Hike",
    location: "Rift Valley (near Lake Natron)",
    region: "northern",
    duration: "1 Night",
    elevation: "2,962m",
    difficulty: "Challenging",
    bestTime: "June-October",
    permits: "Local guide and ranger required",
    image: "/gallery/Olduvai-Gorge-00.webp",
    description:
      "A demanding, steep night ascent of Tanzania’s active volcano for sunrise views over the Rift Valley and Lake Natron.",
    highlights: [
      "Sunrise from the crater rim",
      "Unique active-volcano terrain",
      "Rift Valley and Lake Natron views",
      "Short but physically intense",
      "Guided for safety and navigation",
    ],
  },
]

export const otherNotableHikes: Trek[] = [
  {
    id: "udzungwa",
    slug: "udzungwa-mountains-waterfalls-hike",
    title: "Udzungwa Mountains Waterfalls Hike",
    location: "Udzungwa Mountains National Park",
    region: "southern",
    duration: "1-3 Days",
    elevation: "Up to ~2,576m",
    difficulty: "Moderate",
    bestTime: "June-October",
    permits: "Park fees and ranger/guide required",
    image: "/gallery/gt-tourist-vehicle-00.webp",
    description:
      "A tropical rainforest escape known as the 'Galápagos of Africa'—rich biodiversity, steep forest trails, and dramatic waterfalls.",
    highlights: [
      "Rainforest hiking",
      "Waterfall viewpoints",
      "Endemic flora and fauna",
      "Great add-on after Southern Circuit",
      "Cooler forest microclimates",
    ],
  },
  {
    id: "usambara",
    slug: "usambara-mountains-cultural-walks",
    title: "Usambara Mountains Cultural Walks",
    location: "Lushoto & surrounding villages",
    region: "eastern",
    duration: "1-4 Days",
    elevation: "1,200m–2,300m",
    difficulty: "Easy",
    bestTime: "June-October",
    permits: "Local guide recommended",
    image: "/gallery/beer.webp",
    description:
      "Green, cool highlands with village-to-village trails, viewpoints, and cultural encounters—perfect for relaxed hiking and photography.",
    highlights: [
      "Village trails and local culture",
      "Panoramic viewpoints",
      "Cooler temperatures",
      "Flexible day hikes",
      "Great for families and soft adventure",
    ],
  },
  {
    id: "empakaai",
    slug: "ngorongoro-highlands-empakaai-crater-trek",
    title: "Ngorongoro Highlands — Empakaai Crater Trek",
    location: "Ngorongoro Highlands",
    region: "northern",
    duration: "1-2 Days",
    elevation: "~3,200m",
    difficulty: "Moderate",
    bestTime: "June-October, January-March",
    permits: "Conservation fees and guide required",
    image: "/gallery/lunch-00.webp",
    description:
      "Walk through dramatic volcanic landscapes and Maasai lands to Empakaai’s crater lake—often paired with Olmoti crater walks.",
    highlights: [
      "Volcanic crater viewpoints",
      "Maasai cultural landscapes",
      "Highland air and scenic ridges",
      "Optional multi-day highlands extensions",
      "Excellent photography light",
    ],
  },
]
