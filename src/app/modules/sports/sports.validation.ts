import { z } from 'zod'

export const sportValidationInsert = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
  quantity: z.number(),
  type: z.string(),
  brand: z.string(),
  size: z.string(),
  material: z.string(),
  color: z.string(),
  condition: z.enum(['New', 'Used']),
})

export const sportValidationUpdate = sportValidationInsert.partial()
