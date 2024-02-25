import { z } from 'zod'

export const salesValidation = z.object({
  name: z.string(),
  sportId: z.string(),
  quantity: z.number(),
  date: z.string(),
  branch: z.string(),
  price: z.number(),
})
