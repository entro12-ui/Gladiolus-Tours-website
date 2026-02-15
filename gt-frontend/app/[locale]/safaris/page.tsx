import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"
import { safariPackages } from "@/lib/safaris-data"

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

      {/* Overview */}
      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Signature Safaris</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Curated safari journeys with clear pacing and lodge standards.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Each package below includes a full itinerary, private guiding, and handpicked stays. Use these as a base—we tailor every route to your season, wildlife priorities, and preferred pace.
            </p>
          </div>
        </div>
      </section>

      {/* Safari Packages */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {safariPackages.map((pkg) => (
            <div key={pkg.id} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="overflow-hidden rounded-[32px] border-border/40 bg-card/90 shadow-lg shadow-primary/10">
                <div className="relative h-72">
                  <Image
                    src={assetUrl(pkg.image)}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                    <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em]">
                      {pkg.region} Region
                    </p>
                    <h2 className="text-3xl font-serif text-balance">{pkg.title}</h2>
                    <p className="text-sm font-mono text-white/80">{pkg.duration} · {pkg.price}</p>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-foreground">Overview</h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">{pkg.description}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-foreground">Highlights</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {pkg.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm font-mono text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-foreground">Day-by-day itinerary</h3>
                    <div className="space-y-4">
                      {pkg.itinerary.map((day) => (
                        <div key={`${pkg.id}-${day.day}`} className="rounded-2xl border border-border/40 bg-muted/30 p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif">
                              {day.day}
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-foreground">{day.title}</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">{day.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-foreground">Included</h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm font-mono text-muted-foreground">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-[32px] border-border/40 bg-card/90 shadow-lg shadow-primary/10 h-fit">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Plan this safari</p>
                    <h3 className="text-2xl font-serif text-foreground">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground">Share your dates and guest count. We’ll tailor it and confirm availability within 24 hours.</p>
                  </div>
                  <div className="space-y-3 text-sm font-mono text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Duration</span>
                      <span className="text-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Region</span>
                      <span className="text-foreground">{pkg.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Starting from</span>
                      <span className="text-foreground">{pkg.price}</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-primary/25 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                  >
                    <Link href={`/inquiry?adventure=${encodeURIComponent(pkg.title)}`}>
                      Book this safari <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-primary/30 bg-white/70 py-3 text-sm font-semibold text-primary"
                  >
                    <Link href="/inquiry">Request custom itinerary</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
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
