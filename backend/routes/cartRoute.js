const router = require('express').Router()
const { verifyUser, verifyAdmin } = require('../config/verifyToken')
const { createRole, addToCart, goToCart, createOrder, deleteItem, deleteItems, getItemsInCart } = require('../controller/cartController')

router.post("/role" ,verifyAdmin, createRole)

router.post("/order" , createOrder )

router.post("/:id" , addToCart)

router.get("/:id" , goToCart)

router.delete("/:id" , deleteItem)

router.delete("/", deleteItems)

router.get("/items/:id", getItemsInCart)





module.exports = router