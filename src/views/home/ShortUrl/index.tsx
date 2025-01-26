"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"

import { urlRegex } from "@/lib/helper"

import type { FC } from "react"

const FormSchema = z.object({
  link: z
    .string()
    .nonempty({
      message: "Введите ссылку",
    })
    .regex(urlRegex, {
      message: "Введите корректную ссылку",
    }),
})

export const ShortUrl: FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      link: "",
    },
  })

  const onSubmit = () => {
    // data: z.infer<typeof FormSchema>
  }

  return (
    <div className="container lg:flex lg:items-center lg:mt-[-64px] lg:h-[100vh] md:max-w-2xl w-full pt-10 sm:pt-20 lg:pt-0">
      <div className="sm:hidden text-center mb-8 text-2xl font-bold">
        <span className="underline">Бесплатный</span>
        <br />
        сокращатель ссылок
      </div>
      <Form {...form}>
        <form
          className="flex w-full sm:items-center gap-x-2 gap-y-8 flex-col sm:flex-row"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Вставьте ссылку для сокращения"
                    className="bg-gray-100 h-[56px]"
                    autoFocus
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            )}
          />

          <Button type="submit" className="h-[56px] text-lg">
            Сократить
          </Button>
        </form>
      </Form>
    </div>
  )
}
