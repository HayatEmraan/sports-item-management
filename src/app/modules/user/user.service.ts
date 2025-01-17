import { UserMongoose } from './user.mongoose'
import { TUser } from './user.type'

const createUser = async (user: TUser) => {
  const hasUser = await UserMongoose.findOne({ email: user.email })
  if (hasUser) {
    throw new Error('User already exists')
  }
  return await UserMongoose.create(user)
}

const getUsersFromDB = async () => {
  return await UserMongoose.find().select('-password')
}

export const UserService = {
  createUser,
  getUsersFromDB,
}
