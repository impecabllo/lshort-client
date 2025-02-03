import { headers } from "next/headers"

import { getBaseHost } from "@/lib/helper"
import config from "@/config"

export async function getClicksData(code: string) {
  const host = (await headers()).get("host")
  const url = `${getBaseHost(host)}${config.paths.linkClicks(code)}`

  const response = await fetch(url)

  return response.json()
}
