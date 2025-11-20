import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
  const featuredDestinations = [
    {
      id: 1,
      title: "Serengeti National Park",
      location: "Tanzania",
      duration: "5 Days",
      price: "From $2,500",
      image: "/serengeti-safari-landscape-with-wildlife.jpg",
    },
    {
      id: 2,
      title: "Masai Mara Reserve",
      location: "Kenya",
      duration: "7 Days",
      price: "From $3,200",
      image: "/masai-mara-wildlife-safari-sunset.jpg",
    },
    {
      id: 3,
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
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/african-safari-sunset-with-acacia-trees-and-wildli.jpg"
            alt="African Safari"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 text-balance">
            Luxury African Safaris Crafted by Local Experts
          </h1>
          <p className="text-xl md:text-2xl font-mono text-white/90 mb-8 leading-relaxed text-pretty">
            Experience tailor-made safari adventures across Tanzania and Kenya with expert guides, premium lodges, and
            unforgettable wildlife encounters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg">
              <Link href="/destinations">
                Explore Safaris <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">Featured Destinations</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our handpicked selection of Africa's most spectacular safari destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
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
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href={`/destinations/${destination.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
              Why Choose Gladiolus Tours
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We create exceptional safari experiences that connect you with Africa's natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Expert Guides</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Our experienced guides bring decades of wildlife knowledge and passion for conservation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Premium Locations</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Access to exclusive safari areas and luxury lodges in the heart of the wilderness
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">Tailored Experiences</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Every safari is customized to match your interests, pace, and adventure style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Ready for Your African Adventure?</h2>
          <p className="text-xl font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Contact us today and let's start planning your dream safari experience
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
