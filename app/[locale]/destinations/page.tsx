import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { getLocalizedDestinations } from "@/content/localized"
import { Link } from "@/i18n/routing"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).destinations

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: "/destinations",
    },
  }
}

export default async function DestinationsPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.destinations
  const destinations = getLocalizedDestinations(locale)

  return (
    <div className="min-h-screen bg-[#FAFBF8]">
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/destinations") },
        ]}
      />
      <Navigation />

      <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
        <Image
          src={assetUrl("/gallery/This is Serengeti national park.jpeg")}
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

      <section className="py-20 bg-[#F8FAF7]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group bg-white rounded-[28px] overflow-hidden border border-[#E2EAE0] hover:shadow-[0_24px_72px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={assetUrl(dest.image)}
                    alt={dest.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold tracking-widest uppercase text-white/80">
                      {dest.duration}
                    </p>
                    <h3 className="text-2xl font-serif">{dest.title}</h3>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-sm text-[#556458] mb-3">
                    <MapPin className="w-4 h-4 text-[#C2B44A]" />
                    {dest.location}
                  </div>
                  <p className="text-sm text-[#556458] leading-relaxed line-clamp-3">
                    {dest.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-[#2D4A30] bg-[#F4F7F2] px-3 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {dest.bestTime}
                    </span>
                    <span className="text-sm font-semibold text-[#2D4A30]">
                      {dest.price}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-6 rounded-full bg-gradient-to-r from-primary-alt to-primary"
                  >
                    <Link href={`/destinations/${dest.slug}`}>
                      {page.viewDetails}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
