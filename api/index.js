const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const Hotel = require("./schema/Hotel.js")
const cookieParser = require("cookie-parser")
require('dotenv/config');
app.use(bodyParser.json())

//midleWare
app.use(cookieParser())
const authRouter = require("./routes/auth");
const hotelRouter = require("./routes/hotel");
const usersRouter = require("./routes/users");
const roomsRouter = require("./routes/rooms")
app.use("", authRouter);
app.use("", hotelRouter);
app.use("", usersRouter);
app.use("", roomsRouter);

app.get("/", async (req, res) => {
    res.send("API IS ALIVE")
})

//Handling Errors
app.use((err, req, res, next) => {
    const errStatus = err.status || 500
    const errMessage = err.message || "an Error happened"
   return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage
   })
})



//Connect to MongoDb
mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.jrdfw.mongodb.net:27017,cluster0-shard-00-01.jrdfw.mongodb.net:27017,cluster0-shard-00-02.jrdfw.mongodb.net:27017/?ssl=true&replicaSet=atlas-ug43fp-shard-0&authSource=admin&retryWrites=true&w=majority`,
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Connected To MongoDb")
        }
    }
)
app.listen(process.env.PORT || 5000);