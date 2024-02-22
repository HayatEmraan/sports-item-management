import jwt from 'jsonwebtoken'
import config from '../config'
export const jwtDecode = (token: string) => {
  return jwt.verify(token, config.JWT_SECRET as string)
}
