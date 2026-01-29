import { handleFormRoute } from "@/lib/forms/handler"
import { ContactPayloadSchema, type ContactPayload } from "@/lib/forms/schemas"

export const runtime = "nodejs"

function formatContactEmail(data: ContactPayload) {
  const lines = [
    "New contact message received.",
    "",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Subject: ${data.subject}`,
    `Source path: ${data.sourcePath || "-"}`,
    "",
    "Message:",
    data.message,
    "",
  ]

  return {
    subject: `Contact: ${data.subject}`,
    text: lines.join("\n"),
    replyTo: { email: data.email, name: `${data.firstName} ${data.lastName}` },
  }
}

export async function POST(req: Request) {
  return handleFormRoute(req, {
    schema: ContactPayloadSchema,
    buildAdminEmail: formatContactEmail,
  })
}
