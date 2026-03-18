"use client"

import Image from "next/image"
import { useMemo, useState, useEffect, useRef, type ElementType } from "react"
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Mountain,
  Compass,
  Footprints,
  MapIcon,
  ImageIcon,
  Sparkles,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type SectionHighlight = {
  title: string
  description: string
  href: string
}

type SectionCopy = {
  description?: string
  cta?: string
  highlights?: SectionHighlight[]
  quickLinks?: SectionHighlight[]
  badge?: string
}

const SECTION_META: Record<string, SectionMeta> = {
  treks: {
    badge: "High Altitude",
    accentClass: "from-[#182437] via-[#1f2f4a] to-[#243655]",
    accentText: "text-[#f0f6ff]",
    icon: Mountain,
  },
  safaris: {
    badge: "Flagship",
    accentClass: "from-[#2b1b0f] via-[#3e2615] to-[#4a2d19]",
    accentText: "text-[#ffd6a0]",
    icon: Footprints,
  },
  adventures: {
    badge: "Signature",
    accentClass: "from-[#0f1f1f] via-[#1d3730] to-[#24463b]",
    accentText: "text-[#c0f2da]",
    icon: Sparkles,
  },
  destinations: {
    badge: "Atlas",
    accentClass: "from-[#1b1532] via-[#231f41] to-[#2f2a57]",
    accentText: "text-[#d8c9ff]",
    icon: MapIcon,
  },
  gallery: {
    badge: "Visual",
    accentClass: "from-[#1a1a1a] via-[#262626] to-[#333333]",
    accentText: "text-[#f5f5f5]",
    icon: ImageIcon,
  },
  about: {
    badge: "Story",
    accentClass: "from-[#1b2a2f] via-[#253b43] to-[#2f4f59]",
    accentText: "text-[#d2f0ff]",
    icon: Compass,
  },
  contact: {
    badge: "Concierge",
    accentClass: "from-[#2f1b1b] via-[#452525] to-[#5c3030]",
    accentText: "text-[#ffd6d6]",
    icon: Sparkles,
  },
}

type SectionsDictionary = Record<string, SectionCopy> & {
  defaultCta?: string
}

type SectionMeta = {
  badge: string
  accentClass: string
  accentText: string
  icon: ElementType
}

const SECTION_CONTENT_DEFAULTS: SectionsDictionary = {
  defaultCta: "Explore",
  treks: {
    description: "Expertly guided treks across Kilimanjaro, Meru, and the volcanic highlands.",
    cta: "Plan a Trek",
    badge: "Summit Ready",
    highlights: [
      {
        title: "Kilimanjaro Routes",
        description: "Compare Machame, Lemosho, and Rongai itineraries with altitude profiles.",
        href: "/treks",
      },
      {
        title: "Mount Meru Ascents",
        description: "Shorter acclimatization climbs with crater rim sunrises.",
        href: "/treks",
      },
    ],
    quickLinks: [
      {
        title: "7-Day Lemosho",
        description: "Balanced pace, scenic western approach",
        href: "/treks",
      },
      {
        title: "9-Day Northern Circuit",
        description: "Ultimate acclimatization route",
        href: "/treks",
      },
      {
        title: "Mount Meru",
        description: "3–4 day acclimatization trek",
        href: "/treks",
      },
    ],
  },
  safaris: {
    description: "Tailor-made safaris across Northern, Southern, and coastal Tanzania.",
    cta: "View Safaris",
    badge: "Private Guided",
    highlights: [
      {
        title: "Great Migration",
        description: "Track river crossings with mobile camps in the Serengeti.",
        href: "/safaris",
      },
      {
        title: "Family Safaris",
        description: "Flexible pacing, kid-friendly guides, and private vehicles.",
        href: "/safaris",
      },
    ],
    quickLinks: [
      {
        title: "Serengeti Fly-In",
        description: "3 nights | June–Oct",
        href: "/safaris",
      },
      {
        title: "Family Safari",
        description: "Private guide, villa stays",
        href: "/safaris",
      },
      {
        title: "Honeymoon Trail",
        description: "Safari + Zanzibar",
        href: "/safaris",
      },
    ],
  },
  dayTrips: {
    description: "Quick escapes from Arusha to hot springs, crater lakes, and cultural sites.",
    cta: "View Day Trips",
    badge: "Quick Escape",
    highlights: [
      {
        title: "Chemka Hot Springs",
        description: "Swim in crystal-clear natural hot springs surrounded by nature.",
        href: "/day-trips",
      },
      {
        title: "Lake Duluti",
        description: "Canoe ride and forest walk around a scenic crater lake.",
        href: "/day-trips",
      },
    ],
    quickLinks: [
      {
        title: "Chemka Hot Springs",
        description: "Full Day | From $60/person",
        href: "/day-trips",
      },
      {
        title: "Lake Duluti",
        description: "Half Day | From $72/person",
        href: "/day-trips",
      },
    ],
  },
  adventures: {
    description: "Immersive cultural journeys, hot-air balloons, and coastal escapes.",
    cta: "Discover Adventures",
    badge: "Signature",
    highlights: [
      {
        title: "Cultural Encounters",
        description: "Visit Maasai communities and ancient trade towns.",
        href: "/adventures",
      },
      {
        title: "Zanzibar Extensions",
        description: "Pair safaris with spice tours and dhow sunsets.",
        href: "/adventures",
      },
    ],
    quickLinks: [
      {
        title: "Stone Town + Safari",
        description: "5 nights",
        href: "/adventures",
      },
      {
        title: "Hot-Air Balloon",
        description: "Serengeti sunrise",
        href: "/adventures",
      },
    ],
  },
  destinations: {
    description: "Handpicked parks and circuits spanning Serengeti to Ruaha across all regions of Tanzania.",
    cta: "Browse Destinations",
    badge: "Atlas",
    highlights: [
      {
        title: "Northern Circuit",
        description: "Serengeti, Ngorongoro, Tarangire, and Lake Manyara.",
        href: "/destinations",
      },
      {
        title: "Southern Wilderness",
        description: "Selous waterways and Ruaha baobab valleys.",
        href: "/destinations",
      },
      {
        title: "Eastern Treasures",
        description: "Saadani bush-to-beach and Kilwa historic coast.",
        href: "/destinations",
      },
      {
        title: "Western Gems",
        description: "Gombe chimpanzee tracking and Mahale mountains.",
        href: "/destinations",
      },
    ],
    quickLinks: [
      {
        title: "Northern",
        description: "Serengeti & Ngorongoro",
        href: "/destinations",
      },
      {
        title: "Southern",
        description: "Selous & Ruaha",
        href: "/destinations",
      },
      {
        title: "Eastern",
        description: "Saadani & Kilwa",
        href: "/destinations",
      },
      {
        title: "Western",
        description: "Gombe & Mahale",
        href: "/destinations",
      },
      {
        title: "Coastal",
        description: "Zanzibar & Pemba",
        href: "/destinations",
      },
    ],
  },
  gallery: {
    description: "Visual stories from summit bids and safari game drives.",
    cta: "View Gallery",
    badge: "Visual",
    highlights: [
      {
        title: "Photo Essays",
        description: "Migration crossings, crater vistas, and lodge life.",
        href: "/gallery",
      },
    ],
    quickLinks: [
      {
        title: "Migration Gallery",
        description: "River crossings",
        href: "/gallery",
      },
      {
        title: "Summits",
        description: "Kilimanjaro + Meru",
        href: "/gallery",
      },
    ],
  },
  about: {
    description: "A Tanzanian-owned outfitter with 10+ years of guiding expertise.",
    cta: "Meet the Team",
    badge: "Story",
    highlights: [
      {
        title: "Our Story",
        description: "How Gladiolus Tours began and what drives us today.",
        href: "/about",
      },
      {
        title: "Guest Reviews",
        description: "Hear from travelers who trekked and explored with us.",
        href: "/about",
      },
    ],
    quickLinks: [
      {
        title: "Guiding Team",
        description: "Meet our experts",
        href: "/about",
      },
      {
        title: "Guest Reviews",
        description: "Traveler stories",
        href: "/about",
      },
    ],
  },
  contact: {
    description: "Dedicated planners ready to craft your itinerary in 24 hours.",
    cta: "Contact Experts",
    badge: "Concierge",
    highlights: [
      {
        title: "Plan a Call",
        description: "Schedule a planning session with our safari designers.",
        href: "/contact",
      },
    ],
    quickLinks: [
      {
        title: "Inquiry Form",
        description: "Detailed request",
        href: "/contact",
      },
      {
        title: "WhatsApp",
        description: "+255 700 000000",
        href: "/contact",
      },
    ],
  },
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

const DROPDOWN_SECTIONS = new Set(["treks", "safaris", "dayTrips", "adventures", "destinations"])

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    }
  }, [])

  const navDetailsFromTranslations = (t.raw("navDetails") ?? {}) as SectionsDictionary
  const defaultCta = navDetailsFromTranslations.defaultCta || SECTION_CONTENT_DEFAULTS.defaultCta || t("nav.bookNow")
  const conciergeTagline = t("nav.bookNowTagline")

  const normalizedPath = useMemo(() => {
    if (!pathname) return "/"
    return pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?(?=\/|$)/, "") || "/"
  }, [pathname])

  const navSections = useMemo(
    () =>
      SECTION_ORDER.map((section) => {
        const defaults = SECTION_CONTENT_DEFAULTS[section.key] ?? {}
        const details = (navDetailsFromTranslations[section.key] as SectionCopy | undefined) ?? defaults
        const meta = SECTION_META[section.key] ?? SECTION_META.safaris
        return {
          ...section,
          label: t(`nav.${section.key}`),
          description: details.description ?? "",
          cta: details.cta ?? defaultCta,
          highlights: details.highlights ?? [],
          quickLinks: details.quickLinks ?? defaults.quickLinks ?? [],
          badge: details.badge ?? defaults.badge ?? meta.badge,
          meta,
        }
      }),
    [navDetailsFromTranslations, defaultCta, t],
  )

  const isActivePath = (href: string) => {
    if (!normalizedPath) return false
    if (href === "/") return normalizedPath === "/"
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`)
  }

  const closeMenu = () => setIsOpen(false)
  const navClassName = `${"fixed top-0 left-0 right-0 z-50 transition-all duration-300"} ${
    isScrolled
      ? "border-border/70 bg-background/95 shadow-[0_10px_25px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
      : "border-border/40 bg-background/80 backdrop-blur-xl shadow-[0_8px_18px_rgba(15,23,42,0.12)]"
  }`

  const showDropdown = (key: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
      dropdownTimeout.current = null
    }
    setActiveDropdown(key)
  }

  const hideDropdown = (delay = 500) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), delay)
  }

  const cancelHideDropdown = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
      dropdownTimeout.current = null
    }
  }

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="relative flex-1"
            >
              <div className="flex justify-center gap-1">
                {navSections.map((section) =>
                  DROPDOWN_SECTIONS.has(section.key) ? (
                    <button
                      key={section.key}
                      className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        activeDropdown === section.key || isActivePath(section.href)
                          ? "bg-muted/60 text-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-muted/40"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === section.key}
                      onMouseEnter={() => showDropdown(section.key)}
                      onFocus={() => showDropdown(section.key)}
                      onClick={() => setActiveDropdown((prev) => (prev === section.key ? null : section.key))}
                    >
                      {section.label}
                    </button>
                  ) : (
                    <Link
                      key={section.key}
                      href={section.href}
                      className={`px-4 py-2 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isActivePath(section.href)
                          ? "bg-muted/60 text-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-muted/40"
                      }`}
                    >
                      {section.label}
                    </Link>
                  ),
                )}
              </div>
              <div
                className={`absolute left-1/2 top-full z-50 pt-2 w-[min(96vw,1100px)] -translate-x-1/2 transition-all duration-200 ${
                  activeDropdown ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
                }`}
                onMouseEnter={cancelHideDropdown}
                onMouseLeave={() => hideDropdown(500)}
              >
                <div className="h-6 w-full" aria-hidden="true" onMouseEnter={cancelHideDropdown} />
                {activeDropdown && (() => {
                  const section = navSections.find((item) => item.key === activeDropdown)
                  if (!section) return null
                  return (
                    <div className="grid gap-6 rounded-2xl border border-border/70 bg-background/95 p-6 shadow-2xl ring-1 ring-primary/10 md:grid-cols-[260px_minmax(0,1fr)]">
                      <div
                        className={`flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-gradient-to-br ${section.meta.accentClass} p-5 shadow-inner text-white`}
                      >
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground shadow-sm">
                          <section.meta.icon className={`h-4 w-4 ${section.meta.accentText}`} />
                          <span className={section.meta.accentText}>{section.badge}</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-mono uppercase tracking-[0.3em] text-white/70">Gladiolus Signature</p>
                          <p className="text-2xl font-serif text-white">{section.label}</p>
                        </div>
                        {section.description && (
                          <p className="text-sm leading-relaxed text-white/85 break-words hyphens-auto">{section.description}</p>
                        )}
                        <Button
                          asChild
                          size="sm"
                          className="mt-auto flex items-center rounded-2xl border border-white/25 bg-white/15 px-5 py-4 text-white shadow-lg shadow-black/20 transition hover:bg-white/25"
                        >
                          <Link href={section.href} className="flex w-full items-center justify-between gap-4">
                            <div className="text-left">
                              <p className="text-base font-semibold leading-tight">{section.cta}</p>
                              {conciergeTagline && <p className="text-sm text-white/80">{conciergeTagline}</p>}
                            </div>
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                              <ArrowUpRight className="h-5 w-5" />
                            </span>
                          </Link>
                        </Button>
                      </div>
                      <div className="space-y-5 rounded-3xl border border-border/60 bg-white/95 p-5 shadow-inner">
                        <div className="flex flex-col gap-5 lg:flex-row lg:gap-6">
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center justify-between">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">Highlights</p>
                              <span className="text-xs font-mono text-slate-400">
                                {section.highlights.length.toString().padStart(2, "0")}
                              </span>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {section.highlights.length > 0 ? (
                                section.highlights.map((highlight) => (
                                  <Link
                                    key={`${section.key}-${highlight.title}`}
                                    href={highlight.href}
                                    className="group rounded-2xl border border-border/70 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg"
                                  >
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-semibold text-foreground break-words hyphens-auto">{highlight.title}</p>
                                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
                                    </div>
                                    <p className="text-xs text-muted-foreground/90 leading-relaxed break-words hyphens-auto">{highlight.description}</p>
                                  </Link>
                                ))
                              ) : (
                                <div className="rounded-2xl border border-dashed border-border/50 p-4 text-sm text-muted-foreground">
                                  {t("nav.bookNow")}
                                </div>
                              )}
                            </div>
                          </div>
                          {section.quickLinks.length > 0 && (
                            <div className="w-full rounded-2xl border border-border/50 bg-slate-50/80 p-4 lg:w-[220px]">
                              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-500">Plan fast</p>
                              <div className="mt-4 space-y-3">
                                {section.quickLinks.map((link) => (
                                  <Link
                                    key={`${section.key}-quick-${link.title}`}
                                    href={link.href}
                                    className="group flex items-start justify-between gap-3 rounded-xl border border-transparent px-1 py-1 text-left text-sm text-slate-700 transition hover:border-primary/40"
                                  >
                                    <div className="space-y-1">
                                      <p className="font-semibold leading-snug break-words hyphens-auto">{link.title}</p>
                                      <p className="text-xs text-slate-500 break-words hyphens-auto">{link.description}</p>
                                    </div>
                                    <ChevronRight className="mt-1 h-4 w-4 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-primary" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>

            <LanguageSwitcher />
            <Button
              asChild
              className="group flex-none rounded-full border border-white/15 bg-gradient-to-r from-primary-alt to-primary px-6 py-3 text-white shadow-xl shadow-primary/30 ring-1 ring-primary/40 transition hover:-translate-y-0.5 hover:shadow-primary/45"
            >
              <Link href="/inquiry" className="flex w-max items-center justify-between gap-3">
                <span className="text-sm font-semibold tracking-wide">{t("nav.bookNow")}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-muted/50"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[90vh] opacity-100 py-4 border-t border-border/60" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="Mobile navigation menu"
        >
            <Accordion type="single" collapsible className="space-y-3">
              {navSections.map((section) => (
                <AccordionItem
                  key={section.key}
                  value={section.key}
                  className="rounded-2xl border border-border/60 bg-background/80 px-4 shadow-lg shadow-primary/5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground transition data-[state=open]:bg-muted/40 data-[state=open]:text-primary">
                    <div>
                      <p>{section.label}</p>
                      {section.description && (
                        <p className="text-xs font-normal text-muted-foreground">
                          {section.description}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="flex flex-col gap-4">
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-2xl border border-white/15 bg-gradient-to-r from-primary-alt to-primary px-4 py-3 text-left text-white shadow-lg shadow-primary/25"
                      >
                        <Link href={section.href} onClick={closeMenu} className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-base font-semibold leading-tight">
                              {section.cta}
                            </p>
                            {conciergeTagline && (
                              <p className="text-sm text-white/80">{conciergeTagline}</p>
                            )}
                          </div>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </Link>
                      </Button>
                      {section.highlights.length > 0 && (
                        <div className="grid gap-2">
                          {section.highlights.map((highlight) => (
                            <Link
                              key={`${section.key}-mobile-${highlight.title}`}
                              href={highlight.href}
                              onClick={closeMenu}
                              className="group rounded-xl border border-dashed border-border/60 p-3 text-sm text-foreground transition hover:border-primary/70 hover:text-primary"
                            >
                              <div className="flex items-center justify-between">
                                <p className="font-semibold">{highlight.title}</p>
                                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
                              </div>
                              <p className="text-xs text-muted-foreground">{highlight.description}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                      {section.quickLinks.length > 0 && (
                        <div className="mt-3 grid gap-2">
                          {section.quickLinks.map((link) => (
                            <Link
                              key={`${section.key}-quick-mobile-${link.title}`}
                              href={link.href}
                              onClick={closeMenu}
                              className="flex items-center justify-between rounded-xl border border-border/50 px-3 py-2 text-sm text-foreground transition hover:border-primary/70"
                            >
                              <div>
                                <p className="font-semibold leading-tight">{link.title}</p>
                                <p className="text-xs text-muted-foreground">{link.description}</p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <Button
              asChild
              className="rounded-2xl border border-white/15 bg-gradient-to-r from-primary-alt to-primary px-6 py-4 text-white shadow-lg shadow-primary/35"
            >
              <Link href="/inquiry" onClick={closeMenu} className="flex w-full items-center justify-between gap-3">
                <div className="text-left">
                  <p className="text-base font-semibold leading-tight">{t("nav.bookNow")}</p>
                  {conciergeTagline && <p className="text-sm text-white/80">{conciergeTagline}</p>}
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Button>
          </div>
      </div>
    </nav>
  )
}
