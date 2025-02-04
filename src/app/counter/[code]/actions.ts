import { headers } from "next/headers"

import config from "@/config"
import { getBaseHost } from "@/lib/helper"

export async function getClicksData(code: string) {
  const host = (await headers()).get("host")
  const url = `${getBaseHost(host)}${config.paths.linkClicks(code)}`

  const response = await fetch(url)

  return response.json()
}
