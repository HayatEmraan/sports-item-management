import { Router } from 'express'
import { AuthRoutes } from '../modules/auth/auth.route'
import { SalesRoutes } from '../modules/sales/sales.route'
import { SportRoutes } from '../modules/sports/sports.route'

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
]

bulkRoutes.forEach(route => {
  router.use(route.route, route.handler)
})

export default router
