"use client"

import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type NewsletterValues = {
  email: string
  name?: string
  sendConfirmation?: boolean
}

type NewsletterFormProps = {
  sendConfirmationDefault?: boolean
  inputClassName?: string
  buttonClassName?: string
  labelClassName?: string
  mutedTextClassName?: string
}

export function NewsletterForm({
  sendConfirmationDefault = true,
  inputClassName,
  buttonClassName,
  labelClassName,
  mutedTextClassName,
}: NewsletterFormProps) {
  const pathname = usePathname()
  const t = useTranslations("forms.newsletter")
  const tCommon = useTranslations("forms.common")

  const siteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, [])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)
  const newsletterSchema = useMemo(
    () =>
      z.object({
        email: z.string().email(t("errors.email")).max(160),
        name: z.string().max(120).optional(),
        sendConfirmation: z.boolean().optional(),
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
      name: "",
      sendConfirmation: sendConfirmationDefault,
    },
  })

  const sendConfirmation = watch("sendConfirmation")

  const resetTurnstile = () => {
    setTurnstileToken(null)
    setTurnstileKey((k) => k + 1)
  }

  const onSubmit = async (values: NewsletterValues) => {
    try {
      if (!turnstileToken) {
        toast.error(t("toasts.completeVerification"))
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
        toast.error(data?.error || t("toasts.subscribeError"))
        resetTurnstile()
        return
      }

      toast.success(t("toasts.subscribeSuccess"))
      reset({ email: "", name: "", sendConfirmation })
      resetTurnstile()
    } catch {
      toast.error(t("toasts.subscribeError"))
      resetTurnstile()
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-3">
        <div className="space-y-2">
          <Label htmlFor="newsletterEmail" className={labelClassName}>
            {t("labels.email")}
          </Label>
          <Input
            id="newsletterEmail"
            type="email"
            autoComplete="email"
            className={inputClassName}
            placeholder={t("placeholders.email")}
            {...register("email")}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="newsletterName" className={labelClassName}>
            {t("labels.name")}
          </Label>
          <Input id="newsletterName" autoComplete="name" className={inputClassName} placeholder={t("placeholders.name")} {...register("name")} />
        </div>

        <label className={`flex items-center gap-2 text-sm ${mutedTextClassName ?? "text-muted-foreground"}`}
        >
          <input
            type="checkbox"
            checked={!!sendConfirmation}
            onChange={(e) => setValue("sendConfirmation", e.target.checked)}
            className="h-4 w-4"
          />
          {t("labels.sendConfirmation")}
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">{tCommon("verification")}</p>
        {!siteKey ? (
          <p className="text-sm text-destructive">{tCommon("turnstileNotConfigured")}</p>
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
        disabled={isSubmitting || !turnstileToken || !siteKey}
        className={buttonClassName}
      >
        {isSubmitting ? t("buttons.submitting") : t("buttons.submit")}
      </Button>
    </form>
  )
}
