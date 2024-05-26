const { verifyToken } = require('../config/verifyToken')
const { getProducts, createProduct, getProduct, updateProduct } = require('../controller/productController')

const router = require('express').Router()

router.put("/:id" , updateProduct)
router.get("/" , getProducts)
router.post("/" , createProduct)
router.get("/:id" , getProduct)



module.exports = router