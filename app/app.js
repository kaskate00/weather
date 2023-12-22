import express from 'express'
import weatherRouter from './routes/weatherRoutes.js'

const app = express()

app.use(express.json())
app.use('/weather', weatherRouter)

export default app