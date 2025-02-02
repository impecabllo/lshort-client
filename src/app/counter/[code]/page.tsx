import config from "@/config"
import { getBaseUrl } from "@/lib/helper"
import { UrlClicks } from "@/views/counter/code"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  const url = `${getBaseUrl()}${config.paths.linkClicks(code)}`
  const data = await fetch(url)
  const { clicks, shortUrl } = await data.json()

  return <UrlClicks clicks={clicks} shortUrl={shortUrl} />
}
