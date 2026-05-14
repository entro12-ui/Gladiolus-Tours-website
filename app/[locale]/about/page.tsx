import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import {
  Star,
  Users,
  Globe,
  ShieldCheck,
  Leaf,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BreadcrumbSchema,
  StructuredData,
  OrganizationSchema,
} from "@/components/structured-data"

import { absoluteUrl } from "@/lib/seo"
import { assetUrl, hasAssetBase } from "@/lib/assets"

export const metadata: Metadata = {
  title:
    "About Gladiolus Tours | Luxury Tanzania Safari Experts Based in Arusha",
  description:
    "Learn about Gladiolus Tours, a trusted luxury Tanzania safari company based in Arusha. Meet our local safari experts and discover our mission, values, and personalized travel experiences across Serengeti, Ngorongoro, Kilimanjaro, and Zanzibar.",
  keywords: [
    "About Gladiolus Tours",
    "Tanzania Safari Company",
    "Luxury Tanzania Safaris",
    "Arusha Safari Experts",
    "Serengeti Safari Specialists",
    "Kilimanjaro Tour Experts",
    "Private Tanzania Tours",
    "Local Safari Guides Tanzania",
    "Safari Company Arusha",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gladiolus Tours | Trusted Tanzania Safari Experts",
    description:
      "Meet the local team behind Gladiolus Tours and discover our passion for luxury Tanzania safaris and unforgettable African adventures.",
    url: absoluteUrl("/about"),
    images: [
      {
        url: absoluteUrl("/gallery/zebra-00.webp"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Tanzania Safari Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gladiolus Tours",
    description:
      "Luxury Tanzania safari specialists creating unforgettable journeys across Serengeti, Zanzibar, and Kilimanjaro.",
    images: [absoluteUrl("/gallery/zebra-00.webp")],
  },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sunday Mtui",
      role: "Co-Founder & Safari Specialist",
      image: hasAssetBase
        ? assetUrl("/team/Sunday-Mtui.webp")
        : "/team/sunday-mtui.jpg",
      bio: "Over 20 years of experience guiding travelers through Tanzania’s iconic wildlife destinations and luxury safari experiences.",
    },
    {
      name: "Francois Martin",
      role: "Co-Founder & International Consultant",
      image: hasAssetBase
        ? assetUrl("/team/Francois-Martin.webp")
        : "/team/francois-martin.jpg",
      bio: "Focused on premium guest experiences, strategic safari planning, and personalized luxury travel services.",
    },
    {
      name: "Claire Matemba",
      role: "Operations Director",
      image: hasAssetBase
        ? assetUrl("/team/Claire-Matemba.webp")
        : "/team/Claire-Matemba.jpg",
      bio: "Ensuring every safari operates smoothly with exceptional customer care and professional coordination.",
    },
  ]

  const stats = [
    {
      value: "20+",
      label: "Years Safari Experience",
    },
    {
      value: "2,800+",
      label: "Happy Travelers",
    },
    {
      value: "95%",
      label: "Guest Satisfaction",
    },
    {
      value: "24/7",
      label: "Traveler Support",
    },
  ]

  const values = [
    {
      icon: Star,
      title: "Luxury Experiences",
      description:
        "Private safaris designed with premium lodges, personalized service, and unforgettable moments.",
    },
    {
      icon: Users,
      title: "Local Safari Experts",
      description:
        "Experienced Tanzania guides with deep wildlife, culture, and destination knowledge.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Service",
      description:
        "Transparent planning, reliable communication, and dedicated support before and during your safari.",
    },
    {
      icon: Leaf,
      title: "Responsible Tourism",
      description:
        "Supporting conservation, local communities, and sustainable safari experiences.",
    },
    {
      icon: Globe,
      title: "Global Travelers",
      description:
        "Welcoming guests from around the world for authentic East African adventures.",
    },
    {
      icon: Compass,
      title: "Tailor-Made Journeys",
      description:
        "Every itinerary is customized around your travel style, dates, and safari goals.",
    },
  ]

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Gladiolus Tours",
    description:
      "Luxury Tanzania safari company based in Arusha offering private safaris, Kilimanjaro trekking, and Zanzibar holidays.",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: "Gladiolus Tours",
      url: absoluteUrl("/"),
      foundingDate: "2010",
      areaServed: "Tanzania",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arusha",
        addressCountry: "TZ",
      },
      sameAs: [
        "https://facebook.com/GladiolusTours",
        "https://instagram.com/gladiolus_tours",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E]">
      <OrganizationSchema />

      <StructuredData id="about-page-schema" data={aboutPageSchema} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "About", url: absoluteUrl("/about") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden flex items-center justify-center mt-20">
        <Image
          src={assetUrl("/about-us/team-work.webp")}
          alt="Gladiolus Tours Tanzania safari team"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] backdrop-blur">
              About Gladiolus Tours
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight">
              Luxury Tanzania Safaris Designed By Local Experts
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
              Based in Arusha, Gladiolus Tours creates private Tanzania safari
              experiences across Serengeti, Ngorongoro Crater, Mount
              Kilimanjaro, Tarangire, and Zanzibar.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-8 py-6 text-white font-semibold"
              >
                <Link href="/contact">
                  Plan Your Safari
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="#our-story">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-y border-[#EFE4D8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#EFE4D8] bg-[#FAF8F5] p-8 text-center"
              >
                <h2 className="text-4xl font-serif text-[#C69252]">
                  {item.value}
                </h2>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#6B6B6B]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        className="py-24 bg-[#FAF8F5]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="uppercase tracking-[0.35em] text-sm text-[#C69252] font-semibold">
                Our Story
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
                Authentic Tanzania Safari Experiences
              </h2>

              <p className="mt-8 text-lg text-[#5A5A5A] leading-relaxed">
                Gladiolus Tours was founded with a simple vision — creating
                unforgettable Tanzania safaris led by passionate local experts
                who understand the beauty, wildlife, and culture of East Africa.
              </p>

              <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
                From luxury Serengeti safaris to Kilimanjaro trekking and
                Zanzibar beach holidays, every itinerary is designed around
                comfort, authenticity, and personalized service.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Private luxury safaris",
                  "Professional local safari guides",
                  "Tailor-made itineraries",
                  "24/7 guest support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#C69252]" />

                    <span className="text-[#4F4F4F]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[550px] rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={assetUrl("/about-us/team.webp")}
                alt="Luxury Tanzania safari planning team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.35em] text-sm text-[#C69252] font-semibold">
              Why Travelers Choose Us
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-serif">
              Built Around Service, Trust & Experience
            </h2>

            <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
              We combine local expertise, luxury safari planning, and genuine
              hospitality to create unforgettable Tanzania adventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="rounded-[32px] border border-[#EFE4D8] bg-[#FAF8F5] shadow-none hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#355C4D] text-white flex items-center justify-center mb-6">
                    <value.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-serif text-[#1E1E1E]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-[#5A5A5A] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-[#F8F3EC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.35em] text-sm text-[#C69252] font-semibold">
              Meet The Team
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-serif">
              The People Behind Your Safari
            </h2>

            <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
              Experienced safari professionals dedicated to creating seamless
              and memorable Tanzania travel experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-[36px] overflow-hidden border border-[#EFE4D8] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-[380px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <p className="uppercase tracking-[0.25em] text-xs text-[#C69252] font-semibold">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-3xl font-serif text-[#1E1E1E]">
                    {member.name}
                  </h3>

                  <p className="mt-5 text-[#5A5A5A] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#355C4D] via-[#486B5C] to-[#6F8A72] text-white text-center relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-serif">
            Start Planning Your Tanzania Safari
          </h2>

          <p className="mt-8 text-xl text-white/85 leading-relaxed">
            Speak with our Arusha-based safari specialists and receive a
            personalized Tanzania safari itinerary tailored to your travel
            style.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button
              asChild
              className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold"
            >
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/safaris">
                Explore Safaris
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}