import bcrypt from 'bcrypt'
import config from '../config'
export const bcryptHash = async (password: string) => {
  return await bcrypt.hash(password, Number(config.BCRYPT_SALT))
}

export const bcryptCompare = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}
