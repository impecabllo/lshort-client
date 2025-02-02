import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { urlRegex } from "@/lib/helper"

import type { FC } from "react"

export const FormSchema = z.object({
  link: z
    .string()
    .nonempty({
      message: "Введите ссылку",
    })
    .regex(urlRegex, {
      message: "Введите корректную ссылку",
    }),
})

type Props = {
  onSubmit: (data: z.infer<typeof FormSchema>) => void
  isLoading: boolean
}

export const ShortUrlForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      link: "",
    },
  })

  return (
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

        <Button type="submit" className="h-[56px] text-lg sm:min-w-[160px]" disabled={isLoading}>
          Сократить
        </Button>
      </form>
    </Form>
  )
}
