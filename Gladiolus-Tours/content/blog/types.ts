export type BlogPost = {
  title: string
  excerpt: string
  category: string
  href: string
}

export type BlogContent = {
  pageLabel: string
  metadata: {
    title: string
    description: string
  }
  eyebrow: string
  heroTitle: string
  heroDescription: string
  readMore: string
}
