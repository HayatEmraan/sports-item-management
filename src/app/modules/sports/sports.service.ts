import QueryBuilder from '../../builder/QueryBuilder'
import { SportMongoose } from './sport.mongoose'
import { TSport } from './sports.type'

const insertSport = async (sport: TSport) => {
  return await SportMongoose.create(sport)
}

const getSports = async (query: Record<string, unknown>) => {
  const modelQuery = SportMongoose.find({
    quantity: {
      $ne: 0,
    },
  })
  const builder = new QueryBuilder(modelQuery, query)

  return await builder.filter().price().baseQuery
}

const updateSport = async (sport: Partial<TSport>, id: string) => {
  const hasSport = await SportMongoose.findById(id)
  if (!hasSport) {
    throw new Error('Sport not found')
  }
  return await SportMongoose.findByIdAndUpdate(id, sport, { new: true })
}

const deleteSport = async (deleteIds: string[]) => {
  return await SportMongoose.deleteMany({
    _id: {
      $in: deleteIds,
    },
  })
}


export const SportService = {
  insertSport,
  getSports,
  updateSport,
  deleteSport,
}