import Link from "next/link"
import { IconLink } from "@tabler/icons-react"

import { HOMEPAGE_ROUTE } from "@/routes"

import type { FC } from "react"

export const RootHeader: FC = () => {
  return (
    <div className="container">
      <div className="flex h-12 md:h-16 items-center justify-between border-b-slate-300 border-b">
        <div className="flex items-center gap-2 cursor-pointer text-gray-800">
          <IconLink size={24} />
          <Link href={HOMEPAGE_ROUTE} className="font-bold">
            LSHORT
          </Link>
        </div>

        <div className="hidden sm:block">
          <span className="underline">Бесплатный</span> сокращатель ссылок
        </div>
      </div>
    </div>
  )
}
