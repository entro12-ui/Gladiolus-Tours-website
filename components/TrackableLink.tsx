"use client"

import { Link } from "@/i18n/routing"
import { trackEvent } from "@/lib/gtag"

interface TrackableLinkProps {
  href: string
  children: React.ReactNode
  eventName: string
  eventLabel?: string
  className?: string
  target?: string
}

export default function TrackableLink({
  href,
  children,
  eventName,
  eventLabel,
  className,
  target,
}: TrackableLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, "engagement", eventLabel)
  }

  return (
    <Link href={href} className={className} onClick={handleClick} target={target}>
      {children}
    </Link>
  )
}