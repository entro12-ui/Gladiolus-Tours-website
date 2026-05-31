import type { Metadata } from "next"

import { getPageUi } from "@/content/pages"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { BreadcrumbSchema, OrganizationSchema, StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getPageUi(locale).inquiry

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: "/inquiry",
    },
    openGraph: {
      title: page.metadata.openGraphTitle ?? page.metadata.title,
      description: page.metadata.openGraphDescription ?? page.metadata.description,
      url: absoluteUrl("/inquiry"),
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.heroTitle,
        },
      ],
    },
  }
}

export default async function InquiryPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = ui.inquiry

  const inquiryPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Gladiolus Tours Inquiry",
    description: page.metadata.description,
    url: absoluteUrl("/inquiry"),
    mainEntityOfPage: absoluteUrl("/inquiry"),
  }

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <StructuredData id="inquiry-page-schema" data={inquiryPageSchema} />
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/inquiry") },
        ]}
      />
      <Navigation />

      <section className="relative mt-20 bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl text-foreground mb-5 text-balance">{page.heroTitle}</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{page.heroDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border/60 bg-background/70 p-8 shadow-sm">
                <h2 className="text-2xl text-foreground mb-3">{page.receiveTitle}</h2>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  {page.receiveItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border/60 bg-background/70 p-8 shadow-sm">
                <h2 className="text-2xl text-foreground mb-3">{page.quickQuestionTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{page.quickQuestionDescription}</p>
              </div>
            </div>

            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
