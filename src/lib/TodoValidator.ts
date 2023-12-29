import { z } from 'zod'

export const TodoValidator = z.object({
  title: z
    .string()
    .min(1, { message: 'Title required' })
    .max(300, { message: 'Titles max length is 300' }),
  description: z.string().optional(),
})

export type TTodoValidator = z.infer<typeof TodoValidator>
