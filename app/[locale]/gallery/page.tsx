import type { Metadata } from "next"
import Image from "next/image"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/structured-data"
import { GalleryGrid, type GalleryImage } from "@/components/gallery/gallery-grid"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { Link } from "@/i18n/routing"

const heroStats = [
  { label: "Images captured", value: "2,000+", detail: "Field diaries since 2015" },
  { label: "Featured regions", value: "12", detail: "From Serengeti to Zanzibar" },
  { label: "Creative partners", value: "18", detail: "Photographers & filmmakers" },
]

const storyHighlights = [
  {
    title: "Wildlife vignettes",
    copy: "Big cat pursuits, river crossings, and tender moments between elephant herds filmed at golden hour.",
  },
  {
    title: "Human stories",
    copy: "Maasai ceremonies, private bush breakfasts, and artisan workshops that anchor every itinerary in place.",
  },
  {
    title: "Design details",
    copy: "Interiors, table settings, and campfire lounges curated to feel both luxurious and deeply rooted in East Africa.",
  },
]

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: assetUrl("/gallery/Olduvai-Gorge-00.webp"),
    alt: "Hikers overlooking the layers of Olduvai Gorge",
    category: "Landscapes",
    location: "Olduvai Gorge",
  },
  {
    id: 2,
    src: assetUrl("/gallery/Olduvai-Gorge-01.webp"),
    alt: "Midday light pouring over Olduvai Gorge rock formations",
    category: "Landscapes",
    location: "Olduvai Gorge",
  },
  {
    id: 3,
    src: assetUrl("/gallery/serengeti-balloon.webp"),
    alt: "Safari balloons floating above the Serengeti",
    category: "Experiences",
    location: "Serengeti National Park",
  },
  {
    id: 4,
    src: assetUrl("/gallery/sunday-in-serengeti-00.webp"),
    alt: "Guides and guests sharing stories in the Serengeti",
    category: "People",
    location: "Serengeti National Park",
  },
  {
    id: 5,
    src: assetUrl("/gallery/sunday-in-serengeti-01.webp"),
    alt: "Warm afternoon light across the Serengeti plains",
    category: "Landscapes",
    location: "Serengeti National Park",
  },
  {
    id: 6,
    src: assetUrl("/gallery/sunday-with-tourists.webp"),
    alt: "Travelers sharing a laugh with their safari guide",
    category: "People",
    location: "Ngorongoro Conservation Area",
  },
  {
    id: 7,
    src: assetUrl("/gallery/gt-tourist-vehicle-00.webp"),
    alt: "Gladiolus safari vehicle cruising past acacia trees",
    category: "Logistics",
    location: "Tarangire National Park",
  },
  {
    id: 8,
    src: assetUrl("/gallery/gt-tourist-vehicle-01.webp"),
    alt: "Private cruiser waiting for guests at an airstrip",
    category: "Logistics",
    location: "Ruaha National Park",
  },
  {
    id: 9,
    src: assetUrl("/gallery/lion-00.webp"),
    alt: "Lioness scanning the Savannah just after sunrise",
    category: "Wildlife",
    location: "Central Serengeti",
  },
  {
    id: 10,
    src: assetUrl("/gallery/cheater-00.webp"),
    alt: "Cheetah perched on a termite mound looking for prey",
    category: "Wildlife",
    location: "Eastern Serengeti",
  },
  {
    id: 11,
    src: assetUrl("/gallery/cheater-01.webp"),
    alt: "Cheetah sprint captured mid-stride",
    category: "Wildlife",
    location: "Serengeti Short Grass Plains",
  },
  {
    id: 12,
    src: assetUrl("/gallery/cheater-02.webp"),
    alt: "Resting cheetah framed by tall golden grass",
    category: "Wildlife",
    location: "Ndutu",
  },
  {
    id: 13,
    src: assetUrl("/gallery/elephant.webp"),
    alt: "Close portrait of a matriarch elephant",
    category: "Wildlife",
    location: "Tarangire National Park",
  },
  {
    id: 14,
    src: assetUrl("/gallery/elephant-00.webp"),
    alt: "Elephant herd trekking past a baobab tree",
    category: "Wildlife",
    location: "Tarangire National Park",
  },
  {
    id: 15,
    src: assetUrl("/gallery/zebra-00.webp"),
    alt: "Zebra family aligned across the Serengeti horizon",
    category: "Wildlife",
    location: "Serengeti National Park",
  },
  {
    id: 16,
    src: assetUrl("/gallery/zebra-01.webp"),
    alt: "Striped patterns layered in soft afternoon light",
    category: "Wildlife",
    location: "Serengeti National Park",
  },
  {
    id: 17,
    src: assetUrl("/gallery/sunset.webp"),
    alt: "Fiery Serengeti sunset silhouettes grazing wildlife",
    category: "Landscapes",
    location: "Western Corridor",
  },
  {
    id: 18,
    src: assetUrl("/gallery/tour-guide.webp"),
    alt: "Expert guide sharing stories beside the vehicle",
    category: "People",
    location: "Manyara Escarpment",
  },
  {
    id: 19,
    src: assetUrl("/gallery/lunch-00.webp"),
    alt: "Bush lunch elegantly laid under shade",
    category: "Experiences",
    location: "Ngorongoro Conservation Area",
  },
  {
    id: 20,
    src: assetUrl("/gallery/lunch-01.webp"),
    alt: "Chef plating Swahili-inspired dishes on safari",
    category: "Cuisine",
    location: "Private Crater Rim Camp",
  },
  {
    id: 21,
    src: assetUrl("/gallery/lunch-02.webp"),
    alt: "Family toasting during an outdoor crater lunch",
    category: "Experiences",
    location: "Ngorongoro Conservation Area",
  },
  {
    id: 22,
    src: assetUrl("/gallery/photo-00.webp"),
    alt: "Photographer lining up a shot with long lens",
    category: "Activities",
    location: "Serengeti National Park",
  },
  {
    id: 23,
    src: assetUrl("/gallery/beer.webp"),
    alt: "Craft cocktails prepared for sunset hour",
    category: "Experiences",
    location: "Zanzibar Coast",
  },
  {
    id: 24,
    src: assetUrl("/gallery/tour-guide.webp"),
    alt: "Lead guide presenting the day's route",
    category: "People",
    location: "Arusha Briefing Studio",
  },
]

export const metadata: Metadata = {
  title: "Safari Gallery | Gladiolus Tours",
  description:
    "Immerse yourself in Gladiolus Tours' visual diary—wildlife portraits, cinematic landscapes, and bespoke experiences across Tanzania.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Safari Gallery | Gladiolus Tours",
    description:
      "Browse signature moments from Gladiolus Tours safaris: migration crossings, Maasai cultural encounters, and designer camp life.",
    url: absoluteUrl("/gallery"),
    type: "website",
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "Gladiolus Tours Safari Gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Gallery | Gladiolus Tours",
    description: "See the cinematic safari moments we curate across Tanzania.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Gallery", url: absoluteUrl("/gallery") },
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative mt-20 flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={assetUrl("/hero/hero-02.webp")}
          alt="Immersive safari gallery background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em]">
              Field Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">
              Our cameras never stop rolling across Tanzania's wild frontiers.
            </h1>
            <p className="text-lg md:text-xl font-mono text-white/80">
              Drift through migration flyovers, Maasai ceremonies, and lantern-lit dinners—each frame captured on recent departures.
            </p>
            <div className="flex flex-wrap gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="min-w-[160px] rounded-3xl border border-white/15 bg-white/5 px-5 py-4">
                  <p className="text-3xl font-serif">{stat.value}</p>
                  <p className="text-xs font-mono uppercase tracking-[0.35em] text-white/70">{stat.label}</p>
                  <p className="text-sm font-mono text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">What you'll see</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">
              A living moodboard of wildlife, culture, and design inspiration.
            </h2>
            <p className="font-mono text-sm text-muted-foreground">
              Every departure travels with hybrid storytellers—cinematographers, fine-art photographers, and field recordists—so you can relive
              each day long after the dust settles.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {storyHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-[0_15px_45px_rgba(3,7,18,0.06)]">
                  <h3 className="text-xl font-serif text-foreground">{highlight.title}</h3>
                  <p className="mt-3 font-mono text-sm text-muted-foreground">{highlight.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-border/70">
            <Image
              src={assetUrl("/about-us/team.webp")}
              alt="In-field content team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-white/70">On-location editors</p>
              <p className="mt-2 text-2xl font-serif">Story artisans embedded with every journey.</p>
            </div>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto rounded-[40px] border border-border/70 bg-gradient-to-r from-primary to-primary-alt px-6 py-16 text-center text-primary-foreground shadow-[0_30px_80px_rgba(2,6,23,0.18)] sm:px-10 lg:px-16">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-primary-foreground/80">Ready to film your chapter?</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-balance">Let’s storyboard your safari with our creative directors.</h2>
          <p className="mt-4 text-lg font-mono text-primary-foreground/90">
            Share your travel window and wish list—we’ll reply within 48 hours with two bespoke visual narratives.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-white px-8 text-base font-semibold text-primary">
              <Link href="/contact">Speak to a Safari Designer</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white">
              <Link href="/destinations">Browse Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
