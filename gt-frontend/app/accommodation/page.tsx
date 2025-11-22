import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Star, Wifi, Coffee } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BreadcrumbSchema } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Luxury Safari Accommodation - Gladiolus Tours",
  description:
    "Stay in handpicked luxury lodges, tented camps, and hotels across Africa's premier safari destinations.",
  alternates: {
    canonical: "/accommodation",
  },
  openGraph: {
    title: "Luxury Safari Accommodation | Gladiolus Tours",
    description: "Discover premium safari lodges, camps, and hotels curated by Gladiolus Tours.",
    url: absoluteUrl("/accommodation"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Luxury safari accommodation in East Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours Safari Accommodation",
    description: "Explore handpicked safari accommodation options across Tanzania and Kenya.",
    images: [absoluteUrl("/og-image.jpg")],
  },
}

const accommodations = [
  {
    id: 1,
    name: "Serengeti Luxury Lodge",
    location: "Central Serengeti, Tanzania",
    type: "Luxury Lodge",
    rating: 5,
    price: "$450/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Wifi", "Pool", "Restaurant", "Bar"],
    description:
      "Stunning lodge overlooking the endless Serengeti plains with panoramic views and exceptional service.",
  },
  {
    id: 2,
    name: "Mara River Camp",
    location: "Masai Mara, Kenya",
    type: "Tented Camp",
    rating: 5,
    price: "$380/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Wifi", "Restaurant", "River View", "Game Drives"],
    description: "Intimate tented camp on the banks of the Mara River, perfect for witnessing wildlife crossings.",
  },
  {
    id: 3,
    name: "Ngorongoro Crater Lodge",
    location: "Ngorongoro, Tanzania",
    type: "Luxury Lodge",
    rating: 5,
    price: "$520/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Wifi", "Spa", "Fine Dining", "Butler Service"],
    description: "Perched on the crater rim with breathtaking views and opulent Maasai-inspired decor.",
  },
  {
    id: 4,
    name: "Tarangire Safari Lodge",
    location: "Tarangire, Tanzania",
    type: "Safari Lodge",
    rating: 4,
    price: "$280/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Wifi", "Pool", "Restaurant", "Sunset Deck"],
    description: "Eco-friendly lodge nestled among ancient baobab trees with stunning views of the park.",
  },
  {
    id: 5,
    name: "Lake Manyara Camp",
    location: "Lake Manyara, Tanzania",
    type: "Tented Camp",
    rating: 4,
    price: "$220/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Restaurant", "Bar", "Campfire", "Nature Walks"],
    description: "Comfortable tented camp offering an authentic bush experience near the lake shore.",
  },
  {
    id: 6,
    name: "Kilimanjaro Base Hotel",
    location: "Moshi, Tanzania",
    type: "Hotel",
    rating: 4,
    price: "$150/night",
    image: "/placeholder.svg?height=600&width=800",
    amenities: ["Wifi", "Pool", "Gym", "Restaurant"],
    description: "Modern hotel perfect for pre and post-Kilimanjaro trek stays with mountain views.",
  },
]

export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: absoluteUrl("/") },
          { name: "Accommodation", url: absoluteUrl("/accommodation") },
        ]}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Luxury Safari Accommodation"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 text-balance">Luxury Safari Accommodation</h1>
          <p className="text-xl font-mono text-white/90 leading-relaxed text-pretty">
            Rest in comfort and style at our carefully selected lodges, camps, and hotels
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="font-mono text-sm text-muted-foreground">Showing {accommodations.length} properties</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="lodge">Luxury Lodge</SelectItem>
                  <SelectItem value="camp">Tented Camp</SelectItem>
                  <SelectItem value="hotel">Hotel</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="serengeti">Serengeti</SelectItem>
                  <SelectItem value="mara">Masai Mara</SelectItem>
                  <SelectItem value="ngorongoro">Ngorongoro</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="rating">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {accommodation.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{accommodation.location}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-2">{accommodation.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: accommodation.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {accommodation.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-serif text-primary">{accommodation.price}</div>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                    >
                      <Link href="/contact">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-foreground mb-4 text-balance">Choose Your Style</h2>
            <p className="text-lg font-mono text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From luxury lodges to authentic tented camps, find the perfect accommodation for your adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">Luxury Lodges</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Premium facilities with stunning views, fine dining, and exceptional service in the heart of nature.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">Tented Camps</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Authentic safari experience with comfortable canvas accommodations and close-to-nature immersion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">Hotels</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Modern amenities and comfortable rooms, perfect for pre and post-safari stays in gateway cities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
