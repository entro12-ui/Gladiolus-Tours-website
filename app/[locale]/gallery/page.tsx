import type { Metadata } from "next"
import Image from "next/image"

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

const heroStats = [
  {
    label: "Safari Moments",
    value: "2,000+",
    detail: "Captured across Tanzania",
  },
  {
    label: "Destinations",
    value: "12+",
    detail: "From Serengeti to Zanzibar",
  },
  {
    label: "Travel Stories",
    value: "500+",
    detail: "Luxury journeys documented",
  },
]

const storyHighlights = [
  {
    icon: Camera,
    title: "Wildlife Photography",
    copy:
      "Experience cinematic wildlife moments including lions, elephants, cheetahs, zebras, and the Great Migration.",
  },
  {
    icon: Mountain,
    title: "Luxury Safari Experiences",
    copy:
      "Explore elegant safari lodges, bush dining, cultural encounters, and handcrafted Tanzania journeys.",
  },
  {
    icon: Globe2,
    title: "Authentic Tanzania",
    copy:
      "Discover Serengeti, Ngorongoro, Tarangire, Zanzibar, and hidden landscapes through real travel stories.",
  },
]

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

export const metadata: Metadata = {
  title:
    "Tanzania Safari Gallery | Serengeti, Ngorongoro & Zanzibar Experiences",
  description:
    "Explore the Gladiolus Tours luxury safari gallery featuring Serengeti wildlife, Ngorongoro Crater adventures, Zanzibar escapes, Tanzania landscapes, and unforgettable travel moments.",

  keywords: [
    "Tanzania safari gallery",
    "Serengeti safari photos",
    "Luxury Tanzania tours",
    "Ngorongoro safari experiences",
    "Zanzibar travel gallery",
    "Wildlife photography Tanzania",
    "Gladiolus Tours",
    "African safari experiences",
  ],

  alternates: {
    canonical: "/gallery",
  },

  openGraph: {
    title: "Luxury Tanzania Safari Gallery | Gladiolus Tours",
    description:
      "Browse cinematic safari moments, wildlife photography, luxury camps, and unforgettable Tanzania travel experiences.",
    url: absoluteUrl("/gallery"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Tanzania Safari Gallery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Tanzania Safari Gallery",
    description:
      "Discover unforgettable safari photography and Tanzania travel experiences with Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Gladiolus Tours Tanzania Safari Gallery",
    description:
      "Luxury Tanzania safari gallery featuring Serengeti wildlife, Ngorongoro Crater, Tarangire elephants, Zanzibar experiences, and cinematic landscapes.",
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
          { name: "Home", url: absoluteUrl("/") },
          { name: "Gallery", url: absoluteUrl("/gallery") },
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
                Tanzania Safari Gallery
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-tight text-[#1f1720]">
                  Explore Tanzania Through Our Safari Stories
                </h1>

                <p className="max-w-2xl text-xl leading-relaxed text-[#5c524d]">
                  Discover luxury safari experiences, iconic wildlife,
                  breathtaking landscapes, and authentic cultural encounters
                  captured across Serengeti, Ngorongoro, Tarangire, Kilimanjaro,
                  and Zanzibar.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-[#c79a5b] to-[#b88447] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#c79a5b]/20 transition-all hover:scale-[1.02]"
                >
                  <Link href="#gallery-grid">
                    Explore Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-[#c79a5b]/30 bg-white/70 px-8 py-6 text-base text-[#1f1720] hover:bg-[#f4ede3]"
                >
                  <Link href="/contact">Plan Your Safari</Link>
                </Button>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {heroStats.map((stat) => (
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
                  src={assetUrl("/hero/hero-02.webp")}
                  alt="Luxury Tanzania safari experience"
                  width={900}
                  height={1000}
                  priority
                  className="h-[720px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1720]/40 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#b88447] shadow-lg">
                    <Images className="h-4 w-4" />
                    Real Safari Moments
                  </div>

                  <h2 className="mt-5 text-4xl font-serif leading-tight text-white">
                    Luxury experiences crafted across Tanzania
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
              Curated Safari Experiences
            </span>

            <h2 className="mt-5 text-5xl font-serif leading-tight text-[#1f1720]">
              Wildlife, landscapes, culture, and unforgettable journeys
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#6c625d]">
              Every photograph tells a story of Tanzania’s beauty — from Great
              Migration crossings in Serengeti to elegant bush dinners beneath
              African sunsets.
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
              Start Your Journey
            </span>

            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-serif leading-tight text-white">
              Ready to experience Tanzania beyond the ordinary?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90">
              Let Gladiolus Tours design a personalized luxury safari experience
              tailored around your travel style, wildlife interests, and dream
              destinations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 py-6 text-base font-semibold text-[#b88447] hover:bg-[#f4ede3]"
              >
                <Link href="/contact">
                  Speak to a Safari Specialist
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white bg-transparent px-8 py-6 text-base font-semibold text-white hover:bg-white/10"
              >
                <Link href="/destinations">
                  Explore Destinations
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