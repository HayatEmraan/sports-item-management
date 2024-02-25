import { Schema, model } from 'mongoose'
import { TSales } from './sales.type'

const saleSchema = new Schema<TSales>(
  {
    name: {
      type: String,
      required: true,
    },
    sportId: {
      type: Schema.Types.ObjectId,
      ref: 'Sport',
      required: true,
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    branch: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export const SaleMongoose = model('Sale', saleSchema)
