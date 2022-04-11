const express = require('express')

const router = express()
const authRouter = require("../controllers/auth")

router.post("/api/auth/signup", authRouter.postAuth)

router.post("/api/auth/login", authRouter.postLogin)



module.exports =router