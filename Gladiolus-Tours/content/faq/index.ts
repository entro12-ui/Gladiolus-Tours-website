import { normalizeLocale } from "@/lib/i18n/localize"
import { deFaqContent } from "./de"
import { enFaqContent } from "./en"
import { esFaqContent } from "./es"
import { frFaqContent } from "./fr"
import type { FaqContent } from "./types"

export function getFaqContent(locale: string): FaqContent {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frFaqContent
  }

  if (normalized === "de") {
    return deFaqContent
  }

  if (normalized === "es") {
    return esFaqContent
  }

  return enFaqContent
}
