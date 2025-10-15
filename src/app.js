import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// app middlewares

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(express.json({limit: "16kb"}));  ////to handel json data
app.use(express.urlencoded({extended: true, limit: "16kb"})) //to handel data coming from URLs
app.use(express.static("public"))  //to handel public asset file(img, pdf)
app.use(cookieParser()) //to handel cookies from user browser i.e accept/set cookies

//routes import
import userRouter from './routes/user.routes.js'

//routes decleration
app.use("/api/v1/users", userRouter)


export { app };