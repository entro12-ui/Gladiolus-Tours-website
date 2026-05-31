import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema, StructuredData } from "@/components/structured-data"
import { GalleryGrid, type GalleryImage } from "@/components/gallery/gallery-grid"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { Link } from "@/i18n/routing"
import {
  Camera,
  Globe2,
  Mountain,
  Sparkles,
  ArrowRight,
  Images,
} from "lucide-react"

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: assetUrl("/gallery/Olduvai-Gorge-00.webp"),
    alt: "Travelers exploring Olduvai Gorge in Tanzania",
    category: "Landscapes",
    location: "Olduvai Gorge",
  },
  {
    id: 2,
    src: assetUrl("/gallery/serengeti-balloon.webp"),
    alt: "Luxury hot air balloon safari over Serengeti National Park",
    category: "Experiences",
    location: "Serengeti National Park",
  },
  {
    id: 3,
    src: assetUrl("/gallery/lion-00.webp"),
    alt: "Lioness during sunrise safari game drive in Serengeti",
    category: "Wildlife",
    location: "Central Serengeti",
  },
  {
    id: 4,
    src: assetUrl("/gallery/cheater-00.webp"),
    alt: "Cheetah standing on a mound in Serengeti Tanzania",
    category: "Wildlife",
    location: "Eastern Serengeti",
  },
  {
    id: 5,
    src: assetUrl("/gallery/elephant.webp"),
    alt: "African elephant portrait in Tarangire National Park",
    category: "Wildlife",
    location: "Tarangire National Park",
  },
  {
    id: 6,
    src: assetUrl("/gallery/zebra-00.webp"),
    alt: "Zebras crossing the Serengeti plains",
    category: "Wildlife",
    location: "Serengeti National Park",
  },
  {
    id: 7,
    src: assetUrl("/gallery/sunset.webp"),
    alt: "Golden Tanzania safari sunset landscape",
    category: "Landscapes",
    location: "Western Corridor",
  },
  {
    id: 8,
    src: assetUrl("/gallery/lunch-00.webp"),
    alt: "Luxury bush lunch experience during Tanzania safari",
    category: "Experiences",
    location: "Ngorongoro Conservation Area",
  },
  {
    id: 9,
    src: assetUrl("/gallery/beer.webp"),
    alt: "Luxury safari sunset drinks in Zanzibar",
    category: "Experiences",
    location: "Zanzibar Coast",
  },
]

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).gallery

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: "/gallery",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/gallery"),
      type: "website",
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.schemaName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.twitterTitle ?? page.metadata.title,
      description: page.metadata.twitterDescription ?? page.metadata.description,
      images: [absoluteUrl("/og-image.jpg")],
    },
  }
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.gallery
  const storyHighlights = [
    { icon: Camera, title: page.storyHighlights[0].title, copy: page.storyHighlights[0].text },
    { icon: Mountain, title: page.storyHighlights[1].title, copy: page.storyHighlights[1].text },
    { icon: Globe2, title: page.storyHighlights[2].title, copy: page.storyHighlights[2].text },
  ]
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: page.schemaName,
    description: page.schemaDescription,
    url: absoluteUrl("/gallery"),
    publisher: {
      "@type": "TravelAgency",
      name: "Gladiolus Tours",
      url: absoluteUrl("/"),
    },
  }

  return (
    <div className="min-h-screen bg-[#f8f5ef]">
      <StructuredData id="gallery-schema" data={gallerySchema} />

      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/gallery") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f6f0e7] via-[#f8f5ef] to-white" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c8a46a]/20 bg-[#c8a46a]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b88a44]">
                <Sparkles className="h-4 w-4" />
                {page.heroBadge}
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight text-[#1f1720]">
                  {page.heroTitle}
                </h1>

                <p className="max-w-2xl text-xl leading-relaxed text-[#5c524d]">
                  {page.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#c79a5b] to-[#b88447] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#c79a5b]/20 transition-all hover:scale-[1.02]"
                >
                  <Link href="#gallery-grid">
                    {page.heroPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#c79a5b]/30 bg-white/70 px-8 py-6 text-base text-[#1f1720] hover:bg-[#f4ede3]"
                >
                  <Link href="/contact">{page.heroSecondary}</Link>
                </Button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {page.heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[28px] border border-[#eadfce] bg-white/90 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-4xl font-serif text-[#1f1720]">
                      {stat.value}
                    </h3>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#b88a44]">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-[#6c625d]">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#c79a5b]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-[#eadfce] bg-white shadow-[0_25px_90px_rgba(0,0,0,0.08)]">
                <Image
                  src={assetUrl("/gallery/This is Serengeti national park.jpeg")}
                  alt={page.featureImageAlt}
                  width={900}
                  height={1000}
                  priority
                  unoptimized
                  className="h-[720px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1720]/40 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#b88447] shadow-lg">
                    <Images className="h-4 w-4" />
                    {page.featureBadge}
                  </div>

                  <h2 className="mt-5 text-4xl font-serif leading-tight text-white">
                    {page.featureTitle}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="border-y border-[#eadfce] bg-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b88a44]">
              {page.storyEyebrow}
            </span>

            <h2 className="mt-5 text-5xl font-serif leading-tight text-[#1f1720]">
              {page.storyTitle}
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#6c625d]">
              {page.storyDescription}
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {storyHighlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-[32px] border border-[#eadfce] bg-[#fcfaf7] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(199,154,91,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c79a5b]/10">
                  <item.icon className="h-6 w-6 text-[#b88447]" />
                </div>

                <h3 className="mt-6 text-2xl font-serif text-[#1f1720]">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-[#6c625d]">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery-grid"
        className="bg-gradient-to-b from-[#f8f5ef] to-white py-24"
      >
        <GalleryGrid images={galleryImages} />
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f8f5ef]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-[40px] border border-[#eadfce] bg-gradient-to-r from-[#c79a5b] to-[#b88447] px-8 py-20 text-center shadow-[0_25px_80px_rgba(199,154,91,0.2)] sm:px-14">
            <span className="inline-flex items-center rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white">
              {page.ctaBadge}
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-serif leading-tight text-white">
              {page.ctaTitle}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90">
              {page.ctaDescription}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-base font-semibold text-[#b88447] hover:bg-[#f4ede3]"
              >
                <Link href="/contact">
                  {page.ctaPrimary}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
              >
                <Link href="/destinations">
                  {page.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}