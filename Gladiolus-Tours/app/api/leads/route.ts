export async function POST(req: Request) {
  void req
  return Response.json(
    {
      ok: false,
      error: "This endpoint has been deprecated. Please submit via the correct form.",
    },
    { status: 410 },
  )
}
