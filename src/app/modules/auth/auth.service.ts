import { bcryptCompare } from '../../utils/bcrypt'
import { jwtEncode } from '../../utils/jwt.encode'
import { UserMongoose } from '../user/user.mongoose'
import { TAuth } from './auth.type'

const loginUser = async (user: TAuth) => {
  const hasUser = await UserMongoose.findOne({ email: user.email })
  if (!hasUser) {
    throw new Error('User not found')
  }
  const compare = await bcryptCompare(user.password, hasUser.password)
  if (!compare) {
    throw new Error('Wrong password')
  }
  const decodeUser = {
    userId: hasUser._id,
    name: hasUser.name,
    email: hasUser.email,
    role: hasUser.role,
  }

  return jwtEncode(decodeUser)
}

export const AuthService = {
  loginUser,
}
