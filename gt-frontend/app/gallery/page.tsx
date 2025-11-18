"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=800&width=1200", alt: "Lion pride in Serengeti", category: "Wildlife" },
  { id: 2, src: "/placeholder.svg?height=800&width=1200", alt: "Elephant herd at sunset", category: "Wildlife" },
  { id: 3, src: "/placeholder.svg?height=800&width=1200", alt: "Hot air balloon safari", category: "Activities" },
  { id: 4, src: "/placeholder.svg?height=800&width=1200", alt: "Luxury tented camp", category: "Accommodation" },
  { id: 5, src: "/placeholder.svg?height=800&width=1200", alt: "Cheetah hunting", category: "Wildlife" },
  { id: 6, src: "/placeholder.svg?height=800&width=1200", alt: "Maasai warriors", category: "Culture" },
  { id: 7, src: "/placeholder.svg?height=800&width=1200", alt: "Ngorongoro Crater view", category: "Landscapes" },
  { id: 8, src: "/placeholder.svg?height=800&width=1200", alt: "Safari vehicle game drive", category: "Activities" },
  { id: 9, src: "/placeholder.svg?height=800&width=1200", alt: "Giraffe family", category: "Wildlife" },
  { id: 10, src: "/placeholder.svg?height=800&width=1200", alt: "Acacia trees at dawn", category: "Landscapes" },
  { id: 11, src: "/placeholder.svg?height=800&width=1200", alt: "Leopard in tree", category: "Wildlife" },
  { id: 12, src: "/placeholder.svg?height=800&width=1200", alt: "Sundowner drinks", category: "Activities" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null)

  const categories = ["All", "Wildlife", "Landscapes", "Activities", "Accommodation", "Culture"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Safari Gallery"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 text-balance">Safari Gallery</h1>
          <p className="text-xl font-mono text-white/90 leading-relaxed text-pretty">
            Explore breathtaking moments from our African safari adventures
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-primary hover:bg-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-mono text-sm">{image.alt}</p>
                    <p className="text-white/70 font-mono text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="font-mono text-muted-foreground">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage.src || "/placeholder.svg"}
              alt={lightboxImage.alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-mono text-lg">{lightboxImage.alt}</p>
              <p className="text-white/70 font-mono text-sm">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6 text-balance">Create Your Own Safari Memories</h2>
          <p className="text-lg font-mono mb-8 max-w-2xl mx-auto leading-relaxed text-primary-foreground/90">
            Join us on an unforgettable adventure and capture moments like these
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="/destinations">Explore Our Safaris</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
