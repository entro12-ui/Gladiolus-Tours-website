import { NextResponse } from "next/server"
import { z } from "zod"

const LeadSchema = z.object({
  type: z.enum(["inquiry", "contact"]).default("inquiry"),
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  email: z.string().email().max(160),
  phone: z.string().max(40).optional().or(z.literal("")),
  destination: z.string().max(120).optional().or(z.literal("")),
  travelers: z.string().max(40).optional().or(z.literal("")),
  travelDate: z.string().max(40).optional().or(z.literal("")),
  budget: z.string().max(60).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
  locale: z.string().max(10).optional().or(z.literal("")),
  sourcePath: z.string().max(500).optional().or(z.literal("")),
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const lead = LeadSchema.parse(json)

    // TODO: send to email/CRM (Resend/Sendgrid/etc) and/or store in a DB.
    // For now we keep this endpoint as a validated, unified intake.
    console.info("[leads] received", {
      type: lead.type,
      email: lead.email,
      destination: lead.destination,
      travelers: lead.travelers,
      travelDate: lead.travelDate,
      budget: lead.budget,
      locale: lead.locale,
      sourcePath: lead.sourcePath,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "Invalid form data", issues: error.issues },
        { status: 400 },
      )
    }

    console.error("[leads] error", error)
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 },
    )
  }
}
