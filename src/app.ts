import dotenv from 'dotenv'
import express, { Application } from 'express'
import cors from 'cors'
dotenv.config({ path: process.cwd() + '/.env' })
import morgan from "morgan"
import router from './app/routes/router'
import globalErrorHandler from './app/errors/globalErrorHandler'

const app: Application = express()

// middleware enables
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1', router)

// global error handler
app.use(globalErrorHandler)

// 404 not found
app.use('*', (req, res) => {
  return res.status(404).json({ success: false, message: 'Route not found' })
})

export default app
