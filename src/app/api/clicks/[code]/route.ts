import { NextRequest } from "next/server"

import { getBaseUrl } from "@/lib/helper"

export async function GET(request: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  const url = `${getBaseUrl()}/link/clicks/${code}`
  const res = await fetch(url)

  const data = await res.json()

  return Response.json(data)
}
