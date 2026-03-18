import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, MapPin, Clock, Check, Sparkles } from "lucide-react"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { dayTrips } from "@/lib/day-trips-data"

export const metadata: Metadata = {
  title: "Day Trips from Arusha | Chemka Hot Springs & Lake Duluti",
  description:
    "Explore exciting day trips from Arusha including Chemka Hot Springs and Lake Duluti. Perfect for travelers with limited time seeking adventure and relaxation.",
  alternates: {
    canonical: "/day-trips",
  },
  openGraph: {
    title: "Day Trips from Arusha | Gladiolus Tours",
    description:
      "Explore exciting day trips from Arusha including Chemka Hot Springs and Lake Duluti.",
    url: absoluteUrl("/day-trips"),
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Day Trips",
      },
    ],
  },
}

const pricingTiers = ["1 Person", "2 People", "3 People", "4+ People"]

export default function DayTripsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={assetUrl("/gallery/sunset.webp")}
            alt="Tanzania Day Trips"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em] text-white/80 mb-6">
              <Sparkles className="h-4 w-4" />
              Quick Escapes
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance mb-6">
              Day Trips from Arusha
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8">
              Make the most of your time in Tanzania with our curated day trips. 
              From relaxing hot springs to scenic crater lakes, experience the best of East Africa in just one day.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Day Trips Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you seek relaxation or adventure, our day trips offer unforgettable experiences 
              just a short drive from Arusha.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dayTrips.map((trip, index) => (
              <ScrollAnimation key={trip.id} animation="fade-up" delay={index * 150}>
                <Card className="overflow-hidden hover-lift border-border/40">
                  <div className="relative h-72">
                    <Image
                      src={assetUrl(trip.image)}
                      alt={trip.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-mono uppercase tracking-[0.3em] flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" /> {trip.location}
                      </p>
                      <h3 className="text-2xl font-serif mt-1">{trip.shortTitle}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <p className="text-muted-foreground">{trip.description}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary"
                        >
                          <Check className="h-3 w-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="rounded-2xl bg-muted/50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Pricing per person
                      </p>
                      <div className="grid grid-cols-4 gap-2">
                        {trip.pricePerPerson.map((price, idx) => (
                          <div key={idx} className="text-center">
                            <p className="text-lg font-bold text-primary">${price}</p>
                            <p className="text-[10px] text-muted-foreground">{pricingTiers[idx]}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {trip.duration}
                        </span>
                      </div>
                      <Button asChild className="rounded-full">
                        <Link href={`/day-trips/${trip.slug}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Ready for Your Day Adventure?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us to book your day trip or customize it to your preferences. 
              We offer private tours and flexible schedules.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/contact">
                  Book a Day Trip
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/contact">
                  Custom Request
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  )
}
