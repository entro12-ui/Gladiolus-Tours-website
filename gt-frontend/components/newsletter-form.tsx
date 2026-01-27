"use client"

import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const NewsletterSchema = z.object({
  email: z.string().email("Enter a valid email").max(160),
  name: z.string().max(120).optional(),
  sendConfirmation: z.boolean().optional(),
})

type NewsletterValues = z.infer<typeof NewsletterSchema>

type NewsletterFormProps = {
  sendConfirmationDefault?: boolean
}

export function NewsletterForm({ sendConfirmationDefault = true }: NewsletterFormProps) {
  const pathname = usePathname()

  const siteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, [])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<NewsletterValues>({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
      name: "",
      sendConfirmation: sendConfirmationDefault,
    },
  })

  const sendConfirmation = watch("sendConfirmation")

  const onSubmit = async (values: NewsletterValues) => {
    try {
      if (!turnstileToken) {
        toast.error("Please complete the verification.")
        return
      }

      const res = await fetch("/api/newsletter", {
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
        toast.error(data?.error || "Unable to subscribe")
        return
      }

      toast.success("Subscribed. Welcome to Gladiolus Tours.")
      reset({ email: "", name: "", sendConfirmation })
      setTurnstileToken(null)
      setTurnstileKey((k) => k + 1)
    } catch {
      toast.error("Unable to subscribe")
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-3">
        <div className="space-y-2">
          <Label htmlFor="newsletterEmail">Email</Label>
          <Input id="newsletterEmail" type="email" autoComplete="email" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="newsletterName">Name (optional)</Label>
          <Input id="newsletterName" autoComplete="name" {...register("name")} />
        </div>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={!!sendConfirmation}
            onChange={(e) => setValue("sendConfirmation", e.target.checked)}
            className="h-4 w-4"
          />
          Send me a confirmation email
        </label>
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

      <Button type="submit" disabled={isSubmitting || !turnstileToken || !siteKey}>
        {isSubmitting ? "Submitting…" : "Subscribe"}
      </Button>
    </form>
  )
}
