import type React from "react"
import { routing } from "@/i18n/routing"
import "./globals.css"
import GlobalWhatsApp from "@/components/GlobalWhatsApp"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={routing.defaultLocale}>
      <body className="bg-[#F4F7F2] antialiased">

        {children}

        {/* ✅ Global Floating WhatsApp */}
        <GlobalWhatsApp />

      </body>
    </html>
  )
}