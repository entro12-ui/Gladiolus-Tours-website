"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GreatMigrationClient() {
  useEffect(() => {
    import("@/lib/gtag").then(({ trackEvent }) => {
      trackEvent("page_view_migration", "engagement", "Great Migration Page")
    })
  }, [])

  return (
    <div className="bg-[#FAF8F5] text-[#3E2A1F] min-h-screen">

      <Navigation />

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="/gallery/zebra-00.webp"
          alt="Serengeti Great Migration Safari"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            Serengeti Great Migration Safari
          </h1>
          <p className="mt-6 text-lg">
            Witness dramatic river crossings, predator action, and millions of wildebeest
            on Tanzania’s most iconic safari experience.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#8C6239] px-8 py-3 rounded-full font-semibold hover:bg-[#7A5632] transition"
            >
              Request Migration Quote
            </Link>
          </div>
        </div>
      </section>

      {/* keep the rest of your JSX exactly the same */}

      <Footer />
    </div>
  )
}