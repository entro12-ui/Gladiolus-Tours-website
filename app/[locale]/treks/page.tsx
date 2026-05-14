import type { Metadata } from "next"
import Image from "next/image"
import {
  Mountain,
  MapPin,
  Calendar,
  ArrowRight,
  Compass,
  Star,
  ShieldCheck,
  Trees,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

import type { Trek } from "@/lib/treks-data"
import {
  majorMountainTreks,
  otherNotableHikes,
} from "@/lib/treks-data"

export const metadata: Metadata = {
  title:
    "Luxury Tanzania Treks & Kilimanjaro Climbing Tours | Gladiolus Tours",
  description:
    "Explore luxury Tanzania trekking adventures with Gladiolus Tours based in Arusha. Discover Mount Kilimanjaro climbing routes, Mount Meru treks, Usambara Mountains hikes, rainforest trails, and guided Tanzania trekking packages with expert local guides.",
  keywords: [
    "Luxury Tanzania Treks",
    "Mount Kilimanjaro Climbing",
    "Kilimanjaro Trekking Tours",
    "Mount Meru Trek",
    "Tanzania Hiking Tours",
    "Guided Tanzania Treks",
    "Arusha Trekking Company",
    "Luxury Kilimanjaro Expeditions",
    "Usambara Mountains Hikes",
    "Tanzania Adventure Travel",
    "Ol Doinyo Lengai Trek",
    "Best Kilimanjaro Routes",
    "Tanzania Mountain Climbing",
    "Tanzania Trekking Packages",
    "Private Kilimanjaro Guides",
  ],

  alternates: {
    canonical: "/treks",
  },

  openGraph: {
    title:
      "Luxury Tanzania Treks & Kilimanjaro Climbing | Gladiolus Tours",
    description:
      "Plan luxury Kilimanjaro climbs, Mount Meru treks, and guided Tanzania hiking adventures with expert local trekking specialists in Arusha.",
    url: absoluteUrl("/treks"),
    siteName: "Gladiolus Tours",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: absoluteUrl("/gallery/kili-00.webp"),
        width: 1200,
        height: 630,
        alt: "Luxury Tanzania trekking adventures with Gladiolus Tours",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Luxury Tanzania Treks & Kilimanjaro Tours | Gladiolus Tours",

    description:
      "Luxury Kilimanjaro trekking, Mount Meru climbing, and Tanzania guided hiking experiences.",

    images: [absoluteUrl("/gallery/kili-00.webp")],
  },
}

function TrekCard({ trek }: { trek: Trek }) {
  const {
    title,
    location,
    duration,
    elevation,
    difficulty,
    bestTime,
    permits,
    description,
    highlights,
    image,
    slug,
  } = trek

  const detailsHref = `/treks/${slug}`

  return (
    <Card className="group overflow-hidden rounded-[32px] border border-[#E9DED0] bg-white py-0 gap-0 shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(166,106,61,0.18)] hover:border-[#C69252]/40">

      <div className="relative h-72 overflow-hidden">

        <Link
          href={detailsHref}
          aria-label={`View details for ${title}`}
          className="absolute inset-0 z-10"
        >
          <span className="sr-only">View details</span>
        </Link>

        <Image
          src={assetUrl(image)}
          alt={title}
          fill
          unoptimized
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E]/85 via-[#1E1E1E]/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 text-white">

          <div className="flex flex-wrap gap-2 mb-4">

            <span className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white border border-white/20">
              {difficulty}
            </span>

            <span className="inline-flex items-center rounded-full bg-[#C69252] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white shadow-lg">
              {duration}
            </span>

          </div>

          <h3 className="text-3xl font-serif leading-tight text-balance">
            {title}
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-white/85">

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#E7C899]" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mountain className="h-4 w-4 text-[#E7C899]" />
              <span>{elevation}</span>
            </div>

          </div>

        </div>

      </div>

      <CardContent className="p-8 space-y-6">

        <p className="text-[#5C5148] leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 gap-3 text-sm text-[#5C5148]">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F3EDE4] flex items-center justify-center">
              <Calendar className="h-4 w-4 text-[#A46A3D]" />
            </div>

            <span>
              Best time: <strong>{bestTime}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F3EDE4] flex items-center justify-center">
              <Compass className="h-4 w-4 text-[#A46A3D]" />
            </div>

            <span>{permits}</span>
          </div>

        </div>

        <div className="pt-2">

          <p className="text-xs uppercase tracking-[0.35em] text-[#A46A3D] mb-4 font-semibold">
            Trek Highlights
          </p>

          <ul className="space-y-3">

            {highlights.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#4F463F] leading-relaxed"
              >
                <span className="mt-2 w-2 h-2 rounded-full bg-[#C69252]" />
                {item}
              </li>
            ))}

          </ul>

        </div>

        <div className="pt-4">

          <Button
            asChild
            className="w-full rounded-full bg-[#C69252] px-7 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl hover:bg-[#A46A3D] transition-all duration-300 hover:-translate-y-1"
          >
            <Link href={detailsHref}>
              View Trek Details
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="mt-4 w-full rounded-full border-[#DCC7AF] bg-[#FAF8F5] py-6 text-sm font-semibold text-[#1E1E1E] hover:bg-[#F3EDE4] hover:border-[#C69252] transition-all duration-300"
          >
            <Link href="/contact">
              Plan This Trek
            </Link>
          </Button>

        </div>

      </CardContent>
    </Card>
  )
}

export default function TreksPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] overflow-hidden">

      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Treks", url: absoluteUrl("/treks") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative mt-20 flex min-h-[90vh] items-end overflow-hidden">

        <Image
          src={assetUrl("/gallery/kili-00.webp")}
          alt="Luxury Mount Kilimanjaro trekking adventure in Tanzania"
          fill
          unoptimized
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E]/20 via-[#1E1E1E]/45 to-[#1E1E1E]/80" />

        {/* luxury glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,146,82,0.25),transparent_35%)]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pb-28">

          <div className="max-w-4xl text-white">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-6 py-3 text-sm uppercase tracking-[0.25em] shadow-xl">
              <Trees className="h-4 w-4 text-[#E7C899]" />
              Luxury Tanzania Trekking Adventures
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight text-balance">
              Luxury Tanzania Treks &
              <span className="text-[#E7C899]">
                {" "}Kilimanjaro Expeditions
              </span>
            </h1>

            <p className="mt-8 text-xl text-white/85 max-w-3xl leading-relaxed">
              Discover Mount Kilimanjaro climbing tours, Mount Meru trekking,
              Usambara Mountain hikes, rainforest trails, and guided Tanzania
              trekking adventures with expert local guides based in Arusha,
              Tanzania.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#C69252] px-10 py-7 text-base font-semibold text-white shadow-2xl hover:bg-[#A46A3D] transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Plan Your Trek
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 backdrop-blur-md px-10 py-7 text-base font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <Link href="#treks">
                  Explore Trekking Routes
                </Link>
              </Button>

            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

              {[
                "Private Guided Treks",
                "Kilimanjaro Experts",
                "Luxury Camping",
                "Local Trek Leaders",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 text-center text-sm font-medium shadow-xl"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-white border-y border-[#EADFD2]">

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="rounded-[32px] bg-[#FAF8F5] border border-[#EADFD2] p-8 shadow-sm">
              <ShieldCheck className="h-12 w-12 text-[#C69252]" />

              <h3 className="mt-6 text-2xl font-serif">
                Safety-Focused Expeditions
              </h3>

              <p className="mt-4 text-[#5C5148] leading-relaxed">
                Professional mountain guides, certified support teams,
                acclimatization-focused itineraries, and personalized trekking
                assistance throughout Tanzania.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#FAF8F5] border border-[#EADFD2] p-8 shadow-sm">
              <Mountain className="h-12 w-12 text-[#C69252]" />

              <h3 className="mt-6 text-2xl font-serif">
                Premium Trekking Routes
              </h3>

              <p className="mt-4 text-[#5C5148] leading-relaxed">
                Explore Machame, Lemosho, Marangu, Rongai, Mount Meru,
                Usambara Mountains, Ol Doinyo Lengai, and Tanzania’s hidden
                trekking gems.
              </p>
            </div>

            <div className="rounded-[32px] bg-[#FAF8F5] border border-[#EADFD2] p-8 shadow-sm">
              <Star className="h-12 w-12 text-[#C69252]" />

              <h3 className="mt-6 text-2xl font-serif">
                Luxury Tanzania Adventure Travel
              </h3>

              <p className="mt-4 text-[#5C5148] leading-relaxed">
                Combine Kilimanjaro climbing with Serengeti safaris,
                Ngorongoro Crater tours, Zanzibar beach holidays, and private
                luxury safari experiences.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* TREKS */}
      <section
        id="treks"
        className="py-24 bg-gradient-to-b from-[#FAF8F5] to-[#F3EDE4]"
      >

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-20">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
              Tanzania Mountain Adventures
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-serif text-balance">
              Kilimanjaro Routes, Volcano Treks & Rainforest Hikes
            </h2>

            <p className="mt-6 text-lg text-[#5C5148] leading-relaxed">
              Explore Tanzania’s most iconic trekking destinations with expert
              guides from Arusha. Compare trekking routes, elevation profiles,
              acclimatization schedules, and best travel seasons.
            </p>

          </div>

          {/* MAJOR TREKS */}
          <div className="space-y-6">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div>

                <p className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                  Major Mountain Treks
                </p>

                <h2 className="mt-4 text-4xl md:text-5xl font-serif">
                  Mount Kilimanjaro & Tanzania Volcano Treks
                </h2>

              </div>

            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {majorMountainTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}

            </div>

          </div>

          {/* OTHER TREKS */}
          <div className="space-y-6 pt-10">

            <div>

              <p className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                Other Notable Hikes
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-serif">
                Rainforests, Highlands & Cultural Trails
              </h2>

            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

              {otherNotableHikes.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* SEO CONTENT */}
      <section className="py-24 bg-white">

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="space-y-8">

              <div>

                <span className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                  Tanzania Trekking Guide
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-serif">
                  How To Choose The Right Tanzania Trek
                </h2>

              </div>

              <p className="text-[#5C5148] leading-relaxed text-lg">
                Tanzania offers some of Africa’s best trekking experiences,
                including Mount Kilimanjaro climbing expeditions, Mount Meru
                treks, volcanic hikes, rainforest adventures, and village
                walking safaris. Gladiolus Tours creates customized trekking
                itineraries designed around fitness level, travel dates,
                acclimatization, and luxury preferences.
              </p>

              <p className="text-[#5C5148] leading-relaxed text-lg">
                The best months for Tanzania trekking are typically June to
                October and January to March when conditions are drier and
                visibility is excellent for summit attempts and mountain views.
              </p>

            </div>

            <div className="rounded-[36px] border border-[#EADFD2] bg-[#FAF8F5] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] space-y-8">

              <div>

                <p className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                  Best Trekking Seasons
                </p>

                <p className="mt-3 text-[#5C5148] leading-relaxed">
                  June to October offers cooler weather and clearer mountain
                  views while January to March is excellent for Kilimanjaro
                  climbing conditions.
                </p>

              </div>

              <div>

                <p className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                  Guides & Safety
                </p>

                <p className="mt-3 text-[#5C5148] leading-relaxed">
                  All high-altitude climbs are led by experienced local guides,
                  trained support crews, and licensed Tanzania trekking teams.
                </p>

              </div>

              <div>

                <p className="uppercase tracking-[0.35em] text-[#A46A3D] text-sm">
                  Trek + Safari Combinations
                </p>

                <p className="mt-3 text-[#5C5148] leading-relaxed">
                  Combine your Kilimanjaro trek with Serengeti safaris,
                  Ngorongoro Crater tours, Tarangire National Park, or Zanzibar
                  beach holidays.
                </p>

              </div>

              <Button
                asChild
                className="w-full rounded-full bg-[#C69252] px-7 py-6 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-xl hover:bg-[#A46A3D] transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Get Your Trekking Plan
                </Link>
              </Button>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#355C4D] via-[#486D5D] to-[#6F8A72] text-white">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 text-center">

          <div className="max-w-4xl mx-auto">

            <h2 className="text-5xl md:text-6xl font-serif text-balance">
              Design Your Tanzania Trek & Safari Adventure
            </h2>

            <p className="mt-8 text-xl text-white/90 leading-relaxed">
              Our Arusha-based trekking specialists will help you plan the
              perfect Kilimanjaro climb, Mount Meru expedition, or Tanzania
              trekking safari combination with premium accommodations and
              expert local guides.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#C69252] px-10 py-7 text-lg font-semibold text-white shadow-2xl hover:bg-[#A46A3D] transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Talk To A Trek Specialist
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 backdrop-blur-md px-10 py-7 text-lg font-semibold text-white hover:bg-white/20"
              >
                <Link href="/safaris">
                  Explore Tanzania Safaris
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