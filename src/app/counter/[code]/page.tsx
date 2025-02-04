import { UrlClicks } from "@/views/counter/code"

import { getClicksData } from "./actions"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  const { clicks, shortUrl } = await getClicksData(code)

  return <UrlClicks clicks={clicks} shortUrl={shortUrl} />
}
