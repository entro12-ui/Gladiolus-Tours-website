"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { assetUrl } from "@/lib/assets"

export type GalleryImage = {
  id: number
  src: string
  alt: string
  category: string
  location: string
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const categories = useMemo(() => {
    const unique = Array.from(new Set(images.map((image) => image.category)))
    return ["All", ...unique]
  }, [images])

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") return images
    return images.filter((image) => image.category === selectedCategory)
  }, [images, selectedCategory])

  return (
    <>
      <section className="sticky top-20 z-30 border-y border-border/60 bg-background/80 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 py-6">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={isActive ? "default" : "outline"}
                  className={
                    isActive
                      ? "rounded-full bg-gradient-to-r from-primary-alt to-primary px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/20 ring-1 ring-primary/25 hover:from-primary-alt/90 hover:to-primary/90"
                      : "rounded-full border-primary/30 px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary hover:bg-primary/10"
                  }
                >
                  {category}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-mono text-muted-foreground">No images found for this category. Try another filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-foreground/5 shadow-lg shadow-black/10"
                  onClick={() => setLightboxImage(image)}
                >
                  <Image
                    src={assetUrl(image.src)}
                    alt={image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <p className="text-base font-serif text-white">{image.alt}</p>
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">{image.location}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
            aria-label="Close gallery lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-full w-full max-h-[90vh] max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-black/60 p-4">
            <Image
              src={assetUrl(lightboxImage.src)}
              alt={lightboxImage.alt}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-2xl font-serif text-white">{lightboxImage.alt}</p>
              <p className="text-sm font-mono uppercase tracking-[0.25em] text-white/70">{lightboxImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
