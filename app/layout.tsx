import type React from "react"
import { routing } from "@/i18n/routing"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={routing.defaultLocale}>
      {children}
    </html>
  )
}
