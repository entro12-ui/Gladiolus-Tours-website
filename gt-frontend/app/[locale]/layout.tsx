import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import "../globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://gladiolustours.com"),
  title: {
    default: "Gladiolus Tours - Unforgettable African Safari Adventures",
    template: "%s | Gladiolus Tours",
  },
  description:
    "Experience the wonder of Tanzania with Gladiolus Tours. Premium safari experiences, luxury accommodations, and authentic wildlife encounters across Tanzania.",
  keywords: [
    "safari",
    "africa tours",
    "wildlife",
    "adventure travel",
    "luxury safari",
    "tanzania",
    "serengeti",
    "wildlife photography",
  ],
  authors: [{ name: "Gladiolus Tours" }],
  creator: "Gladiolus Tours",
  publisher: "Gladiolus Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "es_ES"],
    url: "https://gladiolustours.com",
    title: "Gladiolus Tours - Unforgettable African Safari Adventures",
    description: "Experience the wonder of Africa with Gladiolus Tours",
    siteName: "Gladiolus Tours",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gladiolus Tours Safari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gladiolus Tours - Unforgettable African Safari Adventures",
    description: "Experience the wonder of Africa with Gladiolus Tours",
    images: ["/og-image.jpg"],
    creator: "@gladiolustours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  setRequestLocale(locale)

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = (await import(`@/messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
