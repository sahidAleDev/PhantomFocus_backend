import 'dotenv/config'
import { router } from "./routes";
import cookieParser from 'cookie-parser';
import cors from 'cors'
import db from './config/mongo'
import express from 'express'

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu frontend
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use(router)

db().then(() => {
  console.log('Connected to database')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})