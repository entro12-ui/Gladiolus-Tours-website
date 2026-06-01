import { normalizeLocale } from "@/lib/i18n/localize"
import { deTestimonialsContent } from "./de"
import { enTestimonialsContent } from "./en"
import { esTestimonialsContent } from "./es"
import { frTestimonialsContent } from "./fr"
import type { TestimonialsContent } from "./types"

export function getTestimonialsContent(locale: string): TestimonialsContent {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") return frTestimonialsContent
  if (normalized === "de") return deTestimonialsContent
  if (normalized === "es") return esTestimonialsContent

  return enTestimonialsContent
}

export type { TestimonialsContent, TestimonialReview } from "./types"
