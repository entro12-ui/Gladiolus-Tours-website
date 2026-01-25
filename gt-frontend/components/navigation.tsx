"use client"

import { type ElementType, useMemo, useState } from "react"
import {
  ArrowUpRight,
  Binoculars,
  Compass,
  ImageIcon,
  Map,
  Menu,
  Mountain,
  Phone,
  UsersRound,
  X,
} from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
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
}

type SectionsDictionary = Record<string, SectionCopy> & {
  defaultCta?: string
}

type SectionMeta = {
  badge: string
  icon: ElementType
  accentClass: string
  accentText: string
}

const SECTION_ORDER = [
  { key: "treks", href: "/treks" },
  { key: "safaris", href: "/safaris" },
  { key: "adventures", href: "/adventures" },
  { key: "destinations", href: "/destinations" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
]

const SECTION_META: Record<string, SectionMeta> = {
  treks: {
    badge: "Summit & Trails",
    icon: Mountain,
    accentClass: "from-amber-200/70 via-orange-200/70 to-amber-300/60",
    accentText: "text-amber-700",
  },
  safaris: {
    badge: "Great Migration",
    icon: Binoculars,
    accentClass: "from-emerald-200/70 via-lime-200/70 to-emerald-300/60",
    accentText: "text-emerald-700",
  },
  adventures: {
    badge: "Beyond the Usual",
    icon: Compass,
    accentClass: "from-cyan-200/70 via-sky-200/70 to-indigo-200/60",
    accentText: "text-sky-700",
  },
  destinations: {
    badge: "Parks & Circuits",
    icon: Map,
    accentClass: "from-rose-200/70 via-orange-200/70 to-yellow-200/60",
    accentText: "text-rose-700",
  },
  gallery: {
    badge: "Field Stories",
    icon: ImageIcon,
    accentClass: "from-purple-200/70 via-pink-200/70 to-purple-300/60",
    accentText: "text-purple-700",
  },
  about: {
    badge: "Our DNA",
    icon: UsersRound,
    accentClass: "from-slate-200/70 via-gray-200/70 to-zinc-200/60",
    accentText: "text-slate-700",
  },
  contact: {
    badge: "Plan with Experts",
    icon: Phone,
    accentClass: "from-primary/20 via-primary/10 to-primary/5",
    accentText: "text-primary",
  },
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  const navDetails = (t.raw("navDetails") ?? {}) as SectionsDictionary
  const defaultCta = navDetails.defaultCta || t("nav.bookNow")

  const navSections = useMemo(
    () =>
      SECTION_ORDER.map((section) => {
        const details = navDetails[section.key] ?? {}
        const meta = SECTION_META[section.key] ?? SECTION_META.safaris
        return {
          ...section,
          label: t(`nav.${section.key}`),
          description: details.description ?? "",
          cta: details.cta ?? defaultCta,
          highlights: details.highlights ?? [],
          meta,
        }
      }),
    [navDetails, defaultCta, t],
  )

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-serif text-primary transition-colors group-hover:text-primary-alt">
              Gladiolus Tours
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu className="flex-1">
              <NavigationMenuList className="gap-1">
                {navSections.map((section) => (
                  <NavigationMenuItem key={section.key}>
                    <NavigationMenuTrigger className="bg-transparent px-3 text-[11px] font-mono tracking-[0.2em] uppercase text-foreground/80 transition-colors hover:text-primary data-[state=open]:text-primary">
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="md:w-[560px] lg:w-[720px]">
                      <div className="grid gap-6 rounded-[32px] border border-border/70 bg-background/95 p-6 shadow-2xl ring-1 ring-primary/10 md:grid-cols-[240px_minmax(0,1fr)]">
                        <div
                          className={`flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-gradient-to-br ${section.meta.accentClass} p-5 shadow-inner`}
                        >
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.25em] text-foreground shadow-sm">
                            <section.meta.icon className={`h-4 w-4 ${section.meta.accentText}`} />
                            <span className={`${section.meta.accentText}`}>{section.meta.badge}</span>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary/70">
                              Gladiolus Signature
                            </p>
                            <p className="text-2xl font-serif text-primary">
                              {section.label}
                            </p>
                          </div>
                          {section.description && (
                            <p className="text-sm leading-relaxed text-foreground/80">
                              {section.description}
                            </p>
                          )}
                          <Button
                            asChild
                            size="sm"
                            className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-alt to-primary px-6 py-2 text-[11px] font-semibold tracking-[0.2em] text-white shadow-lg shadow-primary/20"
                          >
                            <Link href={section.href}>
                              {section.cta}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                              Highlights
                            </p>
                            <span className="text-xs font-mono text-muted-foreground/70">
                              {section.highlights.length.toString().padStart(2, "0")}
                            </span>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {section.highlights.length > 0 ? (
                              section.highlights.map((highlight) => (
                                <NavigationMenuLink
                                  asChild
                                  key={`${section.key}-${highlight.title}`}
                                  className="group rounded-2xl border border-border/60 bg-muted/30 p-4 text-left transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-background/90"
                                >
                                  <Link href={highlight.href} className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                      <p className="text-sm font-semibold text-foreground">
                                        {highlight.title}
                                      </p>
                                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary" />
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                      {highlight.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              ))
                            ) : (
                              <div className="rounded-2xl border border-dashed border-border/50 p-4 text-sm text-muted-foreground">
                                {t("nav.bookNow")}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <NavigationMenuIndicator />
            </NavigationMenu>

            <LanguageSwitcher />
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-8 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 transition-transform hover:-translate-y-0.5 hover:from-primary-alt/90 hover:to-primary/90"
            >
              <Link href="/contact">{t("nav.bookNow")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/60">
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
                        className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary px-4 text-[11px] font-semibold tracking-[0.16em] text-white shadow-lg shadow-primary/25"
                      >
                        <Link href={section.href} onClick={closeMenu}>
                          {section.cta}
                          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
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
              className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
            >
              <Link href="/contact" onClick={closeMenu}>
                {t("nav.bookNow")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
