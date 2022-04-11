const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
const helmet = require('helmet')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')



const app = express();
dotenv.config()

const port = process.env.port ||3000

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use(userRouter)
app.use(authRouter)

app.use("/",(req,res,next)=>{

    res.send("404")
})

mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("connected");
    
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });