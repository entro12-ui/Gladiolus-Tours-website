import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { getPageUi } from "@/content/pages"
import { getGalleryVideosContent } from "@/content/gallery-videos"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getGalleryVideosContent(locale)

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: { canonical: "/gallery/videos" },
  }
}

export default async function GalleryVideosPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = getGalleryVideosContent(locale)

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.galleryLabel, url: absoluteUrl("/gallery") },
          { name: page.pageLabel, url: absoluteUrl("/gallery/videos") },
        ]}
      />

      <section className="pt-32 pb-20 container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8A840] font-semibold">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif">{page.heroTitle}</h1>
          <p className="mt-6 text-lg text-[#556458] leading-relaxed">{page.heroDescription}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {page.videos.map((video) => (
            <article key={video.title} className="bg-white border rounded-[24px] overflow-hidden shadow-sm">
              <div className="relative aspect-video bg-gradient-to-br from-[#1B2D1D] to-[#2D4A30] flex items-center justify-center">
                <Play size={48} className="text-[#D8CC72] opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#B8A840] text-sm font-medium">
                  <Play size={16} />
                  {page.videoLabel}
                </div>
                <h2 className="mt-2 text-xl font-serif">{video.title}</h2>
                <p className="mt-2 text-sm text-[#556458]">{video.description}</p>
                <a
                  href={video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-[#2D4A30] hover:text-[#B8A840]"
                >
                  {page.watchLink}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/gallery">{page.backToGallery}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
