import config from "@/config"
import { getBaseUrl } from "@/lib/helper"

import type { CreateShortUrlData } from "../types"

export async function createShortUrl(formData: CreateShortUrlData) {
  const url = `${getBaseUrl()}${config.paths.shortUrl}`

  const payload = {
    originalUrl: formData.link,
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  return response.json()
}
