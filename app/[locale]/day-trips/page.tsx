import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { getLocalizedDayTrips } from "@/content/localized"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  ArrowRight,
  MapPin,
  Clock,
  Check,
  Sparkles,
  Waves,
  Trees,
  Camera,
  Star,
} from "lucide-react"
import { BreadcrumbSchema, StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ locale: string }>
}

const highlightIcons = [Waves, Trees, Camera, Star]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).dayTrips

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: "/day-trips",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/day-trips"),
      type: "website",
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.featureImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.twitterTitle ?? page.metadata.title,
      description: page.metadata.twitterDescription ?? page.metadata.description,
      images: [absoluteUrl("/og-image.jpg")],
    },
  }
}

export default async function DayTripsPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.dayTrips
  const dayTrips = getLocalizedDayTrips(locale)
  const dayTripsSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.schemaName,
    description: page.schemaDescription,
    provider: {
      "@type": "TravelAgency",
      name: "Gladiolus Tours",
      url: absoluteUrl("/"),
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <StructuredData id="day-trips-schema" data={dayTripsSchema} />

      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/day-trips") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden mt-20 bg-[#f7f2ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,133,63,0.12),transparent_30%)]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <ScrollAnimation className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                <Sparkles className="h-4 w-4" />
                {page.heroBadge}
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#161616] leading-[1.05] tracking-tight text-balance">
                  {page.heroTitle}
                  <span className="block text-primary mt-2">
                    {page.heroTitleAccent}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed text-[#555] max-w-2xl">
                  {page.heroDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-7 text-base font-semibold bg-gradient-to-r from-primary-alt to-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                >
                  <Link href="#day-trips">
                    {page.heroPrimary}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-7 text-base border-primary/20 bg-white/70 hover:bg-primary/5"
                >
                  <Link href="/contact">
                    {page.heroSecondary}
                  </Link>
                </Button>
              </div>

              {/* QUICK FEATURES */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {page.heroCards.map((item, index) => {
                  const Icon = highlightIcons[index] ?? Star

                  return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white border border-[#eee] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#111] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#666]">
                      {item.text}
                    </p>
                  </div>
                  )
                })}
              </div>
            </ScrollAnimation>

            {/* RIGHT IMAGE */}
            <ScrollAnimation animation="fade-left">
              <div className="relative">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary-alt/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[36px] border border-white/50 shadow-2xl">
                  <Image
                    src={assetUrl("/gallery/chemka-00.webp")}
                    alt={page.featureImageAlt}
                    width={900}
                    height={1000}
                    priority
                    unoptimized
                    className="h-[680px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute bottom-10 left-8 right-8">
                    <div className="inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-lg">
                      {page.featureBadge}
                    </div>

                    <h2 className="mt-5 text-4xl font-serif leading-tight text-white">
                      {page.featureTitle}
                    </h2>

                    <p className="mt-3 text-lg text-white/90 leading-relaxed">
                      {page.featureDescription}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollAnimation className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">
              {page.introEyebrow}
            </span>

            <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
              {page.introTitle}
              <span className="block text-primary">
                {page.introTitleAccent}
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-[#666]">
              {page.introDescription}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* DAY TRIPS */}
      <section
        id="day-trips"
        className="py-24 bg-[#f7f2ea]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {dayTrips.map((trip, index) => (
              <ScrollAnimation
                key={trip.id}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="group overflow-hidden rounded-[36px] border border-[#ece5dc] bg-white shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  {/* IMAGE */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={assetUrl(trip.image)}
                      alt={trip.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="rounded-full bg-[#d49a4a] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-lg">
                        {page.cardBadge}
                      </span>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center gap-2 text-white/90 text-base mb-3">
                        <MapPin className="h-5 w-5" />
                        {trip.location}
                      </div>

                      <h3 className="text-4xl font-serif leading-tight text-white">
                        {trip.shortTitle}
                      </h3>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <CardContent className="p-8 space-y-8">
                    <p className="text-lg leading-relaxed text-[#555]">
                      {trip.description}
                    </p>

                    {/* HIGHLIGHTS */}
                    <div className="space-y-4">
                      <h4 className="text-2xl font-serif text-[#111]">
                        {page.cardHighlightsHeading}
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {trip.highlights.slice(0, 4).map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-sm font-medium text-primary"
                          >
                            <Check className="h-4 w-4" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* PRICING */}
                    <div className="rounded-[28px] border border-[#eee] bg-[#faf7f2] p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-[#888]">
                            {page.pricingEyebrow}
                          </p>

                          <h4 className="text-3xl font-serif text-[#111]">
                            {page.pricingTitle}
                          </h4>
                        </div>

                        <div className="rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold text-primary">
                          {page.pricingGroupBadge}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {trip.pricePerPerson.map((price, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl bg-white border border-[#eee] p-5 text-center shadow-sm"
                          >
                            <p className="text-3xl font-bold text-primary">
                              ${price}
                            </p>

                            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#777]">
                              {page.pricingTiers[idx]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2">
                      <div className="flex items-center gap-2 text-base text-[#666]">
                        <Clock className="h-5 w-5 text-primary" />
                        {trip.duration}
                      </div>

                      <Button
                        asChild
                        className="rounded-full px-7 py-6 text-base font-semibold bg-gradient-to-r from-primary-alt to-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                      >
                        <Link href={`/day-trips/${trip.slug}`}>
                          {page.viewExperience}
                          <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">
                {page.whyEyebrow}
              </span>

              <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
                {page.whyTitle}
                <span className="block text-primary">
                  {page.whyTitleAccent}
                </span>
              </h2>

              <p className="text-xl leading-relaxed text-[#666]">
                {page.whyDescription}
              </p>
            </div>

            <div className="grid gap-5">
              {page.whyItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-5 rounded-[28px] border border-[#eee] bg-[#faf7f2] p-7 hover:shadow-lg transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-6 w-6 text-primary" />
                  </div>

                  <p className="text-lg leading-relaxed text-[#555]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f7f2ea]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <ScrollAnimation className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-primary font-semibold">
              {page.ctaBadge}
            </span>

            <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
              {page.ctaTitle}
              <span className="block text-primary">
                {page.ctaTitleAccent}
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-[#666]">
              {page.ctaDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-7 text-base font-semibold bg-gradient-to-r from-primary-alt to-primary text-white shadow-xl shadow-primary/20"
              >
                <Link href="/contact">
                  {page.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-7 text-base border-primary/20 bg-white/80 hover:bg-primary/5"
              >
                <Link href="/contact">
                  {page.ctaSecondary}
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