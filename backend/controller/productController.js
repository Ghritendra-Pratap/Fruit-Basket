const Category = require("../model/Category")
const Product = require("../model/Product")

const getProducts = async(req,res)=>{
    const allproducts = await Product.find()
    res.status(200).json(allproducts)
}

const createProduct = async(req,res)=>{
    const {title , category , mrprice , price} = req.body
    if(!title || !category || !mrprice || !price){
        return res.status(404).json("Fill all the required product details")
    }
    const categoryy = await Category.findOne({category:category})
    console.log(categoryy)
    try{
        const newProduct = new Product({
            title,
            image:"",
            category,
            mrprice,
            price,
            discount:"",
            color:"",
            review:""
        })
        
        if(newProduct){
            await newProduct.save()
            return res.status(201).json(newProduct)
        }
    }catch(err){
        console.log("error in create product: ", err)
        res.status(404).json(err)
    }    
}

const getProduct = async(req,res)=>{
    const product = await Product.findOne({_id : req.params.id})
    res.status(200).json(product)
}

const deleteProduct = async(req,res)=>{
    const product = await Product.deleteOne({_id:req.params.id})
}

const updateProduct = async(req,res)=>{
    const productId = req.params.id;
  const { title, category, mrprice, price } = req.body;
  const categoryy = await Category.findOne({category:category})
  console.log(categoryy)

  try {
    // Update product by ID
    const updateResult = await Product.updateOne({ _id: productId }, { title, category, mrprice, price });

    // Check if product was found and updated
    if (updateResult.nModified === 0) {
      return res.status(404).json({ error: 'Product not found or not modified' });
    }

    // Return success message
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {getProducts ,createProduct , getProduct, deleteProduct, updateProduct}