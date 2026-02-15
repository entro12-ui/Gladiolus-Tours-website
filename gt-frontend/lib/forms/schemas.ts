import { z } from "zod"

const TurnstileTokenSchema = z.string().min(1)

export const InquiryPayloadSchema = z
  .object({
    turnstileToken: TurnstileTokenSchema,
    firstName: z.string().min(1).max(80),
    lastName: z.string().min(1).max(80),
    email: z.string().email().max(160),
    phone: z.string().max(40).optional().or(z.literal("")),
    adventure: z.string().max(160).optional().or(z.literal("")),
    packageName: z.string().max(160).optional().or(z.literal("")),
    destination: z.string().max(120).optional().or(z.literal("")),
    travelers: z.string().max(40).optional().or(z.literal("")),
    travelDate: z.string().max(40).optional().or(z.literal("")),
    travelStart: z.string().max(40).optional().or(z.literal("")),
    travelEnd: z.string().max(40).optional().or(z.literal("")),
    guests: z.string().max(40).optional().or(z.literal("")),
    budget: z.string().max(60).optional().or(z.literal("")),
    message: z.string().min(10).max(4000),
    sourcePath: z.string().max(500).optional().or(z.literal("")),
  })
  .strict()

export type InquiryPayload = z.infer<typeof InquiryPayloadSchema>

export const ContactPayloadSchema = z
  .object({
    turnstileToken: TurnstileTokenSchema,
    firstName: z.string().min(1).max(80),
    lastName: z.string().min(1).max(80),
    email: z.string().email().max(160),
    phone: z.string().max(40).optional().or(z.literal("")),
    subject: z.string().min(2).max(160),
    message: z.string().min(10).max(4000),
    sourcePath: z.string().max(500).optional().or(z.literal("")),
  })
  .strict()

export type ContactPayload = z.infer<typeof ContactPayloadSchema>

export const NewsletterPayloadSchema = z
  .object({
    turnstileToken: TurnstileTokenSchema,
    email: z.string().email().max(160),
    name: z.string().max(120).optional().or(z.literal("")),
    sourcePath: z.string().max(500).optional().or(z.literal("")),
    sendConfirmation: z.boolean().optional(),
  })
  .strict()

export type NewsletterPayload = z.infer<typeof NewsletterPayloadSchema>
