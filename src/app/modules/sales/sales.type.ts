import { Types } from 'mongoose'

export type TSales = {
  name: string
  sportId: Types.ObjectId
  sellerId?: Types.ObjectId
  quantity: number
  date: string
}
