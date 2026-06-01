"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { assetUrl } from "@/lib/assets"

const SLIDE_INTERVAL = 6000
const FADE_DURATION = 1800

const heroSlides = [
  { src: "/gallery/zebra-00.webp", alt: "Zebras in the Serengeti" },
  { src: "/gallery/This is Serengeti national park.jpeg", alt: "Serengeti National Park" },
  { src: "/gallery/elephant-00.webp", alt: "Elephants on safari" },
  { src: "/gallery/lion-00.webp", alt: "Lion in Tanzania" },
  { src: "/gallery/kili1.jpeg", alt: "Mount Kilimanjaro" },
  { src: "/gallery/Ngorongoro.jpeg", alt: "Ngorongoro Crater" },
  { src: "/gallery/sunset.webp", alt: "Tanzania sunset" },
  { src: "/gallery/chemka.jpeg", alt: "Chemka Hot Springs" },
]

export function HeroSlideshow({
  interval = SLIDE_INTERVAL,
}: {
  interval?: number
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroSlides.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [interval])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={assetUrl(slide.src)}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={index === 0}
            unoptimized
            quality={92}
            className={`object-cover object-center ${
              index === activeIndex ? "animate-hero-zoom" : ""
            }`}
          />
        </div>
      ))}

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 pointer-events-auto">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === activeIndex
                ? "w-10 bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                : "w-4 bg-white/60 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
