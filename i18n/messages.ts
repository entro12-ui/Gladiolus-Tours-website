import de from "../messages/de.json"
import en from "../messages/en.json"
import es from "../messages/es.json"
import fr from "../messages/fr.json"
import { routing } from "./routing"

export const localeMessages = {
  en,
  fr,
  de,
  es,
} as const

export type AppLocale = keyof typeof localeMessages

export function getLocaleMessages(locale: string) {
  const normalized = locale.toLowerCase().split("-")[0] as AppLocale

  if (normalized in localeMessages) {
    return localeMessages[normalized]
  }

  return localeMessages[routing.defaultLocale as AppLocale]
}
