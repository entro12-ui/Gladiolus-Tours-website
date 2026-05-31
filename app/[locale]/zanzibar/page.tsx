import type { Metadata } from "next"
import Image from "next/image"
import { getPageUi } from "@/content/pages"
import { getLocalizedZanzibar } from "@/content/localized"
import { ArrowRight, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"
import { Button } from "@/components/ui/button"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).zanzibar

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: { canonical: "/zanzibar" },
  }
}

export default async function ZanzibarPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.zanzibar
  const zanzibarExperiences = getLocalizedZanzibar(locale)

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/zanzibar") },
        ]}
      />

      <section className="relative mt-20 h-[55vh] flex items-end overflow-hidden">
        <Image
          src={assetUrl("/gallery/sunset.webp")}
          alt={page.heroImageAlt}
          fill
          unoptimized
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-12 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D8CC72] mb-3">{page.heroBadge}</p>
          <h1 className="text-4xl md:text-5xl font-serif max-w-3xl">{page.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-white/90 leading-relaxed">
            {page.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-serif">{page.introTitle}</h2>
          <p className="mt-4 text-[#556458] leading-relaxed">
            {page.introDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {zanzibarExperiences.map((experience) => (
            <Link
              key={experience.slug}
              href={`/zanzibar/${experience.slug}`}
              className="group flex flex-col bg-white rounded-[28px] overflow-hidden border border-[#E2EAE0] hover:shadow-[0_24px_72px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1"
            >
              <span className="relative block h-56 overflow-hidden">
                <Image
                  src={assetUrl(experience.image)}
                  alt={experience.title}
                  width={800}
                  height={560}
                  unoptimized
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-white block">
                  <span className="text-xs uppercase tracking-widest text-white/80 block">{experience.duration}</span>
                  <span className="text-xl font-serif mt-1 block">{experience.title}</span>
                </span>
              </span>
              <span className="p-6 block">
                <span className="block text-sm text-[#556458] leading-relaxed">{experience.description}</span>
                <span className="mt-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#2D4A30]">{experience.price}</span>
                  <span className="inline-flex items-center gap-1 text-[#B8A840] font-medium group-hover:gap-2 transition-all">
                    {page.viewDetails} <ArrowRight className="w-4 h-4" />
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="rounded-full px-8">
            <Link href="/destinations/zanzibar-island-escape">
              {page.packagesButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-[#E2EAE0]">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: MapPin, label: page.infoCards[0].title, desc: page.infoCards[0].text },
            { icon: Clock, label: page.infoCards[1].title, desc: page.infoCards[1].text },
            { icon: ArrowRight, label: page.infoCards[2].title, desc: page.infoCards[2].text },
          ].map((item) => (
            <div key={item.label} className="p-6">
              <item.icon className="w-8 h-8 text-[#B8A840] mx-auto mb-4" />
              <h3 className="font-semibold text-[#1B2D1D]">{item.label}</h3>
              <p className="mt-2 text-sm text-[#556458]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
