import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/components/language-provider"
import { Toaster } from "@/components/ui/sonner"
import GlobalWhatsApp from "@/components/GlobalWhatsApp"
import { routing } from "@/i18n/routing"
import { absoluteUrl } from "@/lib/seo"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
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
  icons: {
    icon: [
      {
        url: absoluteUrl("/favicon.ico"),
        type: "image/x-icon",
        sizes: "32x32",
      },
      {
        url: absoluteUrl("/logo.png"),
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://www.gladiolustours.com",
    title: "Gladiolus Tours - Unforgettable African Safari Adventures",
    description:
      "Experience the wonder of Tanzania with Gladiolus Tours.",
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
    description:
      "Experience the wonder of Tanzania with Gladiolus Tours.",
    images: ["/og-image.jpg"],
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

/* ✅ TypeScript global gtag declaration */
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
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

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>

        {/* ✅ Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GKEVH487ZQ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </NextIntlClientProvider>
        <Toaster richColors closeButton />
        <GlobalWhatsApp />
      </body>
    </html>
  )
}