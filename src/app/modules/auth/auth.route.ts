import { Router } from 'express'
import { AuthController } from './auth.controller'
import { validate } from '../../middlewares/validation'
import { userValidation } from '../user/user.validation'
import { authValidation } from './auth.validation'

export const AuthRoutes = Router()

AuthRoutes.post(
  '/register',
  validate(userValidation),
  AuthController.registerUser,
)

AuthRoutes.post('/login', validate(authValidation), AuthController.loginUser)
