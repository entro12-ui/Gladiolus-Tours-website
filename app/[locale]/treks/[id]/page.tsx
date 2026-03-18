import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MapPin, Calendar, Mountain, Compass, ArrowRight, CheckCircle2 } from "lucide-react"
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
import { majorMountainTreks, otherNotableHikes } from "@/lib/treks-data"

type Props = {
  params: Promise<{ id: string }>
}

const allTreks = [...majorMountainTreks, ...otherNotableHikes]

function resolveTrek(identifier: string) {
  return allTreks.find((trek) => trek.slug === identifier || trek.id === identifier)
}

export async function generateStaticParams() {
  return allTreks.map((trek) => ({
    id: trek.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const trek = resolveTrek(id)

  if (!trek) {
    return {
      title: "Trek Not Found",
    }
  }

  const url = absoluteUrl(`/treks/${trek.slug}`)
  const imageUrl = absoluteUrl(trek.image)

  return {
    title: `${trek.title} - Gladiolus Tours`,
    description: trek.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${trek.title} - Gladiolus Tours`,
      description: trek.description,
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
      title: `${trek.title} - Gladiolus Tours`,
      description: trek.description,
      images: [imageUrl],
    },
  }
}

export default async function TrekDetailPage({ params }: Props) {
  const { id } = await params
  const trek = resolveTrek(id)

  if (!trek) {
    notFound()
  }

  const canonicalUrl = absoluteUrl(`/treks/${trek.slug}`)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Treks", url: absoluteUrl("/treks") },
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
              <span>Trek</span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span className="font-mono text-sm">{trek.location}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif text-white text-balance">{trek.title}</h1>

            <p className="max-w-3xl font-mono text-base text-white/90 leading-relaxed line-clamp-3">{trek.description}</p>

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
                <span>Best: {trek.bestTime}</span>
              </div>
              <Badge variant="secondary" className="text-sm">
                {trek.difficulty}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground">Overview</h2>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{trek.description}</p>
              </div>

              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-4">
                <h2 className="text-3xl font-serif text-foreground mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {trek.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-mono text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border/40 bg-card/80 backdrop-blur p-6 md:p-8 space-y-6">
                <h2 className="text-3xl font-serif text-foreground">Planning notes</h2>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/40 bg-background p-5">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Best time</p>
                    <p className="mt-2 font-mono text-sm text-foreground/80 leading-relaxed">{trek.bestTime}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background p-5">
                    <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Permits & logistics</p>
                    <p className="mt-2 font-mono text-sm text-foreground/80 leading-relaxed">{trek.permits}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24 rounded-3xl border border-border/60 bg-card/90 backdrop-blur-xl shadow-xl shadow-primary/10">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">Plan your trek</p>
                    <h2 className="text-xl font-serif text-foreground">Talk to a Gladiolus expert</h2>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">Duration</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">Difficulty</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.difficulty}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">Elevation</span>
                      <span className="font-mono text-sm text-foreground font-medium">{trek.elevation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-sm text-muted-foreground">Best Time</span>
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
                        Enquire Now <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-primary/40 bg-white/60 py-3 text-base font-semibold text-primary hover:bg-white"
                      size="lg"
                    >
                      <Link href="/treks">Back to Treks</Link>
                    </Button>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                      Share your dates, fitness level, and preferences—we’ll recommend the right route and pacing.
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
            <h2 className="text-4xl font-serif text-foreground mb-4 text-balance">More Tanzania treks</h2>
            <p className="text-lg font-mono text-muted-foreground">Compare routes and choose the best fit</p>
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
                      <Link href={`/treks/${related.slug}`}>View Details</Link>
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
