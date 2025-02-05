"use client"

import useSWR from "swr"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { HOMEPAGE_ROUTE, URL_STATS_ROUTE } from "@/routes"
import config from "@/config"
import { getBaseUrl } from "@/lib/helper"
import { Skeleton } from "@/components/ui/skeleton"

import { getClicksData } from "./api/actions"

import type { FC } from "react"

type Props = {
  code: string
}

export const ClicksInfo: FC<Props> = ({ code }) => {
  const { data, isLoading } = useSWR(`${getBaseUrl()}${config.paths.linkClicks(code)}`, getClicksData)

  return (
    <div className="container max-w-md pt-10 sm:pt-20">
      <div className="grid gap-5">
        <h3 className="text-lg sm:text-xl font-semibold">Статистика кликов по ссылке</h3>
        {isLoading ? (
          <Skeleton className="h-[104px] w-full rounded-xl" />
        ) : (
          <>
            <a className="underline" href={`https://${data?.shortUrl}`} target="_blank">
              {data?.shortUrl}
            </a>
            <span className="font-semibold text-6xl">{data?.clicks}</span>
          </>
        )}
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
}
