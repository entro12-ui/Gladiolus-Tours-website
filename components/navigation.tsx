"use client"

import Image from "next/image"
import { useMemo, useState, useEffect, type ChangeEvent } from "react"
import { Menu, X, Phone, ChevronDown, ChevronRight, Globe } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "./language-switcher"
import { assetUrl } from "@/lib/assets"
import { getNavLinkImage } from "@/lib/nav-images"

function NavMenuThumb({ href, label }: { href: string; label: string }) {
  return (
    <Image
      src={assetUrl(getNavLinkImage(href))}
      alt={label}
      width={40}
      height={40}
      unoptimized
      className="h-10 w-10 shrink-0 rounded-lg object-cover bg-[#E2EAE0]"
    />
  )
}

function NavMenuLinkContent({ href, label }: { href: string; label: string }) {
  return (
    <>
      <NavMenuThumb href={href} label={label} />
      <span className="min-w-0 flex-1">{label}</span>
    </>
  )
}

type NavMenuItem = {
  label: string
  href: string
  subItems?: NavMenuItem[]
}

type NavMenuItemDef = {
  labelKey: string
  href: string
  subItems?: NavMenuItemDef[]
}

function resolveMenuItems(
  items: NavMenuItemDef[],
  translate: (key: string) => string
): NavMenuItem[] {
  return items.map((item) => ({
    label: translate(item.labelKey),
    href: item.href,
    subItems: item.subItems ? resolveMenuItems(item.subItems, translate) : undefined,
  }))
}

const TREK_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  {
    labelKey: "treks.kilimanjaroOverview",
    href: "/treks",
  },
  {
    labelKey: "treks.kilimanjaroRoutes.label",
    href: "/treks",
    subItems: [
      { labelKey: "treks.kilimanjaroRoutes.machameRoute", href: "/treks/kilimanjaro-machame-route" },
      { labelKey: "treks.kilimanjaroRoutes.lemoshoRoute", href: "/treks/kilimanjaro-lemosho-route" },
      { labelKey: "treks.kilimanjaroRoutes.maranguRoute", href: "/treks/kilimanjaro-marangu-route" },
      { labelKey: "treks.kilimanjaroRoutes.rongaiRoute", href: "/treks/kilimanjaro-rongai-route" },
      { labelKey: "treks.kilimanjaroRoutes.umbweRoute", href: "/treks/umbwe-route" },
      { labelKey: "treks.kilimanjaroRoutes.shiraRoute", href: "/treks/shira-route" },
    ],
  },
  {
    labelKey: "treks.mountMeruTrek",
    href: "/treks/mount-meru-trek",
  },
  {
    labelKey: "treks.trekkingPreparation.label",
    href: "/treks",
    subItems: [
      { labelKey: "treks.trekkingPreparation.packingList", href: "/treks/packing-list" },
      { labelKey: "treks.trekkingPreparation.altitudeAcclimatization", href: "/treks/altitude-acclimatization" },
      { labelKey: "treks.trekkingPreparation.bestTimeToClimb", href: "/treks/best-time-to-climb" },
      { labelKey: "treks.trekkingPreparation.climbingFaqs", href: "/treks/climbing-faqs" },
    ],
  },
  {
    labelKey: "treks.privateGroupClimbs",
    href: "/treks",
  },
]

const SAFARI_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  {
    labelKey: "safaris.tanzaniaNationalParks.label",
    href: "/destinations",
    subItems: [
      { labelKey: "safaris.tanzaniaNationalParks.serengeti", href: "/destinations/serengeti-national-park" },
      { labelKey: "safaris.tanzaniaNationalParks.tarangire", href: "/destinations/tarangire-national-park" },
      { labelKey: "safaris.tanzaniaNationalParks.manyara", href: "/destinations/lake-manyara-national-park" },
      { labelKey: "safaris.tanzaniaNationalParks.ngorongoro", href: "/destinations/ngorongoro-crater" },
      { labelKey: "safaris.tanzaniaNationalParks.lakeNatron", href: "/destinations/lake-natron" },
      { labelKey: "safaris.tanzaniaNationalParks.arushaNationalPark", href: "/destinations/arusha-national-park" },
    ],
  },
  {
    labelKey: "safaris.itineraries.label",
    href: "/safaris",
    subItems: [
      { labelKey: "safaris.itineraries.greatMigration", href: "/safaris/great-migration-safari" },
      { labelKey: "safaris.itineraries.privateTours", href: "/safaris/private-tours" },
      { labelKey: "safaris.itineraries.familyTours", href: "/safaris" },
      { labelKey: "safaris.itineraries.photographicTours", href: "/safaris" },
    ],
  },
  { labelKey: "safaris.packingList", href: "/safaris/packing-list" },
  { labelKey: "safaris.safariVehicle", href: "/safaris/safari-vehicles" },
  { labelKey: "safaris.highlights", href: "/safaris" },
  { labelKey: "safaris.honeymoonSafari", href: "/safaris/honeymoon-safari" },
]

const DAY_TRIP_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  { labelKey: "dayTrips.naturalHotSpring", href: "/day-trips/chemka-hot-springs" },
  { labelKey: "dayTrips.natureAndLandscapes", href: "/day-trips/lake-duluti" },
  { labelKey: "dayTrips.kilimanjaroHiking", href: "/treks" },
  {
    labelKey: "dayTrips.townTour.label",
    href: "/day-trips/arusha-town-tour",
    subItems: [
      { labelKey: "dayTrips.townTour.curiosAndGiftShops", href: "/day-trips/curios-gift-shops" },
      { labelKey: "dayTrips.townTour.localMarkets", href: "/day-trips/local-markets" },
    ],
  },
]

const ZANZIBAR_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  { labelKey: "zanzibar.spiceTours", href: "/zanzibar/spice-tours" },
  { labelKey: "zanzibar.culturalTour", href: "/zanzibar/cultural-tour" },
  { labelKey: "zanzibar.divingSnorkeling", href: "/zanzibar/diving-snorkeling" },
  { labelKey: "zanzibar.transfers", href: "/zanzibar/transfers" },
]

const GALLERY_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  { labelKey: "gallery.pictures", href: "/gallery" },
  { labelKey: "gallery.videos", href: "/gallery/videos" },
]

const ABOUT_DROPDOWN_ITEMS: NavMenuItemDef[] = [
  { labelKey: "about.aboutGladiolusTours", href: "/about" },
  { labelKey: "about.testimonials", href: "/#testimonials" },
  { labelKey: "about.faq", href: "/#faq" },
  { labelKey: "about.blog", href: "/blog" },
]

const SECTION_ORDER: {
  key: string
  href: string
  menuItems?: NavMenuItemDef[]
}[] = [
  { key: "treks", href: "/treks", menuItems: TREK_DROPDOWN_ITEMS },
  { key: "safaris", href: "/safaris", menuItems: SAFARI_DROPDOWN_ITEMS },
  { key: "dayTrips", href: "/day-trips", menuItems: DAY_TRIP_DROPDOWN_ITEMS },
  { key: "zanzibar", href: "/zanzibar", menuItems: ZANZIBAR_DROPDOWN_ITEMS },
  { key: "gallery", href: "/gallery", menuItems: GALLERY_DROPDOWN_ITEMS },
  { key: "about", href: "/about", menuItems: ABOUT_DROPDOWN_ITEMS },
  { key: "contact", href: "/contact" },
]

const CURRENCY_OPTIONS = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "GBP", label: "GBP" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const t = useTranslations()
  const tMenu = useTranslations("navMenu")
  const tCommon = useTranslations("common")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translateMenu = (key: string) => tMenu(key as Parameters<typeof tMenu>[0])

  const navSections = useMemo(
    () =>
      SECTION_ORDER.map((section) => ({
        ...section,
        label: t(`nav.${section.key}`),
        menuItems: section.menuItems
          ? resolveMenuItems(section.menuItems, translateMenu)
          : undefined,
      })),
    [t, tMenu]
  )

  return (
    <nav className={`sticky top-0 z-50 ${isScrolled ? "bg-white shadow" : "bg-[#F4F7F2]/95"} border-b`}>
      <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/logo.png" alt="Gladiolus Tours" width={44} height={44} />
          <span className="font-serif text-2xl tracking-wide text-[#1B2D1D]">
            Gladiolus Tours
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 2xl:gap-6">
          {navSections.map((section) => (
            <div key={section.key} className="relative group py-2">
              {/* Increased font size to text-[16px] and set font-semibold for crisp readability */}
              <Link href={section.href} className="flex items-center gap-1 text-[16px] font-semibold text-[#2D4A30] hover:text-[#B8A840] whitespace-nowrap transition-colors">
                {section.label}
                {section.menuItems && <ChevronDown size={15} />}
              </Link>

              {/* First-Level Dropdown */}
              {section.menuItems && (
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="flex flex-col py-2 min-w-[300px]">
                    {section.menuItems.map((item) => (
                      <div key={item.label} className="relative group/sub px-1">
                        {item.subItems ? (
                          <>
                            <Link
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#2D4A30] hover:bg-[#F4F7F2] rounded-lg w-full font-medium"
                            >
                              <NavMenuLinkContent href={item.href} label={item.label} />
                              <ChevronRight size={14} className="text-[#556458] shrink-0" />
                            </Link>

                            {/* Second-Level Submenu Panel */}
                            <div className="absolute left-full top-0 ml-1 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150 min-w-[280px] py-2">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#556458] hover:bg-[#F4F7F2] hover:text-[#2D4A30] rounded-lg mx-1"
                                >
                                  <NavMenuLinkContent href={subItem.href} label={subItem.label} />
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#2D4A30] hover:bg-[#F4F7F2] rounded-lg mx-1"
                          >
                            <NavMenuLinkContent href={item.href} label={item.label} />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Action Row - Switchers and Booking Action Button */}
          <div className="flex items-center gap-3 ml-2 border-l pl-4 border-gray-200">
            {/* Currency Selector Element */}
            <div className="relative">
              <button 
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                onBlur={() => setTimeout(() => setIsCurrencyOpen(false), 200)}
                className="flex items-center gap-1 text-sm font-semibold text-[#2D4A30] border rounded-full px-3 py-1.5 bg-white hover:bg-[#F4F7F2] transition-colors"
              >
                <span>{selectedCurrency}</span>
                <ChevronDown size={14} />
              </button>
              
              {isCurrencyOpen && (
                <div className="absolute right-0 mt-1 bg-white border rounded-lg shadow-md py-1 min-w-[80px] z-50">
                  {CURRENCY_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSelectedCurrency(opt.value);
                        setIsCurrencyOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-[#F4F7F2] ${selectedCurrency === opt.value ? "font-bold text-[#B8A840]" : "text-[#2D4A30]"}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <LanguageSwitcher />

            <Button asChild className="ml-1 text-sm font-semibold">
              <Link href="/inquiry">{tCommon("planYourTrip")}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-1 text-[#2D4A30]">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-6 py-6 space-y-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navSections.map((section) => (
            <div key={section.key} className="space-y-1">
              <Link href={section.href} className="block font-bold text-base py-1.5 text-[#1B2D1D]">
                {section.label}
              </Link>
              
              {section.menuItems && (
                <div className="pl-4 border-l-2 border-gray-100 space-y-2">
                  {section.menuItems.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <Link
                        href={item.href}
                        className={`block text-sm py-1 font-semibold ${item.subItems ? "text-[#2D4A30]" : "text-[#556458]"}`}
                      >
                        {item.label}
                      </Link>

                      {item.subItems && (
                        <div className="pl-3 border-l border-gray-200/60 space-y-1.5 my-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block text-sm py-1 text-[#728475] hover:text-[#2D4A30]"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Utility Row */}
          <div className="pt-5 border-t border-gray-100 space-y-4">
            <div className="flex items-center gap-4">
              {/* Mobile Currency Swapper */}
              <div className="flex gap-2 bg-[#F4F7F2] p-1 rounded-lg border">
                {CURRENCY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedCurrency(opt.value)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${selectedCurrency === opt.value ? "bg-white text-[#2D4A30] shadow-sm" : "text-[#728475]"}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <LanguageSwitcher />
            </div>
            
            <Button asChild className="w-full py-6 font-semibold text-base">
              <Link href="/inquiry">{tCommon("planYourTrip")}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}