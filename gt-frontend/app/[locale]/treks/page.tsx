import type { Metadata } from "next"
import Image from "next/image"
import { Mountain, MapPin, Calendar, ArrowRight, Compass } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import type { Trek } from "@/lib/treks-data"
import { majorMountainTreks, otherNotableHikes } from "@/lib/treks-data"

export const metadata: Metadata = {
  title: "Tanzania Treks - Gladiolus Tours",
  description:
    "Explore Tanzania treks from Kilimanjaro routes to rainforest hikes. Compare difficulty, duration, best time to go, and key planning tips.",
  alternates: {
    canonical: "/treks",
  },
  openGraph: {
    title: "Tanzania Treks | Gladiolus Tours",
    description: "Browse Tanzania treks including Kilimanjaro, Mount Meru, and iconic highland hikes.",
    url: absoluteUrl("/treks"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Tanzania treks with Gladiolus Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania Treks",
    description: "Plan a guided Tanzania trek with Gladiolus Tours.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

function TrekCard({ trek }: { trek: Trek }) {
  const { title, location, duration, elevation, difficulty, bestTime, permits, description, highlights, image } = trek

  return (
    <Card className="overflow-hidden rounded-3xl border-border/40 bg-background py-0 gap-0 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden">
        <Image src={assetUrl(image)} alt={title} fill unoptimized className="object-cover transition duration-700 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-white/80">
              {difficulty}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.25em] text-white/80">
              {duration}
            </span>
          </div>
          <h3 className="text-2xl font-serif leading-tight text-balance">{title}</h3>
          <div className="flex flex-col gap-1 text-sm font-mono text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span>{elevation}</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <p className="font-mono text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="grid grid-cols-1 gap-2 text-sm font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Best time: {bestTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            <span>{permits}</span>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground mb-3">Highlights</p>
          <ul className="space-y-2">
            {highlights.slice(0, 4).map((item) => (
              <li key={item} className="font-mono text-sm text-foreground/80 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4">
          <Button
            asChild
            className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary px-7 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
          >
            <Link href="/contact">
              Plan this trek <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TreksPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Treks", url: absoluteUrl("/treks") },
        ]}
      />
      <Navigation />

      <section className="relative mt-20 flex min-h-[80vh] items-end overflow-hidden">
        <Image
          src={assetUrl("/gallery/sunset.webp")}
          alt="Tanzania trek landscapes"
          fill
          unoptimized
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/60 to-black/85" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-24">
          <div className="max-w-3xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em]">
              Treks
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-balance">Tanzania treks—from summit pushes to rainforest walks.</h1>
            <p className="text-lg md:text-xl font-mono text-white/80 leading-relaxed">
              Mount Kilimanjaro dominates, but Tanzania also offers Mount Meru, Ol Doinyo Lengai, the Usambaras, Udzungwa, and volcanic highlands.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-primary shadow-lg shadow-black/30 hover:bg-white/90"
              >
                <Link href="/contact">
                  Plan a guided trek <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
              >
                <Link href="#treks">Browse treks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">What to expect</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Trek logistics built around safety, pacing, and acclimatization.</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Treks range from multi-day alpine climbs to cultural day walks. Most routes require guides, and mountain treks also require park fees and rangers.
            </p>
          </div>
        </div>
      </section>

      <section id="treks" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          <div className="space-y-4">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Major mountain treks</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Kilimanjaro routes, Meru, and Tanzania’s active volcano.</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {majorMountainTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Other notable hikes</p>
            <h2 className="text-4xl md:text-5xl font-serif text-balance">Rainforests, highlands, and village trails.</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherNotableHikes.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/70 bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Planning your trek</p>
              <h2 className="text-4xl md:text-5xl font-serif text-balance">How to pick the right trek for your travel window.</h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                June to October is ideal for cooler days and clearer views, but nights can be cold—especially on Kilimanjaro and Meru.
              </p>
            </div>

            <div className="rounded-3xl border border-border/40 bg-background p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Best time</p>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                  June to October is the classic dry season. January to March can also be good on the big mountains.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Guides & rangers</p>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                  Essential for safety and navigation. Volcano and high-altitude climbs require official support teams.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Variety</p>
                <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                  Choose between challenging summit climbs, short night hikes, rainforest waterfalls, and cultural village walks.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary px-7 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
                >
                  <Link href="/contact">Get a trekking plan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-serif text-balance">Design a trek + safari combo</h2>
          <p className="text-lg font-mono text-primary-foreground/90 max-w-3xl mx-auto">
            Many travelers pair a summit attempt with a few recovery days in the Serengeti, Ngorongoro, or Zanzibar. Tell us your dates and we’ll map the pacing.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white/90 text-primary px-10 py-4 text-lg font-semibold shadow-xl shadow-white/40">
            <Link href="/contact">Talk to a trip designer</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
