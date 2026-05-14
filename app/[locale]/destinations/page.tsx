import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import {
  MapPin,
  Calendar,
  ArrowRight,
  Sparkles,
  Compass,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema } from "@/components/structured-data"
import { destinations } from "@/lib/destinations-data"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

export const metadata: Metadata = {
  title: "Tanzania Safari Destinations - Gladiolus Tours",
  description:
    "Explore luxury Tanzania safari destinations including Serengeti, Ngorongoro, Zanzibar, Tarangire, and Mount Kilimanjaro.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Luxury Tanzania Safari Destinations | Gladiolus Tours",
    description:
      "Discover curated Tanzania safari destinations crafted by local safari experts.",
    url: absoluteUrl("/destinations"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Luxury Tanzania Safari Destinations",
      },
    ],
  },
}

type Props = {
  searchParams?: Promise<{ circuit?: string }> | { circuit?: string }
}

const circuitOptions = [
  { value: "all", label: "All Regions" },
  { value: "northern", label: "Northern" },
  { value: "southern", label: "Southern" },
  { value: "eastern", label: "Eastern" },
  { value: "western", label: "Western" },
  { value: "coastal", label: "Coastal" },
]

export default async function DestinationsPage({
  searchParams,
}: Props) {
  const resolvedSearchParams = await searchParams

  const rawCircuit = resolvedSearchParams?.circuit

  const selectedCircuit =
    rawCircuit === "northern" ||
    rawCircuit === "southern" ||
    rawCircuit === "eastern" ||
    rawCircuit === "western" ||
    rawCircuit === "coastal"
      ? rawCircuit
      : undefined

  const filteredDestinations = selectedCircuit
    ? destinations.filter(
        (destination) =>
          destination.circuit === selectedCircuit
      )
    : destinations

  const regionLabelMap: Record<
    NonNullable<typeof selectedCircuit> | "all",
    string
  > = {
    all: "All Regions",
    northern: "Northern",
    southern: "Southern",
    eastern: "Eastern",
    western: "Western",
    coastal: "Coastal",
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] overflow-hidden">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          {
            name: "Destinations",
            url: absoluteUrl("/destinations"),
          },
        ]}
      />

      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-xl border-b border-[#E6D5C3] shadow-sm">
        <Navigation />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <Image
            src={assetUrl("/gallery/sunset.webp")}
            alt="Luxury Tanzania Safari"
            fill
            priority
            className="object-cover opacity-20"
            unoptimized
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/80 to-[#FAF8F5]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 rounded-full bg-white border border-[#E6D5C3] px-6 py-3 shadow-lg">
              <Compass className="h-4 w-4 text-[#C69252]" />

              <span className="text-sm font-semibold text-[#355C4D]">
                Explore Tanzania With Local Safari Experts
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight text-[#1E1E1E]">
              Discover Tanzania’s Most
              <span className="text-[#C69252]">
                {" "}
                Iconic Destinations
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-[#5A5A5A] leading-relaxed max-w-3xl mx-auto">
              From Serengeti wildlife safaris to Zanzibar beach escapes,
              explore handcrafted destinations designed for unforgettable
              luxury adventures.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold shadow-[0_12px_30px_rgba(198,146,82,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Plan Your Safari
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#D9C2AE] bg-white hover:bg-[#FFFDFB] px-10 py-6 text-[#1E1E1E] font-semibold"
              >
                <Link href="#destinations">
                  Browse Destinations
                </Link>
              </Button>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                "Serengeti",
                "Ngorongoro",
                "Kilimanjaro",
                "Zanzibar",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-white border border-[#EFE4D8] p-5 shadow-sm"
                >
                  <span className="font-semibold text-[#355C4D]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 border-y border-[#EFE4D8] bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#A46A3D] font-semibold">
                Safari Regions
              </p>

              <h2 className="mt-2 text-3xl font-serif text-[#1E1E1E]">
                Choose Your Destination
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {circuitOptions.map((option) => {
                const href =
                  option.value === "all"
                    ? "/destinations"
                    : `/destinations?circuit=${option.value}`

                const isActive =
                  option.value === "all"
                    ? !selectedCircuit
                    : selectedCircuit === option.value

                return (
                  <Link
                    key={option.value}
                    href={href}
                    className={
                      isActive
                        ? "rounded-full bg-[#355C4D] text-white px-5 py-3 text-sm font-semibold transition-all duration-300"
                        : "rounded-full border border-[#E6D5C3] bg-[#FAF8F5] hover:bg-white px-5 py-3 text-sm font-semibold text-[#5A5A5A] transition-all duration-300"
                    }
                  >
                    {option.label}
                  </Link>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="py-24 bg-[#FAF8F5]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="group overflow-hidden rounded-[34px] border border-[#EFE4D8] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500"
              >

                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={
                      assetUrl(destination.image) ||
                      "/placeholder.svg"
                    }
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span className="rounded-full bg-[#C69252] text-white px-4 py-2 text-xs tracking-widest font-semibold shadow-lg">
                      {destination.difficulty}
                    </span>
                  </div>

                </div>

                <CardContent className="p-8">

                  <div className="flex items-center gap-2 text-sm text-[#7A7A7A]">
                    <MapPin className="h-4 w-4 text-[#C69252]" />
                    <span>{destination.location}</span>
                  </div>

                  <h3 className="mt-4 text-3xl font-serif text-[#1E1E1E]">
                    {destination.title}
                  </h3>

                  <p className="mt-4 text-[#5A5A5A] leading-relaxed line-clamp-3">
                    {destination.description}
                  </p>

                  {/* TAGS */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    <span className="rounded-full bg-[#F8F3EC] border border-[#EFE4D8] px-4 py-2 text-xs text-[#6B6B6B]">
                      Best: {destination.bestTime}
                    </span>

                    <span className="rounded-full bg-[#F8F3EC] border border-[#EFE4D8] px-4 py-2 text-xs text-[#6B6B6B]">
                      {destination.groupSize}
                    </span>

                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-6 space-y-2">
                    {destination.highlights
                      .slice(0, 3)
                      .map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-[#5A5A5A]"
                        >
                          <Sparkles className="h-4 w-4 mt-0.5 text-[#C69252]" />

                          <span>{highlight}</span>
                        </div>
                      ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-[#7A7A7A]">
                    <Calendar className="h-4 w-4 text-[#C69252]" />

                    <span>{destination.duration}</span>
                  </div>

                  <Button
                    asChild
                    className="mt-8 w-full rounded-full bg-[#355C4D] hover:bg-[#C69252] text-white py-6 text-sm font-semibold transition-all duration-300"
                  >
                    <Link
                      href={`/destinations/${destination.slug}`}
                    >
                      Explore Destination
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-[#EFE4D8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="max-w-4xl mx-auto rounded-[40px] bg-gradient-to-r from-[#355C4D] via-[#486B5C] to-[#6F8A72] px-8 py-16 md:px-16 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Need Help Choosing The Perfect Safari?
            </h2>

            <p className="mt-6 text-lg text-[#F5F1EB] leading-relaxed max-w-2xl mx-auto">
              Our Arusha-based safari specialists will help you create a
              personalized Tanzania itinerary tailored to your travel style.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold transition-all duration-300"
              >
                <Link href="/contact">
                  Contact Safari Experts
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 px-10 py-6 text-white"
              >
                <Link href="/safaris">
                  View Safari Packages
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