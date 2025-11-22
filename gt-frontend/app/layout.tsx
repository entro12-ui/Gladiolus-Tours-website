import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://gladiolustours.com"),
  title: {
    default: "Gladiolus Tours - Unforgettable African Safari Adventures",
    template: "%s | Gladiolus Tours",
  },
  description:
    "Experience the wonder of Africa with Gladiolus Tours. Premium safari experiences, luxury accommodations, and authentic wildlife encounters in Tanzania and Kenya.",
  keywords: [
    "safari",
    "africa tours",
    "wildlife",
    "adventure travel",
    "luxury safari",
    "tanzania",
    "kenya",
    "serengeti",
    "masai mara",
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
    alternateLocale: ["sw_TZ"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
