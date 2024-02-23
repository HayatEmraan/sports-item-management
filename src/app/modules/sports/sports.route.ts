import { Router } from 'express'
import { SportController } from './sports.controller'
import { validate } from '../../middlewares/validation'
import {
  sportValidationInsert,
  sportValidationUpdate,
} from './sports.validation'
import { guard } from '../../utils/guard'
import { ROLE } from '../../constants/role'
export const SportRoutes = Router()

SportRoutes.post(
  '/',
  guard(ROLE.super, ROLE.manager),
  validate(sportValidationInsert),
  SportController.dbInsertSports,
)

SportRoutes.get(
  '/',
  guard(ROLE.super, ROLE.manager, ROLE.seller),
  SportController.getSports,
)

SportRoutes.patch(
  '/:id',
  guard(ROLE.super, ROLE.manager),
  validate(sportValidationUpdate),
  SportController.updateSport,
)

SportRoutes.delete(
  '/',
  guard(ROLE.super, ROLE.manager),
  SportController.deleteSport,
)
