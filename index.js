import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './config/database.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'
import cors from 'cors'

dotenv.config({
    path: ".env"
})
databaseConnection();
const app = express()

//middlewares

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())
app.use(cookieParser())
const corsOptions = {
    origin: "https://frontend-olive-psi-63.vercel.app/login",
    methods: ["POST", "DELETE", "GET"],
    credentials: true,
}
app.use(cors(corsOptions))

//apis

app.use("/api/v1/user", userRoute)
app.use("/api/v1/tweet", tweetRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})
