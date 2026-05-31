import { adventures } from "@/lib/adventures-data"
import { dayTrips } from "@/lib/day-trips-data"
import { destinations } from "@/lib/destinations-data"
import { resolveDestinationSlug, resolveSafariSlug } from "@/lib/route-aliases"
import { safariPackages } from "@/lib/safaris-data"
import { localizeList, mergeLocalized, normalizeLocale } from "@/lib/i18n/localize"
import { majorMountainTreks, otherNotableHikes } from "@/lib/treks-data"
import { zanzibarExperiences } from "@/lib/zanzibar-experiences"
import { deLocalizedOverlays } from "./de"
import { esLocalizedOverlays } from "./es"
import { frLocalizedOverlays } from "./fr"

const allTreks = [...majorMountainTreks, ...otherNotableHikes]

function getOverlays(locale: string) {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frLocalizedOverlays
  }

  if (normalized === "de") {
    return deLocalizedOverlays
  }

  if (normalized === "es") {
    return esLocalizedOverlays
  }

  return undefined
}

export function getLocalizedSafaris(locale: string) {
  return localizeList(safariPackages, locale, getOverlays(locale)?.safaris)
}

export function getLocalizedDayTrips(locale: string) {
  return localizeList(dayTrips, locale, getOverlays(locale)?.dayTrips)
}

export function getLocalizedZanzibar(locale: string) {
  return localizeList(zanzibarExperiences, locale, getOverlays(locale)?.zanzibar)
}

export function getLocalizedAdventures(locale: string) {
  return localizeList(adventures, locale, getOverlays(locale)?.adventures)
}

export function getLocalizedDestinations(locale: string) {
  return localizeList(destinations, locale, getOverlays(locale)?.destinations)
}

export function getLocalizedTreks(locale: string) {
  return localizeList(allTreks, locale, getOverlays(locale)?.treks)
}

export function getSafariBySlug(slug: string, locale: string) {
  const resolved = resolveSafariSlug(slug)
  const base = safariPackages.find((item) => item.slug === resolved)

  if (!base) {
    return undefined
  }

  return mergeLocalized(base, getOverlays(locale)?.safaris?.[base.slug])
}

export function getDayTripBySlug(slug: string, locale: string) {
  const base = dayTrips.find((item) => item.slug === slug)

  if (!base) {
    return undefined
  }

  return mergeLocalized(base, getOverlays(locale)?.dayTrips?.[base.slug])
}

export function getZanzibarExperience(slug: string, locale: string) {
  const base = zanzibarExperiences.find((item) => item.slug === slug)

  if (!base) {
    return undefined
  }

  return mergeLocalized(base, getOverlays(locale)?.zanzibar?.[base.slug])
}

export function getDestinationBySlug(identifier: string, locale: string) {
  const resolved = resolveDestinationSlug(identifier)
  const base = destinations.find(
    (item) => item.slug === resolved || item.id === resolved
  )

  if (!base) {
    return undefined
  }

  return mergeLocalized(base, getOverlays(locale)?.destinations?.[base.slug])
}

export function getTrekBySlug(identifier: string, locale: string) {
  const base = allTreks.find(
    (item) => item.slug === identifier || item.id === identifier
  )

  if (!base) {
    return undefined
  }

  return mergeLocalized(base, getOverlays(locale)?.treks?.[base.slug])
}
