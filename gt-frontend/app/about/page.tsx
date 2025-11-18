import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Globe, Shield } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Gladiolus Tours",
  description:
    "Learn about Gladiolus Tours, our mission, values, and the passionate team behind your African safari adventures.",
  openGraph: {
    title: "About Us - Gladiolus Tours",
    description: "Learn about our mission to create unforgettable African safari experiences",
  },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "David Kimani",
      role: "Founder & Lead Guide",
      image: "/placeholder.svg?height=400&width=400",
      bio: "20+ years of safari experience",
    },
    {
      name: "Sarah Mwangi",
      role: "Operations Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Expert in logistics and hospitality",
    },
    {
      name: "James Omondi",
      role: "Wildlife Expert",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Conservation biologist and naturalist",
    },
    {
      name: "Grace Njeri",
      role: "Customer Relations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Dedicated to exceptional service",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Wildlife",
      description:
        "We are deeply committed to showcasing Africa's incredible wildlife while promoting conservation and sustainable tourism practices.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and comfort are paramount. We maintain the highest standards in vehicle maintenance, guide training, and emergency preparedness.",
    },
    {
      icon: Globe,
      title: "Cultural Respect",
      description:
        "We celebrate and honor local communities, ensuring our tourism benefits the people and preserves authentic cultural experiences.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, from accommodation selection to personalized itineraries that exceed expectations.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Gladiolus Tours Team"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 text-balance">Our Story</h1>
          <p className="text-xl md:text-2xl font-mono text-white/90 leading-relaxed text-pretty">
            Born from a love of Africa's wilderness and a commitment to authentic experiences
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 text-balance">
                Creating Unforgettable Safari Experiences
              </h2>
              <div className="space-y-4 font-mono text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2010, Gladiolus Tours was born from a simple vision: to share the wonder of Africa's
                  wildlife with travelers from around the world while contributing to conservation efforts and local
                  communities.
                </p>
                <p>
                  Our founder, David Kimani, grew up in the shadow of Mount Kilimanjaro and spent his childhood
                  exploring the vast savannas of East Africa. His deep connection to the land and its creatures inspired
                  him to create a tour company that would offer authentic, responsible, and transformative safari
                  experiences.
                </p>
                <p>
                  Today, Gladiolus Tours is recognized as one of Tanzania's premier safari operators, known for our
                  expert guides, carefully curated itineraries, and unwavering commitment to sustainability. We've
                  helped thousands of travelers experience the magic of Africa while supporting wildlife conservation
                  and community development projects.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=600" alt="Safari landscape" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">Our Values</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-foreground mb-2">{value.title}</h3>
                      <p className="font-mono text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-4 rounded-lg overflow-hidden">
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

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-serif mb-2">14+</div>
              <div className="font-mono text-sm text-primary-foreground/80">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">5,000+</div>
              <div className="font-mono text-sm text-primary-foreground/80">Happy Travelers</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">50+</div>
              <div className="font-mono text-sm text-primary-foreground/80">Safari Routes</div>
            </div>
            <div>
              <div className="text-5xl font-serif mb-2">98%</div>
              <div className="font-mono text-sm text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
