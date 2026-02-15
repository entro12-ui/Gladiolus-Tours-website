import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { routing } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import "../globals.css"

const headingFont = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const bodyFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladiolustours.com"),
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
        url: absoluteUrl("/favicon.ico"),
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        url: absoluteUrl("/logo-no-bg.png"),
        type: "image/png",
        sizes: "512x512",
      },
      {
        url: absoluteUrl("/logo-002.png"),
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: absoluteUrl("/logo-no-bg.png"),
        type: "image/png",
      },
    ],
    shortcut: [absoluteUrl("/logo-no-bg.png")],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR", "es_ES"],
    url: "https://www.gladiolustours.com",
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
    <html lang={locale} suppressHydrationWarning>
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
