import { z } from "zod"

const TurnstileVerifyResponseSchema = z.object({
  success: z.boolean(),
  "error-codes": z.array(z.string()).optional(),
})

export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; error: "missing_token" | "invalid_token"; codes?: string[] }

export async function verifyTurnstileToken(token: string | undefined | null): Promise<TurnstileVerifyResult> {
  if (!token) {
    return { ok: false, error: "missing_token" }
  }

  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    // Server misconfiguration (do not leak to client)
    throw new Error("TURNSTILE_SECRET_KEY is not set")
  }

  const formData = new FormData()
  formData.append("secret", secret)
  formData.append("response", token)

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
    cache: "no-store",
  })

  if (!res.ok) {
    return { ok: false, error: "invalid_token" }
  }

  const json = await res.json()
  const parsed = TurnstileVerifyResponseSchema.safeParse(json)

  if (!parsed.success) {
    return { ok: false, error: "invalid_token" }
  }

  if (!parsed.data.success) {
    return { ok: false, error: "invalid_token", codes: parsed.data["error-codes"] }
  }

  return { ok: true }
}
