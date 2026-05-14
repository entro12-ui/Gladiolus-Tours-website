"use client"

import Image from "next/image"
import { useMemo, useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"

const SECTION_ORDER = [
  { key: "treks", href: "/treks" },
  { key: "safaris", href: "/safaris" },
  { key: "dayTrips", href: "/day-trips" },
  { key: "adventures", href: "/adventures" },
  { key: "destinations", href: "/destinations" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()

  /* Detect scroll for compact / shadow state */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const normalizedPath = useMemo(() => {
    if (!pathname) return "/"
    return pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?(?=\/|$)/, "") || "/"
  }, [pathname])

  const navSections = useMemo(
    () =>
      SECTION_ORDER.map((section) => ({
        ...section,
        label: t(`nav.${section.key}`),
      })),
    [t],
  )

  const isActivePath = (href: string) => {
    if (!normalizedPath) return false
    if (href === "/") return normalizedPath === "/"
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`)
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-[0_4px_24px_rgba(28,43,30,0.06)] border-b border-[#E2EAE0]/80"
          : "bg-[#F4F7F2]/90 backdrop-blur-2xl border-b border-[#D0DBCC]/60"
      }`}
    >
      {/* Subtle gold accent line at top */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C2B44A]/40 to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >

          {/* ── LOGO ── */}
          <Link href="/" className="group flex items-center gap-3">
            <div
              className={`relative transition-all duration-500 ${
                isScrolled ? "h-9 w-9" : "h-10 w-10"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Gladiolus Tours — Tanzania Safari Experts"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-[#1B2D1D] transition-all duration-500 leading-tight ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                Gladiolus Tours
              </span>
              <span
                className={`text-[9px] tracking-[0.28em] uppercase text-[#B8A840] font-semibold transition-all duration-300 ${
                  isScrolled ? "opacity-0 h-0" : "opacity-100"
                }`}
              >
                Your Gateway To Tanzania
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAVIGATION ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => {
              const active = isActivePath(section.href)
              return (
                <Link
                  key={section.key}
                  href={section.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                    active
                      ? "text-[#2D4A30]"
                      : "text-[#3A4B3C] hover:text-[#2D4A30]"
                  }`}
                >
                  {section.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#C2B44A] to-[#A8B545] rounded-full transition-all duration-400 ${
                      active
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* ── RIGHT SIDE (DESKTOP) ── */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href="tel:+255695754463"
              className="group flex items-center gap-2 text-[13px] text-[#3A4B3C] hover:text-[#2D4A30] transition-colors duration-300"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C2B44A]/10 group-hover:bg-[#C2B44A]/20 transition-colors duration-300">
                <Phone className="h-3.5 w-3.5 text-[#B8A840]" />
              </span>
              <span className="font-medium">+255 695 754 463</span>
            </a>

            <div className="h-6 w-px bg-[#D0DBCC]" aria-hidden />

            <LanguageSwitcher />

            {/* Primary CTA */}
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] hover:from-[#B0A040] hover:to-[#8E9A35] text-white px-5 py-2 text-[13px] font-semibold tracking-[0.02em] shadow-[0_8px_24px_rgba(168,181,69,0.25)] hover:shadow-[0_12px_32px_rgba(168,181,69,0.35)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href="/inquiry">
                Plan Your Trip
              </Link>
            </Button>

          </div>

          {/* ── MOBILE MENU BUTTON ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full bg-[#F4F7F2] border border-[#D0DBCC]/80 text-[#1B2D1D] hover:bg-[#E2EAE0] transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>

        {/* ══════════════════════════════════════════
            MOBILE NAVIGATION
        ══════════════════════════════════════════ */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-16 bg-[#1B2D1D]/30 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />

            {/* Drawer */}
            <div className="lg:hidden fixed left-0 right-0 top-16 z-50 bg-white border-t border-[#E2EAE0]/80 shadow-[0_24px_64px_rgba(28,43,30,0.12)] max-h-[calc(100vh-4rem)] overflow-y-auto">

              <div className="container mx-auto px-5 py-6">

                {/* Eyebrow */}
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8A840] font-semibold mb-4">
                  Explore
                </p>

                {/* Links */}
                <div className="flex flex-col gap-1">
                  {navSections.map((section) => {
                    const active = isActivePath(section.href)
                    return (
                      <Link
                        key={section.key}
                        href={section.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-medium transition-all duration-300 ${
                          active
                            ? "bg-[#C2B44A]/10 text-[#2D4A30]"
                            : "text-[#1B2D1D] hover:bg-[#F4F7F2]"
                        }`}
                      >
                        <span>{section.label}</span>
                        {active && (
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-[#C2B44A]"
                            aria-hidden
                          />
                        )}
                      </Link>
                    )
                  })}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#D0DBCC] to-transparent" />

                {/* Contact + Language + CTA */}
                <div className="space-y-4">

                  <a
                    href="tel:+255695754463"
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#F4F7F2] hover:bg-[#E2EAE0] transition-colors duration-300"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C2B44A]/15">
                      <Phone className="h-4 w-4 text-[#B8A840]" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A8A7C] font-semibold">
                        Call Us
                      </span>
                      <span className="text-[14px] font-semibold text-[#1B2D1D]">
                        +255 695 754 463
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="text-[12px] text-[#5A6A5C] font-medium">
                      Language
                    </span>
                    <LanguageSwitcher />
                  </div>

                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-[#C2B44A] to-[#A8B545] hover:from-[#B0A040] hover:to-[#8E9A35] text-white py-6 text-[14px] font-semibold tracking-[0.02em] shadow-[0_10px_28px_rgba(168,181,69,0.30)] transition-all duration-300"
                  >
                    <Link href="/inquiry" onClick={() => setIsOpen(false)}>
                      Plan Your Trip
                    </Link>
                  </Button>

                  <a
                    href="https://wa.me/255789736559"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#1B2D1D] py-3 text-[13px] font-semibold tracking-[0.02em] hover:bg-[#25D366]/15 transition-all duration-300"
                  >
                    <svg
                      className="h-4 w-4 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    WhatsApp Us Now
                  </a>

                </div>

              </div>
            </div>
          </>
        )}

      </div>
    </nav>
  )
}