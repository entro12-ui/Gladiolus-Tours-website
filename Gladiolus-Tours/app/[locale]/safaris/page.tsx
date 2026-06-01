import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { getLocalizedSafaris } from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema, StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Compass,
  Camera,
  ShieldCheck,
} from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ locale: string }>
}

const safariHighlightIcons = [Compass, Camera, ShieldCheck, Sparkles]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).safaris

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: "/safaris",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/safaris"),
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.heroImageAlt,
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

export default async function SafarisPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.safaris
  const safaris = getLocalizedSafaris(locale)
  const safariSchema = {
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
    <div className="min-h-screen bg-[#f8f5ef]">
      <StructuredData id="safari-schema" data={safariSchema} />

      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/safaris") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src={assetUrl("/gallery/zebra-00.webp")}
            alt={page.heroImageAlt}
            fill
            priority
            unoptimized
            className="object-cover"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/95 via-[#f8f5ef]/85 to-[#f8f5ef]/65" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              {page.heroBadge}
            </span>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-slate-900 text-balance">
                {page.heroTitle}
              </h1>

              <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-slate-700">
                {page.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-7 text-base font-semibold text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
              >
                <Link href="#collections">
                  {page.heroPrimaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/20 bg-white/80 px-8 py-7 text-base text-primary hover:bg-primary/5"
              >
                <Link href="/contact">
                  {page.heroSecondaryCta}
                </Link>
              </Button>
            </div>

            {/* QUICK FEATURES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {page.highlightCards.map((item, index) => {
                const Icon = safariHighlightIcons[index] ?? Sparkles

                return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-primary/10 bg-white/80 p-5 shadow-sm backdrop-blur hover:shadow-xl hover:shadow-primary/5 transition-all"
                >
                  <Icon className="h-6 w-6 text-primary mb-4" />

                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-[#fdfaf5] border-y border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-sm uppercase tracking-[0.35em] text-primary font-semibold">
              {page.introEyebrow}
            </span>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-slate-900 text-balance">
              {page.introTitle}
            </h2>

            <p className="text-xl leading-relaxed text-slate-600">
              {page.introDescription}
            </p>
          </div>
        </div>
      </section>

      {/* SAFARI PACKAGES */}
      <section
        id="collections"
        className="py-24 bg-gradient-to-b from-[#f8f5ef] to-[#fcfaf7]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
          {safaris.map((pkg) => (
            <div
              key={pkg.id}
              className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
            >
              {/* LEFT CARD */}
              <Card className="overflow-hidden rounded-[36px] border border-primary/10 bg-white shadow-xl shadow-primary/5">
                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={assetUrl(pkg.image)}
                    alt={pkg.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute top-6 left-6">
                    <span className="rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-lg">
                      {pkg.region} {page.imageRegionSuffix}
                    </span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <h2 className="text-4xl font-serif text-white leading-tight text-balance">
                      {pkg.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        {page.detail.locationText}
                      </span>

                      <span className="text-sm">
                        {pkg.duration}
                      </span>

                      <span className="text-sm font-semibold">
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <CardContent className="p-8 lg:p-10 space-y-10">
                  {/* OVERVIEW */}
                  <div className="space-y-4">
                    <h3 className="text-3xl font-serif text-slate-900">
                      {page.overviewHeading}
                    </h3>

                    <p className="text-lg leading-relaxed text-slate-600">
                      {pkg.description}
                    </p>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="space-y-5">
                    <h3 className="text-2xl font-serif text-slate-900">
                      {page.highlightsHeading}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {pkg.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-primary/5 p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />

                          <span className="text-base leading-relaxed text-slate-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ITINERARY */}
                  <div className="space-y-5">
                    <h3 className="text-2xl font-serif text-slate-900">
                      {page.itineraryHeading}
                    </h3>

                    <div className="space-y-4">
                      {pkg.itinerary.map((day) => (
                        <div
                          key={`${pkg.id}-${day.day}`}
                          className="rounded-3xl border border-primary/10 bg-[#fcfaf7] p-5 hover:shadow-md transition-all"
                        >
                          <div className="flex gap-5">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-alt to-primary text-white font-semibold shadow-md">
                              {day.day}
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-xl font-semibold text-slate-900">
                                {day.title}
                              </h4>

                              <p className="text-base leading-relaxed text-slate-600">
                                {day.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* INCLUDED */}
                  <div className="space-y-5">
                    <h3 className="text-2xl font-serif text-slate-900">
                      {page.includedHeading}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {pkg.includes.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />

                          <span className="text-base text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RIGHT SIDEBAR */}
              <Card className="h-fit rounded-[36px] border border-primary/10 bg-white shadow-xl shadow-primary/5 lg:sticky lg:top-28">
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-[0.35em] text-primary font-semibold">
                      {page.sidebarEyebrow}
                    </span>

                    <h3 className="text-3xl font-serif text-slate-900 leading-tight">
                      {pkg.title}
                    </h3>

                    <p className="text-base leading-relaxed text-slate-600">
                      {page.sidebarDescription}
                    </p>
                  </div>

                  <div className="space-y-5 rounded-3xl border border-primary/10 bg-[#fcfaf7] p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{page.sidebarDurationLabel}</span>

                      <span className="font-semibold text-slate-900">
                        {pkg.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{page.sidebarRegionLabel}</span>

                      <span className="font-semibold text-slate-900">
                        {pkg.region}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{page.sidebarPriceLabel}</span>

                      <span className="font-semibold text-primary">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-7 text-base font-semibold text-white shadow-xl shadow-primary/20 hover:scale-[1.01] transition-all"
                    >
                      <Link
                        href={`/inquiry?adventure=${encodeURIComponent(
                          pkg.title
                        )}`}
                      >
                        {page.bookButton}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-primary/20 bg-white py-7 text-base font-semibold text-primary hover:bg-primary/5"
                    >
                      <Link href="/inquiry">
                        {page.customButton}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-[#fcfaf7] to-[#f8f5ef] border-t border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm uppercase tracking-[0.35em] text-primary font-semibold">
              {page.ctaBadge}
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight text-balance">
              {page.ctaTitle}
            </h2>

            <p className="text-xl leading-relaxed text-slate-600">
              {page.ctaDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-7 text-base font-semibold text-white shadow-xl shadow-primary/20"
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
                className="rounded-full border-primary/20 bg-white px-8 py-7 text-base font-semibold text-primary hover:bg-primary/5"
              >
                <Link href="/destinations">
                  {page.ctaSecondary}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}