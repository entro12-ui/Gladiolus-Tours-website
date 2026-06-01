import { handleFormRoute } from "@/lib/forms/handler"
import { NewsletterPayloadSchema, type NewsletterPayload } from "@/lib/forms/schemas"

export const runtime = "nodejs"

function formatNewsletterAdminEmail(data: NewsletterPayload) {
  const lines = [
    "New newsletter subscription.",
    "",
    `Email: ${data.email}`,
    `Name: ${data.name || "-"}`,
    `Source path: ${data.sourcePath || "-"}`,
    "",
  ]

  return {
    subject: "Newsletter subscription",
    text: lines.join("\n"),
    replyTo: { email: data.email, name: data.name || undefined },
  }
}

function buildConfirmationEmail(data: NewsletterPayload) {
  const nameLine = data.name ? `Hi ${data.name},` : "Hi,";

  return {
    to: { email: data.email, name: data.name || undefined },
    subject: "You’re subscribed — Gladiolus Tours",
    text: [
      nameLine,
      "",
      "Thanks for subscribing to Gladiolus Tours updates.",
      "We’ll share safari inspiration, seasonal wildlife highlights, and planning tips.",
      "",
      "If you didn’t request this subscription, you can ignore this email.",
      "",
      "Gladiolus Tours",
    ].join("\n"),
  }
}

export async function POST(req: Request) {
  return handleFormRoute(req, {
    schema: NewsletterPayloadSchema,
    buildAdminEmail: formatNewsletterAdminEmail,
    buildExtraEmails: (data) => {
      if (!data.sendConfirmation) return []
      return [buildConfirmationEmail(data)]
    },
  })
}
