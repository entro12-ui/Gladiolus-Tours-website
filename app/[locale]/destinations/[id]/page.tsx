import Image from "next/image"
import type { Metadata } from "next"
import { Link } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Users, CheckCircle2, XCircle, Clock, ArrowRight } from "lucide-react"
import { getPageUi } from "@/content/pages"
import {
  getLocalizedDestinations,
  getDestinationBySlug,
} from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbSchema, TourSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ id: string; locale: string }>
}

function resolveDestination(identifier: string, locale: string) {
  return getDestinationBySlug(identifier, locale)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params
  const ui = getPageUi(locale)
  const destination = resolveDestination(id, locale)

  if (!destination) {
    return {
      title: ui.destinations.detail.notFoundTitle,
    }
  }

  const url = absoluteUrl(`/destinations/${destination.slug}`)
  const imageUrl = absoluteUrl(destination.image)

  return {
    title: `${destination.title} - Gladiolus Tours`,
    description: destination.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${destination.title} Safari - Gladiolus Tours`,
      description: destination.description,
      url,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: destination.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.title} Safari - Gladiolus Tours`,
      description: destination.description,
      images: [imageUrl],
    },
  }
}

export async function generateStaticParams() {
  return [
    ...getLocalizedDestinations("en").map((destination) => ({ id: destination.slug })),
    { id: "zanzibar" },
  ]
}

export default async function DestinationDetailPage({ params }: Props) {
  const { id, locale } = await params
  const ui = getPageUi(locale)
  const page = ui.destinations
  const detail = page.detail
  const destination = resolveDestination(id, locale)
  const destinations = getLocalizedDestinations(locale)

  if (!destination) {
    notFound()
  }

  const currentDestination = destination
  const canonicalUrl = absoluteUrl(`/destinations/${currentDestination.slug}`)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/destinations") },
          { name: currentDestination.title, url: canonicalUrl },
        ]}
      />
      <TourSchema
        name={currentDestination.title}
        description={currentDestination.description}
        image={absoluteUrl(currentDestination.image)}
        price={currentDestination.priceValue}
        duration={currentDestination.duration}
        location={currentDestination.location}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={assetUrl(currentDestination.image || "/placeholder.svg")}
            alt={currentDestination.title}
            fill
            unoptimized
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-white/80">
              <span>{detail.heroBadge}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-sm">{currentDestination.location}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white text-balance">{currentDestination.title}</h1>
            <p className="max-w-3xl font-mono text-base text-white/90 leading-relaxed line-clamp-3">
              {currentDestination.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-white/90 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{currentDestination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{currentDestination.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{detail.bestPrefix} {currentDestination.bestTime}</span>
              </div>
              <Badge variant="secondary" className="text-sm">
                {currentDestination.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground">{ui.common.overview}</h2>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{currentDestination.description}</p>
              </div>

              {/* Highlights */}
              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground mb-4">{ui.common.highlights}</h2>
                <ul className="space-y-3">
                  {currentDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-mono text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-6">
                <h2 className="text-3xl font-serif text-foreground">{detail.itineraryHeading}</h2>
                <div className="space-y-6">
                  {currentDestination.itinerary.map((day, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                              {day.day}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-serif text-foreground mb-2">{day.title}</h3>
                            <p className="font-mono text-sm text-muted-foreground leading-relaxed">{day.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Included & Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8">
                  <h3 className="text-2xl font-serif text-foreground mb-4">{ui.common.included}</h3>
                  <ul className="space-y-2">
                    {currentDestination.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:px-8">
                  <h3 className="text-2xl font-serif text-foreground mb-4">{detail.notIncludedHeading}</h3>
                  <ul className="space-y-2">
                    {currentDestination.excluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="font-mono text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 rounded-3xl border border-border/60 bg-card/90 backdrop-blur-xl shadow-xl shadow-primary/10">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">{detail.sidebarEyebrow}</p>
                    <h2 className="text-xl font-serif text-foreground">{detail.sidebarTitle}</h2>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{ui.common.duration}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{currentDestination.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.groupSizeLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{currentDestination.groupSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.difficultyLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{currentDestination.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.bestTimeLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{currentDestination.bestTime}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-base font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
                    >
                      <Link href="/contact">
                        {detail.bookButton} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-primary/40 bg-white/60 py-3 text-base font-semibold text-primary hover:bg-white"
                      size="lg"
                    >
                      <Link href="/contact">{detail.customQuoteButton}</Link>
                    </Button>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                      {detail.sidebarNote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4 text-balance">{detail.relatedTitle}</h2>
            <p className="text-lg font-mono text-muted-foreground">{detail.relatedSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations
              .filter((d) => d.slug !== currentDestination.slug)
              .slice(0, 3)
              .map((dest) => (
                <Card
                  key={dest.id}
                  className="overflow-hidden group border border-border/40 bg-card/80 backdrop-blur rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={assetUrl(dest.image || "/placeholder.svg")}
                      alt={dest.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{dest.location}</span>
                    </div>
                    <h3 className="text-xl font-serif text-foreground">{dest.title}</h3>
                    <div className="flex items-center justify-between mt-2 mb-4">
                      <span className="font-mono text-sm text-muted-foreground">{dest.duration}</span>
                    </div>
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                    >
                      <Link href={`/destinations/${dest.slug}`}>{detail.viewDetails}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
