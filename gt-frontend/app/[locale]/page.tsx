import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema, OrganizationSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowDown, MapPin, Calendar, Users, Compass, Camera, Sparkles } from "lucide-react"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { HeroSlideshow } from "@/components/home/hero-slideshow"

export const metadata: Metadata = {
  title: "Luxury African Safari Tours & Tailor-Made Travel Packages",
  description:
    "Plan an unforgettable African safari with Gladiolus Tours. Discover luxury safari packages, expert guides, and tailor-made itineraries across Tanzania and Kenya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gladiolus Tours | Luxury African Safari Packages",
    description:
      "Experience bespoke African safaris with award-winning guides, luxury lodges, and carefully curated itineraries across East Africa.",
    url: absoluteUrl(),
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Luxury African Safari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours | Luxury African Safari Packages",
    description:
      "Book tailor-made luxury safaris with Gladiolus Tours. Premium accommodations, expert guides, and unforgettable wildlife encounters.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

const signatureCollections = [
  {
    name: "Northern Frontiers",
    description: "Follow the Migration, picnic on the Ngorongoro rim, and sleep beneath thousands of desert stars.",
    route: "Serengeti • Ngorongoro • Tarangire",
    duration: "9 days",
    image: "/serengeti-safari-landscape-with-wildlife.jpg",
  },
  {
    name: "Kilimanjaro Peak + Crater",
    description: "Summit via Lemosho, recover in crater villas, and track tree-climbing lions at Lake Manyara.",
    route: "Kilimanjaro • Manyara • Crater",
    duration: "12 days",
    image: "/placeholder.svg?height=900&width=1200",
  },
  {
    name: "Southern Solitude",
    description: "Fly into Ruaha and Nyerere for walking safaris, boating on the Rufiji, and sleep-outs on raised decks.",
    route: "Ruaha • Nyerere",
    duration: "8 days",
    image: "/placeholder.svg?height=900&width=1200",
  },
]

const destinationHighlights = [
  {
    slug: "serengeti-national-park",
    title: "Serengeti National Park",
    location: "Tanzania",
    duration: "5 days",
    image: "/serengeti-safari-landscape-with-wildlife.jpg",
  },
  {
    slug: "masai-mara-reserve",
    title: "Masai Mara Reserve",
    location: "Kenya",
    duration: "7 days",
    image: "/masai-mara-wildlife-safari-sunset.jpg",
  },
  {
    slug: "ngorongoro-crater",
    title: "Ngorongoro Crater",
    location: "Tanzania",
    duration: "4 days",
    image: "/ngorongoro-crater-landscape-elephants.jpg",
  },
]

const experiencePillars = [
  {
    title: "Soulful storytelling",
    copy: "Itineraries are paced like narratives—quiet dawns, cinematic wildlife arcs, and celebratory finales.",
    icon: Sparkles,
  },
  {
    title: "Design-first logistics",
    copy: "Private charters, on-call concierges, and seamless handovers between bush, coast, and summit.",
    icon: Compass,
  },
  {
    title: "Creative documentation",
    copy: "Photography coaches and in-field editors craft heirloom albums while you stay present in the moment.",
    icon: Camera,
  },
]

const testimonials = [
  {
    quote:
      "Every transfer, picnic, and sundowner felt choreographed. We witnessed river crossings with a pro tracker and ended with a private dhow dinner in Zanzibar—seamless magic.",
    name: "Amelia & Jordan Reid",
    detail: "Migration & Spice Route, July 2024",
  },
  {
    quote:
      "The team curated a Kilimanjaro ascent that balanced challenge with care. Recovery at Gibbs Farm with crater lunches made it a once-in-a-lifetime pairing.",
    name: "Dr. Priya Patel",
    detail: "Kili + Crater, September 2024",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[{ name: "Home", url: absoluteUrl("/") }]}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden text-white">
        <HeroSlideshow />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-28">
          <div className="space-y-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em] text-white/80">
              Gladiolus Signature Journeys
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">
              Safari design that feels cinematic, soulful, and deeply personal.
            </h1>
            <p className="text-lg md:text-xl font-mono text-white/85 leading-relaxed">
              From Migration fly-ins to spice coast slowdowns, we blueprint every handover, picnic, and sundowner with a director’s eye for pacing and detail.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/30 hover:bg-white/90"
              >
                <Link href="/safaris">Browse Signature Safaris</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
              >
                <Link href="/contact">Start a Custom Map</Link>
              </Button>
            </div>
          </div>
        </div>
        <a
          href="#signature-collections"
          className="absolute bottom-10 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-mono uppercase tracking-[0.3em] text-white/80 backdrop-blur transition hover:border-white/40"
          aria-label="Scroll to signature collections"
        >
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </section>

      {/* Signature Collections */}
      <section id="signature-collections" className="py-24 bg-[#050b0d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-white/60">Collections</p>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-balance">Three ways to traverse Tanzania with Gladiolus creative directors.</h2>
            <p className="mt-4 font-mono text-sm text-white/75">
              Choose a starting canvas—then we layer in lodges, aircraft, private guides, and special access based on your pace and passions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {signatureCollections.map((collection) => (
              <Card key={collection.name} className="group border-white/10 bg-white/5 backdrop-blur rounded-3xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={assetUrl(collection.image)}
                    alt={collection.name}
                    fill
                    className="object-cover transition duration-[2500ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs font-mono uppercase tracking-[0.3em]">{collection.route}</p>
                    <p className="text-2xl font-serif">{collection.name}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4 text-white/80">
                  <p className="font-mono text-sm leading-relaxed">{collection.description}</p>
                  <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase">
                    <Calendar className="h-4 w-4" /> {collection.duration}
                  </div>
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary">
                    <Link href="/contact">Customize Journey</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Our Method</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">Creative direction meets expedition-grade planning.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We storyboard each day with a balance of thrill and restoration—sunrise hot air balloons, crater floor lunches, spice market tastings, and ocean breeze decompressions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {experiencePillars.map((pillar) => (
                <Card key={pillar.title} className="border-border/40">
                  <CardContent className="p-5 space-y-3">
                    <pillar.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-serif text-foreground">{pillar.title}</h3>
                    <p className="font-mono text-sm text-muted-foreground">{pillar.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10">
            <Image src={assetUrl("/about-us/team.webp")} alt="Gladiolus concierge team planning routes" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <p className="absolute bottom-6 left-6 text-xs font-mono uppercase tracking-[0.4em] text-white/80">
              On-ground concierge desk • Arusha HQ
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">Destination tableaus to inspire your canvas.</h2>
            <p className="mt-4 font-mono text-sm text-muted-foreground">Hover for a glimpse, click to draft a full route with our team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinationHighlights.map((destination) => (
              <Card key={destination.slug} className="group overflow-hidden rounded-3xl border-border/40 bg-background">
                <div className="relative h-64 overflow-hidden">
                  <Image src={assetUrl(destination.image)} alt={destination.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white space-y-1">
                    <p className="text-xs font-mono tracking-[0.4em] uppercase flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" /> {destination.location}
                    </p>
                    <p className="text-2xl font-serif">{destination.title}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                    <Calendar className="h-4 w-4" /> {destination.duration}
                  </div>
                  <Button asChild className="rounded-full bg-gradient-to-r from-primary-alt to-primary w-full">
                    <Link href={`/destinations/${destination.slug}`}>
                      Explore Destination <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Field Notes</p>
            <h2 className="mt-2 text-4xl md:text-5xl font-serif text-foreground">Guest stories from migration crossings to dhow dinners.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-border/30 bg-white/80 backdrop-blur rounded-3xl">
                <CardContent className="p-8 space-y-4">
                  <p className="text-lg font-serif text-foreground">“{testimonial.quote}”</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">{testimonial.detail}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="rounded-[40px] border border-border/40 bg-gradient-to-r from-primary to-primary-alt px-6 py-16 text-center text-primary-foreground shadow-2xl shadow-primary/30">
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Ready to storyboard your Tanzanian odyssey?</h2>
            <p className="mt-4 text-lg font-mono text-primary-foreground/90 max-w-2xl mx-auto">
              Tell us your travel window, altitude comfort, and dream wildlife moments. We’ll reply within 48 hours with two cinematic drafts.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-primary px-8">
                <Link href="/contact">
                  Speak to a Safari Designer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white">
                <Link href="/adventures">View Adventure Concepts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
