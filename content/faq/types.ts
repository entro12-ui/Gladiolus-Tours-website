export type FaqQuestion = {
  question: string
  answer: string
}

export type FaqCategory = {
  category: string
  questions: FaqQuestion[]
}

export type FaqContent = {
  pageLabel: string
  metadata: {
    title: string
    description: string
    openGraphTitle: string
    openGraphDescription: string
    twitterTitle: string
    twitterDescription: string
    schemaTitle: string
    schemaDescription: string
  }
  heroTitle: string
  heroDescription: string
  ctaTitle: string
  ctaDescription: string
  ctaButton: string
  categories: FaqCategory[]
}
