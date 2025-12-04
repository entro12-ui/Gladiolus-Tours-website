import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BreadcrumbSchema, StructuredData, OrganizationSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us - Gladiolus Tours",
  description: "Get in touch with our safari experts. We're here to help plan your perfect African adventure.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Gladiolus Tours | Plan Your Luxury African Safari",
    description: "Speak with Gladiolus Tours' safari planners to create your bespoke African adventure.",
    url: absoluteUrl("/contact"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours safari consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Gladiolus Tours",
    description: "Connect with our safari experts to tailor your East African journey.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gladiolus Tours",
    description: "Get in touch with Gladiolus Tours' safari experts to plan your African adventure.",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      name: "Gladiolus Tours",
      url: absoluteUrl("/"),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+255 (789) 736-559",
          contactType: "sales",
          areaServed: "TZ",
          availableLanguage: ["en", "sw"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+255 (753) 858-059",
          contactType: "customer support",
          areaServed: "TZ",
          availableLanguage: ["en", "sw"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1 (401) 500-6480",
          contactType: "international",
          areaServed: "US",
          availableLanguage: ["en"],
        },
      ],
      email: "info@gladiolustours.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MV8C+MC, Usa River",
        addressLocality: "Arusha",
        addressCountry: "TZ",
      },
    },
    mainEntityOfPage: absoluteUrl("/contact"),
  }

  return (
    <div className="min-h-screen">
      <OrganizationSchema />
      <StructuredData id="contact-page-schema" data={contactPageSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Contact", url: absoluteUrl("/contact") },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-muted mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 text-balance">
            Let's Plan Your Adventure
          </h1>
          <p className="text-xl font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our safari experts are ready to help you create the perfect African experience
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-serif text-foreground mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-mono text-sm">
                          First Name *
                        </Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-mono text-sm">
                          Last Name *
                        </Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-mono text-sm">
                          Email *
                        </Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-mono text-sm">
                          Phone
                        </Label>
                        <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="destination" className="font-mono text-sm">
                        Interested Destination
                      </Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="serengeti">Serengeti National Park</SelectItem>
                          <SelectItem value="mara">Masai Mara Reserve</SelectItem>
                          <SelectItem value="ngorongoro">Ngorongoro Crater</SelectItem>
                          <SelectItem value="tarangire">Tarangire National Park</SelectItem>
                          <SelectItem value="kilimanjaro">Mount Kilimanjaro</SelectItem>
                          <SelectItem value="custom">Custom Itinerary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="travelers" className="font-mono text-sm">
                          Number of Travelers
                        </Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Person</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3-4">3-4 People</SelectItem>
                            <SelectItem value="5-8">5-8 People</SelectItem>
                            <SelectItem value="9+">9+ People</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date" className="font-mono text-sm">
                          Preferred Travel Date
                        </Label>
                        <Input id="date" type="date" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-mono text-sm">
                        Message *
                      </Label>
                      <Textarea id="message" placeholder="Tell us about your dream safari..." rows={6} required />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-base font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
                    >
                      Send Inquiry
                    </Button>

                    <p className="font-mono text-xs text-muted-foreground text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Phone</p>
                        <p className="font-mono text-sm text-muted-foreground">+255 (789) 736-559</p>
                        <p className="font-mono text-sm text-muted-foreground">+255 (753) 858-059</p>
                        <p className="font-mono text-sm text-muted-foreground">+1 (401) 500-6480</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Email</p>
                        <p className="font-mono text-sm text-muted-foreground">info@gladiolustours.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Office</p>
                        <p className="font-mono text-sm text-muted-foreground">MV8C+MC, Usa River</p>
                        <p className="font-mono text-sm text-muted-foreground">Arusha, Tanzania</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Hours</p>
                        <p className="font-mono text-sm text-muted-foreground">Open 24/7</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif mb-3">Emergency Contact</h3>
                  <p className="font-mono text-sm text-primary-foreground/90 mb-4 leading-relaxed">
                    24/7 support for travelers on safari
                  </p>
                  <p className="font-mono text-lg font-medium">+255 (789) 736-559</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-foreground mb-3">Why Book With Us?</h3>
                  <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Expert local guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Customized itineraries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Best price guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4 text-balance">Visit Our Office</h2>
            <p className="text-lg font-mono text-muted-foreground">
              Located in the heart of Arusha, Tanzania's safari capital
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Gladiolus Tours Location"
              src="https://www.google.com/maps?q=MV8C%2BMC+Usa+River&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
