import express from "express"
import authRoute from "./routes/auth.route.js"

const app = express()

app.use(express.json())

app.use("/api/auth", authRoute)

app.use("/api/auth/register", (req, res) => {
    res.send("It works!!!")
})

app.use("/api/auth/login", (req, res) => {
    res.send("It works!!!")
})

app.use("/api/auth/logout", (req, res) => {
    res.send("It works!!!")
})

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