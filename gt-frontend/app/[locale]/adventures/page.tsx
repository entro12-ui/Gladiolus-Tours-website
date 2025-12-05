import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Compass, Waves, Flame, ArrowRight, Camera, Footprints } from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"

const adventureCollections = [
  {
    id: 1,
    name: "Kilimanjaro & Crater",
    tag: "High Altitude",
    duration: "12 days",
    price: "From $6,500",
    image: "/placeholder.svg?height=640&width=960",
    description:
      "Summit Kilimanjaro via the scenic Lemosho Route before descending to Ngorongoro for crater rim hikes and private game drives.",
    activities: ["7-day Lemosho ascent", "Crater rim hiking", "Starlit crater floor dinner"],
  },
  {
    id: 2,
    name: "Rift Valley Trails",
    tag: "Walking & Culture",
    duration: "8 days",
    price: "From $4,200",
    image: "/placeholder.svg?height=640&width=960",
    description:
      "Walk with Hadzabe guides near Lake Eyasi, kayak Lake Manyara at sunrise, and bike through coffee estates on the slopes of Meru.",
    activities: ["Guided village walks", "Lake Manyara kayaking", "Coffee estate cycling"],
  },
  {
    id: 3,
    name: "Coastline + Swahili",
    tag: "Sea & Spice",
    duration: "7 days",
    price: "From $3,600",
    image: "/placeholder.svg?height=640&width=960",
    description:
      "Blend dhow expeditions, mangrove SUP sessions, and Zanzibari culinary classes with boutique coastal hideaways.",
    activities: ["Private dhow safari", "SUP through mangroves", "Spice market cooking class"],
  },
  {
    id: 4,
    name: "Ruaha After Dark",
    tag: "Nightlife in the Wild",
    duration: "6 days",
    price: "From $3,950",
    image: "/placeholder.svg?height=640&width=960",
    description:
      "Fly into Ruaha for walking safaris, night drives, and photographic hides focused on big cats and nocturnal species.",
    activities: ["Night game drives", "Photographic hides", "Guided walking safaris"],
  },
]

const experienceHighlights = [
  {
    icon: Compass,
    title: "Immersive Routes",
    description: "Go beyond game drives with trekking, paddling, biking, and culinary adventures across Tanzania's diverse landscapes.",
  },
  {
    icon: Waves,
    title: "Elemental Balance",
    description: "Pair mountains with coastlines, crater rims with coral reefs, and remote bush camps with boutique seaside retreats.",
  },
  {
    icon: Flame,
    title: "Expert Outfitters",
    description: "Local specialists coordinate gear, safety crews, permits, and storytellers to keep every adventure seamless.",
  },
]

export const metadata: Metadata = {
  title: "Tanzania Adventure Experiences | Gladiolus Tours",
  description:
    "Design active Tanzania adventures—Kilimanjaro treks, walking safaris, coastal expeditions, and cultural immersions curated by Gladiolus Tours.",
  alternates: {
    canonical: "/adventures",
  },
  openGraph: {
    title: "Tanzania Adventure Experiences | Gladiolus Tours",
    description: "From Kilimanjaro summits to Zanzibar waters, discover bespoke Tanzania adventures with Gladiolus Tours.",
    url: absoluteUrl("/adventures"),
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "Gladiolus Tours Adventures" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Adventure Experiences",
    description: "Plan immersive Tanzania adventures with Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function AdventuresPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Adventures", url: absoluteUrl("/adventures") },
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={assetUrl("/placeholder.svg?height=900&width=1600")}
          alt="Tanzania adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="relative z-10 max-w-3xl text-center px-6 space-y-6 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 font-mono text-xs tracking-[0.4em] uppercase">
            Tanzania Adventures
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-balance">Beyond the Vehicle. Deep Into Tanzania.</h1>
          <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
            Trek Kilimanjaro, kayak crater lakes, sail Zanzibari dhows, and explore with indigenous guides—crafted for curious travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              <Link href="/contact">
                Plan an Adventure <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/60 text-white">
              <Link href="#collections">Browse Ideas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-[#050b0d] text-white border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experienceHighlights.map((highlight) => (
              <Card key={highlight.title} className="bg-white/5 border-white/10">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">{highlight.title}</h3>
                  <p className="font-mono text-sm text-white/75 leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Signature Adventures</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">Active Journeys to Inspire</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Choose your canvas—summits, coasts, culture, or conservation. We layer in the right crew, safety, and comforts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adventureCollections.map((collection) => (
              <Card key={collection.id} className="overflow-hidden border border-border/40 bg-card/80 backdrop-blur">
                <div className="relative h-64">
                  <Image src={assetUrl(collection.image)} alt={collection.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white space-y-1">
                    <p className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em]">
                      <Camera className="h-3.5 w-3.5" /> {collection.tag}
                    </p>
                    <p className="text-3xl font-serif">{collection.name}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{collection.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                      <Footprints className="h-3.5 w-3.5" /> {collection.duration}
                    </span>
                    <span className="inline-flex rounded-full border border-border px-3 py-1">{collection.price}</span>
                  </div>
                  <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                    {collection.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary text-white">
                    <Link href="/contact">Customize This Adventure</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-serif text-balance">Ready for Your Next Tanzanian Thrill?</h2>
          <p className="text-lg font-mono text-primary-foreground/90 max-w-3xl mx-auto">
            Tell us what challenges excite you most—we'll build a safe, soulful, and breathtaking adventure across Tanzania.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white/90 text-primary px-10 py-4 text-lg font-semibold shadow-xl shadow-white/40"
          >
            <Link href="/contact">Talk to an Adventure Specialist</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
