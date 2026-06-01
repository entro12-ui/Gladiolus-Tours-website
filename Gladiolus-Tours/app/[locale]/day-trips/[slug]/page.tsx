import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPageUi } from "@/content/pages"
import { getLocalizedDayTrips, getDayTripBySlug } from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ArrowRight, MapPin, Clock, Check } from "lucide-react"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { Link } from "@/i18n/routing"

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return getLocalizedDayTrips("en").map((trip) => ({
    slug: trip.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const trip = getDayTripBySlug(slug, locale)
  
  if (!trip) {
    return {
      title: ui.dayTrips.detail.notFoundTitle,
    }
  }

  return {
    title: `${trip.title} | Gladiolus Tours`,
    description: trip.description,
    alternates: {
      canonical: `/day-trips/${trip.slug}`,
    },
    openGraph: {
      title: `${trip.title} | Gladiolus Tours`,
      description: trip.description,
      url: absoluteUrl(`/day-trips/${trip.slug}`),
      type: "website",
      images: [
        {
          url: assetUrl(trip.image),
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
    },
  }
}

export default async function DayTripPage({ params }: Props) {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const page = ui.dayTrips
  const detail = page.detail
  const trip = getDayTripBySlug(slug, locale)

  if (!trip) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={assetUrl(trip.image)}
            alt={trip.title}
            fill
            unoptimized
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-16 text-white">
          <ScrollAnimation>
            <div className="flex items-center gap-3 text-sm font-mono text-white/70 mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {trip.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {trip.duration}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif text-balance mb-4">
              {trip.title}
            </h1>
            <p className="text-lg text-white/85 max-w-2xl">
              {trip.description}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Highlights */}
            <div className="lg:col-span-2">
              <ScrollAnimation>
                <h2 className="text-2xl font-serif mb-6">{detail.highlightsHeading}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trip.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-muted/50"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <p className="text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              {/* Itinerary */}
              <ScrollAnimation delay={200} className="mt-12">
                <h2 className="text-2xl font-serif mb-6">{ui.common.itinerary}</h2>
                <div className="space-y-4">
                  {trip.itinerary.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-4 rounded-2xl bg-muted/30"
                    >
                      <div className="flex-shrink-0 w-20 text-sm font-semibold text-primary">
                        {item.time}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation delay={300}>
                <Card className="sticky top-24 border-border/40">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        {detail.pricingHeading}
                      </p>
                      <div className="space-y-2">
                        {trip.pricePerPerson.map((price, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-3 rounded-xl bg-muted/50"
                          >
                            <span className="text-sm text-muted-foreground">
                              {page.pricingTiers[idx]}
                            </span>
                            <span className="text-lg font-bold text-primary">
                              ${price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                        {detail.includedHeading}
                      </p>
                      {trip.included.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full rounded-full size-lg">
                      <Link href="/contact">
                        {detail.bookButton} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif mb-8 text-center">{detail.galleryHeading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trip.gallery.map((image, idx) => (
              <div key={idx} className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={assetUrl(image)}
                  alt={`${trip.title} gallery ${idx + 1}`}
                  fill
                  unoptimized
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">
            {detail.questionsTitle}
          </h2>
          <p className="text-muted-foreground mb-8">
            {detail.questionsDescription}
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/contact">{detail.contactButton}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
