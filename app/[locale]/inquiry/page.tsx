import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { InquiryForm } from "@/components/inquiry-form"
import { BreadcrumbSchema, OrganizationSchema, StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Inquiry - Gladiolus Tours",
  description: "Tell us about your dream safari and our private concierge will design a tailor-made itinerary within 24 hours.",
  alternates: {
    canonical: "/inquiry",
  },
  openGraph: {
    title: "Design My Safari | Gladiolus Tours",
    description: "Share a few details and we’ll craft a tailor-made safari itinerary for you.",
    url: absoluteUrl("/inquiry"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours safari inquiry",
      },
    ],
  },
}

export default function InquiryPage() {
  const inquiryPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Gladiolus Tours Inquiry",
    description: "Lead capture inquiry form for tailor-made safari planning.",
    url: absoluteUrl("/inquiry"),
    mainEntityOfPage: absoluteUrl("/inquiry"),
  }

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <StructuredData id="inquiry-page-schema" data={inquiryPageSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Inquiry", url: absoluteUrl("/inquiry") },
        ]}
      />
      <Navigation />

      <section className="relative mt-20 bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl md:text-6xl text-foreground mb-5 text-balance">Design My Safari</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Private concierge planning. Share a few details and we’ll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border/60 bg-background/70 p-8 shadow-sm">
                <h2 className="text-2xl text-foreground mb-3">What you’ll receive</h2>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li>Personalized itinerary recommendations based on your travel style.</li>
                  <li>Best seasonal timing for wildlife moments (migration, calving, predator action).</li>
                  <li>Lodge and camp shortlist aligned with your comfort and budget.</li>
                  <li>Clear next steps and optional call scheduling.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border/60 bg-background/70 p-8 shadow-sm">
                <h2 className="text-2xl text-foreground mb-3">Prefer a quick question?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you’re not ready for planning details, you can still reach us via the Contact page for general
                  questions.
                </p>
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
