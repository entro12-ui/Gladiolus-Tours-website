import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
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
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).about

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    keywords: page.metadata.keywords,
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/about"),
      images: [
        {
          url: absoluteUrl("/gallery/zebra-00.webp"),
          width: 1200,
          height: 630,
          alt: page.heroImageAlt,
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

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.about
  const teamMembers = [
    {
      ...page.teamMembers[0],
      image: assetUrl("/about-us/team.webp"),
    },
    {
      ...page.teamMembers[1],
      image: assetUrl("/about-us/safari-go.webp"),
    },
    {
      ...page.teamMembers[2],
      image: assetUrl("/about-us/safari-booking.webp"),
    },
  ]

  const stats = page.stats

  const values = [
    {
      icon: Star,
      ...page.values[0],
    },
    {
      icon: Users,
      ...page.values[1],
    },
    {
      icon: ShieldCheck,
      ...page.values[2],
    },
    {
      icon: Leaf,
      ...page.values[3],
    },
    {
      icon: Globe,
      ...page.values[4],
    },
    {
      icon: Compass,
      ...page.values[5],
    },
  ]

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.pageLabel,
    description: page.metadata.description,
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
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/about") },
        ]}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden flex items-center justify-center mt-20">
        <Image
          src={assetUrl("/about-us/team-work.webp")}
          alt={page.heroImageAlt}
          fill
          priority
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] backdrop-blur">
              {page.heroBadge}
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-serif leading-tight">
              {page.heroTitle}
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-white/85 leading-relaxed max-w-3xl mx-auto">
              {page.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Button
                asChild
                className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-8 py-6 text-white font-semibold"
              >
                <Link href="/contact">
                  {page.heroPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white/20"
              >
                <Link href="#our-story">{page.heroSecondary}</Link>
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
                {page.storyEyebrow}
              </span>

              <h2 className="mt-5 text-4xl md:text-6xl font-serif leading-tight">
                {page.storyTitle}
              </h2>

              <p className="mt-8 text-lg text-[#5A5A5A] leading-relaxed">
                {page.storyParagraphs[0]}
              </p>

              <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
                {page.storyParagraphs[1]}
              </p>

              <div className="mt-8 space-y-4">
                {page.storyChecklist.map((item, i) => (
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
                alt={page.storyImageAlt}
                fill
                unoptimized
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
              {page.valuesEyebrow}
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-serif">
              {page.valuesTitle}
            </h2>

            <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
              {page.valuesDescription}
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
                    {value.text}
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
              {page.teamEyebrow}
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-serif">
              {page.teamTitle}
            </h2>

            <p className="mt-6 text-lg text-[#5A5A5A] leading-relaxed">
              {page.teamDescription}
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
                    unoptimized
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
            {page.ctaTitle}
          </h2>

          <p className="mt-8 text-xl text-white/85 leading-relaxed">
            {page.ctaDescription}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Button
              asChild
              className="rounded-full bg-[#C69252] hover:bg-[#A46A3D] px-10 py-6 text-white font-semibold"
            >
              <Link href="/contact">
                {page.ctaPrimary}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Link href="/safaris">
                {page.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}