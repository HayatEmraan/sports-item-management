import { Router } from 'express'
import { UserController } from './user.controller'

export const UserRoutes = Router()

UserRoutes.get('/get-users', UserController.findUser)
