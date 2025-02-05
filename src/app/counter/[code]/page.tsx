import { ClicksInfo } from "@/views/info"

export default async function Page({ params }: { params: Promise<{ code: string }> }) {
  const code = (await params).code

  return <ClicksInfo code={code} />
}
