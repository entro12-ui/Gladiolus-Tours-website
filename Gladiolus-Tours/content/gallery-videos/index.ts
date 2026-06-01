import { normalizeLocale } from "@/lib/i18n/localize"
import { deGalleryVideosContent } from "./de"
import { enGalleryVideosContent } from "./en"
import { esGalleryVideosContent } from "./es"
import { frGalleryVideosContent } from "./fr"
import type { GalleryVideosContent } from "./types"

export function getGalleryVideosContent(locale: string): GalleryVideosContent {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frGalleryVideosContent
  }

  if (normalized === "de") {
    return deGalleryVideosContent
  }

  if (normalized === "es") {
    return esGalleryVideosContent
  }

  return enGalleryVideosContent
}
