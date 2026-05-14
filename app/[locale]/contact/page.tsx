import type { Metadata } from "next"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import {
  BreadcrumbSchema,
  StructuredData,
  OrganizationSchema,
} from "@/components/structured-data"

import { absoluteUrl } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/routing"

export const metadata: Metadata = {
  title:
    "Contact Gladiolus Tours | Plan Your Tanzania Safari",
  description:
    "Contact Gladiolus Tours in Arusha, Tanzania for luxury Serengeti safaris, Kilimanjaro trekking, Ngorongoro Crater tours, and Zanzibar holidays.",

  keywords: [
    "Contact Tanzania Safari Company",
    "Gladiolus Tours Contact",
    "Arusha Safari Experts",
    "Luxury Tanzania Safari Planner",
    "Serengeti Safari Contact",
    "Kilimanjaro Trekking Experts",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title:
      "Contact Gladiolus Tours | Luxury Tanzania Safari Experts",
    description:
      "Speak with our Arusha-based safari specialists to plan your custom Tanzania safari adventure.",
    url: absoluteUrl("/contact"),
    siteName: "Gladiolus Tours",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: absoluteUrl("/gallery/zebra-00.webp"),
        width: 1200,
        height: 630,
        alt: "Luxury Tanzania Safari Planning",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Gladiolus Tours",
    description:
      "Talk with our Tanzania safari specialists today.",
    images: [absoluteUrl("/gallery/zebra-00.webp")],
  },
}

export default function ContactPage() {

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    name: "Contact Gladiolus Tours",

    description:
      "Contact Gladiolus Tours safari specialists in Arusha, Tanzania.",

    url: absoluteUrl("/contact"),

    mainEntity: {
      "@type": "TravelAgency",

      name: "Gladiolus Tours",

      url: absoluteUrl("/"),

      logo: absoluteUrl("/logo-no-bg.png"),

      telephone: "+255789736559",

      email: "info@gladiolustours.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Usa River",
        addressLocality: "Arusha",
        addressCountry: "Tanzania",
      },

      areaServed: [
        "Serengeti National Park",
        "Ngorongoro Crater",
        "Tarangire National Park",
        "Mount Kilimanjaro",
        "Zanzibar",
      ],

      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+255789736559",
          contactType: "customer support",
          availableLanguage: ["English", "Swahili"],
        },
      ],
    },

    mainEntityOfPage: absoluteUrl("/contact"),
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1E1E]">

      <OrganizationSchema />

      <StructuredData
        id="contact-page-schema"
        data={contactPageSchema}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact") },
        ]}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#E8DDD0] bg-[#FAF8F5]/95 backdrop-blur-xl">
        <Navigation />
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24">

        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F3EC] via-[#FAF8F5] to-[#F3ECE3]" />

        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-[#E8DDD0] bg-white/80 px-5 py-3 shadow-sm backdrop-blur-xl">

              <span className="h-2 w-2 rounded-full bg-[#6F8A72]" />

              <span className="text-sm font-medium text-[#355C4D]">
                Tanzania Safari Experts
              </span>

            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-[1.05] text-[#1E1E1E]">

              Let’s Plan Your
              <span className="block text-[#C69252]">
                Tanzania Adventure
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed text-[#5B5B5B]">

              Speak with our Arusha-based safari specialists
              about Serengeti safaris, Kilimanjaro trekking,
              Ngorongoro Crater tours, and Zanzibar holidays.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/255789736559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C69252] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A46A3D] shadow-[0_12px_30px_rgba(198,146,82,0.28)]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>

              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD0] bg-white/80 px-8 py-4 text-base font-semibold text-[#1E1E1E] transition-all duration-300 hover:border-[#C69252] hover:bg-white"
              >
                Send Inquiry
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact-form"
        className="pb-24"
      >

        <div className="container mx-auto px-5 sm:px-8 lg:px-14">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* FORM */}
            <div className="lg:col-span-2">

              <div className="rounded-[36px] border border-[#E8DDD0] bg-white p-8 md:p-10 shadow-sm">

                <div className="mb-8">

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69252]">
                    Safari Inquiry
                  </p>

                  <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#1E1E1E]">
                    Start Planning Your Trip
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5B5B5B]">
                    Tell us your travel dates, safari interests,
                    and preferred experiences. Our team will
                    create a personalized Tanzania itinerary.
                  </p>

                </div>

                <ContactForm />

              </div>

            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              {/* CONTACT CARD */}
              <Card className="rounded-[32px] border-[#E8DDD0] bg-white shadow-sm">

                <CardContent className="p-8">

                  <h3 className="text-2xl font-serif text-[#1E1E1E]">
                    Contact Information
                  </h3>

                  <div className="mt-8 space-y-7">

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Phone className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          Phone
                        </p>

                        <p className="mt-1 text-[#555555]">
                          +255 (789) 736-559
                        </p>

                        <p className="text-[#555555]">
                          +1 (401) 500-6480
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Mail className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          Email
                        </p>

                        <p className="mt-1 text-[#555555] break-all">
                          info@gladiolustours.com
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <MapPin className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          Location
                        </p>

                        <p className="mt-1 text-[#555555]">
                          Usa River, Arusha
                        </p>

                        <p className="text-[#555555]">
                          Tanzania
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Clock className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          Availability
                        </p>

                        <p className="mt-1 text-[#555555]">
                          24/7 Safari Support
                        </p>
                      </div>

                    </div>

                  </div>

                </CardContent>

              </Card>

              {/* WHY US */}
              <Card className="rounded-[32px] border-[#E8DDD0] bg-[#355C4D] text-white shadow-sm">

                <CardContent className="p-8">

                  <h3 className="text-2xl font-serif">
                    Why Travel With Us?
                  </h3>

                  <ul className="mt-6 space-y-4 text-white/90">

                    {[
                      "Private custom safari itineraries",
                      "Professional local safari guides",
                      "Luxury lodges and camps",
                      "Fast response within 24 hours",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 text-[#F4D2A7]">
                          ✦
                        </span>

                        <span className="leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}

                  </ul>

                </CardContent>

              </Card>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="bg-[#F8F3EC] py-24">

        <div className="container mx-auto px-5 sm:px-8 lg:px-14">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69252]">
              Visit Us
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-serif text-[#1E1E1E]">
              Located In Arusha, Tanzania
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#5B5B5B]">
              Based near Tanzania’s top safari destinations
              including Serengeti, Ngorongoro, Tarangire,
              and Mount Kilimanjaro.
            </p>

          </div>

          <div className="overflow-hidden rounded-[36px] border border-[#E8DDD0] shadow-lg">

            <iframe
              title="Gladiolus Tours Location"
              src="https://www.google.com/maps?q=Usa+River+Arusha+Tanzania&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}