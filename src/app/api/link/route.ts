import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const { originalUrl } = await request.json()

  const payload = {
    originalUrl,
  }

  const url = `https://api.lshort.ru/link`
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  return Response.json(data)
}
