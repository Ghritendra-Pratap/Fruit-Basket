const express = require('express')
const router = express.Router()
const {signup, login, signupAdmin} = require("../controller/authController")

router.post("/signup", signup)

router.post("/signup-admin", signupAdmin)

router.post("/login", login)

// router.post("/logout", logout)

module.exports = router