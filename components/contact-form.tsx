"use client"

import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().email("Enter a valid email").max(160),
  phone: z.string().max(40).optional(),
  subject: z.string().min(2, "Subject is required").max(160),
  message: z.string().min(10, "Please include a short message").max(4000),
})

type ContactValues = z.infer<typeof ContactSchema>

export function ContactForm() {
  const pathname = usePathname()

  const siteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, [])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  const resetTurnstile = () => {
    setTurnstileToken(null)
    setTurnstileKey((k) => k + 1)
  }

  const onSubmit = async (values: ContactValues) => {
    try {
      if (!turnstileToken) {
        toast.error("Please complete the verification.")
        return
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          turnstileToken,
          ...values,
          sourcePath: pathname,
        }),
      })

      const data = (await res.json().catch(() => null)) as any
      if (!res.ok) {
        toast.error(data?.error || "Unable to send your message")
        resetTurnstile()
        return
      }

      toast.success("Message sent. We’ll get back to you soon.")
      reset()
      resetTurnstile()
    } catch {
      toast.error("Unable to send your message")
      resetTurnstile()
    }
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl text-foreground mb-2">Send us a message</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Questions, custom requests, or quick planning help — we’re here.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" autoComplete="given-name" {...register("firstName")} />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" autoComplete="family-name" {...register("lastName")} />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" {...register("subject")} />
            {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={7} {...register("message")} />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Verification</p>
            {!siteKey ? (
              <p className="text-sm text-destructive">Turnstile is not configured.</p>
            ) : (
              <Turnstile
                key={turnstileKey}
                siteKey={siteKey}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken(null)}
                onExpire={() => setTurnstileToken(null)}
              />
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || !turnstileToken || !siteKey}
            className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-primary/30 ring-1 ring-primary/30 hover:from-primary-alt/90 hover:to-primary/90"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
