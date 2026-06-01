import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getPageUi } from "@/content/pages"
import { getBlogContent, getBlogPosts } from "@/content/blog"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getBlogContent(locale)

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: { canonical: "/blog" },
  }
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = getBlogContent(locale)
  const posts = getBlogPosts(locale)

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#1B2D1D]">
      <Navigation />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/blog") },
        ]}
      />

      <section className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.35em] text-[#B8A840] font-semibold">{page.eyebrow}</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif">{page.heroTitle}</h1>
        <p className="mt-6 text-lg text-[#556458] leading-relaxed">{page.heroDescription}</p>

        <div className="mt-14 space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white border border-[#E2EAE0] rounded-[24px] p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs uppercase tracking-wider text-[#B8A840] font-semibold">{post.category}</p>
              <h2 className="mt-2 text-2xl font-serif">{post.title}</h2>
              <p className="mt-3 text-[#556458] leading-relaxed">{post.excerpt}</p>
              <Button asChild variant="link" className="mt-4 px-0 text-[#2D4A30]">
                <Link href={post.href}>
                  {page.readMore}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
