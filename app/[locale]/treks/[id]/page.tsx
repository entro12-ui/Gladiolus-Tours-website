import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Mountain, Compass, ArrowRight, CheckCircle2 } from "lucide-react"
import { getPageUi } from "@/content/pages"
import { getLocalizedTreks, getTrekBySlug } from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ id: string; locale: string }>
}

function resolveTrek(identifier: string, locale: string) {
  return getTrekBySlug(identifier, locale)
}

export async function generateStaticParams() {
  return getLocalizedTreks("en").map((trek) => ({
    id: trek.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params
  const ui = getPageUi(locale)
  const trek = resolveTrek(id, locale)

  if (!trek) {
    return {
      title: ui.treks.detail.notFoundTitle,
    }
  }

  const url = absoluteUrl(`/treks/${trek.slug}`)
  const imageUrl = absoluteUrl(trek.image)

  return {
    title: `${trek.headline ?? trek.title} - Gladiolus Tours`,
    description: trek.overview ?? trek.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${trek.headline ?? trek.title} - Gladiolus Tours`,
      description: trek.overview ?? trek.description,
      url,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: trek.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trek.headline ?? trek.title} - Gladiolus Tours`,
      description: trek.overview ?? trek.description,
      images: [imageUrl],
    },
  }
}

export default async function TrekDetailPage({ params }: Props) {
  const { id, locale } = await params
  const ui = getPageUi(locale)
  const page = ui.treks
  const detail = page.detail
  const trek = resolveTrek(id, locale)
  const allTreks = getLocalizedTreks(locale)

  if (!trek) {
    notFound()
  }

  const canonicalUrl = absoluteUrl(`/treks/${trek.slug}`)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/treks") },
          { name: trek.title, url: canonicalUrl },
        ]}
      />
      <Navigation />

      <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image src={assetUrl(trek.image)} alt={trek.title} fill unoptimized className="object-cover brightness-75" priority />
        </div>
        <div className="relative z-10 w-full bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1 font-mono text-[0.7rem] tracking-[0.35em] uppercase text-white/80">
              <span>{detail.badge}</span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-sm">{trek.location}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif text-white text-balance">
              {trek.headline ?? trek.title}
            </h1>

            <p className="max-w-3xl font-mono text-base text-white/90 leading-relaxed">
              {trek.overview ?? trek.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-white/90 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{trek.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5" />
                <span>{trek.elevation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5" />
                <span>{detail.bestPrefix} {trek.bestTime}</span>
              </div>
              <Badge variant="secondary" className="text-sm">
                {trek.difficulty}
              </Badge>
              {trek.priceFrom ? (
                <Badge variant="secondary" className="text-sm">
                  {ui.common.startingFrom} {trek.priceFrom}
                </Badge>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground">{ui.common.overview}</h2>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {trek.overview ?? trek.description}
                </p>
              </div>

              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground mb-4">{ui.common.highlights}</h2>
                <ul className="space-y-3">
                  {trek.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-mono text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {trek.whyChoose?.length ? (
                <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                  <h2 className="text-3xl font-serif text-foreground">
                    {detail.whyChooseHeading}
                  </h2>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {trek.whyChoose.map((reason) => (
                      <li
                        key={reason}
                        className="flex items-start gap-3 rounded-2xl border border-border/40 bg-background p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="font-mono text-sm text-muted-foreground">
                          {reason}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {trek.itinerary?.length ? (
                <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-6">
                  <h2 className="text-3xl font-serif text-foreground">
                    {detail.itineraryHeading}
                  </h2>
                  <div className="space-y-4">
                    {trek.itinerary.map((day) => (
                      <div
                        key={`${trek.slug}-${day.day}-${day.title}`}
                        className="rounded-2xl border border-border/40 bg-background p-5"
                      >
                        <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">
                          {day.day}
                        </p>
                        <h3 className="mt-3 text-xl font-serif text-foreground">
                          {day.title}
                        </h3>
                        <p className="mt-3 font-mono text-sm leading-relaxed text-muted-foreground">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-6">
                <h2 className="text-3xl font-serif text-foreground">{detail.planningNotesHeading}</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/40 bg-background p-5">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">{detail.bestTimeLabel}</p>
                    <p className="mt-2 font-mono text-sm text-foreground/80 leading-relaxed">{trek.bestTime}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background p-5">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">{detail.permitsLabel}</p>
                    <p className="mt-2 font-mono text-sm text-foreground/80 leading-relaxed">{trek.permits}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 rounded-3xl border border-border/60 bg-card/90 backdrop-blur-xl shadow-xl shadow-primary/10">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">{detail.sidebarEyebrow}</p>
                    <h2 className="text-xl font-serif text-foreground">{detail.sidebarTitle}</h2>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    {trek.priceFrom ? (
                      <div className="flex justify-between">
                        <span className="font-mono text-sm text-muted-foreground">
                          {ui.common.startingFrom}
                        </span>
                        <span className="font-mono text-sm font-medium text-foreground">
                          {trek.priceFrom}
                        </span>
                      </div>
                    ) : null}
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{ui.common.duration}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.difficultyLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.elevationLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.elevation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">{detail.bestTimeLabel}</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.bestTime}</span>
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
                        {detail.enquireNow} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-primary/40 bg-white/60 py-3 text-base font-semibold text-primary hover:bg-white"
                      size="lg"
                    >
                      <Link href="/treks">{detail.backToTreks}</Link>
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4 text-balance">{detail.moreTitle}</h2>
            <p className="text-lg font-mono text-muted-foreground">{detail.moreSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allTreks
              .filter((t) => t.slug !== trek.slug)
              .slice(0, 3)
              .map((related) => (
                <Card
                  key={related.id}
                  className="overflow-hidden group border border-border/40 bg-card/80 backdrop-blur rounded-3xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={assetUrl(related.image)}
                      alt={related.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{related.location}</span>
                    </div>
                    <h3 className="text-xl font-serif text-foreground">{related.title}</h3>
                    <div className="flex items-center justify-between mt-2 mb-4">
                      <span className="font-mono text-sm text-muted-foreground">{related.duration}</span>
                    </div>
                    <Button
                      asChild
                      className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                    >
                      <Link href={`/treks/${related.slug}`}>{detail.viewDetails}</Link>
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
