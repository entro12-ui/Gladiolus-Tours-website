import { normalizeLocale } from "@/lib/i18n/localize"
import { dePageUi } from "./de"
import { enPageUi } from "./en"
import { esPageUi } from "./es"
import { frPageUi } from "./fr"
import type { PageUi } from "./types"

export function getPageUi(locale: string): PageUi {
  const normalized = normalizeLocale(locale)

  if (normalized === "fr") {
    return frPageUi
  }

  if (normalized === "de") {
    return dePageUi
  }

  if (normalized === "es") {
    return esPageUi
  }

  return enPageUi
}
