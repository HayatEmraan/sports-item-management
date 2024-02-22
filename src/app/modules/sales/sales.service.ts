/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { SaleMongoose } from './sales.mongoose'
import { TSales } from './sales.type'
import { SportMongoose } from '../sports/sport.mongoose'
import moment from 'moment'

const salesIntoDb = async (sale: TSales, sellerId: string) => {
  const session = await mongoose.startSession()
  try {
    await session.startTransaction()
    const options = { session }

    if (sale.quantity < 1) {
      throw new Error('Quantity must be greater than 0')
    }

    const result = await SaleMongoose.create(
      [
        {
          ...sale,
          sellerId,
        },
      ],
      options,
    )

    const reachedQuantity = await SportMongoose.findById(sale.sportId)

    if (!reachedQuantity) {
      throw new Error('Sport not found')
    }

    if (
      reachedQuantity!.quantity < sale.quantity ||
      reachedQuantity!.quantity === 0
    ) {
      throw new Error('Not enough quantity')
    }

    await SportMongoose.findByIdAndUpdate(
      sale.sportId,
      {
        $inc: {
          quantity: -sale.quantity,
        },
      },
      options,
    )

    await session.commitTransaction()
    await session.endSession()
    return result
  } catch (error) {
    await session.abortTransaction()
    await session.endSession()
    throw error // throw error
  }
}

const salesHistory = async (query: any = 'week') => {
  const current = moment().startOf(query)
  const stats = await SaleMongoose.find({
    createdAt: {
      $gte: current,
    },
  })
    .sort({ createdAt: -1 })
    .populate('sportId', ['name', 'condition'])
    .populate('sellerId', ['name', 'email'])
  return stats
}

export const SaleService = {
  salesIntoDb,
  salesHistory,
}