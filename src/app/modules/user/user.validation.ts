import { z } from 'zod'

export const userValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['super', 'manager', 'seller']),
  branch: z.string().optional(),
})
