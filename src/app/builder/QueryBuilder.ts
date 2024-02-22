/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilterQuery, Query } from 'mongoose'

class QueryBuilder<T> {
  public baseQuery: Query<T[], T>
  public query: Record<string, any>

  constructor(baseQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.baseQuery = baseQuery
    this.query = query
  }
  filter() {
    const queryObj = { ...this.query }
    const exclude = ["min", "max"]
    exclude.forEach(el => delete queryObj[el])
    if (Object.keys(queryObj).length) {
      this.baseQuery = this.baseQuery.find(queryObj as FilterQuery<T>)
    }
    return this
  }
  price() {
    if (this.query.min || this.query.max) {
      this.baseQuery = this.baseQuery.find({
        price: {
          $gte: this.query.min,
          $lte: this.query.max,
        },
      })
    }
    return this
  }
}

export default QueryBuilder
