import express from 'express'
import dotenv from 'dotenv/config'
import { dbConnect } from './src/config/dbConnect.js'
import userRoute from './src/routes/userRoute.js'

const port = process.env.port
const app = express()

dbConnect()

app.use(express.json())
app.use('/user', userRoute)

app.listen(port, ()=> {
    console.log(`The server is running on ${port}`);
})
