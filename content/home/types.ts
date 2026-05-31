export type SafariPackage = {
  title: string
  duration: string
  badge: string
  priceFrom: string
  minPax: string
  image: string
  link: string
  description: string
  shortItinerary: string[]
  fullItinerary: { day: string; activity: string }[]
}

export type TrekRoute = {
  title: string
  duration: string
  price: string
  image: string
  link: string
  description: string
  highlight: string
}

export type ExperienceHighlight = {
  icon: string
  title: string
  desc: string
}

export type Founder = {
  name: string
  role: string
  image: string
  bio: string
}

export type Testimonial = {
  name: string
  location: string
  review: string
}

export type FaqItem = {
  q: string
  a: string
}

export type BudgetTier = {
  tier: string
  color: string
  label: string
}

export type HomeContent = {
  metadata: {
    title: string
    description: string
    keywords: string[]
    openGraphTitle: string
    openGraphDescription: string
    twitterTitle: string
    twitterDescription: string
    openGraphLocale: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    descriptionBold: string
    rating: string
    guests: string
    experience: string
    planAdventure: string
    whatsappQuote: string
    scroll: string
    trustedExperts: string
    trustedSubtext: string
    stats: { value: string; label: string }[]
  }
  intro: {
    eyebrow: string
    title: string
    titleLine2: string
    description: string
    budget: string
    midRange: string
    premium: string
    tiers: BudgetTier[]
  }
  safariPackages: {
    eyebrow: string
    title: string
    subtitle: string
    sampleItinerary: string
    viewFullItinerary: string
    bookSafari: string
    viewAll: string
    minPax: string
    packages: SafariPackage[]
  }
  treks: {
    eyebrow: string
    title: string
    subtitle: string
    guidedTrek: string
    viewRoute: string
    quickQuote: string
    routes: TrekRoute[]
  }
  founders: {
    eyebrow: string
    title: string
    subtitle: string
    people: Founder[]
  }
  highlights: {
    eyebrow: string
    title: string
    subtitle: string
    items: ExperienceHighlight[]
  }
  partners: {
    eyebrow: string
    title: string
    subtitle: string
    alt: string
  }
  testimonials: {
    eyebrow: string
    title: string
    subtitle: string
    trustBadge: string
    items: Testimonial[]
  }
  migration: {
    eyebrow: string
    title: string
    subtitle: string
    explore: string
    whatsapp: string
    season: string
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
    items: FaqItem[]
  }
  finalCta: {
    title: string
    subtitle: string
    primary: string
    whatsapp: string
  }
  seoLinks: {
    title: string
    beforeSerengeti: string
    beforeNgorongoro: string
    beforeKili: string
    beforeZanzibar: string
    beforeTarangire: string
    and: string
  }
  geo: {
    title: string
    description: string
  }
  mobileCta: {
    label: string
    button: string
  }
  breadcrumbHome: string
}
