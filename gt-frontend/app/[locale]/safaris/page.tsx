import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"

const safariCategories = [
  {
    id: 1,
    name: "Wildlife Safaris",
    description:
      "Explore Tanzania's iconic parks with expert guides, comfortable vehicles, and wildlife-first routing for photographers and families alike.",
    image: "/gallery/lion-00.webp",
  },
  {
    id: 2,
    name: "Adventure Safaris",
    description:
      "Layer in rafting, cycling, canoeing, and off-the-beaten-track park combos for travellers who want motion and adrenaline with their game drives.",
    image: "/gallery/zebra-00.webp",
  },
  {
    id: 3,
    name: "Group & Incentive Travel",
    description:
      "For teams and celebrations: coordinated logistics, private departures, and hand-picked lodges with space for shared moments and privacy.",
    image: "/gallery/sunday-with-tourists.webp",
  },
  {
    id: 4,
    name: "Camping Safaris",
    description:
      "From classic mobile camping to comfortable tented setups—sleep closer to the sounds of the bush without compromising on care and safety.",
    image: "/gallery/sunset.webp",
  },
  {
    id: 5,
    name: "Beach Holidays",
    description:
      "Decompress after the dust: barefoot stays, snorkeling, and dhow cruises on Zanzibar's coastline and nearby islands.",
    image: "/gallery/beer.webp",
  },
  {
    id: 6,
    name: "Mountain Climbing & Trekking",
    description:
      "Kilimanjaro ascents, Mount Meru, and multi-day treks guided by trusted mountain teams with strong safety protocols and pacing.",
    image: "/about-us/team.webp",
  },
  {
    id: 7,
    name: "Cultural Tours",
    description:
      "Meet Maasai communities, visit markets and artisan workshops, and add meaningful cultural encounters that respect place and people.",
    image: "/gallery/tour-guide.webp",
  },
  {
    id: 8,
    name: "Historical Tours",
    description:
      "Discover Stone Town, Olduvai Gorge, and heritage-rich stops that put Tanzania's story in context alongside its landscapes.",
    image: "/gallery/Olduvai-Gorge-00.webp",
  },
  {
    id: 9,
    name: "Zanzibar & Beach Holidays",
    description:
      "Pair the bush with the coast—spice tours, ocean villas, and soft-sand days designed as a natural finale to your safari.",
    image: "/hero/hero-02.webp",
  },
  {
    id: 10,
    name: "Walking Safari",
    description:
      "Slow the pace with guided walks and ranger-led tracking experiences—feel the ecosystem with all senses, not just through the vehicle window.",
    image: "/gallery/gt-tourist-vehicle-00.webp",
  },
  {
    id: 11,
    name: "Balloon Safaris",
    description:
      "Sunrise hot air balloon flights over Serengeti and Tarangire—followed by bush breakfasts and cinematic aerial views.",
    image: "/gallery/serengeti-balloon.webp",
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
      <section className="relative mt-20 flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={assetUrl("/gallery/zebra-00.webp")}
          alt="Tanzania safari landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/60 to-black/85" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em]">
              Safaris
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">Safaris offered by Gladiolus Tours</h1>
            <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
              Observe the wildlife in the national parks, climb Kilimanjaro, meet the Maasai, relax on the beaches of Zanzibar, and explore Stone Town.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/30 hover:bg-white/90"
              >
                <Link href="/contact">
                  Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
              >
                <Link href="#collections">Browse Safari Types</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Pillars */}
      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Our Safaris</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Explore Tanzania with our tailor-made tours.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Choose a safari style as a starting point. Then we tailor the route, lodge selection, pacing, and special moments around your travel window.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {safariCategories.map((safari) => (
              <Link key={safari.id} href="/contact" className="group block">
                <Card className="overflow-hidden rounded-3xl border-border/40 bg-background py-0 gap-0 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={assetUrl(safari.image)}
                      alt={safari.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="text-2xl font-serif leading-tight">{safari.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed h-20 overflow-hidden">{safari.description}</p>
                    <div className="mt-6">
                      <div className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary px-4 py-2 text-center text-sm font-medium text-white">
                        Enquire about this safari type
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
