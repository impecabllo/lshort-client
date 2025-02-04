import { UrlClicks } from "@/views/counter/code"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  const { clicks, shortUrl } = { clicks: 0, shortUrl: code || "" }

  return <UrlClicks clicks={clicks} shortUrl={shortUrl} />
}
