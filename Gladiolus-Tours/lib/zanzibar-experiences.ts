export type ZanzibarExperience = {
  slug: string
  title: string
  description: string
  highlight: string
  duration: string
  price: string
  image: string
  highlights: string[]
  included: string[]
  itinerary: { step: string; detail: string }[]
}

export const zanzibarExperiences: ZanzibarExperience[] = [
  {
    slug: "spice-tours",
    title: "Zanzibar Spice Tours",
    description:
      "Walk through fragrant spice plantations on Zanzibar and learn how cloves, vanilla, cinnamon, and nutmeg shaped the island's history and cuisine.",
    highlight: "Hands-on spice farm experience",
    duration: "Half Day",
    price: "From $45 per person",
    image: "/gallery/chemka2.jpeg",
    highlights: [
      "Guided spice plantation walk",
      "Taste fresh tropical fruits",
      "Learn traditional uses of spices",
      "Local lunch option available",
      "Perfect add-on after safari",
    ],
    included: ["Hotel pickup in Stone Town area", "Professional guide", "Spice farm entrance", "Fruit tasting"],
    itinerary: [
      { step: "Morning pickup", detail: "Transfer from your hotel or Stone Town to a working spice farm." },
      { step: "Plantation tour", detail: "Guided walk identifying spices, herbs, and tropical fruits." },
      { step: "Tasting & shopping", detail: "Sample fresh produce and browse locally made spice products." },
      { step: "Return", detail: "Drop-off at your hotel or continue to the beach." },
    ],
  },
  {
    slug: "cultural-tour",
    title: "Stone Town Cultural Tour",
    description:
      "Explore UNESCO-listed Stone Town with a local guide — carved doors, historic alleys, markets, and the living Swahili culture of Zanzibar.",
    highlight: "UNESCO Stone Town heritage walk",
    duration: "Half Day",
    price: "From $40 per person",
    image: "/gallery/sunset.webp",
    highlights: [
      "Historic Stone Town walking tour",
      "Old Fort & House of Wonders area",
      "Local markets and craft workshops",
      "Swahili architecture and carved doors",
      "Flexible pacing for photographers",
    ],
    included: ["Professional local guide", "Walking tour of Stone Town", "Bottled water"],
    itinerary: [
      { step: "Meet your guide", detail: "Start at a central Stone Town meeting point or your hotel." },
      { step: "Heritage walk", detail: "Visit key landmarks, markets, and hidden courtyards." },
      { step: "Cultural stops", detail: "Learn about Zanzibar's Arab, Persian, Indian, and African heritage." },
      { step: "Free time", detail: "Optional lunch recommendation and return to your hotel." },
    ],
  },
  {
    slug: "diving-snorkeling",
    title: "Diving & Snorkeling in Zanzibar",
    description:
      "Discover Mnemba Atoll and Zanzibar's coral reefs on guided snorkeling or diving excursions with equipment and boat transfers included.",
    highlight: "Crystal-clear Indian Ocean reefs",
    duration: "Full Day",
    price: "From $85 per person",
    image: "/gallery/sunset.webp",
    highlights: [
      "Boat trip to reef sites",
      "Snorkeling gear provided",
      "Dolphin watching (seasonal)",
      "Beach lunch on sandbanks",
      "PADI dive options on request",
    ],
    included: ["Boat transfer", "Snorkeling equipment", "Guide", "Light lunch", "Soft drinks"],
    itinerary: [
      { step: "Hotel pickup", detail: "Morning transfer to the departure beach." },
      { step: "Boat excursion", detail: "Cruise to Mnemba or north-coast reef sites." },
      { step: "Snorkel sessions", detail: "Multiple stops for reef exploration and swimming." },
      { step: "Return", detail: "Afternoon return to your beach hotel." },
    ],
  },
  {
    slug: "transfers",
    title: "Zanzibar Airport & Ferry Transfers",
    description:
      "Reliable private transfers between Abeid Amani Karume International Airport, ferry terminals, Stone Town, and beach resorts across Zanzibar.",
    highlight: "Door-to-door island transfers",
    duration: "On demand",
    price: "From $35 per vehicle",
    image: "/gallery/gt-tourist-vehicle-01.webp",
    highlights: [
      "Airport meet-and-greet",
      "Ferry terminal transfers",
      "Resort and Stone Town connections",
      "Flight monitoring included",
      "24/7 support from Gladiolus Tours",
    ],
    included: ["Private vehicle", "English-speaking driver", "Bottled water", "Flight/ferry tracking"],
    itinerary: [
      { step: "Booking", detail: "Share your flight or ferry details when you confirm." },
      { step: "Meet & greet", detail: "Driver waits with a name board at arrivals." },
      { step: "Direct transfer", detail: "Comfortable drive to your hotel or the port." },
      { step: "Return option", detail: "Book your departure transfer at the same time." },
    ],
  },
]

export function getZanzibarExperience(slug: string) {
  return zanzibarExperiences.find((item) => item.slug === slug)
}
