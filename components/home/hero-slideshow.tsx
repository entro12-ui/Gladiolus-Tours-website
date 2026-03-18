"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

import { assetUrl } from "@/lib/assets"

const SLIDE_INTERVAL = 6000
const FADE_DURATION = 1600

export function HeroSlideshow({ interval = SLIDE_INTERVAL }: { interval?: number }) {
  const heroImages = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => {
        const suffix = String(index).padStart(2, "0")
        return assetUrl(`/hero/hero-${suffix}.webp`)
      }),
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length <= 1) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length)
    }, interval)

    return () => window.clearInterval(timer)
  }, [heroImages.length, interval])

  return (
    <div className="absolute inset-0 -z-10">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDuration: `${FADE_DURATION}ms` }}
        >
          <Image
            src={src}
            alt="Gladiolus Tours hero background"
            fill
            sizes="100vw"
            priority={index === 0}
            unoptimized
            className="hero-slide-image object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  )
}
