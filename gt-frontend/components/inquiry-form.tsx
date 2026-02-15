"use client"

import { useParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { adventures } from "@/lib/adventures-data"

const InquirySchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().email("Enter a valid email").max(160),
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
  message: z.string().min(10, "Please share a few details").max(4000),
})

type InquiryValues = z.infer<typeof InquirySchema>

export function InquiryForm() {
  const params = useParams()
  const pathname = usePathname()
  const locale = (params.locale as string) || "en"

  const siteKey = useMemo(() => process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY, [])
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileKey, setTurnstileKey] = useState(0)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryValues>({
    resolver: zodResolver(InquirySchema),
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

  const selectedAdventure = adventures.find((item) => item.title === adventure)
  const packageOptions = selectedAdventure?.packages ?? []

  const resetTurnstile = () => {
    setTurnstileToken(null)
    setTurnstileKey((k) => k + 1)
  }

  const onSubmit = async (values: InquiryValues) => {
    try {
      if (!turnstileToken) {
        toast.error("Please complete the verification.")
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
        toast.error(data?.error || "Unable to send your inquiry")
        resetTurnstile()
        return
      }

      toast.success("Inquiry sent. We’ll respond within 24 hours.")
      reset()
      resetTurnstile()
    } catch {
      toast.error("Unable to send your inquiry")
      resetTurnstile()
    }
  }

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-3xl text-foreground mb-2">Tell us about your trip</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Share a few details and we’ll design a tailor-made itinerary and get back to you within 24 hours.
        </p>

        <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold tracking-wide text-foreground">Your details</legend>

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
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-sm font-semibold tracking-wide text-foreground">Trip preferences</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Adventure (optional)</Label>
                <Select value={adventure} onValueChange={(value) => setValue("adventure", value)}>
                  <SelectTrigger aria-label="Select adventure">
                    <SelectValue placeholder="Select an adventure" />
                  </SelectTrigger>
                  <SelectContent>
                    {adventures.map((item) => (
                      <SelectItem key={item.id} value={item.title}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Package (optional)</Label>
                <Select value={packageName} onValueChange={(value) => setValue("packageName", value)}>
                  <SelectTrigger aria-label="Select package">
                    <SelectValue placeholder={adventure ? "Select a package" : "Select an adventure first"} />
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
                        Select an adventure first
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Destination (optional)</Label>
                <Select value={destination} onValueChange={(value) => setValue("destination", value)}>
                  <SelectTrigger aria-label="Select destination">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="serengeti">Serengeti</SelectItem>
                    <SelectItem value="ngorongoro">Ngorongoro Crater</SelectItem>
                    <SelectItem value="tarangire">Tarangire</SelectItem>
                    <SelectItem value="kilimanjaro">Kilimanjaro + safari</SelectItem>
                    <SelectItem value="zanzibar">Zanzibar extension</SelectItem>
                    <SelectItem value="custom">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Travelers (optional)</Label>
                <Select value={travelers} onValueChange={(value) => setValue("travelers", value)}>
                  <SelectTrigger aria-label="Select number of travelers">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3-4">3–4</SelectItem>
                    <SelectItem value="5-8">5–8</SelectItem>
                    <SelectItem value="9+">9+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="travelStart">Start date (optional)</Label>
                <Input id="travelStart" type="date" {...register("travelStart")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelEnd">End date (optional)</Label>
                <Input id="travelEnd" type="date" {...register("travelEnd")} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Guests (optional)</Label>
                <Input id="guests" type="number" min={1} placeholder="2" {...register("guests")} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="travelDate">Preferred travel date (optional)</Label>
                <Input id="travelDate" type="date" {...register("travelDate")} />
              </div>

              <div className="space-y-2">
                <Label>Budget (optional)</Label>
                <Select value={budget} onValueChange={(value) => setValue("budget", value)}>
                  <SelectTrigger aria-label="Select budget range">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mid">Mid-range</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="ultra">Ultra-luxury</SelectItem>
                    <SelectItem value="not-sure">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-sm font-semibold tracking-wide text-foreground">Your vision</legend>
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              rows={7}
              placeholder="Example: 7–9 day private safari, great migration focus, mid-July, 2 adults, luxury lodges…"
              {...register("message")}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
          </fieldset>

          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Verification</p>
            {!siteKey ? (
              <p className="text-sm text-destructive">Turnstile is not configured.</p>
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
            {isSubmitting ? "Sending…" : "Design My Safari"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">Private concierge • 24h response</p>
        </form>
      </CardContent>
    </Card>
  )
}
