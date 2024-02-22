/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  return res
    .status(500)
    .json({ success: false, message: error.message, error: error })
}

export default globalErrorHandler
