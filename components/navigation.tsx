"use client"

import Image from "next/image"
import { useMemo, useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"

type SectionHighlight = {
  title: string
  description: string
  href: string
}

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const closeMenu = () => setIsOpen(false)
  const navClassName = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 bg-white shadow-sm"

  return (
    <nav className={navClassName} role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Gladiolus Tours home">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full border border-border/60 bg-background/80 p-1 shadow-sm">
                <Image
                  src="/icon-192.png"
                  alt="Gladiolus Tours crest"
                  fill
                  sizes="40px"
                  className="object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
              <div className="text-2xl font-serif text-primary transition-colors group-hover:text-primary-alt">
                Gladiolus Tours
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Altezza Style */}
          <div className="hidden lg:flex items-center gap-1">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-emerald-600 group ${
                  isActivePath(section.href) ? "text-emerald-600" : "text-gray-900"
                }`}
              >
                {section.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-emerald-600 transition-all duration-200 ${
                  isActivePath(section.href) ? "w-6" : "w-0 group-hover:w-6"
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+255695754463" 
              className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +255 695 754 463
            </a>
            <LanguageSwitcher />
            <Button
              asChild
              className="rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link href="/inquiry">
                Plan your trip
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-emerald-600 transition-colors rounded-lg hover:bg-gray-100"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Altezza Style */}
        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-border/30 ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="py-4 px-4 space-y-1">
            {navSections.map((section) => (
              <Link
                key={section.key}
                href={section.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActivePath(section.href) 
                    ? "bg-emerald-50 text-emerald-600" 
                    : "text-gray-900 hover:bg-gray-100 hover:text-emerald-600"
                }`}
              >
                {section.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border/30 space-y-3">
              <a 
                href="tel:+255695754463" 
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-900 hover:text-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +255 695 754 463
              </a>
              <Button
                asChild
                className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-base font-semibold shadow-lg shadow-emerald-600/20"
              >
                <Link href="/inquiry" onClick={closeMenu}>
                  Plan your trip
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
