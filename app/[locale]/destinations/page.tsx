import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { MapPin, Calendar, ArrowRight, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/structured-data"
import { destinations } from "@/lib/destinations-data"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

export const metadata: Metadata = {
  title: "Tanzania Safari Destinations - Gladiolus Tours",
  description:
    "Explore our handpicked Tanzania safari destinations. From Serengeti to Ngorongoro, discover your perfect adventure.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Tanzania Safari Destinations | Gladiolus Tours",
    description: "Discover curated safari destinations across Tanzania with Gladiolus Tours.",
    url: absoluteUrl("/destinations"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "African safari landscape with wildlife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Gladiolus Tours Tanzania Destinations",
    description: "Browse luxury Tanzania safari destinations tailored by Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

type Props = {
  searchParams?: Promise<{ circuit?: string }> | { circuit?: string }
}

const circuitOptions = [
  { value: "all", label: "All Regions" },
  { value: "northern", label: "Northern" },
  { value: "southern", label: "Southern" },
  { value: "eastern", label: "Eastern" },
  { value: "western", label: "Western" },
  { value: "coastal", label: "Coastal" },
]

export default async function DestinationsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const rawCircuit = resolvedSearchParams?.circuit
  const selectedCircuit =
    rawCircuit === "northern" ||
    rawCircuit === "southern" ||
    rawCircuit === "eastern" ||
    rawCircuit === "western" ||
    rawCircuit === "coastal"
      ? rawCircuit
      : undefined

  const filteredDestinations = selectedCircuit
    ? destinations.filter((destination) => destination.circuit === selectedCircuit)
    : destinations

  const regionLabelMap: Record<NonNullable<typeof selectedCircuit> | "all", string> = {
    all: "All Regions",
    northern: "Northern",
    southern: "Southern",
    eastern: "Eastern",
    western: "Western",
    coastal: "Coastal",
  }

  const groupedDestinations = filteredDestinations.reduce<Record<string, typeof destinations>>((acc, destination) => {
    const key = destination.circuit
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(destination)
    return acc
  }, {})

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Destinations", url: absoluteUrl("/destinations") },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative mt-20 flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={assetUrl("/gallery/sunset.webp")}
          alt="Tanzania safari landscape"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/60 to-black/85" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em]">
              Destinations
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">Tanzania destinations for iconic wildlife, culture, and landscapes.</h1>
            <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
              From Serengeti plains to Ngorongoro's crater floor, browse the places we build into tailor-made routes.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/30 hover:bg-white/90"
              >
                <Link href="/contact">
                  Plan a Tanzania itinerary <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
              >
                <Link href="#collections">Browse destinations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="border-y border-border/70 bg-muted py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-mono text-sm text-muted-foreground">
              Showing {filteredDestinations.length} destinations · {regionLabelMap[selectedCircuit ?? "all"]}
            </div>
            <div className="flex flex-wrap gap-2">
              {circuitOptions.map((option) => {
                const href = option.value === "all" ? "/destinations" : `/destinations?circuit=${option.value}`
                const isActive = option.value === "all" ? !selectedCircuit : selectedCircuit === option.value

                return (
                  <Link
                    key={option.value}
                    href={href}
                    className={
                      isActive
                        ? "rounded-full bg-primary px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-primary-foreground"
                        : "rounded-full border border-border bg-background px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground"
                    }
                  >
                    {option.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {Object.entries(groupedDestinations)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([region, regionDestinations]) => (
              <div key={region} className="space-y-8">
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">
                    {regionLabelMap[region as keyof typeof regionLabelMap]}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground">{regionLabelMap[region as keyof typeof regionLabelMap]} Region</h2>
                  <p className="text-sm font-mono text-muted-foreground">
                    {regionDestinations.length} destinations curated for this region.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regionDestinations.map((destination) => (
                    <Card
                      key={destination.id}
                      className="overflow-hidden group border border-border/40 bg-card/80 backdrop-blur rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={assetUrl(destination.image) || "/placeholder.svg"}
                          alt={destination.title}
                          fill
                          unoptimized
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-mono">
                          {destination.difficulty}
                        </div>
                      </div>
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          <span>{destination.location}</span>
                        </div>
                        <h3 className="text-2xl font-serif text-foreground mb-3">{destination.title}</h3>
                        <p className="font-mono text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {destination.description}
                        </p>
                        <div className="flex flex-wrap gap-2 text-[0.7rem] font-mono text-muted-foreground">
                          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1">
                            Best time: {destination.bestTime}
                          </span>
                          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1">
                            Group size: {destination.groupSize}
                          </span>
                          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1">
                            Difficulty: {destination.difficulty}
                          </span>
                        </div>
                        <ul className="space-y-1 font-mono text-xs text-muted-foreground/90">
                          {destination.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-[2px] text-primary">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center pt-2">
                          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{destination.duration}</span>
                          </div>
                        </div>
                        <Button
                          asChild
                          className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                        >
                          <Link href={`/destinations/${destination.slug}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-secondary" />
          <h2 className="text-4xl font-serif mb-4 text-balance">Can't Decide?</h2>
          <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Let our safari experts help you design a custom Tanzania itinerary that matches your interests and budget
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
          >
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
