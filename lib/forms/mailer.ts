import nodemailer, { type Transporter } from "nodemailer"

export type MailAddress = {
  email: string
  name?: string
}

export type SendMailInput = {
  to: MailAddress | MailAddress[]
  subject: string
  text: string
  replyTo?: MailAddress
}

let transport: Transporter | null = null

function getFastmailTransport(): Transporter {
  if (transport) return transport

  const host = process.env.FASTMAIL_SMTP_HOST
  const portRaw = process.env.FASTMAIL_SMTP_PORT
  const user = process.env.FASTMAIL_SMTP_USER
  const pass = process.env.FASTMAIL_SMTP_PASS

  if (!host) throw new Error("FASTMAIL_SMTP_HOST is not set")
  if (!portRaw) throw new Error("FASTMAIL_SMTP_PORT is not set")
  if (!user) throw new Error("FASTMAIL_SMTP_USER is not set")
  if (!pass) throw new Error("FASTMAIL_SMTP_PASS is not set")

  const port = Number(portRaw)
  if (!Number.isFinite(port)) {
    throw new Error("FASTMAIL_SMTP_PORT must be a number")
  }

  transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
  })

  return transport
}

function normalizeAddress(addr: MailAddress): { address: string; name?: string } {
  return { address: addr.email, name: addr.name }
}

export async function sendMail(input: SendMailInput) {
  const user = process.env.FASTMAIL_SMTP_USER
  if (!user) throw new Error("FASTMAIL_SMTP_USER is not set")

  const transporter = getFastmailTransport()

  const to = Array.isArray(input.to) ? input.to.map(normalizeAddress) : normalizeAddress(input.to)

  await transporter.sendMail({
    from: { address: user, name: "Gladiolus Tours" },
    to,
    subject: input.subject,
    text: input.text,
    replyTo: input.replyTo ? normalizeAddress(input.replyTo) : undefined,
  })
}
