"use client"

interface WhatsAppButtonProps {
  phoneNumber: string
  className?: string
  children: React.ReactNode
}

export default function WhatsAppButton({ phoneNumber, className, children }: WhatsAppButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button"
      })
    }
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}