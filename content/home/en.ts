import type { HomeContent } from "./types"

export const enHomeContent: HomeContent = {
  metadata: {
    title: "Tanzania Safaris & Tours | Serengeti, Kilimanjaro & Zanzibar | Gladiolus Tours",
    description:
      "Gladiolus Tours offers Tanzania safari packages for every budget — from budget group safaris to premium private tours. Explore Serengeti, Ngorongoro, Kilimanjaro, Tarangire & Zanzibar with trusted local experts.",
    keywords: [
      "Tanzania Safari Packages",
      "Affordable Tanzania Safaris",
      "Budget Safari Tanzania",
      "Serengeti Safari",
      "Tanzania Family Safari",
      "Private Tanzania Safari",
      "Luxury African Safari",
      "Mount Kilimanjaro Trekking",
      "Ngorongoro Crater Tours",
      "Arusha Safari Company",
      "Great Migration Safari",
      "Zanzibar Beach Holidays",
      "Tanzania Travel Experts",
      "Group Safari Tanzania",
      "Mid-Range Tanzania Safari",
    ],
    openGraphTitle: "Tanzania Safari Packages for Every Traveler | Gladiolus Tours",
    openGraphDescription:
      "From budget adventures to premium private safaris — explore Serengeti, Ngorongoro, Kilimanjaro, Tarangire & Zanzibar with Gladiolus Tours.",
    twitterTitle: "Tanzania Safaris for Every Budget | Gladiolus Tours",
    twitterDescription:
      "Budget to premium Tanzania safaris — Serengeti, Kilimanjaro & Zanzibar packages tailored to you.",
    openGraphLocale: "en_US",
  },
  hero: {
    badge: "Tanzania · Kilimanjaro · Zanzibar · All Budgets",
    title: "Luxury & Affordable Tanzania Safari Tours,",
    titleHighlight: "Kilimanjaro Treks & Zanzibar Holidays",
    description:
      "Explore Tanzania with flexible packages designed for every traveler and budget - from budget-friendly group safaris and mid-range family adventures to premium private experiences across Serengeti, Ngorongoro, Kilimanjaro, Tarangire, and Zanzibar.",
    descriptionBold: "every traveler and budget",
    rating: "4.9/5",
    guests: "2,800+ guests",
    experience: "22 Years Experience",
    planAdventure: "Plan Your Adventure",
    whatsappQuote: "Quick WhatsApp Quote",
    scroll: "Scroll",
    trustedExperts: "Trusted Local Experts",
    trustedSubtext: "Based in Arusha, Tanzania",
    stats: [
      { value: "2,800+", label: "Happy Guests" },
      { value: "22", label: "Years Experience" },
      { value: "All", label: "Budgets Welcome" },
      { value: "100%", label: "Custom Plans" },
    ],
  },
  intro: {
    eyebrow: "Welcome To Gladiolus Tours",
    title: "Authentic Tanzania Experiences",
    titleLine2: "For Every Traveler",
    description:
      "At Gladiolus Tours, we believe unforgettable Tanzania experiences should be accessible to every traveler. Whether you are planning a budget safari, a comfortable mid-range family escape, a romantic honeymoon, or a premium private adventure - our local team crafts journeys tailored to your style and budget.",
    budget: "Budget",
    midRange: "Mid-Range",
    premium: "Premium",
    tiers: [
      { tier: "Budget", color: "bg-[#8DAE6F]", label: "Group & Shared Safaris" },
      { tier: "Mid-Range", color: "bg-[#B8A840]", label: "Comfortable & Flexible" },
      { tier: "Premium", color: "bg-[#2D4A30]", label: "Private & Exclusive" },
    ],
  },
  safariPackages: {
    eyebrow: "Safari Packages · All Budgets",
    title: "Handcrafted Tanzania Safari Packages",
    subtitle:
      "Whether you are traveling solo on a budget, with family on a mid-range package, or seeking an exclusive private experience - we have a safari crafted for you.",
    sampleItinerary: "Sample Itinerary:",
    viewFullItinerary: "View Full Itinerary",
    bookSafari: "Book This Safari",
    viewAll: "View All Safari Packages",
    minPax: "Min {minPax} pax",
    packages: [
      {
        title: "3 Days Big Five Safari",
        duration: "3 DAYS",
        badge: "BEST VALUE",
        priceFrom: "From $1,200",
        minPax: "4",
        image: "/gallery/safari1.jpeg",
        link: "/safaris/big-five",
        description:
          "Perfect short safari for first-time visitors wanting to see the Big Five in Tarangire and Manyara.",
        shortItinerary: [
          "Day 1: Arusha to Tarangire National Park",
          "Day 2: Full day Tarangire game drive",
          "Day 3: Lake Manyara to Arusha",
        ],
        fullItinerary: [
          { day: "Day 1", activity: "Arusha to Tarangire National Park with game drive" },
          {
            day: "Day 2",
            activity: "Full day game drive in Tarangire focusing on elephants and lions",
          },
          { day: "Day 3", activity: "Morning in Lake Manyara then return to Arusha" },
        ],
      },
      {
        title: "6 Days Exploring the Wonders of Tanzania",
        duration: "6 DAYS",
        badge: "MOST POPULAR",
        priceFrom: "From $2,800",
        minPax: "4",
        image: "/gallery/safari2.jpeg",
        link: "/safaris/wonders-of-tanzania",
        description:
          "Comprehensive safari covering Tarangire, Serengeti, and Ngorongoro Crater.",
        shortItinerary: [
          "Day 1: Arusha to Tarangire",
          "Day 2-3: Serengeti National Park",
          "Day 4-5: Ngorongoro Crater",
          "Day 6: Return to Arusha",
        ],
        fullItinerary: [
          { day: "Day 1", activity: "Arusha to Tarangire National Park" },
          { day: "Day 2", activity: "Tarangire to Central Serengeti" },
          { day: "Day 3", activity: "Full day in Serengeti" },
          { day: "Day 4", activity: "Serengeti to Ngorongoro Crater" },
          { day: "Day 5", activity: "Full day game drive in Ngorongoro Crater" },
          { day: "Day 6", activity: "Ngorongoro to Arusha" },
        ],
      },
      {
        title: "7 Days The Great Migration Safari",
        duration: "7 DAYS",
        badge: "SIGNATURE",
        priceFrom: "From $4,000",
        minPax: "2",
        image: "/gallery/safari3.jpeg",
        link: "/safaris/great-migration-safari",
        description:
          "Follow the Great Migration with private guide and luxury camps in Northern Serengeti.",
        shortItinerary: [
          "Day 1-2: Central Serengeti",
          "Day 3-5: Northern Serengeti (Mara River)",
          "Day 6: Ngorongoro Crater",
          "Day 7: Return to Arusha",
        ],
        fullItinerary: [
          { day: "Day 1", activity: "Arusha to Central Serengeti" },
          { day: "Day 2", activity: "Game drives in Central Serengeti" },
          { day: "Day 3", activity: "Transfer to Northern Serengeti" },
          { day: "Day 4", activity: "Tracking the Great Migration" },
          { day: "Day 5", activity: "Mara River crossing area" },
          { day: "Day 6", activity: "Ngorongoro Crater full day" },
          { day: "Day 7", activity: "Return to Arusha" },
        ],
      },
      {
        title: "8 Days Luxury Bush & Beach Safari",
        duration: "8 DAYS",
        badge: "PREMIUM",
        priceFrom: "From $5,400",
        minPax: "2",
        image: "/gallery/safari4.jpeg",
        link: "/safaris/bush-and-beach",
        description:
          "Combine luxury safari in Serengeti & Ngorongoro with relaxation on Zanzibar beaches.",
        shortItinerary: [
          "Day 1-5: Northern Circuit Safari",
          "Day 6-8: Zanzibar Beach Relaxation",
        ],
        fullItinerary: [
          { day: "Day 1", activity: "Arusha to Tarangire" },
          { day: "Day 2-4", activity: "Serengeti National Park" },
          { day: "Day 5", activity: "Ngorongoro Crater" },
          { day: "Day 6", activity: "Fly to Zanzibar" },
          { day: "Day 7", activity: "Stone Town & Spice Tour" },
          { day: "Day 8", activity: "Beach relaxation and departure" },
        ],
      },
      {
        title: "3 Days Big Five Safari",
        duration: "3 DAYS",
        badge: "SHORT ESCAPE",
        priceFrom: "From $1,200",
        minPax: "4",
        image: "/gallery/safari5.jpeg",
        link: "/safaris/big-five-short",
        description:
          "Intensive 3-day safari focusing on the Big Five in Tarangire and Lake Manyara.",
        shortItinerary: [
          "Day 1: Arusha to Tarangire",
          "Day 2: Full day in Tarangire",
          "Day 3: Lake Manyara to Arusha",
        ],
        fullItinerary: [
          { day: "Day 1", activity: "Transfer to Tarangire National Park with game drive" },
          {
            day: "Day 2",
            activity: "Full day game drive focusing on elephants and lions",
          },
          { day: "Day 3", activity: "Morning in Lake Manyara then return to Arusha" },
        ],
      },
    ],
  },
  treks: {
    eyebrow: "Mountain Adventures",
    title: "Mount Kilimanjaro & Mount Meru Treks",
    subtitle:
      "Climb Africa's highest peak or explore Mount Meru in Arusha National Park. Professional mountain guides, safety-focused itineraries, and high summit success rates.",
    guidedTrek: "Guided Trek",
    viewRoute: "View Route",
    quickQuote: "Quick Quote",
    routes: [
      {
        title: "5 Days Marangu Route - Kilimanjaro Climb",
        duration: "5 DAYS",
        price: "From $2,100",
        image: "/gallery/Marangu Route.jpeg",
        link: "/treks/kilimanjaro-marangu-route",
        description:
          "The most comfortable Kilimanjaro route with hut accommodation. Ideal for beginners seeking a classic summit experience via Uhuru Peak (5,895m).",
        highlight: "Best For Beginners",
      },
      {
        title: "7 Days Machame Route - Kilimanjaro",
        duration: "7 DAYS",
        price: "From $2,200",
        image: "/gallery/Machame Route.jpeg",
        link: "/treks/kilimanjaro-machame-route",
        description:
          "The most popular Kilimanjaro trekking route offering diverse scenery and one of the highest summit success rates.",
        highlight: "Most Popular Route",
      },
      {
        title: "8 Days Lemosho Route - Kilimanjaro",
        duration: "8 DAYS",
        price: "From $2,380",
        image: "/gallery/Lemosho Route.jpeg",
        link: "/treks/kilimanjaro-lemosho-route",
        description:
          "Scenic and remote approach with excellent acclimatization profile and premium trekking experience.",
        highlight: "Highest Success Rate",
      },
      {
        title: "6 Days Rongai Route - Kilimanjaro",
        duration: "8 DAYS",
        price: "From $2,150",
        image: "/gallery/Rongai Route.jpeg",
        link: "/treks/kilimanjaro-rongai-route",
        description:
          "Quiet northern approach near the Kenya border with dry conditions and gentle ascent.",
        highlight: "Least Crowded Route",
      },
      {
        title: "4 Days Mount Meru Trek - Arusha",
        duration: "4 DAYS",
        price: "From $1,000",
        image: "/gallery/Mount meru, Arusha national park.jpeg",
        link: "/treks/mount-meru-trek",
        description:
          "Wildlife-rich trekking experience inside Arusha National Park and perfect Kilimanjaro acclimatization climb.",
        highlight: "Best Short Trek",
      },
    ],
  },
  founders: {
    eyebrow: "Leadership",
    title: "Meet the Founders",
    subtitle:
      "Passionate Tanzania travel professionals dedicated to delivering authentic, world-class safari experiences with genuine local expertise.",
    people: [
      {
        name: "Sunday Mtui",
        role: "Co-Founder & Lead Safari Specialist",
        image: "/gallery/tour-guide.webp",
        bio: "With over two decades of safari leadership across Serengeti, Ngorongoro, and Mount Kilimanjaro - Sunday brings unmatched local knowledge and warm, personalized guiding.",
      },
      {
        name: "Francois Martin",
        role: "Co-Founder & International Travel Consultant",
        image: "/gallery/photo-00.webp",
        bio: "Specializing in international safari planning and cross-budget lodge partnerships - Francois ensures every traveler finds the perfect match for their style and spend.",
      },
    ],
  },
  highlights: {
    eyebrow: "What We Offer",
    title: "Safari Experiences Designed Around You",
    subtitle:
      "Every experience is crafted with care, local knowledge, and flexibility - from affordable adventures to bespoke private journeys.",
    items: [
      {
        icon: "🚙",
        title: "Private 4x4 Land Cruisers",
        desc: "Dedicated safari vehicles for small groups, families, and solo travelers.",
      },
      {
        icon: "🏕️",
        title: "Flexible Accommodations",
        desc: "Budget tented camps, comfortable lodges, and premium private suites available.",
      },
      {
        icon: "🧭",
        title: "Expert Local Guides",
        desc: "Certified, passionate guides with deep knowledge of Tanzania's ecosystems.",
      },
      {
        icon: "✈️",
        title: "Airport Transfers",
        desc: "Seamless pickups from Kilimanjaro and Arusha airports, 24/7.",
      },
      {
        icon: "🛩️",
        title: "Fly-In Safaris",
        desc: "Charter flights to remote parks for those short on time or craving comfort.",
      },
      {
        icon: "💑",
        title: "Honeymoon Safaris",
        desc: "Romantic bush experiences tailored for couples - intimate and unforgettable.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Family Adventures",
        desc: "Kid-friendly itineraries designed for safe, fun, and enriching family travel.",
      },
      {
        icon: "📷",
        title: "Photography Expeditions",
        desc: "Specialist photography safaris with optimal positioning and lighting guidance.",
      },
    ],
  },
  partners: {
    eyebrow: "Trusted Worldwide",
    title: "Recommended By Leading Travel Platforms",
    subtitle:
      "Recognized by international safari travelers and leading travel authorities across Africa and the globe.",
    alt: "Travel Partner",
  },
  testimonials: {
    eyebrow: "Tanzania Safari Reviews",
    title: "What Travelers Say About Our Tanzania Safaris",
    subtitle:
      "Read authentic guest experiences from Serengeti safaris, Ngorongoro Crater tours, Mount Kilimanjaro climbs, and Zanzibar beach holidays with our Arusha-based team.",
    trustBadge: "Rated 4.9/5 based on 2,800+ verified safari guests.",
    items: [
      {
        name: "Emily & David - UK",
        location: "7 Days Serengeti & Ngorongoro Safari",
        review:
          "Gladiolus Tours organized an unforgettable Serengeti safari for us. We witnessed the Great Migration river crossings and saw the Big Five in Ngorongoro Crater. Our guide was knowledgeable and professional throughout the journey.",
      },
      {
        name: "Michael R. - Germany",
        location: "Kilimanjaro Machame Route Trek",
        review:
          "Climbing Mount Kilimanjaro via the Machame Route was a life-changing experience. The team ensured excellent acclimatization and safety at every stage. Reaching Uhuru Peak was beyond amazing.",
      },
      {
        name: "Sarah M. - USA",
        location: "Safari & Zanzibar Beach Holiday",
        review:
          "Our Tanzania safari combined wildlife in Tarangire and Serengeti with relaxing days in Zanzibar. Everything was perfectly arranged, from lodges to transfers. Highly recommend Gladiolus Tours.",
      },
    ],
  },
  migration: {
    eyebrow: "Limited Availability",
    title: "Serengeti Great Migration 2026",
    subtitle:
      "Witness one of nature's greatest spectacles - wildebeest river crossings in northern Serengeti. Available across budget, mid-range, and premium packages.",
    explore: "Explore Migration Safaris",
    whatsapp: "Quick WhatsApp Quote",
    season: "Peak Season: July - September 2026 · Book Early To Secure Your Dates",
  },
  faq: {
    eyebrow: "Tanzania Safari Guide",
    title: "Frequently Asked Questions",
    subtitle:
      "Planning a Tanzania safari from Arusha? Here are answers to common questions about safaris, Kilimanjaro, and Zanzibar holidays.",
    items: [
      {
        q: "What is the best time for a Serengeti safari?",
        a: "June to October offers excellent dry-season wildlife viewing. July to September is peak Great Migration river crossing season in northern Serengeti. December to March is ideal for calving season in the southern Serengeti - a great option for budget travelers.",
      },
      {
        q: "How many days do I need for a Tanzania safari?",
        a: "Most Tanzania safari packages range from 5 to 10 days, combining Serengeti, Ngorongoro Conservation Area, Tarangire, and optionally Zanzibar. Shorter 3-4 day packages are also available for budget travelers.",
      },
      {
        q: "Is Mount Kilimanjaro trekking suitable for beginners?",
        a: "Yes - Kilimanjaro is suitable for first-time climbers when choosing acclimatization-friendly routes such as Lemosho or Machame. Our Arusha-based guides ensure safe, gradual summit attempts for all fitness levels.",
      },
      {
        q: "Do you offer safaris for all budgets?",
        a: "Absolutely. Gladiolus Tours offers budget group safaris, comfortable mid-range packages, and fully private premium tours. All include professional local guides and 4x4 safari vehicles - only lodge category and group size vary.",
      },
    ],
  },
  finalCta: {
    title: "Ready To Explore Tanzania, Your Way?",
    subtitle:
      "From affordable group safaris to exclusive private tours - our Arusha-based team builds the perfect Tanzania itinerary for your budget and travel style.",
    primary: "Get Your Custom Safari Plan",
    whatsapp: "WhatsApp Us For Fast Assistance",
  },
  seoLinks: {
    title: "Explore Tanzania With Local Safari Experts",
    beforeSerengeti: "Discover unforgettable safari adventures in",
    beforeNgorongoro: ",",
    beforeKili: ",",
    beforeZanzibar: ", ",
    beforeTarangire: ", and ",
    and: ".",
  },
  geo: {
    title: "Tanzania Safaris Departing From Arusha",
    description:
      "Gladiolus Tours operates from Usa River, Arusha - the gateway to Serengeti National Park, Ngorongoro Conservation Area, Tarangire National Park, Lake Manyara, Mount Kilimanjaro, and Zanzibar. All budgets welcome - group, mid-range, and private safaris available year-round.",
  },
  mobileCta: {
    label: "Tanzania Tours · All Budgets",
    button: "Plan My Safari",
  },
  breadcrumbHome: "Home",
}
