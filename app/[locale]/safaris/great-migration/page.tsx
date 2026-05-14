"use client"

useEffect(() => {
  import("@/lib/gtag").then(({ trackEvent }) => {
    trackEvent("page_view_migration", "engagement", "Great Migration Page")
  })
}, [])
import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Serengeti Great Migration Safari | Private Luxury Tanzania Tours",
  description:
    "Experience the Serengeti Great Migration with private guides, river-crossing positioning, and luxury tented camps. Book your Tanzania Great Migration safari today.",
}

export default function GreatMigrationPage() {
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

      {/* WHY BOOK WITH US */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">

          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Why Book Your Great Migration Safari With Gladiolus Tours?
          </h2>

          <ul className="space-y-4 text-[#5B4636]">
            <li>✓ Private 4x4 safari vehicles</li>
            <li>✓ Strategic river-crossing positioning</li>
            <li>✓ Luxury tented camps in Northern Serengeti</li>
            <li>✓ Professional wildlife safari guides</li>
            <li>✓ Fully customized itineraries</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#8C6239] via-[#A67C52] to-[#C69C6D] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-serif">
          Limited Peak Season Availability
        </h2>
        <p className="mt-4">
          Secure your Serengeti Great Migration safari dates early.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="bg-white text-[#8C6239] px-8 py-3 rounded-full font-semibold"
          >
            Plan My Migration Safari
          </Link>
        </div>
      </section>

      {/* TOUR PACKAGE STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Serengeti Great Migration Safari",
            "description":
              "Private luxury safari to witness the Great Migration in Serengeti National Park, Tanzania.",
            "touristType": "Wildlife Safari",
            "areaServed": {
              "@type": "Place",
              "name": "Serengeti National Park"
            }
          })
        }}
      />
{/* TOUR PACKAGE STRUCTURED DATA */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": "Serengeti Great Migration Safari",
      "description": "Private luxury safari to witness the Great Migration in Serengeti National Park, Tanzania.",
      "touristType": "Wildlife Safari",
      "areaServed": {
        "@type": "Place",
        "name": "Serengeti National Park"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "provider": {
        "@type": "TravelAgency",
        "name": "Gladiolus Tours",
        "url": "https://www.gladiolustours.com"
      }
    })
  }}
/>
      <Footer />
    </div>
  )
}