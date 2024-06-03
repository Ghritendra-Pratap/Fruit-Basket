const { getallcategory, getCategory, createCategory, getName } = require('../controller/categoryController')

const router = require('express').Router()

router.get("/" , getallcategory)

router.get("/:id" , getCategory)

router.post("/" , createCategory)



module.exports = router