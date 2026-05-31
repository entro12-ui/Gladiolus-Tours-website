import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { getLocalizedTreks } from "@/content/localized"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { Mountain, Calendar, ArrowRight } from "lucide-react"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).treks

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: "/treks",
    },
  }
}

export default async function TreksOverviewPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.treks
  const kiliRoutes = getLocalizedTreks(locale).filter(
    (t) =>
      t.slug.includes("kilimanjaro") ||
      t.slug.includes("umbwe") ||
      t.slug.includes("shira")
  )

  return (
    <div className="min-h-screen bg-[#FAFBF8]">
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/treks") },
        ]}
      />
      <Navigation />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
        <Image
          src={assetUrl("/gallery/kili1.jpeg")}
          alt={page.heroImageAlt}
          fill
          unoptimized
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-16 text-white">
          <span className="inline-block px-4 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-widest uppercase mb-4">
            {page.heroBadge}
          </span>
          <h1 className="text-5xl md:text-6xl font-serif max-w-4xl">
            {page.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed">
            {page.heroDescription}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl font-serif text-[#1B2D1D]">
            {page.introTitle}
          </h2>
          <p className="mt-6 text-lg text-[#556458] leading-relaxed">
            {page.introDescription}
          </p>
        </div>
      </section>

      {/* ROUTE CARDS */}
      <section className="py-20 bg-[#F8FAF7]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kiliRoutes.map((route) => (
              <div
                key={route.id}
                className="group bg-white rounded-[28px] overflow-hidden border border-[#E2EAE0] hover:shadow-[0_24px_72px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={assetUrl(route.image)}
                    alt={route.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/80">
                      {route.duration}
                    </p>
                    <h3 className="text-2xl font-serif">{route.title}</h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-sm text-[#556458] leading-relaxed">
                    {route.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#2D4A30]">
                    <span className="flex items-center gap-1 bg-[#F4F7F2] px-3 py-1 rounded-full">
                      <Mountain className="w-3 h-3" />
                      {route.elevation}
                    </span>
                    <span className="flex items-center gap-1 bg-[#F4F7F2] px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {route.duration}
                    </span>
                    <span className="flex items-center gap-1 bg-[#F4F7F2] px-3 py-1 rounded-full">
                      {route.difficulty}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    {route.priceFrom && (
                      <span className="text-sm font-semibold text-[#1B2D1D]">
                        {route.priceFrom}
                      </span>
                    )}
                    <Link
                      href={`/treks/${route.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D4A30] hover:text-[#B8A840] transition-colors"
                    >
                      {page.viewRoute}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-serif text-[#1B2D1D]">
            {page.comparisonTitle}
          </h2>
          <p className="mt-6 text-lg text-[#556458] leading-relaxed">
            {page.comparisonDescription}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] px-8 py-6 text-white font-semibold hover:from-[#B0A040] hover:to-[#8E9A35]"
            >
              <Link href="/contact">{page.comparisonPrimary}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 border-[#D0DBCC] text-[#1B2D1D] hover:bg-[#F4F7F2]"
            >
              <Link href="/treks/mount-meru-trek">{page.comparisonSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}