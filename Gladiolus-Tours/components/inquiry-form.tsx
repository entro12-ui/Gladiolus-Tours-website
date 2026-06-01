"use client"

import { useParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { z } from "zod"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getLocalizedAdventures } from "@/content/localized"

type InquiryValues = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  adventure?: string
  packageName?: string
  destination?: string
  travelers?: string
  travelDate?: string
  travelStart?: string
  travelEnd?: string
  guests?: string
  budget?: string
  message: string
}

export function InquiryForm() {
  const params = useParams()
  const pathname = usePathname()
  const locale = (params.locale as string) || "en"
  const t = useTranslations("forms.inquiry")
  const tCommon = useTranslations("forms.common")

  const siteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, [])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)
  const localizedAdventures = useMemo(
    () => getLocalizedAdventures(locale),
    [locale]
  )
  const inquirySchema = useMemo(
    () =>
      z.object({
        firstName: z.string().min(1, t("errors.firstName")).max(80),
        lastName: z.string().min(1, t("errors.lastName")).max(80),
        email: z.string().email(t("errors.email")).max(160),
        phone: z.string().max(40).optional(),
        adventure: z.string().max(160).optional(),
        packageName: z.string().max(160).optional(),
        destination: z.string().max(120).optional(),
        travelers: z.string().max(40).optional(),
        travelDate: z.string().max(40).optional(),
        travelStart: z.string().max(40).optional(),
        travelEnd: z.string().max(40).optional(),
        guests: z.string().max(40).optional(),
        budget: z.string().max(60).optional(),
        message: z.string().min(10, t("errors.message")).max(4000),
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      adventure: "",
      packageName: "",
      destination: "",
      travelers: "",
      travelDate: "",
      travelStart: "",
      travelEnd: "",
      guests: "",
      budget: "",
      message: "",
    },
  })

  const travelers = watch("travelers")
  const destination = watch("destination")
  const budget = watch("budget")
  const adventure = watch("adventure")
  const packageName = watch("packageName")

  const selectedAdventure = localizedAdventures.find((item) => item.title === adventure)
  const packageOptions = selectedAdventure?.packages ?? []

  const resetTurnstile = () => {
    setTurnstileToken(null)
    setTurnstileKey((k) => k + 1)
  }

  const onSubmit = async (values: InquiryValues) => {
    try {
      if (!turnstileToken) {
        toast.error(t("toasts.completeVerification"))
        return
      }

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          turnstileToken,
          ...values,
          sourcePath: pathname,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as any
        toast.error(data?.error || t("toasts.sendError"))
        resetTurnstile()
        return
      }

      toast.success(t("toasts.sendSuccess"))
      reset()
      resetTurnstile()
    } catch {
      toast.error(t("toasts.sendError"))
      resetTurnstile()
    }
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl text-foreground mb-2">{t("title")}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {t("description")}
        </p>

        <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold tracking-wide text-foreground">{t("sections.details")}</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("labels.firstName")}</Label>
                <Input id="firstName" autoComplete="given-name" placeholder={t("placeholders.firstName")} {...register("firstName")} />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("labels.lastName")}</Label>
                <Input id="lastName" autoComplete="family-name" placeholder={t("placeholders.lastName")} {...register("lastName")} />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">{t("labels.email")}</Label>
                <Input id="email" type="email" autoComplete="email" placeholder={t("placeholders.email")} {...register("email")} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">{t("labels.phone")}</Label>
                <Input id="phone" type="tel" autoComplete="tel" placeholder={t("placeholders.phone")} {...register("phone")} />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold tracking-wide text-foreground">{t("sections.preferences")}</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{t("labels.adventure")}</Label>
                <Select value={adventure} onValueChange={(value) => setValue("adventure", value)}>
                  <SelectTrigger aria-label={t("aria.selectAdventure")}>
                    <SelectValue placeholder={t("placeholders.adventure")} />
                  </SelectTrigger>
                  <SelectContent>
                    {localizedAdventures.map((item) => (
                      <SelectItem key={item.id} value={item.title}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("labels.packageName")}</Label>
                <Select value={packageName} onValueChange={(value) => setValue("packageName", value)}>
                  <SelectTrigger aria-label={t("aria.selectPackage")}>
                    <SelectValue placeholder={adventure ? t("placeholders.packageName") : t("placeholders.packageNameDisabled")} />
                  </SelectTrigger>
                  <SelectContent>
                    {packageOptions.length > 0 ? (
                      packageOptions.map((pkg) => (
                        <SelectItem key={pkg.name} value={pkg.name}>
                          {pkg.name} · {pkg.duration} · {pkg.price}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="select-adventure" disabled>
                        {t("placeholders.packageNameDisabled")}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{t("labels.destination")}</Label>
                <Select value={destination} onValueChange={(value) => setValue("destination", value)}>
                  <SelectTrigger aria-label={t("aria.selectDestination")}>
                    <SelectValue placeholder={t("placeholders.destination")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serengeti">{t("options.destinations.serengeti")}</SelectItem>
                    <SelectItem value="ngorongoro">{t("options.destinations.ngorongoro")}</SelectItem>
                    <SelectItem value="tarangire">{t("options.destinations.tarangire")}</SelectItem>
                    <SelectItem value="kilimanjaro">{t("options.destinations.kilimanjaro")}</SelectItem>
                    <SelectItem value="zanzibar">{t("options.destinations.zanzibar")}</SelectItem>
                    <SelectItem value="custom">{t("options.destinations.custom")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>{t("labels.travelers")}</Label>
                <Select value={travelers} onValueChange={(value) => setValue("travelers", value)}>
                  <SelectTrigger aria-label={t("aria.selectTravelers")}>
                    <SelectValue placeholder={t("placeholders.select")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">{t("options.travelers.one")}</SelectItem>
                    <SelectItem value="2">{t("options.travelers.two")}</SelectItem>
                    <SelectItem value="3-4">{t("options.travelers.threeToFour")}</SelectItem>
                    <SelectItem value="5-8">{t("options.travelers.fiveToEight")}</SelectItem>
                    <SelectItem value="9+">{t("options.travelers.ninePlus")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="travelStart">{t("labels.travelStart")}</Label>
                <Input id="travelStart" type="date" {...register("travelStart")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelEnd">{t("labels.travelEnd")}</Label>
                <Input id="travelEnd" type="date" {...register("travelEnd")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">{t("labels.guests")}</Label>
                <Input id="guests" type="number" min={1} placeholder={t("placeholders.guests")} {...register("guests")} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="travelDate">{t("labels.travelDate")}</Label>
                <Input id="travelDate" type="date" {...register("travelDate")} />
              </div>

              <div className="space-y-2">
                <Label>{t("labels.budget")}</Label>
                <Select value={budget} onValueChange={(value) => setValue("budget", value)}>
                  <SelectTrigger aria-label={t("aria.selectBudget")}>
                    <SelectValue placeholder={t("placeholders.select")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mid">{t("options.budget.mid")}</SelectItem>
                    <SelectItem value="luxury">{t("options.budget.luxury")}</SelectItem>
                    <SelectItem value="ultra">{t("options.budget.ultra")}</SelectItem>
                    <SelectItem value="not-sure">{t("options.budget.notSure")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold tracking-wide text-foreground">{t("sections.vision")}</legend>
            <Label htmlFor="message" className="sr-only">
              {t("labels.message")}
            </Label>
            <Textarea
              id="message"
              rows={7}
              placeholder={t("placeholders.message")}
              {...register("message")}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </fieldset>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">{tCommon("verification")}</p>
            {!siteKey ? (
              <p className="text-sm text-destructive">{tCommon("turnstileNotConfigured")}</p>
            ) : (
              <Turnstile
                key={turnstileKey}
                siteKey={siteKey}
                options={{ language: locale }}
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
            {isSubmitting ? t("buttons.submitting") : t("buttons.submit")}
          </Button>

          <p className="text-xs text-muted-foreground text-center">{t("helper")}</p>
        </form>
      </CardContent>
    </Card>
  )
}
