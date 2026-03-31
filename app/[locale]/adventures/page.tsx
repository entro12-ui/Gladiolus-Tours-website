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
import { AdventureBookingForm } from "@/components/adventure-booking-form"
import { adventures } from "@/lib/adventures-data"

export const metadata: Metadata = {
  title: "Tanzania Adventure Experiences | Gladiolus Tours",
  description:
    "Design active Tanzania adventures. Kilimanjaro treks, walking safaris, coastal expeditions, and cultural immersions curated by Gladiolus Tours.",
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
      <section className="relative mt-20 flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={assetUrl("/hero/hero-02.webp")}
          alt="Tanzania adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/60 to-black/85" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em]">
              Adventures
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">Discover your next adventure with Gladiolus Tours</h1>
            <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
              Climb Kilimanjaro, walk with specialist guides, explore heritage sites, and end on the spice coast, crafted end-to-end with Tanzanian experts.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/30 hover:bg-white/90"
              >
                <Link href="/contact">
                  Plan an Adventure <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
              >
                <Link href="#collections">Browse Ideas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Adventure Ideas</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Active experiences crafted for curious travellers.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Browse a few adventure categories below. If you share your travel window and comfort level, we’ll tailor the route, crew, permits, and pacing.
            </p>
          </div>
        </div>
      </section>

      {/* Adventures */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="overflow-hidden rounded-[32px] border-border/40 bg-card/90 shadow-lg shadow-primary/10">
                <div className="relative h-72">
                  <Image
                    src={assetUrl(adventure.image)}
                    alt={adventure.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                    <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em]">
                      {adventure.category}
                    </p>
                    <h2 className="text-3xl font-serif text-balance">{adventure.title}</h2>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-foreground">Overview</h3>
                    <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                      {adventure.description}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-foreground">Highlights</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {adventure.highlights.map((highlight) => (
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
                      {adventure.itinerary.map((day) => (
                        <div key={`${adventure.id}-${day.day}`} className="rounded-2xl border border-border/40 bg-muted/30 p-4">
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
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-foreground">Available packages</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {adventure.packages.map((pkg) => (
                        <Card key={`${adventure.id}-${pkg.name}`} className="rounded-2xl border-border/40">
                          <CardContent className="p-4 space-y-3">
                            <div className="space-y-1">
                              <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">{pkg.duration}</p>
                              <h4 className="text-lg font-serif text-foreground">{pkg.name}</h4>
                              <p className="text-sm font-mono text-primary">{pkg.price}</p>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">{pkg.description}</p>
                            <ul className="space-y-1 text-xs text-muted-foreground">
                              {pkg.includes.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <AdventureBookingForm
                adventureTitle={adventure.title}
                packages={adventure.packages.map((pkg) => ({
                  name: pkg.name,
                  duration: pkg.duration,
                  price: pkg.price,
                }))}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-serif text-balance">Ready for Your Next Tanzanian Thrill?</h2>
          <p className="text-lg font-mono text-primary-foreground/90 max-w-3xl mx-auto">
            Tell us what challenges excite you most, we'll build a safe, soulful, and breathtaking adventure across Tanzania.
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
