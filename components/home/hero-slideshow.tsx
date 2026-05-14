"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const SLIDE_INTERVAL = 6000
const FADE_DURATION = 1800

/**
 * ───────────────────────────────────────────────────────────────
 * HERO SLIDESHOW IMAGES
 * ───────────────────────────────────────────────────────────────
 * ⚠️ IMPORTANT: Match the EXACT file extension of your images
 *
 * Files location: /public/hero/
 *
 * If your files are .jpg → use .jpg below
 * If your files are .jpeg → use .jpeg below
 * If your files are .webp → use .webp below
 * ───────────────────────────────────────────────────────────────
 */
const heroSlides = [
  {
    src: "/hero/image-1.jpeg",
    alt: "Giraffe walking across the Tanzania savanna",
  },
  {
    src: "/hero/image-2.jpeg",
    alt: "Wildlife in Serengeti National Park",
  },
  {
    src: "/hero/image-3.jpeg",
    alt: "Tanzania landscape and safari views",
  },
  {
    src: "/hero/image-4.jpeg",
    alt: "Safari adventure in Tanzania",
  },
   {
    src: "/hero/image-5.jpeg",
    alt: "Safari adventure in Tanzania",
  },
   {
    src: "/hero/image-6.jpeg",
    alt: "Safari adventure in Tanzania",
  },
   {
    src: "/hero/image-7.jpeg",
    alt: "Safari adventure in Tanzania",
  },
   {
    src: "/hero/image-8.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-9.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-10.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-11.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-12.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-13.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-14.jpeg",
    alt: "Safari adventure in Tanzania",
  },
  {
    src: "/hero/image-15.jpeg",
    alt: "Safari adventure in Tanzania",
  },
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

      {/* ── SLIDES ── */}
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
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={index === 0}
            quality={92}
            className={`object-cover object-center ${
              index === activeIndex ? "animate-hero-zoom" : ""
            }`}
          />
        </div>
      ))}

      {/* ── SLIDE INDICATORS ── */}
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