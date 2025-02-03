import { NextRequest } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  const url = `https://api.lshort.ru/link/clicks/${code}`
  const res = await fetch(url)

  const data = await res.json()

  return Response.json(data)
}
