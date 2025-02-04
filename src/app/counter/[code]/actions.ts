"use server"

import config from "@/config"
import { getBaseUrl } from "@/lib/helper"

export async function getClicksData(code: string) {
  const url = `${getBaseUrl()}${config.paths.linkClicks(code)}`

  const response = await fetch(url)

  return response.json()
}
