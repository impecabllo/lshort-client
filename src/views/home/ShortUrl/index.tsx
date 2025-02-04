"use client"

import { z } from "zod"

import { FormSchema, ShortUrlForm } from "./components/Form"
import { ShortUrlResult } from "./components/Result"
import { createShortUrl } from "./components/actions"

import { useState, type FC } from "react"
import type { ResultData } from "./types"

const defaultResultData: ResultData = {
  shortUrl: "",
  originalUrl: "",
  urlCode: "",
}

export const ShortUrl: FC = () => {
  const [resultData, setResultData] = useState<ResultData>(defaultResultData)
  const [isRequestLoading, setRequestLoading] = useState(false)

  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    setRequestLoading(true)

    const { shortUrl, originalUrl, urlCode } = await createShortUrl({
      link: data.link,
    })

    setResultData({
      shortUrl,
      originalUrl,
      urlCode,
    })

    setRequestLoading(false)
  }

  const handleReset = () => {
    setResultData(defaultResultData)
  }

  return (
    <div className="container lg:flex lg:items-center lg:mt-[-64px] lg:h-[100vh] md:max-w-2xl w-full pt-10 sm:pt-20 lg:pt-0">
      <div className="sm:hidden text-center mb-8 text-2xl font-bold">
        <span className="underline">Бесплатный</span>
        <br />
        сокращатель ссылок
      </div>

      {resultData.shortUrl ? (
        <ShortUrlResult {...resultData} onReset={handleReset} />
      ) : (
        <ShortUrlForm isLoading={isRequestLoading} onSubmit={handleSubmit} />
      )}
    </div>
  )
}
