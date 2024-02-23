import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { SalesRoutes } from '../modules/sales/sales.route'
import { SportRoutes } from '../modules/sports/sports.route'
import { UserRoutes } from '../modules/user/user.route'

const router = Router()

const bulkRoutes = [
  {
    route: '/auth',
    handler: AuthRoutes,
  },
  {
    route: '/sports',
    handler: SportRoutes,
  },
  {
    route: '/sales',
    handler: SalesRoutes,
  },
  {
    route: '/user',
    handler: UserRoutes,
  },
]

bulkRoutes.forEach(route => {
  router.use(route.route, route.handler)
})

export default router
