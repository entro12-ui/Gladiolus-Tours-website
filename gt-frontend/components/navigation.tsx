"use client"

import { useMemo, useState } from "react"
import { Menu, X } from "lucide-react"
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

const SECTION_ORDER = [
  { key: "treks", href: "/treks" },
  { key: "safaris", href: "/safaris" },
  { key: "adventures", href: "/adventures" },
  { key: "destinations", href: "/destinations" },
  { key: "gallery", href: "/gallery" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  const navDetails = (t.raw("navDetails") ?? {}) as SectionsDictionary
  const defaultCta = navDetails.defaultCta || t("nav.bookNow")

  const navSections = useMemo(
    () =>
      SECTION_ORDER.map((section) => {
        const details = navDetails[section.key] ?? {}
        return {
          ...section,
          label: t(`nav.${section.key}`),
          description: details.description ?? "",
          cta: details.cta ?? defaultCta,
          highlights: details.highlights ?? [],
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
                    <NavigationMenuContent className="w-[420px] md:w-[460px]">
                      <div className="grid gap-4 rounded-2xl border border-border/70 bg-background/95 p-6 shadow-2xl ring-1 ring-primary/10">
                        <div className="flex flex-col gap-3">
                          <p className="text-base font-semibold text-primary">
                            {section.label}
                          </p>
                          {section.description && (
                            <p className="text-sm text-muted-foreground">
                              {section.description}
                            </p>
                          )}
                          <Button
                            asChild
                            size="sm"
                            className="w-max rounded-full bg-gradient-to-r from-primary-alt to-primary px-6 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-white shadow-lg shadow-primary/20"
                          >
                            <Link href={section.href}>{section.cta}</Link>
                          </Button>
                        </div>
                        {section.highlights.length > 0 && (
                          <div className="grid gap-2">
                            {section.highlights.map((highlight) => (
                              <NavigationMenuLink
                                asChild
                                key={`${section.key}-${highlight.title}`}
                                className="rounded-xl border border-border/60 bg-muted/40 p-3 text-left transition hover:border-primary/60 hover:bg-background/80"
                              >
                                <Link href={highlight.href}>
                                  <p className="text-sm font-semibold text-foreground">
                                    {highlight.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {highlight.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        )}
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
            <div className="flex flex-col gap-4">
              {navSections.map((section) => (
                <div
                  key={section.key}
                  className="rounded-2xl border border-border/60 bg-background/80 p-4 shadow-lg shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {section.label}
                      </p>
                      {section.description && (
                        <p className="text-sm text-muted-foreground">
                          {section.description}
                        </p>
                      )}
                    </div>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-full bg-gradient-to-r from-primary-alt to-primary px-4 text-[11px] font-semibold tracking-[0.16em]"
                    >
                      <Link href={section.href} onClick={closeMenu}>
                        {section.cta}
                      </Link>
                    </Button>
                  </div>
                  {section.highlights.length > 0 && (
                    <div className="mt-3 grid gap-2">
                      {section.highlights.map((highlight) => (
                        <Link
                          key={`${section.key}-mobile-${highlight.title}`}
                          href={highlight.href}
                          onClick={closeMenu}
                          className="rounded-xl border border-dashed border-border/60 p-3 text-sm text-foreground transition hover:border-primary/70 hover:text-primary"
                        >
                          <p className="font-semibold">{highlight.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {highlight.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
          </div>
        )}
      </div>
    </nav>
  )
}
