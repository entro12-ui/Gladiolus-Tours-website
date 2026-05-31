import type { HomeContent } from "./types"
import { deHomeContent } from "./de"
import { enHomeContent } from "./en"
import { esHomeContent } from "./es"
import { frHomeContent } from "./fr"

export function getHomeContent(locale: string): HomeContent {
  const normalized = locale.toLowerCase()

  if (normalized === "fr") {
    return frHomeContent
  }

  if (normalized === "de") {
    return deHomeContent
  }

  if (normalized === "es") {
    return esHomeContent
  }

  return enHomeContent
}
