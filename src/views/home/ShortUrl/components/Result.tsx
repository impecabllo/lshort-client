import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getUrlStatsRoute } from "@/routes"

import type { FC } from "react"

type Props = {
  shortUrl: string
  originalUrl: string
  urlCode: string
  onReset: () => void
}

export const ShortUrlResult: FC<Props> = ({ shortUrl, originalUrl, urlCode, onReset }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
  }

  return (
    <div className="relative w-full">
      <div className="absolute top-[-20px]">
        <p className="text-sm text-gray-600">Короткая ссылка:</p>
      </div>

      <div className="flex w-full sm:items-center gap-x-2 gap-y-8 flex-col sm:flex-row">
        <Input value={shortUrl} readOnly className="bg-gray-100 h-[56px] w-full" />

        <Button className="h-[56px] text-lg sm:min-w-[160px]" onClick={handleCopy}>
          Скопировать
        </Button>
      </div>

      <div className="mt-[24px] md:mt-0 md:absolute md:top-[80px] grid gap-y-6 w-full overflow-hidden">
        <p>
          Длинная ссылка:{" "}
          <a className="underline break-all" href={originalUrl} target="_blank">
            {originalUrl}
          </a>
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link href={getUrlStatsRoute(urlCode)}>
            <Button variant="secondary" className="max-w-full w-full">
              Количество кликов по ссылке
            </Button>
          </Link>
          <Button variant="secondary" className="max-w-full w-full" onClick={onReset}>
            Сократить другую ссылку
          </Button>
        </div>
      </div>
    </div>
  )
}
