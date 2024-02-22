import mongoose from 'mongoose'
import app from './app'
import { Server } from 'http'
import config from './app/config'

let server: Server

async function main() {
  try {
    await mongoose.connect(config.MONGO_URI as string)
    server = await app.listen(config.PORT, () => console.log('Listening on port 5000'))
  } catch (error) {
    console.log(error)
  }
}

main()

process.on('unhandledRejection', () => {
  console.log('🐞  Unhandled Rejection. Shutting down...')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
})

process.on('uncaughtException', () => {
  console.log('🐞  Uncaught Exception. Shutting down...')
  process.exit(1)
})
