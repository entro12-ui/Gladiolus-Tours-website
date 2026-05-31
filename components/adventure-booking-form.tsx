"use client"

import { useMemo, useState } from "react"
import { usePathname, useParams } from "next/navigation"
import { Turnstile } from "@marsidev/react-turnstile"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const BookingSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(80),
  lastName: z.string().min(1, "Last name is required").max(80),
  email: z.string().email("Enter a valid email").max(160),
  phone: z.string().max(40).optional(),
  travelStart: z.string().max(40).optional(),
  travelEnd: z.string().max(40).optional(),
  guests: z.string().max(40).optional(),
  packageName: z.string().max(160).optional(),
  message: z.string().min(10, "Please share a few details").max(4000),
})

type BookingValues = z.infer<typeof BookingSchema>

type PackageOption = {
  name: string
  duration: string
  price: string
}

type AdventureBookingFormProps = {
  adventureTitle: string
  packages: PackageOption[]
}

export function AdventureBookingForm({ adventureTitle, packages }: AdventureBookingFormProps) {
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
  } = useForm<BookingValues>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      travelStart: "",
      travelEnd: "",
      guests: "",
      packageName: packages[0]?.name ?? "",
      message: "",
    },
  })

  const selectedPackage = watch("packageName")

  const resetTurnstile = () => {
    setTurnstileToken(null)
    setTurnstileKey((k) => k + 1)
  }

  const onSubmit = async (values: BookingValues) => {
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
          adventure: adventureTitle,
          packageName: values.packageName,
          ...values,
          sourcePath: pathname,
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as any
        toast.error(data?.error || "Unable to send your booking request")
        resetTurnstile()
        return
      }

      toast.success("Request sent. We’ll confirm details within 24 hours.")
      reset()
      resetTurnstile()
    } catch {
      toast.error("Unable to send your booking request")
      resetTurnstile()
    }
  }

  return (
    <Card className="border-border/50 bg-background/90 shadow-lg">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground">Book this adventure</p>
          <h3 className="text-2xl font-serif text-foreground">{adventureTitle}</h3>
          <p className="text-sm text-muted-foreground">
            Choose a package and share your dates. Our concierge team will confirm availability and customize the plan.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-firstName`}>First name</Label>
              <Input id={`${adventureTitle}-firstName`} autoComplete="given-name" {...register("firstName")} />
              {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-lastName`}>Last name</Label>
              <Input id={`${adventureTitle}-lastName`} autoComplete="family-name" {...register("lastName")} />
              {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-email`}>Email</Label>
              <Input id={`${adventureTitle}-email`} type="email" autoComplete="email" {...register("email")} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-phone`}>Phone (optional)</Label>
              <Input id={`${adventureTitle}-phone`} type="tel" autoComplete="tel" {...register("phone")} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Preferred package</Label>
            <Select value={selectedPackage} onValueChange={(value) => setValue("packageName", value)}>
              <SelectTrigger aria-label="Select package">
                <SelectValue placeholder="Choose a package" />
              </SelectTrigger>
              <SelectContent>
                {packages.map((pkg) => (
                  <SelectItem key={pkg.name} value={pkg.name}>
                    {pkg.name} · {pkg.duration} · {pkg.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-travelStart`}>Start date</Label>
              <Input id={`${adventureTitle}-travelStart`} type="date" {...register("travelStart")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-travelEnd`}>End date</Label>
              <Input id={`${adventureTitle}-travelEnd`} type="date" {...register("travelEnd")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${adventureTitle}-guests`}>Guests</Label>
              <Input id={`${adventureTitle}-guests`} type="number" min={1} placeholder="2" {...register("guests")} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${adventureTitle}-message`}>Custom requests</Label>
            <Textarea
              id={`${adventureTitle}-message`}
              rows={4}
              placeholder="Tell us about fitness level, safari add-ons, or special celebrations."
              {...register("message")}
            />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>

          <div className="space-y-2">
            {!siteKey ? (
              <p className="text-xs text-destructive">Turnstile is not configured.</p>
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
            disabled={isSubmitting || !turnstileToken || !siteKey}
            className="w-full rounded-full bg-gradient-to-r from-primary-alt to-primary py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-primary/25"
          >
            {isSubmitting ? "Sending…" : "Book this adventure"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
