import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Gladiolus Tours",
  description: "Get in touch with our safari experts. We're here to help plan your perfect African adventure.",
  openGraph: {
    title: "Contact Us - Gladiolus Tours",
    description: "Contact our safari planning experts today",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
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
                        <p className="font-mono text-sm text-muted-foreground">+255 123 456 789</p>
                        <p className="font-mono text-sm text-muted-foreground">+255 987 654 321</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Email</p>
                        <p className="font-mono text-sm text-muted-foreground">info@gladiolustours.com</p>
                        <p className="font-mono text-sm text-muted-foreground">bookings@gladiolustours.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Office</p>
                        <p className="font-mono text-sm text-muted-foreground">123 Safari Road</p>
                        <p className="font-mono text-sm text-muted-foreground">Arusha, Tanzania</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono text-sm text-foreground font-medium">Hours</p>
                        <p className="font-mono text-sm text-muted-foreground">Mon-Fri: 8:00 AM - 6:00 PM</p>
                        <p className="font-mono text-sm text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                        <p className="font-mono text-sm text-muted-foreground">Sun: Closed</p>
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
                  <p className="font-mono text-lg font-medium">+255 700 000 000</p>
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
          <div className="relative h-96 bg-muted-foreground/20 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-mono text-muted-foreground">Map integration placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
