export type TestimonialReview = {
  name: string
  country: string
  trip: string
  rating: number
  review: string
  source: "guest" | "tripadvisor" | "google"
  date?: string
}

export type TestimonialsContent = {
  pageLabel: string
  metadata: {
    title: string
    description: string
    openGraphTitle: string
    openGraphDescription: string
  }
  heroBadge: string
  heroTitle: string
  heroDescription: string
  stats: { value: string; label: string }[]
  sectionEyebrow: string
  sectionTitle: string
  sectionSubtitle: string
  trustBadge: string
  sourceLabels: {
    guest: string
    tripadvisor: string
    google: string
  }
  ctaTitle: string
  ctaDescription: string
  ctaPrimary: string
  ctaSecondary: string
  reviews: TestimonialReview[]
}
