import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HOMEPAGE_ROUTE, URL_STATS_ROUTE } from "@/routes"

import type { FC } from "react"

type Props = {
  clicks: number
  shortUrl: string
}

export const UrlClicks: FC<Props> = ({ clicks, shortUrl }) => (
  <div className="container max-w-md pt-10 sm:pt-20">
    <div className="grid gap-5">
      <h3 className="text-lg sm:text-xl font-semibold">Статистика кликов по ссылке</h3>
      <a className="underline" href={`https://${shortUrl}`} target="_blank">
        {shortUrl}
      </a>
      <span className="font-semibold text-6xl">{clicks}</span>
      <div className="grid gap-4">
        <Link href={URL_STATS_ROUTE}>
          <Button variant="secondary" className="max-w-full w-full">
            Проверить клики другой ссылки
          </Button>
        </Link>
        <Link href={HOMEPAGE_ROUTE}>
          <Button variant="secondary" className="max-w-full w-full">
            Сократить другую ссылку
          </Button>
        </Link>
      </div>
    </div>
  </div>
)
