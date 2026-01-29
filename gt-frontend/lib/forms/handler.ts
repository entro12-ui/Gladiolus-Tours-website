import type { ZodType } from "zod"
import { NextResponse } from "next/server"

import { sendMail, type MailAddress } from "@/lib/forms/mailer"
import { badRequest, forbidden, ok, serverError } from "@/lib/forms/response"
import { verifyTurnstileToken } from "@/lib/forms/turnstile"

type HandlerOptions<T extends { turnstileToken: string }> = {
  schema: ZodType<T>
  adminTo?: MailAddress
  buildAdminEmail: (data: T) => { subject: string; text: string; replyTo?: MailAddress }
  buildExtraEmails?: (data: T) => Array<{ to: MailAddress | MailAddress[]; subject: string; text: string; replyTo?: MailAddress }>
}

function getAdminTo(): MailAddress {
  const email = process.env.FASTMAIL_SMTP_USER
  if (!email) throw new Error("FASTMAIL_SMTP_USER is not set")
  return { email, name: "Gladiolus Tours" }
}

export async function handleFormRoute<T extends { turnstileToken: string }>(req: Request, opts: HandlerOptions<T>) {
  try {
    const json = (await req.json().catch(() => null)) as unknown
    if (!json || typeof json !== "object") {
      return badRequest("Invalid request")
    }

    const token = (json as any).turnstileToken
    const verify = await verifyTurnstileToken(typeof token === "string" ? token : null)

    if (!verify.ok) {
      if (verify.error === "missing_token") {
        return forbidden("Verification required")
      }

      console.warn("[turnstile] verification failed", { codes: verify.codes })
      return NextResponse.json(
        { ok: false, error: "Verification failed", codes: verify.codes ?? [] },
        { status: 403 }
      )
    }

    const data = opts.schema.safeParse(json)
    if (!data.success) {
      return badRequest("Invalid form data")
    }

    const adminTo = opts.adminTo ?? getAdminTo()
    const adminMail = opts.buildAdminEmail(data.data)

    await sendMail({
      to: adminTo,
      subject: adminMail.subject,
      text: adminMail.text,
      replyTo: adminMail.replyTo,
    })

    const extra = opts.buildExtraEmails?.(data.data) ?? []
    for (const msg of extra) {
      await sendMail(msg)
    }

    return ok()
  } catch (error) {
    console.error("[form] server error", error)
    return serverError("Something went wrong. Please try again.")
  }
}
