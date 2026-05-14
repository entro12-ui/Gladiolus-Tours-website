import type { Metadata } from "next"
import Image from "next/image"
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
import { dayTrips } from "@/lib/day-trips-data"

export const metadata: Metadata = {
  title: "Luxury Day Trips from Arusha, Tanzania | Gladiolus Tours",
  description:
    "Discover luxury day trips from Arusha including Chemka Hot Springs, Lake Duluti, waterfalls, coffee tours, cultural experiences, and private Tanzania excursions with Gladiolus Tours.",

  keywords: [
    "Luxury Day Trips Tanzania",
    "Arusha Day Tours",
    "Chemka Hot Springs Tour",
    "Lake Duluti Tour",
    "Best Tanzania Excursions",
    "Private Day Trips Tanzania",
    "Tanzania Cultural Tours",
    "Gladiolus Tours",
  ],

  alternates: {
    canonical: "/day-trips",
  },

  openGraph: {
    title: "Luxury Tanzania Day Trips | Gladiolus Tours",
    description:
      "Explore premium Tanzania day trips crafted by local experts in Arusha.",
    url: absoluteUrl("/day-trips"),
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Luxury Tanzania Day Trips",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Day Trips from Arusha",
    description:
      "Private Tanzania day experiences designed for comfort, culture, and adventure.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

const pricingTiers = ["1 Person", "2 People", "3 People", "4+ People"]

const highlights = [
  {
    icon: Waves,
    title: "Natural Hot Springs",
    text: "Relax in crystal-clear turquoise waters surrounded by tropical scenery.",
  },
  {
    icon: Trees,
    title: "Nature & Landscapes",
    text: "Explore crater lakes, waterfalls, forests, and scenic Tanzania viewpoints.",
  },
  {
    icon: Camera,
    title: "Photography Experiences",
    text: "Capture unforgettable travel moments with breathtaking backdrops.",
  },
  {
    icon: Star,
    title: "Private Guided Tours",
    text: "Flexible luxury experiences designed around your schedule and style.",
  },
]

export default function DayTripsPage() {
  const dayTripsSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Luxury Day Trips from Arusha",
    description:
      "Private Tanzania day trips and excursions curated by Gladiolus Tours.",
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
          { name: "Home", url: absoluteUrl("/") },
          { name: "Day Trips", url: absoluteUrl("/day-trips") },
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
                Explore Tanzania
              </span>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#161616] leading-[1.05] tracking-tight text-balance">
                  Luxury Day Trips
                  <span className="block text-primary mt-2">
                    from Arusha
                  </span>
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed text-[#555] max-w-2xl">
                  Discover waterfalls, crater lakes, hot springs, coffee farms,
                  and cultural experiences crafted for travelers seeking comfort,
                  beauty, and unforgettable memories in Tanzania.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 py-7 text-base font-semibold bg-gradient-to-r from-primary-alt to-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all"
                >
                  <Link href="#day-trips">
                    Explore Experiences
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
                    Customize Your Trip
                  </Link>
                </Button>
              </div>

              {/* QUICK FEATURES */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white border border-[#eee] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#111] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#666]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* RIGHT IMAGE */}
            <ScrollAnimation animation="fade-left">
              <div className="relative">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-primary-alt/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[36px] border border-white/50 shadow-2xl">
                  <Image
                    src={assetUrl("/gallery/sunset.webp")}
                    alt="Luxury Tanzania day trip"
                    width={900}
                    height={1000}
                    priority
                    className="h-[680px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <div className="absolute bottom-10 left-8 right-8">
                    <div className="inline-flex items-center rounded-full bg-white/95 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary shadow-lg">
                      Premium Tanzania Experiences
                    </div>

                    <h2 className="mt-5 text-4xl font-serif leading-tight text-white">
                      Explore beyond the safari
                    </h2>

                    <p className="mt-3 text-lg text-white/90 leading-relaxed">
                      Curated private adventures designed for modern luxury travelers.
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
              Curated Tanzania Experiences
            </span>

            <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
              Perfect Day Adventures
              <span className="block text-primary">
                for Every Traveler
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-[#666]">
              Whether you’re visiting Tanzania before a safari, after climbing
              Kilimanjaro, or simply exploring Arusha, our luxury day trips are
              crafted for comfort, flexibility, and unforgettable moments.
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
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="rounded-full bg-[#d49a4a] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white shadow-lg">
                        Premium Experience
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
                        Experience Highlights
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
                            Pricing
                          </p>

                          <h4 className="text-3xl font-serif text-[#111]">
                            Per Person
                          </h4>
                        </div>

                        <div className="rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold text-primary">
                          Flexible Groups
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
                              {pricingTiers[idx]}
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
                          View Full Experience
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
                Why Travelers Choose Us
              </span>

              <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
                Personalized Tanzania
                <span className="block text-primary">
                  experiences
                </span>
              </h2>

              <p className="text-xl leading-relaxed text-[#666]">
                Our Arusha day trips are designed for modern travelers seeking
                authentic experiences, private comfort, and meaningful moments
                across Tanzania.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                "Private transportation with trusted local guides",
                "Flexible schedules and personalized itineraries",
                "Perfect before or after safari adventures",
                "Comfortable luxury experiences for families and couples",
              ].map((item) => (
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
              Start Planning
            </span>

            <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight text-balance">
              Ready for Your
              <span className="block text-primary">
                Tanzania Day Adventure?
              </span>
            </h2>

            <p className="text-xl leading-relaxed text-[#666]">
              Book a private day trip from Arusha or let our travel experts
              design a custom Tanzania experience tailored to your style.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-7 text-base font-semibold bg-gradient-to-r from-primary-alt to-primary text-white shadow-xl shadow-primary/20"
              >
                <Link href="/contact">
                  Book Your Experience
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
                  Custom Request
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