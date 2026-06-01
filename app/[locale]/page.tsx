import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { getHomeContent } from "@/content/home"
import { getPageUi } from "@/content/pages"
import { assetUrl } from "@/lib/assets"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  OrganizationSchema,
  BreadcrumbSchema
} from "@/components/structured-data"
import { HeroSlideshow } from "@/components/home/hero-slideshow"
import { absoluteUrl } from "@/lib/seo"
import { FaqSection } from "@/components/sections/faq-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ArrowRight } from "lucide-react"

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params
  const meta = getHomeContent(locale).metadata

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url: absoluteUrl(),
      siteName: "Gladiolus Tours",
      locale: meta.openGraphLocale,
      type: "website",
      images: [
        {
          url: absoluteUrl("/gallery/zebra.jpeg"),
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: [absoluteUrl("/gallery/zebra.jpeg")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "travel",
    metadataBase: new URL("https://www.gladiolustours.com"),
  }
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const c = getHomeContent(locale)
  const ui = getPageUi(locale)

  return (
    <div className="bg-[#FAFBF8] text-[#243526] min-h-screen overflow-hidden font-sans">
      <OrganizationSchema />
<BreadcrumbSchema items={[{ name: c.breadcrumbHome, url: absoluteUrl("/") }]} />
      {/* ── HEADER ── */}
      <div className="sticky top-0 z-50 bg-[#F4F7F2]/95 backdrop-blur-2xl border-b border-[#D0DBCC]/60">
        <Navigation />
      </div>

      {/* ══════════════════════════════════════════════════════════
    HERO — Light, Airy, Split Layout · Image Fully Visible
══════════════════════════════════════════════════════════ */}
<section className="relative isolate overflow-hidden bg-white">

  {/* Subtle ambient glows for premium feel */}
  <div
    aria-hidden
    className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] bg-[#D8CC72]/10 blur-[140px] rounded-full"
  />
  <div
    aria-hidden
    className="pointer-events-none absolute -bottom-32 left-1/3 w-[400px] h-[400px] bg-[#9CCB9A]/10 blur-[120px] rounded-full"
  />

  <div className="relative container mx-auto px-5 sm:px-8 lg:px-14">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-20">

      {/* ─────────────────────────────────────────────────
          LEFT: TEXT CONTENT (white background, dark text)
      ───────────────────────────────────────────────── */}
      <div className="lg:col-span-6 xl:col-span-7 relative z-10">

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full bg-[#F4F7F2] border border-[#D0DBCC] px-5 py-2.5 animate-fade-in-up">
          <span
            className="w-2 h-2 bg-[#C2B44A] rounded-full animate-pulse"
            aria-hidden
          />
          <span className="text-[11px] md:text-[12px] font-semibold tracking-[0.18em] uppercase text-[#2D4A30]">
            {c.hero.badge}
          </span>
        </div>

        {/* Headline — dark text on white */}
        <h1
          className="mt-7 font-serif font-medium leading-[1.05] tracking-[-0.025em] text-[#1B2D1D] animate-fade-in-up delay-100"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)" }}
        >
          {c.hero.title}
<span className="block mt-1.5 bg-gradient-to-r from-[#B8A840] via-[#A8B545] to-[#8E9A35] bg-clip-text text-transparent">
{c.hero.titleHighlight}
</span>
        </h1>

        {/* Description — dark gray on white, no overlay needed */}
        <p className="mt-7 text-[16px] md:text-[18px] text-[#4A5A4C] leading-[1.85] font-light max-w-2xl animate-fade-in-up delay-200">
          {c.hero.description.split(c.hero.descriptionBold)[0]}
          <strong className="font-semibold text-[#1B2D1D]">{c.hero.descriptionBold}</strong>
          {c.hero.description.split(c.hero.descriptionBold)[1]}
        </p>

        {/* Trust signals row */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up delay-200">
          {/* Star rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#D8B43A]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] font-semibold text-[#1B2D1D]">{c.hero.rating}</span>
            <span className="text-[12px] text-[#6B7B6D]">· {c.hero.guests}</span>
          </div>

          <div className="h-4 w-px bg-[#D0DBCC]" aria-hidden />

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#2D4A30]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[12px] font-medium text-[#3A4B3C]">{c.hero.experience}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap gap-4 animate-fade-in-up delay-300">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C2B44A] via-[#B8A840] to-[#A8B545] hover:from-[#B0A040] hover:to-[#8E9A35] px-7 py-3.5 text-white text-sm md:text-[15px] font-semibold tracking-[0.02em] transition-all duration-400 hover:-translate-y-0.5 shadow-[0_12px_32px_rgba(184,168,64,0.30)] hover:shadow-[0_18px_48px_rgba(184,168,64,0.42)]"
          >
            {c.hero.planAdventure}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <a
            href="https://wa.me/255789736559"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-white border border-[#D0DBCC] hover:border-[#C2B44A] px-7 py-3.5 text-[#1B2D1D] text-sm md:text-[15px] font-medium tracking-[0.02em] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >
            <svg
              className="w-5 h-5 text-[#25D366] flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
            </svg>
            {c.hero.whatsappQuote}
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up delay-400">
          {c.hero.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#F8FAF7] border border-[#E2EAE0] rounded-2xl px-3 py-4 text-center hover:border-[#C2B44A]/40 hover:bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-400"
            >
              <div className="text-[#1B2D1D] font-bold font-serif text-lg md:text-xl leading-tight">
                {stat.value}
              </div>
              <div className="text-[#6B7B6D] text-[10px] md:text-[11px] mt-1 tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ─────────────────────────────────────────────────
          RIGHT: HERO IMAGE (crisp, fully visible, no overlay)
      ───────────────────────────────────────────────── */}
      <div className="lg:col-span-6 xl:col-span-5 relative animate-fade-in delay-200">

        {/* Image container with elegant rounded corners */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(28,43,30,0.20)]">

          {/* The slideshow renders here — fully crisp, NO overlay */}
          <HeroSlideshow />

          {/* Subtle inner border for premium feel */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/40 pointer-events-none"
          />

          {/* Floating "Verified Local Experts" badge — bottom-left of image */}
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-white/80 flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#C2B44A] to-[#A8B545] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7C8B61] font-semibold">
                  {c.hero.trustedExperts}
                </p>
                <p className="text-[13px] font-semibold text-[#1B2D1D] leading-tight mt-0.5 truncate">
                  {c.hero.trustedSubtext}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Floating decorative card — top-right of image (desktop only) */}
        <div className="hidden xl:block absolute -top-6 -right-6 z-20 animate-fade-in delay-500">
          <div className="bg-white rounded-2xl px-5 py-4 shadow-[0_16px_40px_rgba(28,43,30,0.12)] border border-[#E2EAE0] max-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-[#D8B43A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[11px] font-bold text-[#1B2D1D]">4.9</span>
            </div>
            <p className="text-[11px] text-[#4A5A4C] leading-relaxed font-light">
              <em>&ldquo;Best safari company in Tanzania!&rdquo;</em>
            </p>
            <p className="text-[10px] text-[#7C8B61] mt-1.5 font-medium">
              — Verified Tripadvisor Review
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-bounce opacity-60">
    <span className="text-[#6B7B6D] text-[10px] tracking-[0.25em] uppercase font-semibold">
      {c.hero.scroll}
    </span>
    <svg
      className="w-5 h-5 text-[#6B7B6D]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</section>

      {/* ══════════════════════════════════════════════════════════
          INTRODUCTION
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[360px] h-[360px] bg-[#D8CC72]/8 blur-[100px] rounded-full pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 w-[280px] h-[280px] bg-[#9CCB9A]/8 blur-[80px] rounded-full pointer-events-none"
        />

        <div className="container relative mx-auto px-5 sm:px-8 lg:px-14 max-w-5xl text-center">
          <div className="w-14 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
          <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
            {c.intro.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-[#1B2D1D] leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            {c.intro.title}
            <br className="hidden md:block" /> {c.intro.titleLine2}
          </h2>

          <p className="mt-7 text-[16px] md:text-[18px] leading-[1.95] text-[#556458] font-light max-w-3xl mx-auto">
            {c.intro.description}
          </p>

          {/* Budget tiers visual indicator */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            {c.intro.tiers.map((t) => (
              <div
                key={t.tier}
                className="flex items-center gap-3 bg-[#F4F7F2] border border-[#E2EAE0] rounded-2xl px-5 py-3"
              >
                <span className={`w-3 h-3 rounded-full ${t.color} flex-shrink-0`} aria-hidden />
                <span className="text-[13px] font-semibold text-[#1B2D1D]">{t.tier}</span>
                <span className="text-[12px] text-[#6B7B6D]">· {t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    {/* ══════════════════════════════════════════════════════════
     SAFARI PACKAGES — Updated with Short Itinerary + Expandable
══════════════════════════════════════════════════════════ */}
<section className="py-28 bg-white relative overflow-hidden">
  <div
    aria-hidden
    className="absolute right-0 top-0 w-[420px] h-[420px] bg-[#B8A840]/5 blur-[100px] rounded-full pointer-events-none"
  />

  <div className="container relative mx-auto px-5 sm:px-8 lg:px-14">

    <div className="text-center mb-16">
      <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
      <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
        {c.safariPackages.eyebrow}
      </span>
      <h2 className="font-serif mt-5 text-[#1B2D1D] leading-[1.1] tracking-[-0.025em]"
        style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
      >
        {c.safariPackages.title}
      </h2>
      <p className="mt-5 max-w-2xl mx-auto text-[15px] md:text-[17px] text-[#556458] leading-[1.9] font-light">
        {c.safariPackages.subtitle}
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {c.safariPackages.packages.map((pkg, index) => (
        <div key={index} className="group bg-white rounded-[28px] overflow-hidden border border-[#E2EAE0]/70 hover:shadow-[0_24px_72px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">

          {/* Image */}
          <div className="relative h-64 overflow-hidden flex-shrink-0">
            <Image
              src={assetUrl(pkg.image)}
              alt={pkg.title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D0C05A] to-[#A8B545] text-white px-4 py-1.5 rounded-full text-[10px] tracking-[0.22em] font-semibold shadow-lg">
              {pkg.badge}
            </div>

            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#2D4A30] px-4 py-1.5 rounded-full text-sm font-semibold shadow">
              {pkg.priceFrom}
            </div>
          </div>

          {/* Body */}
          <div className="p-7 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] tracking-[0.22em] text-[#94872E] font-semibold">
                {pkg.duration}
              </span>
              <span className="text-[11px] text-[#6B7B6D] uppercase">
                Min {pkg.minPax} pax
              </span>
            </div>

            <h3 className="text-[1.45rem] font-serif text-[#1B2D1D] leading-snug">
              {pkg.title}
            </h3>

            <p className="mt-3 text-[14px] text-[#556458] leading-relaxed flex-1">
              {pkg.description}
            </p>

            {/* Short Itinerary Preview */}
            <div className="mt-6 text-sm">
              <p className="font-medium text-[#2D4A30] mb-2">{c.safariPackages.sampleItinerary}</p>
              <ul className="text-[#556458] text-[13px] space-y-1">
                {pkg.shortItinerary.map((day, i) => (
                  <li key={i}>• {day}</li>
                ))}
              </ul>
            </div>

            {/* Expandable Full Itinerary */}
            <details className="mt-6 group/details">
              <summary className="cursor-pointer rounded-full bg-[#2D4A30] text-white px-6 py-3 inline-flex items-center justify-center gap-2 text-[13px] font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#C2B44A] hover:to-[#A8B545] transition-all duration-300 list-none">
                {c.safariPackages.viewFullItinerary}
                <svg className="w-4 h-4 group-open/details:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="mt-5 space-y-4 text-[14px] text-[#4A5A4C] border-l-2 border-[#C2B44A] pl-5">
                {pkg.fullItinerary.map((item, i) => (
                  <div key={i}>
                    <strong>{item.day}:</strong> {item.activity}
                  </div>
                ))}
              </div>
            </details>

            <div className="mt-8">
              <Link
                href={pkg.link}
                className="block text-center rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] py-3.5 text-white font-semibold text-sm tracking-wider hover:brightness-110 transition"
              >
                {c.safariPackages.bookSafari}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View all CTA */}
    <div className="text-center mt-16">
      <Link
        href="/safaris"
        className="inline-flex items-center gap-2 text-[#2D4A30] font-semibold text-[15px] border-b-2 border-[#C2B44A]/50 hover:border-[#C2B44A] pb-0.5 transition-colors duration-300"
      >
        {c.safariPackages.viewAll}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>
{/* ─────────────────────────────────────────────
   KILIMANJARO & MERU TREKS
───────────────────────────────────────────── */}
<section className="py-28 bg-[#F8FAF7] relative overflow-hidden">
  <div className="container mx-auto px-5 sm:px-8 lg:px-14">

    <div className="text-center mb-16">
      <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
        {c.treks.eyebrow}
      </span>
      <h2 className="font-serif mt-5 text-[#1B2D1D]"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
      >
        {c.treks.title}
      </h2>
      <p className="mt-5 max-w-2xl mx-auto text-[#556458] leading-[1.9] font-light">
        {c.treks.subtitle}
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {c.treks.routes.map((route, index) => (
        <div
          key={index}
          className="group bg-white rounded-[28px] overflow-hidden border border-[#E2EAE0] hover:shadow-[0_24px_72px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
        >
          <Link href={route.link} className="block flex flex-col flex-1">
            <span className="relative block h-64 overflow-hidden">
              <Image
                src={assetUrl(route.image)}
                alt={route.title}
                width={800}
                height={640}
                unoptimized
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <span className="absolute top-4 left-4 bg-[#2D4A30] text-white text-[10px] px-3 py-1 rounded-full tracking-wider">
                {route.highlight}
              </span>
              <span className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded-full text-[11px] font-semibold text-[#1B2D1D]">
                {route.price}
              </span>
            </span>

            <span className="p-7 flex flex-col flex-1 block">
              <span className="flex justify-between mb-3">
                <span className="text-[11px] tracking-[0.2em] text-[#94872E] font-semibold">
                  {route.duration}
                </span>
                <span className="text-[11px] text-[#6B7B6D] uppercase">
                  {c.treks.guidedTrek}
                </span>
              </span>

              <span className="block font-serif text-[1.3rem] text-[#1B2D1D]">
                {route.title}
              </span>

              <span className="mt-3 block text-[14px] text-[#556458] leading-[1.8] flex-1">
                {route.description}
              </span>
            </span>
          </Link>

          <div className="mt-auto px-7 pb-7 flex gap-3">
            <Link
              href={route.link}
              className="flex-1 text-center bg-[#2D4A30] text-white py-2.5 rounded-full text-[13px] font-medium group-hover:bg-gradient-to-r group-hover:from-[#C2B44A] group-hover:to-[#A8B545] transition-all duration-400"
            >
              {c.treks.viewRoute}
            </Link>
            <a
              href="https://wa.me/255789736559"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-[#D0DBCC] py-2.5 rounded-full text-[13px] font-medium hover:border-[#C2B44A]"
            >
              {c.treks.quickQuote}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* ══════════════════════════════════════════════════════════
          FOUNDERS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#F8FAF7]">
        <div className="container mx-auto px-5 sm:px-8 lg:px-14 max-w-5xl">

          <div className="text-center mb-16">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-5" />
            <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
              {c.founders.eyebrow}
            </span>
            <h2 className="font-serif mt-4 text-[#1B2D1D] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {c.founders.title}
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-[#4A5A4C] leading-[1.85] font-light text-[15px]">
              {c.founders.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {c.founders.people.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-[26px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_64px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-72">
                  <Image
                    src={assetUrl(founder.image)}
                    alt={`${founder.name} — ${founder.role}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[#0C140E]/30 to-transparent"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-[1.4rem] font-serif text-[#1B2D1D]">{founder.name}</h3>
                  <p className="text-[#C2B44A] font-medium text-[13px] mt-1">{founder.role}</p>
                  <p className="mt-4 text-[14px] text-[#4A5A4C] leading-[1.85] font-light">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXPERIENCE HIGHLIGHTS — Refreshed for all-budget
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#C2B44A]/5 blur-[100px] rounded-full pointer-events-none"
        />

        <div className="container relative mx-auto px-5 sm:px-8 lg:px-14">
          <div className="text-center mb-16">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
            <span className="uppercase tracking-[0.4em] text-[#B8A840] text-[11px] font-semibold">
              {c.highlights.eyebrow}
            </span>
            <h2 className="font-serif mt-5 text-[#1B2D1D] leading-[1.1] tracking-[-0.025em]"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
            >
              {c.highlights.title}
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-[15px] md:text-[17px] text-[#556458] leading-[1.9] font-light">
              {c.highlights.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.highlights.items.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-[#F8FAF7] to-white rounded-[26px] p-7 border border-[#E2EAE0]/80 hover:border-[#C2B44A]/30 hover:shadow-[0_20px_56px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(194,180,74,0.07),transparent_40%)] pointer-events-none"
                />

                <div className="relative">
                  <div className="text-3xl mb-5" role="img" aria-label={item.title}>
                    {item.icon}
                  </div>
                  <h3 className="text-[1.1rem] font-semibold text-[#1B2D1D] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-[#5A6A5C] leading-[1.85] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* ══════════════════════════════════════════════════════════
          TRUSTED PARTNERS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAF7] border-y border-[#E2EAE0]/60 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,180,74,0.06),transparent_30%)] pointer-events-none"
        />

        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 text-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-5" />
          <p className="uppercase tracking-[0.4em] text-[11px] text-[#B8A840] font-semibold">
            {c.partners.eyebrow}
          </p>
          <h2 className="font-serif mt-4 text-[#1B2D1D] leading-snug"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
          >
            {c.partners.title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[#556458] leading-[1.85] text-[14px] md:text-[15px] font-light">
            {c.partners.subtitle}
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "/partners/safaribookings.jpeg",
              "/partners/safarigo.png",
              "/partners/tato.png",
              "/partners/tripadvisor.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-white border border-[#E2EAE0]/80 rounded-[24px] p-7 hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(194,180,74,0.07),transparent_35%)] pointer-events-none"
                />
                <Image
                  src={logo}
                  alt={c.partners.alt}
                  width={160}
                  height={60}
                  className="relative mx-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection content={c.testimonials} />


      {/* ══════════════════════════════════════════════════════════
          GREAT MIGRATION CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#EEF3EB] via-[#E8EDE4] to-[#D8E2D4]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] bg-[url('/gallery/zebra.jpeg')] bg-cover bg-center pointer-events-none"
        />

        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-3xl text-center">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-6" />
          <span className="uppercase tracking-[0.4em] text-[#94872E] text-[11px] font-semibold">
            {c.migration.eyebrow}
          </span>
          <h2 className="font-serif mt-5 text-[#1B2D1D] leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
          >
            {c.migration.title}
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] text-[#4A5A4C] leading-[1.9] font-light max-w-xl mx-auto">
            {c.migration.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/safaris/great-migration-safari"
              className="rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] px-8 py-3.5 text-white text-[14px] font-semibold tracking-wide hover:from-[#A09838] hover:to-[#8E9A35] transition-all duration-400 hover:-translate-y-0.5 shadow-[0_12px_40px_rgba(168,181,69,0.28)]"
            >
              {c.migration.explore}
            </Link>
            <a
              href="https://wa.me/255789736559"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D0DBCC] bg-white/85 backdrop-blur-2xl px-8 py-3.5 text-[#1B2D1D] text-[14px] font-medium tracking-wide hover:border-[#B8A840] hover:bg-white transition-all duration-400 hover:-translate-y-0.5"
            >
              {c.migration.whatsapp}
            </a>
          </div>
          <p className="mt-5 text-[12px] text-[#7A8A7C] tracking-wide">
            {c.migration.season}
          </p>
        </div>
      </section>

      <FaqSection
        content={c.faq}
        viewAllLabel={ui.common.viewAllFaqs}
        viewAllHref="/faq"
      />

      {/* ══════════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-[#F7F5EF] via-[#F3F1EA] to-[#ECE8DE] text-center relative overflow-hidden border-t border-[#E4DED2]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(194,180,74,0.09),transparent_35%)] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,181,69,0.07),transparent_35%)] pointer-events-none"
        />

        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-2xl">
          <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#B8A840] to-transparent mx-auto mb-8" />
          <h2 className="font-serif leading-tight text-[#1B2D1D]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
          >
            {c.finalCta.title}
          </h2>
          <p className="mt-5 text-[15px] md:text-[17px] text-[#4A5A4C] leading-[1.9] font-light">
            {c.finalCta.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] px-8 py-3.5 text-white text-[14px] font-semibold tracking-wide hover:from-[#A09838] hover:to-[#8E9A35] transition-all duration-400 hover:-translate-y-0.5 shadow-[0_12px_40px_rgba(168,181,69,0.25)]"
            >
              {c.finalCta.primary}
            </Link>
            <a
              href="https://wa.me/255789736559"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#D0DBCC] bg-white/90 backdrop-blur-2xl px-8 py-3.5 text-[#1B2D1D] text-[14px] font-medium tracking-wide hover:border-[#B8A840] hover:bg-white transition-all duration-400 hover:-translate-y-0.5"
            >
              {c.finalCta.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEO INTERNAL LINKS
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 w-[360px] h-[360px] bg-[#C2B44A]/5 blur-[80px] rounded-full pointer-events-none"
        />
        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-4xl text-center">
          <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#C2B44A] to-transparent mx-auto mb-7" />
          <h2 className="font-serif text-[#1B2D1D] leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
          >
            {c.seoLinks.title}
          </h2>
          <p className="mt-5 text-[14px] md:text-[15px] text-[#4A5A4C] leading-[1.95] font-light max-w-3xl mx-auto">
            {c.seoLinks.beforeSerengeti}{" "}
            <Link href="/destinations/serengeti-national-park" className="text-[#B8A840] underline underline-offset-4 decoration-[#B8A840]/40 hover:text-[#2D4A30] hover:decoration-[#2D4A30]/50 transition-colors duration-300 font-medium">Serengeti National Park</Link>{", "}
            <Link href="/destinations/ngorongoro-crater" className="text-[#B8A840] underline underline-offset-4 decoration-[#B8A840]/40 hover:text-[#2D4A30] hover:decoration-[#2D4A30]/50 transition-colors duration-300 font-medium">Ngorongoro Crater</Link>{", "}
            <Link href="/treks" className="text-[#B8A840] underline underline-offset-4 decoration-[#B8A840]/40 hover:text-[#2D4A30] hover:decoration-[#2D4A30]/50 transition-colors duration-300 font-medium">Mount Kilimanjaro</Link>{", "}
            <Link href="/destinations/zanzibar-island-escape" className="text-[#B8A840] underline underline-offset-4 decoration-[#B8A840]/40 hover:text-[#2D4A30] hover:decoration-[#2D4A30]/50 transition-colors duration-300 font-medium">Zanzibar Island</Link>{c.seoLinks.beforeTarangire}
            <Link href="/destinations/tarangire-national-park" className="text-[#B8A840] underline underline-offset-4 decoration-[#B8A840]/40 hover:text-[#2D4A30] hover:decoration-[#2D4A30]/50 transition-colors duration-300 font-medium">Tarangire National Park</Link>.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GEO REINFORCEMENT
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F6F8F3] relative overflow-hidden border-t border-[#E2EAE0]/60">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,180,74,0.05),transparent_35%)] pointer-events-none"
        />
        <div className="relative container mx-auto px-5 sm:px-8 lg:px-14 max-w-3xl text-center">
          <h2 className="font-serif text-[#1B2D1D] leading-tight text-[1.4rem] md:text-[1.7rem]">
            {c.geo.title}
          </h2>
          <p className="mt-5 text-[14px] md:text-[15px] text-[#4A5A4C] leading-[1.9] font-light max-w-2xl mx-auto">
            {c.geo.description}
          </p>
        </div>
      </section>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/97 backdrop-blur-2xl border-t border-[#D0DBCC]/60 py-3 px-5 flex justify-between items-center z-50 md:hidden shadow-[0_-6px_24px_rgba(0,0,0,0.05)]">
        <span className="text-[12px] font-medium text-[#1B2D1D] tracking-wide">
          {c.mobileCta.label}
        </span>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-[#C2B44A] to-[#A8B545] hover:from-[#A09838] hover:to-[#8E9A35] px-5 py-2.5 rounded-full text-[12px] font-semibold text-white transition-all duration-300 tracking-wide shadow-md"
        >
          {c.mobileCta.button}
        </Link>
      </div>

      {/* ── STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Gladiolus Tours",
            url: absoluteUrl(),
            logo: absoluteUrl("/logo.png"),
            image: [
              absoluteUrl("/gallery/zebra-00.webp"),
              absoluteUrl("/gallery/kili1.jpeg"),
            ],
            description:
              "Gladiolus Tours — Tanzania safari company based in Usa River, Arusha offering budget, mid-range, and premium private safari packages across Serengeti, Ngorongoro, Kilimanjaro, Tarangire, and Zanzibar.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Usa River",
              addressRegion: "Arusha",
              addressCountry: "Tanzania",
            },
            areaServed: [
              "Serengeti National Park",
              "Ngorongoro Crater",
              "Tarangire National Park",
              "Mount Kilimanjaro",
              "Zanzibar",
            ],
            telephone: "+255789736559",
            priceRange: "$$–$$$$",
            sameAs: [
              "https://www.facebook.com/GladiolusTours",
              "https://www.instagram.com/gladiolus_tours/",
            ],
          }),
        }}
      />

    

{/* ══════════════════════════════════════════════════════════
    FLOATING SOCIAL LINKS — Desktop only, NO WhatsApp here
══════════════════════════════════════════════════════════ */}
<div
  className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2.5"
  aria-label="Social media links"
>
  {[
    {
      href: "https://www.instagram.com/gladiolus_tours/",
      icon: "/social/instagram.jpeg",
      alt: "Instagram",
    },
    {
      href: "https://web.facebook.com/GladiolusTours",
      icon: "/social/facebook.png",
      alt: "Facebook",
    },
    {
      href: "https://www.tiktok.com/@gladiolus.tours.l",
      icon: "/social/TikTok.png",
      alt: "TikTok",
    },
  ].map((item) => (
    <a
      key={item.alt}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.alt}
      className="bg-white/92 backdrop-blur-xl border border-[#E2EAE0] shadow-md rounded-2xl p-2.5 hover:scale-110 hover:shadow-xl hover:border-[#C2B44A]/40 transition-all duration-300"
    >
      <Image
        src={item.icon}
        alt={item.alt}
        width={20}
        height={20}
        className="object-contain"
      />
    </a>
  ))}
</div>

      <Footer />
    </div>
  )
}