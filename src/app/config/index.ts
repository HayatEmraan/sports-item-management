const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET
const MONGO_URI = process.env.MONGO_URI
const BCRYPT_SALT = process.env.BCRYPT_SALT

export default {
  PORT,
  JWT_SECRET,
  MONGO_URI,
  BCRYPT_SALT
}
