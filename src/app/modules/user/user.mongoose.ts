import { Schema, model } from 'mongoose'
import { TUser } from './user.type'
import { bcryptHash } from '../../utils/bcrypt'

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['super', 'manager', 'seller'],
    },
    branch: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  this.password = await bcryptHash(this.password)
  next()
})

userSchema.post('save', async function (doc) {
  doc.set('password', undefined, { strict: false })
})

export const UserMongoose = model('User', userSchema)
