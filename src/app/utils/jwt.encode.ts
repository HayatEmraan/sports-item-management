import jwt from 'jsonwebtoken'
import config from '../config'

export const jwtEncode = (payload: Record<string, unknown>) => {
  return jwt.sign(payload, config.JWT_SECRET as string, { expiresIn: '1d' })
}
