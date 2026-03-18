import Image from "next/image"
import { ArrowRight, Compass, MapPin, Mountain } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl } from "@/lib/assets"

export type NotFoundCopy = {
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  suggestedHeading: string
  suggestedSubheading: string
  suggestionSafaris: string
  suggestionSafarisDesc: string
  suggestionTreks: string
  suggestionTreksDesc: string
  suggestionDestinations: string
  suggestionDestinationsDesc: string
  exploreLink: string
}

const suggestionCards = [
  {
    id: "safaris",
    titleKey: "suggestionSafaris" as const,
    descriptionKey: "suggestionSafarisDesc" as const,
    href: "/safaris",
    icon: Compass,
  },
  {
    id: "treks",
    titleKey: "suggestionTreks" as const,
    descriptionKey: "suggestionTreksDesc" as const,
    href: "/treks",
    icon: Mountain,
  },
  {
    id: "destinations",
    titleKey: "suggestionDestinations" as const,
    descriptionKey: "suggestionDestinationsDesc" as const,
    href: "/destinations",
    icon: MapPin,
  },
]

export function NotFoundView({ copy }: { copy: NotFoundCopy }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "404", url: absoluteUrl("/404") },
        ]}
      />
      <Navigation />

      <main className="relative isolate overflow-hidden pt-28 pb-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src={assetUrl("/gallery/skyline-00.webp")}
            alt="Tanzania skyline"
            fill
            unoptimized
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.35em] text-primary">
                404
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-balance">{copy.title}</h1>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{copy.description}</p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25"
                >
                  <Link href="/">{copy.ctaPrimary}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary/40 px-8 text-base font-semibold text-primary">
                  <Link href="/contact">{copy.ctaSecondary}</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[40px] border border-border/40 bg-card/70 p-8 backdrop-blur">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">{copy.suggestedHeading}</p>
                <p className="font-mono text-sm text-muted-foreground">{copy.suggestedSubheading}</p>
              </div>
              <div className="mt-6 grid gap-4">
                {suggestionCards.map(({ id, titleKey, descriptionKey, href, icon: Icon }) => (
                  <Card key={id} className="border-border/40 bg-background/80">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div>
                          <h3 className="text-lg font-serif">{copy[titleKey]}</h3>
                          <p className="font-mono text-sm text-muted-foreground">{copy[descriptionKey]}</p>
                        </div>
                        <Button asChild variant="ghost" className="px-0 text-primary hover:text-primary">
                          <Link href={href}>
                            {copy.exploreLink}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
