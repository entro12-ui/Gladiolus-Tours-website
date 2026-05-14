import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle2,
  Mountain,
  Compass,
  Sparkles,
} from "lucide-react"
import { Link } from "@/i18n/routing"
import { assetUrl } from "@/lib/assets"
import { AdventureBookingForm } from "@/components/adventure-booking-form"
import { adventures } from "@/lib/adventures-data"

export const metadata: Metadata = {
  title: "Tanzania Adventure Experiences | Gladiolus Tours",
  description:
    "Luxury Tanzania adventures including Kilimanjaro trekking, walking safaris, cultural tours, and Zanzibar escapes.",
  alternates: {
    canonical: "/adventures",
  },
  openGraph: {
    title: "Tanzania Adventure Experiences | Gladiolus Tours",
    description:
      "Discover handcrafted Tanzania adventure experiences with Gladiolus Tours.",
    url: absoluteUrl("/adventures"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Tanzania Adventure Experiences",
      },
    ],
  },
}

export default function AdventuresPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E] overflow-hidden">

      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Adventures", url: absoluteUrl("/adventures") },
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
            src={assetUrl("/hero/hero-02.webp")}
            alt="Luxury Tanzania Adventure"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/70 to-[#FAF8F5]" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 rounded-full bg-white border border-[#E6D5C3] px-6 py-3 shadow-lg">
              <Mountain className="h-4 w-4 text-[#C69252]" />

              <span className="text-sm font-semibold text-[#355C4D]">
                Tanzania Adventure Experiences
              </span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight text-[#1E1E1E]">
              Explore Tanzania Beyond
              <span className="text-[#C69252]">
                {" "}Traditional Safaris
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-[#5A5A5A] leading-relaxed max-w-3xl mx-auto">
              Climb Mount Kilimanjaro, experience walking safaris,
              cultural adventures, and Zanzibar escapes designed by
              local experts in Tanzania.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold shadow-[0_12px_30px_rgba(198,146,82,0.35)] transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Plan Your Adventure
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#D9C2AE] bg-white hover:bg-[#FFFDFB] px-10 py-6 text-[#1E1E1E] font-semibold"
              >
                <Link href="#experiences">
                  Explore Experiences
                </Link>
              </Button>

            </div>

            {/* QUICK HIGHLIGHTS */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

              {[
                "Kilimanjaro Treks",
                "Walking Safaris",
                "Cultural Tours",
                "Zanzibar Escapes",
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

      {/* INTRO */}
      <section className="py-20 bg-white border-y border-[#EFE4D8]">

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-[#C69252] font-semibold">
              Adventure Experiences
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-serif text-[#1E1E1E] leading-tight">
              Active Journeys Crafted Around You
            </h2>

            <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
              Whether you want challenging mountain climbs, wildlife
              walks, or cultural immersion, our Tanzania adventure
              experiences are designed for comfort, authenticity,
              and unforgettable memories.
            </p>

          </div>

        </div>
      </section>

      {/* ADVENTURES */}
      <section
        id="experiences"
        className="py-24 bg-[#FAF8F5]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 space-y-20">

          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="grid xl:grid-cols-[1.15fr_0.85fr] gap-10 items-start"
            >

              {/* LEFT SIDE */}
              <Card className="overflow-hidden rounded-[36px] border border-[#EFE4D8] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]">

                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">

                  <Image
                    src={assetUrl(adventure.image)}
                    alt={adventure.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute bottom-8 left-8 text-white">

                    <span className="inline-flex rounded-full bg-[#C69252] px-5 py-2 text-xs tracking-widest font-semibold shadow-lg">
                      {adventure.category}
                    </span>

                    <h2 className="mt-5 text-4xl font-serif leading-tight max-w-xl">
                      {adventure.title}
                    </h2>

                  </div>

                </div>

                <CardContent className="p-8 md:p-10">

                  {/* OVERVIEW */}
                  <div>

                    <h3 className="text-2xl font-serif text-[#1E1E1E]">
                      Overview
                    </h3>

                    <p className="mt-4 text-[#5A5A5A] leading-relaxed">
                      {adventure.description}
                    </p>

                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-10">

                    <h3 className="text-2xl font-serif text-[#1E1E1E]">
                      Experience Highlights
                    </h3>

                    <div className="mt-5 grid md:grid-cols-2 gap-4">

                      {adventure.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-2xl border border-[#EFE4D8] bg-[#FAF8F5] p-4"
                        >

                          <Sparkles className="h-5 w-5 text-[#C69252] mt-0.5" />

                          <span className="text-sm text-[#5A5A5A] leading-relaxed">
                            {highlight}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* ITINERARY */}
                  <div className="mt-12">

                    <h3 className="text-2xl font-serif text-[#1E1E1E]">
                      Adventure Itinerary
                    </h3>

                    <div className="mt-6 space-y-5">

                      {adventure.itinerary.map((day) => (
                        <div
                          key={`${adventure.id}-${day.day}`}
                          className="rounded-3xl border border-[#EFE4D8] bg-[#FAF8F5] p-6 hover:bg-white transition-all duration-300"
                        >

                          <div className="flex gap-5">

                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#355C4D] text-white font-semibold">
                              {day.day}
                            </div>

                            <div>

                              <h4 className="text-lg font-semibold text-[#1E1E1E]">
                                {day.title}
                              </h4>

                              <p className="mt-2 text-[#5A5A5A] leading-relaxed">
                                {day.description}
                              </p>

                            </div>

                          </div>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* PACKAGES */}
                  <div className="mt-12">

                    <h3 className="text-2xl font-serif text-[#1E1E1E]">
                      Available Packages
                    </h3>

                    <div className="mt-6 grid md:grid-cols-2 gap-5">

                      {adventure.packages.map((pkg) => (
                        <Card
                          key={`${adventure.id}-${pkg.name}`}
                          className="rounded-3xl border border-[#EFE4D8] bg-[#FAF8F5] hover:bg-white transition-all duration-300"
                        >

                          <CardContent className="p-6">

                            <p className="text-xs uppercase tracking-[0.25em] text-[#A46A3D] font-semibold">
                              {pkg.duration}
                            </p>

                            <h4 className="mt-3 text-2xl font-serif text-[#1E1E1E]">
                              {pkg.name}
                            </h4>

                            <p className="mt-2 text-lg font-semibold text-[#355C4D]">
                              {pkg.price}
                            </p>

                            <p className="mt-4 text-sm text-[#5A5A5A] leading-relaxed">
                              {pkg.description}
                            </p>

                            <div className="mt-5 space-y-2">

                              {pkg.includes.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-[#5A5A5A]"
                                >

                                  <CheckCircle2 className="h-4 w-4 text-[#C69252] mt-0.5" />

                                  <span>{item}</span>

                                </div>
                              ))}

                            </div>

                          </CardContent>

                        </Card>
                      ))}

                    </div>

                  </div>

                </CardContent>

              </Card>

              {/* BOOKING FORM */}
              <div className="xl:sticky xl:top-28">
                <AdventureBookingForm
                  adventureTitle={adventure.title}
                  packages={adventure.packages.map((pkg) => ({
                    name: pkg.name,
                    duration: pkg.duration,
                    price: pkg.price,
                  }))}
                />
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-[#EFE4D8]">

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          <div className="max-w-4xl mx-auto rounded-[40px] bg-gradient-to-r from-[#355C4D] via-[#486B5C] to-[#6F8A72] px-8 py-16 md:px-16 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

            <Compass className="h-14 w-14 mx-auto text-[#F4D2A7]" />

            <h2 className="mt-6 text-4xl md:text-6xl font-serif leading-tight">
              Ready For Your Tanzania Adventure?
            </h2>

            <p className="mt-6 text-lg text-[#F5F1EB] leading-relaxed max-w-2xl mx-auto">
              Let our Tanzania adventure specialists create a
              personalized experience designed around your goals,
              comfort level, and travel style.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold transition-all duration-300"
              >
                <Link href="/contact">
                  Talk To Adventure Experts
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 hover:bg-white/20 px-10 py-6 text-white"
              >
                <Link href="/destinations">
                  Explore Destinations
                  <ArrowRight className="ml-2 h-4 w-4" />
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