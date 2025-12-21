import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Star, Users, TrendingUp, Smile, Leaf, Coffee } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbSchema, StructuredData, OrganizationSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"
import { assetUrl, hasAssetBase } from "@/lib/assets"

export const metadata: Metadata = {
  title: "About Us - Gladiolus Tours",
  description:
    "Learn about Gladiolus Tours, our mission, values, and the passionate team behind your African safari adventures.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gladiolus Tours | Trusted African Safari Experts",
    description: "Meet the Gladiolus Tours team delivering authentic African safari experiences across Tanzania.",
    url: absoluteUrl("/about"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours team on safari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gladiolus Tours",
    description: "Discover the mission, values, and experts behind Gladiolus Tours' luxury African safaris.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sunday Mtui",
      role: "Co-Founder",
      image: hasAssetBase ? assetUrl("/team/Sunday-Mtui.webp") : "/team/sunday-mtui.jpg",
      bio: "Visionary co-founder with decades of experience crafting bespoke safaris.",
    },
    {
      name: "Francois Martin",
      role: "Co-Founder",
      image: hasAssetBase ? assetUrl("/team/Francois-Martin.webp") : "/team/francois-martin.jpg",
      bio: "Co-founder focused on strategic partnerships and unique guest experiences.",
    },
    {
      name: "Claire Matemba",
      role: "Director",
      image: hasAssetBase ? assetUrl("/team/Claire-Matemba.webp") : "/team/Claire-Matemba.jpg",
      bio: "Director ensuring day-to-day operations deliver premium service.",
    },
  ]

  const impactStats = [
    { label: "Tours conducted annually", value: "50+" },
    { label: "Destinations covered", value: "5" },
    { label: "Guest satisfaction", value: "95%" },
  ]

  const values = [
    {
      icon: Star,
      title: "Excellence in Service",
      description:
        "World-class safari planning with obsessive attention to detail and personalized touches for every traveler.",
    },
    {
      icon: Users,
      title: "Expert Tour Guides",
      description:
        "Seasoned guides and on-the-ground hosts who share deep knowledge of Tanzania's wildlife, cultures, and landscapes.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "We iterate on every itinerary and partnership to raise the bar for responsible, guest-centric expeditions.",
    },
    {
      icon: Smile,
      title: "Customer Happiness",
      description:
        "From first call to farewell dinner, we prioritize ease, warmth, and memorable shared moments.",
    },
    {
      icon: Leaf,
      title: "Responsible Tourism",
      description:
        "Our journeys honor communities and ecosystems through conservation contributions and ethical partner sourcing.",
    },
    {
      icon: Coffee,
      title: "Time to Unwind",
      description:
        "Every itinerary balances thrill with restorative pauses—sunset picnics, bush brunches, and ocean breezes included.",
    },
  ]

  const partners = [
    {
      name: "SafariBookings",
      description: "Largest online marketplace for African safaris with trusted reviews and operators.",
      logo: assetUrl("/about-us/safari-booking.webp"),
      url: "https://www.safaribookings.com/",
    },
    {
      name: "SafariGo",
      description: "Premier platform connecting travelers with curated East African safari experiences.",
      logo: assetUrl("/about-us/safari-go.webp"),
      url: "https://safarigo.com",
    },
  ]

  const founder =
    teamMembers.find((member) => member.role.toLowerCase().includes("founder")) ?? teamMembers[0] ?? null

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Gladiolus Tours",
    description:
      "Learn about Gladiolus Tours, our mission, values, and the passionate team behind your African safari adventures.",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Organization",
      name: "Gladiolus Tours",
      description:
        "Premier safari tour operator specializing in tailor-made experiences across Tanzania.",
      foundingDate: "2010",
      founder: founder
        ? {
            "@type": "Person",
            name: founder.name,
            jobTitle: founder.role,
            description: founder.bio,
            image: absoluteUrl(founder.image ?? "/placeholder.svg"),
          }
        : undefined,
      employee: teamMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        image: absoluteUrl(member.image ?? "/placeholder.svg"),
      })),
      sameAs: [
        "https://facebook.com/GladiolusTours",
        "https://instagram.com/gladiolus_tours",
      ],
    },
    mainEntityOfPage: absoluteUrl("/about"),
  }

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <StructuredData id="about-page-schema" data={aboutPageSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "About", url: absoluteUrl("/about") },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={assetUrl("/about-us/team-work.webp")}
            alt="Gladiolus Tours operations team collaborating in Arusha"
            fill
            className="object-cover brightness-[0.55]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-1 text-xs font-mono uppercase tracking-[0.4em] text-white/90">
            Gladiolus Tours
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white text-balance">
            Transforming Connections, One Journey at a Time
          </h1>
          <p className="text-lg md:text-xl font-mono text-white/85 leading-relaxed">
            We design soulful Tanzania journeys that connect you to wild spaces, local culture, and the people you travel with.
          </p>
          <p className="text-base md:text-lg font-mono text-white/80">
            Think Kilimanjaro sunrises, crater lunches, and Zanzibar breezes—crafted to spark curiosity, reflection, and joy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
              <Link href="#our-values">Discover Our Values</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/70 text-white">
              <Link href="/contact">Plan a Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-mono uppercase tracking-[0.35em] text-primary">Our Commitment to Excellence</p>
                <h2 className="text-4xl md:text-5xl font-serif text-foreground text-balance">
                  Curating journeys that inspire, connect, and give back
                </h2>
              </div>
              <p className="font-mono text-base text-muted-foreground leading-relaxed">
                We believe in the transformative power of travel. Every Gladiolus itinerary is designed to spark wonder,
                champion responsible tourism, and celebrate Tanzania's diverse communities from Serengeti plains to
                Zanzibar shores.
              </p>
              <p className="font-mono text-base text-muted-foreground leading-relaxed">
                As proud members of SafariBookings and SafariGo, we uphold stringent service standards while uplifting
                local partners, guides, and conservation projects. Your safari dollars fuel meaningful impact.
              </p>
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
                <p className="text-lg font-serif text-foreground italic">
                  "Join us in exploring the beauty of our planet while creating meaningful connections with fellow travelers.
                  Every journey is an opportunity for personal growth, cultural exchange, and unforgettable moments."
                </p>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.3em] text-primary">— Gladiolus Tours Team</p>
              </div>
            </div>
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={assetUrl("/about-us/team.webp")}
                alt="Gladiolus Tours operations team planning bespoke journeys"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-mono uppercase tracking-[0.3em] text-white/80">
                On the ground in Tanzania
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="our-values" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
              Guiding Every Journey with Integrity
            </h2>
            <p className="text-lg font-mono text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These six pillars mirror the promises of our legacy site—balancing excellence, empathy, and sustainability across every safari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="border border-border/40 bg-background">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <value.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground">{value.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">Trusted by Global Marketplaces</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto">
              Our presence on respected safari platforms reinforces our commitment to transparency and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="border border-border/40 bg-card/80 backdrop-blur">
                <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={64}
                    className="h-12 w-auto"
                    unoptimized
                  />
                  <h3 className="text-2xl font-serif text-foreground">{partner.name}</h3>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">Meet Our Team</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate professionals dedicated to your safari experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-2xl overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">{member.name}</h3>
                <p className="font-mono text-sm text-primary mb-2">{member.role}</p>
                <p className="font-mono text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
