import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"

const adventureCategories = [
  {
    id: 1,
    title: "9 Days Kilimanjaro Trek via Northern Route",
    category: "Mountain Climbing",
    overview:
      "The Northern Circuit route is the newest route up Mount Kilimanjaro and arguably the best—combining beautiful scenery, solitude, a healthy challenge, and excellent acclimatization for a high summit success rate.",
    image: "/about-us/team.webp",
  },
  {
    id: 2,
    title: "Walking Safaris & Indigenous Guide Encounters",
    category: "Walking Safaris",
    overview:
      "Slow down to feel Tanzania beyond the vehicle. Track wildlife on foot with specialist guides, learn bushcraft and ecology, and reconnect with place through mindful pacing.",
    image: "/gallery/tour-guide.webp",
  },
  {
    id: 3,
    title: "Zanzibar Coast & Spice Culture",
    category: "Beach Holiday",
    overview:
      "Pair your safari with salt-air decompression—Stone Town stories, spice experiences, dhow sailing, and beach days curated for rest and romance.",
    image: "/hero/hero-02.webp",
  },
  {
    id: 4,
    title: "Adventure Safaris Across the Northern Circuit",
    category: "Adventure Safaris",
    overview:
      "Combine classic game drives with active add-ons—canoeing, cycling, crater rim walks, and photography-focused days tuned to the season’s best light and wildlife behaviour.",
    image: "/gallery/gt-tourist-vehicle-01.webp",
  },
  {
    id: 5,
    title: "Tourist Attractions & Heritage Stops",
    category: "Tourist Attraction",
    overview:
      "Add depth to your journey with Olduvai Gorge, craft markets, and heritage-rich detours that frame Tanzania’s landscapes with human story and history.",
    image: "/gallery/Olduvai-Gorge-01.webp",
  },
  {
    id: 6,
    title: "Wildlife + Adventure Photo Days",
    category: "Adventure Safaris",
    overview:
      "Cinematic golden-hour drives, curated vantage points, and gentle pacing for travellers who want both adrenaline and heirloom images from the field.",
    image: "/gallery/photo-00.webp",
  },
]

export const metadata: Metadata = {
  title: "Tanzania Adventure Experiences | Gladiolus Tours",
  description:
    "Design active Tanzania adventures—Kilimanjaro treks, walking safaris, coastal expeditions, and cultural immersions curated by Gladiolus Tours.",
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
              Climb Kilimanjaro, walk with specialist guides, explore heritage sites, and end on the spice coast—crafted end-to-end with Tanzanian experts.
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

      {/* Collections */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {adventureCategories.map((item) => (
              <Link key={item.id} href="/contact" className="group block">
                <Card className="overflow-hidden rounded-3xl border-border/40 bg-background py-0 gap-0 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={assetUrl(item.image)}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                      <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-white/90">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-serif leading-tight">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="font-mono text-sm text-muted-foreground leading-relaxed h-24 overflow-hidden">
                      {item.overview.length > 160 ? `${item.overview.slice(0, 160)}...` : item.overview}
                    </p>
                    <div className="mt-6 w-full rounded-full bg-gradient-to-r from-primary-alt to-primary px-4 py-2 text-center text-sm font-medium text-white">
                      Enquire about this adventure
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl font-serif text-balance">Ready for Your Next Tanzanian Thrill?</h2>
          <p className="text-lg font-mono text-primary-foreground/90 max-w-3xl mx-auto">
            Tell us what challenges excite you most—we'll build a safe, soulful, and breathtaking adventure across Tanzania.
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
