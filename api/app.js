import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute)

app.use("/api/posts", (req, res) => {
    res.send("It works!!!")
})

app.use("/api/posts", (req, res) => {
    res.send("It works!!!")
})

app.use("/api/posts/1234", (req, res) => {
    res.send("It works!!!")
})


app.listen(8000, () => {
    console.log("Server is running...")
})