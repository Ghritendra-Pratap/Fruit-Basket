const router = require('express').Router()
const { verifyUser, verifyAdmin } = require('../config/verifyToken')
const { createRole, addToCart, goToCart, createOrder, deleteItem, deleteItems } = require('../controller/cartController')

router.post("/role" ,verifyAdmin, createRole)

router.post("/order" , createOrder )

router.post("/:id" , addToCart)

router.get("/:id" , goToCart)

router.delete("/:id" , deleteItem)

router.delete("/", deleteItems)





module.exports = router