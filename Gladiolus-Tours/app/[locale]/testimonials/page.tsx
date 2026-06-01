import type { Metadata } from "next"
import { Star } from "lucide-react"
import { Link } from "@/i18n/routing"
import { getPageUi } from "@/content/pages"
import { getTestimonialsContent } from "@/content/testimonials"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getTestimonialsContent(locale)

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: { canonical: "/testimonials" },
    openGraph: {
      title: page.metadata.openGraphTitle,
      description: page.metadata.openGraphDescription,
      url: absoluteUrl("/testimonials"),
    },
  }
}

function SourceBadge({
  source,
  labels,
}: {
  source: "guest" | "tripadvisor" | "google"
  labels: { guest: string; tripadvisor: string; google: string }
}) {
  const label =
    source === "tripadvisor"
      ? labels.tripadvisor
      : source === "google"
        ? labels.google
        : labels.guest

  const colors =
    source === "tripadvisor"
      ? "bg-[#00AF87]/12 text-[#007A5E]"
      : source === "google"
        ? "bg-[#4285F4]/12 text-[#1A5FB4]"
        : "bg-[#B8A840]/15 text-[#7A6E28]"

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${colors}`}>
      {label}
    </span>
  )
}

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = getTestimonialsContent(locale)

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/testimonials") },
        ]}
      />

      <section className="relative mt-20 py-24 bg-gradient-to-br from-[#2D4A30] via-[#3A5A3E] to-[#4A6B4E] text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 bg-[url('/gallery/safariM.jpeg')] bg-cover bg-center"
        />
        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em]">
            {page.heroBadge}
          </span>
          <h1 className="mt-8 font-serif text-4xl md:text-6xl leading-tight">{page.heroTitle}</h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">{page.heroDescription}</p>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-[#E2EAE0]">
        <div className="container mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {page.stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-[#F8FAF7] border border-[#E2EAE0]">
                <p className="text-3xl font-serif text-[#B8A840]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#556458]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-14 max-w-6xl">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
              {page.sectionEyebrow}
            </span>
            <h2 className="font-serif mt-4 text-3xl md:text-4xl text-[#1B2D1D]">{page.sectionTitle}</h2>
            <p className="mt-5 max-w-3xl mx-auto text-[#556458] leading-relaxed">{page.sectionSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.reviews.map((review, index) => (
              <article
                key={index}
                className="bg-white border border-[#E2EAE0] rounded-[28px] p-8 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#D8B43A] text-[#D8B43A]" />
                    ))}
                  </div>
                  <SourceBadge source={review.source} labels={page.sourceLabels} />
                </div>

                <p className="text-[15px] text-[#4A5A4C] leading-[1.9] flex-1">
                  &ldquo;{review.review}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-[#E2EAE0]">
                  <p className="font-semibold text-[#1B2D1D]">{review.name}</p>
                  <p className="text-sm text-[#7C8B61] mt-1">{review.country}</p>
                  <p className="text-xs text-[#B8A840] font-medium mt-2">{review.trip}</p>
                  {review.date ? (
                    <p className="text-xs text-[#9AA89C] mt-1">{review.date}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-14 text-center text-[#556458]">{page.trustBadge}</p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F1EB]">
        <div className="container mx-auto px-5 sm:px-8 lg:px-14 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B2D1D]">{page.ctaTitle}</h2>
          <p className="mt-5 text-[#556458] leading-relaxed">{page.ctaDescription}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-[#2D4A30] hover:bg-[#B8A840] px-8 py-6">
              <Link href="/inquiry">{page.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-[#D0DBCC]">
              <Link href="/faq">{page.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
