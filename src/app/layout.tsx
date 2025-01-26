import clsx from "clsx"
import { Montserrat } from "next/font/google"

import { RootHeader } from "@/widgets/RootHeader"

import type { Metadata } from "next"

import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Сокращатель ссылок",
  description: "Бесплатно сокращайте ваши ссылки",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={clsx("bg-gray-200", montserrat.className)}>
        <RootHeader />
        {children}
      </body>
    </html>
  )
}
