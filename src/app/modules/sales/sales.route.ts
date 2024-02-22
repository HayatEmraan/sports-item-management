import { Router } from 'express'
import { SalesController } from './sales.controller'
import { guard } from '../../utils/guard'
import { validate } from '../../middlewares/validation'
import { salesValidation } from './sales.validation'

export const SalesRoutes = Router()

SalesRoutes.post(
  '/',
  guard,
  validate(salesValidation),
  SalesController.insertSales,
)

SalesRoutes.get('/', guard, SalesController.salesHistoryByQuery)
