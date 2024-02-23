import { Router } from 'express'
import { SalesController } from './sales.controller'
import { guard } from '../../utils/guard'
import { validate } from '../../middlewares/validation'
import { salesValidation } from './sales.validation'
import { ROLE } from '../../constants/role'

export const SalesRoutes = Router()

SalesRoutes.post(
  '/',
  guard(ROLE.super, ROLE.manager, ROLE.seller),
  validate(salesValidation),
  SalesController.insertSales,
)

SalesRoutes.get(
  '/',
  guard(ROLE.super, ROLE.manager, ROLE.seller),
  SalesController.salesHistoryByQuery,
)
