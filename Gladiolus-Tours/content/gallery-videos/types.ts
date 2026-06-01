export type GalleryVideoItem = {
  title: string
  description: string
  href: string
}

export type GalleryVideosContent = {
  pageLabel: string
  galleryLabel: string
  metadata: {
    title: string
    description: string
  }
  eyebrow: string
  heroTitle: string
  heroDescription: string
  videoLabel: string
  watchLink: string
  backToGallery: string
  videos: GalleryVideoItem[]
}
