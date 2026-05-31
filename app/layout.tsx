import type React from "react"

/**
 * Root layout passthrough — the locale layout owns <html> and <body>.
 * @see https://next-intl-docs.vercel.app/docs/getting-started/app-router
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
