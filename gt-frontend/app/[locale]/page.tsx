import type { Metadata } from "next"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema, OrganizationSchema } from "@/components/structured-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Luxury African Safari Tours & Tailor-Made Travel Packages",
  description:
    "Plan an unforgettable African safari with Gladiolus Tours. Discover luxury safari packages, expert guides, and tailor-made itineraries across Tanzania and Kenya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gladiolus Tours | Luxury African Safari Packages",
    description:
      "Experience bespoke African safaris with award-winning guides, luxury lodges, and carefully curated itineraries across East Africa.",
    url: absoluteUrl(),
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Luxury African Safari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours | Luxury African Safari Packages",
    description:
      "Book tailor-made luxury safaris with Gladiolus Tours. Premium accommodations, expert guides, and unforgettable wildlife encounters.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function HomePage() {
  const t = useTranslations()

  const featuredDestinations = [
    {
      id: 1,
      slug: "serengeti-national-park",
      title: "Serengeti National Park",
      location: "Tanzania",
      duration: "5 Days",
      price: "From $2,500",
      image: "/serengeti-safari-landscape-with-wildlife.jpg",
    },
    {
      id: 2,
      slug: "masai-mara-reserve",
      title: "Masai Mara Reserve",
      location: "Kenya",
      duration: "7 Days",
      price: "From $3,200",
      image: "/masai-mara-wildlife-safari-sunset.jpg",
    },
    {
      id: 3,
      slug: "ngorongoro-crater",
      title: "Ngorongoro Crater",
      location: "Tanzania",
      duration: "4 Days",
      price: "From $2,000",
      image: "/ngorongoro-crater-landscape-elephants.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: absoluteUrl("/"),
          },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-safari-sunset-with-acacia-trees-and-wildli.jpg"
            alt="African Safari"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 font-mono text-sm uppercase tracking-[0.4em] text-white/80 backdrop-blur-md">
            {t("home.heroBadge")}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-2 text-balance">
            {t("home.heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl font-mono text-white/85 leading-relaxed text-pretty">
            {t("home.heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-lg font-semibold tracking-wide text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5 hover:from-primary-alt/90 hover:to-primary/90"
            >
              <Link href="/destinations">
                {t("home.exploreSafaris")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full bg-white/15 backdrop-blur-xl border-white/70 text-white hover:bg-white/25 text-lg"
            >
              <Link href="/contact">{t("home.planYourTrip")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Safari Circuits */}
      <section className="py-24 bg-[#0d1b1e] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 font-mono text-xs tracking-[0.35em] uppercase text-white/80">
              {t("home.circuitsBadge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 text-balance">
              {t("home.circuitsTitle")}
            </h2>
            <p className="text-lg font-mono text-white/75 max-w-2xl mx-auto leading-relaxed">
              {t("home.circuitsSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <CardContent className="relative p-6 space-y-4">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">
                  {t("home.circuitNorthernLabel")}
                </p>
                <h3 className="text-2xl font-serif text-white mb-1">
                  {t("home.circuitNorthernTitle")}
                </h3>
                <p className="text-sm font-mono text-white/75 leading-relaxed">
                  {t("home.circuitNorthernDesc")}
                </p>
                <div className="mt-4 space-y-1 text-xs font-mono text-white/70">
                  <p>{t("home.circuitDuration", { value: "8–10" })}</p>
                  <p>{t("home.circuitRouteNorthern")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent pointer-events-none" />
              <CardContent className="relative p-6 space-y-4">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">
                  {t("home.circuitMigrationLabel")}
                </p>
                <h3 className="text-2xl font-serif text-white mb-1">
                  {t("home.circuitMigrationTitle")}
                </h3>
                <p className="text-sm font-mono text-white/75 leading-relaxed">
                  {t("home.circuitMigrationDesc")}
                </p>
                <div className="mt-4 space-y-1 text-xs font-mono text-white/70">
                  <p>{t("home.circuitDuration", { value: "7–9" })}</p>
                  <p>{t("home.circuitRouteMigration")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-transparent pointer-events-none" />
              <CardContent className="relative p-6 space-y-4">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">
                  {t("home.circuitKiliLabel")}
                </p>
                <h3 className="text-2xl font-serif text-white mb-1">
                  {t("home.circuitKiliTitle")}
                </h3>
                <p className="text-sm font-mono text-white/75 leading-relaxed">
                  {t("home.circuitKiliDesc")}
                </p>
                <div className="mt-4 space-y-1 text-xs font-mono text-white/70">
                  <p>{t("home.circuitDuration", { value: "10–12" })}</p>
                  <p>{t("home.circuitRouteKili")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safari Packages by Travel Style */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-2 text-balance">
              {t("home.packagesTitle")}
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("home.packagesSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-border/40 bg-white/80 backdrop-blur rounded-3xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{t("home.packageFamilyTitle")}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {t("home.packageFamilyDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/40 bg-white/80 backdrop-blur rounded-3xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{t("home.packageHoneymoonTitle")}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {t("home.packageHoneymoonDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/40 bg-white/80 backdrop-blur rounded-3xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{t("home.packagePhotoTitle")}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {t("home.packagePhotoDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/40 bg-white/80 backdrop-blur rounded-3xl">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-foreground">{t("home.packagePrivateTitle")}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {t("home.packagePrivateDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/40 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
              {t("home.featuredDestinations")}
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("home.featuredDestinationsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card
                key={destination.id}
                className="overflow-hidden group border border-border/40 bg-white/70 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 rounded-3xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-muted-foreground/80">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-3">{destination.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="text-lg font-serif text-primary">{destination.price}</div>
                  </div>
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                  >
                    <Link href={`/destinations/${destination.slug}`}>
                      {t("home.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/50 px-8 py-3 text-primary hover:bg-primary/10 hover:text-primary"
            >
              <Link href="/destinations">{t("home.viewAllDestinations")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
              {t("home.whyChooseUs")}
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("home.whyChooseUsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl border border-border/40 bg-white/70 backdrop-blur-xl shadow-sm shadow-primary/10">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">{t("home.expertGuides")}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {t("home.expertGuidesDesc")}
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-border/40 bg-white/70 backdrop-blur-xl shadow-sm shadow-primary/10">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-secondary/30">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">{t("home.premiumLocations")}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {t("home.premiumLocationsDesc")}
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl border border-border/40 bg-white/70 backdrop-blur-xl shadow-sm shadow-primary/10">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent/30">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">{t("home.tailoredExperiences")}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {t("home.tailoredExperiencesDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative overflow-hidden rounded-4xl border border-border/40 bg-gradient-to-r from-primary to-primary-alt px-6 py-16 shadow-xl shadow-primary/25">
            <div className="absolute inset-0 opacity-30 mix-blend-screen bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.45),transparent_45%)]" />
            <div className="relative space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">
                {t("home.readyForAdventure")}
              </h2>
              <p className="text-xl font-mono max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
                {t("home.readyForAdventureDesc")}
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white/90 px-8 py-3 text-lg font-semibold text-primary shadow-lg shadow-white/40 transition hover:bg-white"
              >
                <Link href="/contact">
                  {t("home.getStarted")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
