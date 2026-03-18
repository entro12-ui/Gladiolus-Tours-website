import "./globals.css"

import { NextIntlClientProvider } from "next-intl"

import { NotFoundView, type NotFoundCopy } from "@/components/not-found-view"
import enMessages from "@/messages/en.json"

const defaultLocale = "en"
const copy = enMessages.notFound as NotFoundCopy

export default function NotFound() {
  return (
    <NextIntlClientProvider locale={defaultLocale} messages={enMessages}>
      <NotFoundView copy={copy} />
    </NextIntlClientProvider>
  )
}
