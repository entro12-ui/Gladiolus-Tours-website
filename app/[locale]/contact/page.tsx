import type { Metadata } from "next"
import { getPageUi } from "@/content/pages"
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

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).contact

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/contact"),
      siteName: "Gladiolus Tours",
      type: "website",
      images: [
        {
          url: absoluteUrl("/gallery/zebra-00.webp"),
          width: 1200,
          height: 630,
          alt: page.formTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.twitterTitle ?? page.metadata.title,
      description: page.metadata.twitterDescription ?? page.metadata.description,
      images: [absoluteUrl("/gallery/zebra-00.webp")],
    },
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.contact

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    name: page.pageLabel,

    description: page.metadata.description,

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
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/contact") },
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
                {page.heroBadge}
              </span>

            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-[1.05] text-[#1E1E1E]">

              {page.heroTitle}
              <span className="block text-[#C69252]">
                {page.heroTitleAccent}
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-2xl leading-relaxed text-[#5B5B5B]">

              {page.heroDescription}

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="https://wa.me/255789736559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C69252] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A46A3D] shadow-[0_12px_30px_rgba(198,146,82,0.28)]"
              >
                <MessageCircle className="h-5 w-5" />
                {page.heroPrimary}
              </a>

              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD0] bg-white/80 px-8 py-4 text-base font-semibold text-[#1E1E1E] transition-all duration-300 hover:border-[#C69252] hover:bg-white"
              >
                {page.heroSecondary}
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
                    {page.formEyebrow}
                  </p>

                  <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#1E1E1E]">
                    {page.formTitle}
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5B5B5B]">
                    {page.formDescription}
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
                    {page.infoTitle}
                  </h3>

                  <div className="mt-8 space-y-7">

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Phone className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          {page.infoItems[0].label}
                        </p>

                        <p className="mt-1 text-[#555555]">
                          {page.infoItems[0].values[0]}
                        </p>

                        <p className="text-[#555555]">
                          {page.infoItems[0].values[1]}
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Mail className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          {page.infoItems[1].label}
                        </p>

                        <p className="mt-1 text-[#555555] break-all">
                          {page.infoItems[1].values[0]}
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <MapPin className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          {page.infoItems[2].label}
                        </p>

                        <p className="mt-1 text-[#555555]">
                          {page.infoItems[2].values[0]}
                        </p>

                        <p className="text-[#555555]">
                          {page.infoItems[2].values[1]}
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8F3EC]">
                        <Clock className="h-5 w-5 text-[#C69252]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-[#A46A3D]">
                          {page.infoItems[3].label}
                        </p>

                        <p className="mt-1 text-[#555555]">
                          {page.infoItems[3].values[0]}
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
                    {page.whyTitle}
                  </h3>

                  <ul className="mt-6 space-y-4 text-white/90">

                    {page.whyItems.map((item, index) => (
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
              {page.mapEyebrow}
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl font-serif text-[#1E1E1E]">
              {page.mapTitle}
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#5B5B5B]">
              {page.mapDescription}
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