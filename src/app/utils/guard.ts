import { NextFunction, Request, Response } from 'express'
import { catchAsync } from './catchasync'
import { jwtDecode } from './jwt.decode'
import { JwtPayload } from 'jsonwebtoken'
import { TAuth } from '../types/role.type'

export const guard = (...roles: TAuth[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }
    const decoded = jwtDecode(token) as JwtPayload

    if (!decoded) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    } else if (!roles.includes(decoded.role)) {
      return res.status(401).json({ success: false, message: 'Unauthorized' })
    }
    req.user = decoded
    next()
  })
}
