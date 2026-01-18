
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ConnectToDb = require("./database/db")
const authRouter = require("./routes/auth-routs/auth-routs")



const app = express()




app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true
}))

app.use(cookieParser())
const PORT = process.env.PORT || 3000;
app.use(express.json());

ConnectToDb();

app.use("/api/auth", authRouter)



app.listen(PORT, () => {
    console.log(`the server is now running at port${PORT}`)
})


