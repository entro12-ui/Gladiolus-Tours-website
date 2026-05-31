import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react"
import { getPageUi } from "@/content/pages"
import {
  getLocalizedZanzibar,
  getZanzibarExperience,
} from "@/content/localized"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return getLocalizedZanzibar("en").map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const experience = getZanzibarExperience(slug, locale)
  if (!experience) return { title: ui.zanzibar.detail.notFoundTitle }

  return {
    title: `${experience.title} | Gladiolus Tours`,
    description: experience.description,
    alternates: { canonical: `/zanzibar/${slug}` },
  }
}

export default async function ZanzibarExperiencePage({ params }: Props) {
  const { slug, locale } = await params
  const ui = getPageUi(locale)
  const page = ui.zanzibar
  const detail = page.detail
  const experience = getZanzibarExperience(slug, locale)

  if (!experience) notFound()

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/zanzibar") },
          { name: experience.title, url: absoluteUrl(`/zanzibar/${slug}`) },
        ]}
      />

      <section className="relative mt-20 h-[55vh] flex items-end overflow-hidden">
        <Image
          src={assetUrl(experience.image)}
          alt={experience.title}
          fill
          unoptimized
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-12 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D8CC72] mb-3">{detail.heroBadge}</p>
          <h1 className="text-4xl md:text-5xl font-serif">{experience.title}</h1>
          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2"><Clock size={16} /> {experience.duration}</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> {detail.locationText}</span>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-3xl font-serif mb-4">{ui.common.overview}</h2>
              <p className="text-lg text-[#556458] leading-relaxed">{experience.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">{ui.common.highlights}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {experience.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 bg-white border rounded-2xl">
                    <CheckCircle2 className="text-[#C2B44A] shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-4">{detail.howItWorksHeading}</h2>
              <div className="space-y-4">
                {experience.itinerary.map((step) => (
                  <div key={step.step} className="border-l-2 border-[#C2B44A] pl-5">
                    <p className="font-semibold">{step.step}</p>
                    <p className="text-[#556458] text-sm mt-1">{step.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="bg-white border rounded-[28px] p-8 h-fit shadow-sm">
            <p className="text-sm text-[#6B7B6D]">{detail.fromLabel}</p>
            <p className="text-3xl font-serif text-[#1B2D1D] mt-1">{experience.price}</p>
            <p className="text-sm text-[#556458] mt-4">{experience.highlight}</p>
            <ul className="mt-6 space-y-2 text-sm text-[#556458]">
              {experience.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={16} className="text-[#C2B44A] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-8 rounded-full">
              <Link href="/inquiry">
                {detail.bookButton}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full mt-3 rounded-full">
              <Link href="/zanzibar">{detail.allButton}</Link>
            </Button>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  )
}
