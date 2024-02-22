import { Router } from 'express'
import { SportController } from './sports.controller'
import { validate } from '../../middlewares/validation'
import {
  sportValidationInsert,
  sportValidationUpdate,
} from './sports.validation'
import { guard } from '../../utils/guard'

export const SportRoutes = Router()

SportRoutes.post(
  '/',
  guard,
  validate(sportValidationInsert),
  SportController.dbInsertSports,
)

SportRoutes.get('/', guard, SportController.getSports)


SportRoutes.patch(
  '/:id',
  guard,
  validate(sportValidationUpdate),
  SportController.updateSport,
)

SportRoutes.delete('/', guard, SportController.deleteSport)
