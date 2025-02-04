"use server"

import { headers } from "next/headers"

import config from "@/config"

import type { CreateShortUrlData } from "../types"
import { getBaseHost } from "@/lib/helper"

export async function createShortUrl(formData: CreateShortUrlData) {
  const host = (await headers()).get("host")
  const url = `${getBaseHost(host)}${config.paths.shortUrl}`

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
