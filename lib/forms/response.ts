import { NextResponse } from "next/server"

export type ApiOk<T = undefined> = { ok: true; data?: T }
export type ApiErr = { ok: false; error: string }

export function ok<T>(data?: T, init?: ResponseInit) {
  const body: ApiOk<T> = data === undefined ? { ok: true } : { ok: true, data }
  return NextResponse.json(body, { status: 200, ...init })
}

export function badRequest(message: string) {
  const body: ApiErr = { ok: false, error: message }
  return NextResponse.json(body, { status: 400 })
}

export function forbidden(message: string) {
  const body: ApiErr = { ok: false, error: message }
  return NextResponse.json(body, { status: 403 })
}

export function serverError(message: string) {
  const body: ApiErr = { ok: false, error: message }
  return NextResponse.json(body, { status: 500 })
}
