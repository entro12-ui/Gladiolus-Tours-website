import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { MapPin, Calendar, ArrowRight, TrendingUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BreadcrumbSchema } from "@/components/structured-data"
import { destinations } from "@/lib/destinations-data"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Safari Destinations - Gladiolus Tours",
  description:
    "Explore our handpicked selection of African safari destinations. From Serengeti to Masai Mara, discover your perfect adventure.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "African Safari Destinations | Gladiolus Tours",
    description: "Discover curated safari destinations across Tanzania and Kenya with Gladiolus Tours.",
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
    title: "Explore Gladiolus Tours Safari Destinations",
    description: "Browse luxury African safari destinations tailored by Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function DestinationsPage() {
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-safari-sunset-with-acacia-trees-and-wildli.jpg"
            alt="African safari landscape with wildlife"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 font-mono text-xs tracking-[0.35em] uppercase text-white/80">
            Safari Destinations
          </span>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-2 text-balance">Signature African Safari Destinations</h1>
          <p className="text-xl font-mono text-white/90 leading-relaxed text-pretty">
            Browse our curated luxury safaris across Tanzania and Kenya, handpicked for unforgettable wildlife experiences.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="font-mono text-sm text-muted-foreground">Showing {destinations.length} destinations</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="tanzania">Tanzania</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">2-4 Days</SelectItem>
                  <SelectItem value="medium">5-7 Days</SelectItem>
                  <SelectItem value="long">8+ Days</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden group border border-border/40 bg-card/80 backdrop-blur rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
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
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-lg font-serif text-primary">{destination.price}</div>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4 text-secondary" />
          <h2 className="text-4xl font-serif mb-4 text-balance">Can't Decide?</h2>
          <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Let our safari experts help you design a custom itinerary that matches your interests and budget
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
