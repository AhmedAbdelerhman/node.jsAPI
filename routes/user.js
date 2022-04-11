const express = require('express')

const router = express()
const userRouter = require("../controllers/user")

router.get("/api/users", userRouter.getUsers)


module.exports =router