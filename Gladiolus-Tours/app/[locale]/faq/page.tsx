import type { Metadata } from "next"
import { Link } from "@/i18n/routing"
import { getPageUi } from "@/content/pages"
import { getFaqContent } from "@/content/faq"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BreadcrumbSchema, FAQSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const page = getFaqContent(locale)

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: page.metadata.openGraphTitle,
      description: page.metadata.openGraphDescription,
      url: absoluteUrl("/faq"),
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: page.metadata.schemaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.twitterTitle,
      description: page.metadata.twitterDescription,
      images: [absoluteUrl("/og-image.jpg")],
    },
  }
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params
  const ui = getPageUi(locale)
  const page = getFaqContent(locale)
  const faqList = page.categories.flatMap((category) => category.questions)

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: ui.common.homeBreadcrumb, url: absoluteUrl("/") },
          { name: page.pageLabel, url: absoluteUrl("/faq") },
        ]}
      />
      <FAQSchema
        url={absoluteUrl("/faq")}
        title={page.metadata.schemaTitle}
        description={page.metadata.schemaDescription}
        faqs={faqList}
      />
      <Navigation />

      <section className="relative py-20 bg-muted mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 text-balance">{page.heroTitle}</h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {page.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {page.categories.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-3xl font-serif text-foreground mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={`${categoryIndex}-${index}`}
                    value={`item-${categoryIndex}-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="font-mono text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-mono text-sm text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-serif mb-4 text-balance">{page.ctaTitle}</h2>
              <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
                {page.ctaDescription}
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/contact">{page.ctaButton}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
