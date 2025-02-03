import { getBaseUrl } from "@/lib/helper"

import type { CreateShortUrlData } from "../types"

export async function createShortUrl(formData: CreateShortUrlData) {
  const payload = {
    originalUrl: formData.link,
  }

  const url = `${getBaseUrl()}/link`
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  })

  return response.json()
}
