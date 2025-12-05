import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Compass, Mountain, ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"

const safariCollections = [
  {
    id: 1,
    name: "Northern Highlights",
    region: "Serengeti • Ngorongoro • Tarangire",
    duration: "8 days",
    price: "From $4,800",
    image: "/serengeti-safari-landscape-with-wildlife.jpg",
    description:
      "Follow the Great Migration, descend into the Ngorongoro Crater, and walk among Tarangire's ancient baobabs with private guides.",
    highlights: ["Migration river crossings", "Ngorongoro crater floor lunch", "Night game drive in Tarangire"],
  },
  {
    id: 2,
    name: "Southern Wilderness",
    region: "Ruaha • Nyerere (Selous)",
    duration: "9 days",
    price: "From $5,200",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Remote fly-in safaris pairing Ruaha's rugged escarpments with boat experiences on the Rufiji River for crowd-free wildlife viewing.",
    highlights: ["Walking safari with armed rangers", "Boat safari on Rufiji", "Sleep-out under the stars"],
  },
  {
    id: 3,
    name: "Kilimanjaro Summit & Safari",
    region: "Kilimanjaro • Lake Manyara • Ngorongoro",
    duration: "12 days",
    price: "From $6,300",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Summit Africa's highest peak via the Lemosho Route before rewarding game drives in Lake Manyara and Ngorongoro Crater.",
    highlights: ["Seven-day Lemosho ascent", "Private crater descent", "Luxury recovery lodge"],
  },
  {
    id: 4,
    name: "Zanzibar Beach & Bush",
    region: "Selous • Zanzibar",
    duration: "7 days",
    price: "From $3,900",
    image: "/placeholder.svg?height=600&width=800",
    description:
      "Combine big game viewing in the Selous with barefoot luxury on Zanzibar's powder-white beaches and spice-infused culture.",
    highlights: ["Sunset dhow cruise", "Private island picnic", "Hot springs flight"],
  },
]

const experiencePillars = [
  {
    icon: Compass,
    title: "Tailored Routes",
    description: "Every safari is custom mapped around migration windows, family pacing, and preferred lodges.",
  },
  {
    icon: Mountain,
    title: "Expert Lead Guides",
    description: "Decades of guiding across Northern & Southern circuits with specialist trackers and pro photographers.",
  },
  {
    icon: Calendar,
    title: "Seamless Logistics",
    description: "End-to-end planning with charter flights, VIP transfers, and 24/7 concierge support in Tanzania.",
  },
]

export const metadata: Metadata = {
  title: "Signature Tanzania Safaris | Gladiolus Tours",
  description:
    "Discover tailor-made Tanzania safaris across Northern and Southern circuits. Migration journeys, fly-in wilderness, and Kilimanjaro treks by Gladiolus Tours.",
  alternates: {
    canonical: "/safaris",
  },
  openGraph: {
    title: "Signature Tanzania Safaris | Gladiolus Tours",
    description:
      "Browse bespoke Tanzania safari collections crafted by Gladiolus Tours. Migration, Southern wilderness, Kilimanjaro, and coastal extensions.",
    url: absoluteUrl("/safaris"),
    images: [{ url: absoluteUrl("/og-image.jpg"), width: 1200, height: 630, alt: "Gladiolus Tours Safari" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Tanzania Safaris",
    description: "Plan a fully guided Tanzania safari with Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function SafarisPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Safaris", url: absoluteUrl("/safaris") },
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={assetUrl("/serengeti-safari-landscape-with-wildlife.jpg")}
          alt="Tanzania safari landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-3xl text-center px-6 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 font-mono text-xs tracking-[0.4em] uppercase text-white/80">
            Tanzania Safaris
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white text-balance">
            Tailor-Made Safaris Across Every Circuit
          </h1>
          <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
            Northern migration trails, Southern wilderness fly-ins, Kilimanjaro treks, and coastal bush & beach pairings—crafted end to end.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-primary/30"
            >
              <Link href="/contact">
                Start Planning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/60 text-white">
              <Link href="#collections">View Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Pillars */}
      <section className="py-16 bg-[#060e11] text-white border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiencePillars.map((pillar) => (
              <Card key={pillar.title} className="bg-white/5 border-white/10 text-left">
                <CardContent className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-white">{pillar.title}</h3>
                  <p className="font-mono text-sm text-white/75 leading-relaxed">{pillar.description}</p>
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
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Featured Safaris</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">Curated Tanzania Journeys</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Choose a collection as a starting point—then we fine-tune every lodge, aircraft, and guide to your style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {safariCollections.map((collection) => (
              <Card key={collection.id} className="overflow-hidden border border-border/40 bg-card/80 backdrop-blur">
                <div className="relative h-64">
                  <Image src={assetUrl(collection.image)} alt={collection.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-mono uppercase tracking-[0.3em]">{collection.region}</p>
                    <p className="text-3xl font-serif">{collection.name}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{collection.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                      <Calendar className="h-3.5 w-3.5" /> {collection.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
                      <MapPin className="h-3.5 w-3.5" /> {collection.region}
                    </span>
                    <span className="inline-flex rounded-full border border-border px-3 py-1">{collection.price}</span>
                  </div>
                  <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                    {collection.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary text-white">
                    <Link href="/contact">Customize This Safari</Link>
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
          <h2 className="text-4xl font-serif text-balance">Design Your Bespoke Tanzania Safari</h2>
          <p className="text-lg font-mono text-primary-foreground/90 max-w-3xl mx-auto">
            Tell us your preferred travel dates, wildlife priorities, and comfort level. We'll present two tailored routes within 48 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white/90 text-primary px-10 py-4 text-lg font-semibold shadow-xl shadow-white/40"
          >
            <Link href="/contact">Speak to a Safari Designer</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
