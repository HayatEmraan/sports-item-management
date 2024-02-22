import { AnyZodObject } from 'zod'
import { catchAsync } from '../utils/catchasync'
import { NextFunction, Request, Response } from 'express'

export const validate = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await schema.parseAsync(req.body)
    next()
  })
}
