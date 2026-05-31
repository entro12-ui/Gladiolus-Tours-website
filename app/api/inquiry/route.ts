import { handleFormRoute } from "@/lib/forms/handler"
import { InquiryPayloadSchema, type InquiryPayload } from "@/lib/forms/schemas"

export const runtime = "nodejs"

function formatInquiryEmail(data: InquiryPayload) {
  const lines = [
    "New safari inquiry received.",
    "",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Adventure: ${data.adventure || "-"}`,
    `Package: ${data.packageName || "-"}`,
    `Destination: ${data.destination || "-"}`,
    `Travelers: ${data.travelers || "-"}`,
    `Preferred travel date: ${data.travelDate || "-"}`,
    `Travel start: ${data.travelStart || "-"}`,
    `Travel end: ${data.travelEnd || "-"}`,
    `Guests: ${data.guests || "-"}`,
    `Budget: ${data.budget || "-"}`,
    `Source path: ${data.sourcePath || "-"}`,
    "",
    "Message:",
    data.message,
    "",
  ]

  return {
    subject: `Inquiry: ${data.firstName} ${data.lastName}`,
    text: lines.join("\n"),
    replyTo: { email: data.email, name: `${data.firstName} ${data.lastName}` },
  }
}

export async function POST(req: Request) {
  return handleFormRoute(req, {
    schema: InquiryPayloadSchema,
    buildAdminEmail: formatInquiryEmail,
  })
}
