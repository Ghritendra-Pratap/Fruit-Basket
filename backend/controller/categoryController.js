const Category = require("../model/Category")

const getallcategory= async(req,res)=>{
    const categories = await Category.find()
    res.status(200).json(categories)
}

const getCategory = async(req,res)=>{
    const category = await Category.findOne({_id:req.params.id})
    res.status(200).json(category.category)
}

const createCategory = async(req,res)=>{
    const newCategory = new Category({
        category: req.body.category
    })
    await newCategory.save()
    res.status(201).json(newCategory)
}

// const getName = async(req,res)=>{
//     const catName = await Category.findOne({_id:req.params.id})
//     res.status(200).json(catName.category)
// }


module.exports = {createCategory , getCategory , getallcategory}