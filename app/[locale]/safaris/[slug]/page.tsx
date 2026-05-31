import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import { MapPin, Calendar, CheckCircle2, ArrowRight } from "lucide-react"
import { getPageUi } from "@/content/pages"
import { getLocalizedSafaris, getSafariBySlug } from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  return getLocalizedSafaris("en").map((pkg) => ({ slug: pkg.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const pkg = getSafariBySlug(slug, locale)
  if (!pkg) return { title: ui.safaris.detail.notFoundTitle }
  return {
    title: `${pkg.title} | Gladiolus Tours`,
    description: pkg.description,
    alternates: { canonical: `/safaris/${pkg.slug}` },
  }
}

export default async function SafariDetailPage({ params }: Props) {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const page = ui.safaris
  const detail = page.detail
  const pkg = getSafariBySlug(slug, locale)
  if (!pkg) notFound()

  return (
    <div className="bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/safaris") },
          { name: pkg.title, url: absoluteUrl(`/safaris/${pkg.slug}`) },
        ]}
      />

      <section className="relative mt-20 h-[65vh] flex items-end overflow-hidden">
        <Image src={assetUrl(pkg.image)} alt={pkg.title} fill unoptimized className="object-cover brightness-75" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-12 text-white">
          <h1 className="text-4xl md:text-6xl font-serif">{pkg.title}</h1>
          <div className="mt-4 flex gap-6 text-sm font-medium">
            <span className="flex items-center gap-2"><MapPin size={16}/> {pkg.region}</span>
            <span className="flex items-center gap-2"><Calendar size={16}/> {pkg.duration}</span>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">{ui.common.overview}</h2>
              <p className="text-lg text-[#556458] leading-relaxed">{pkg.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-6">{ui.common.highlights}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 p-4 bg-white border rounded-2xl">
                    <CheckCircle2 className="text-[#C2B44A]" size={20} />
                    <span className="text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {pkg.itinerary.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif mb-6">{detail.itineraryHeading}</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((item) => (
                    <div key={item.title} className="p-6 bg-white border rounded-3xl">
                      <p className="text-xs font-bold text-[#C2B44A] uppercase tracking-widest">{detail.dayLabel} {item.day}</p>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="mt-2 text-[#556458]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="h-fit sticky top-28 p-8 bg-white border rounded-[40px] shadow-sm text-center">
            <p className="text-sm uppercase tracking-widest text-[#B8A840] font-bold">{detail.priceLabel}</p>
            <p className="text-3xl font-serif mt-2">{pkg.price}</p>
            <Button asChild className="w-full mt-8 rounded-full bg-[#2D4A30] hover:bg-[#B8A840] py-6">
              <Link href="/contact">{detail.inquireNow} <ArrowRight className="ml-2" size={18}/></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
