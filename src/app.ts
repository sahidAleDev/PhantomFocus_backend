import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from "./routes";
const PORT = process.env.PORT || 3001
import db from './config/mongo'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

db().then(() => {
  console.log('Connected to database')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})