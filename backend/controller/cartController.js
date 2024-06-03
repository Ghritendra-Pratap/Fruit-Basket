const Cart = require("../model/Cart")
const Order = require("../model/Order")
const Product = require("../model/Product")
const Role = require("../model/Role")
const User = require("../model/User")


const addToCart = async(req,res)=>{
    console.log(req.body)
    const {prodId , quantity} =req.body
    try {
        let user = await User.findById(req.params.id)
        
        const existingProductIndex = Array.isArray(user.cart) 
        ? user.cart.findIndex(item => item.product._id.equals(prodId)) 
        : -1;

        if (existingProductIndex !== -1) {
            user.cart[existingProductIndex].quantity += quantity;
        } else {
            user.cart.push({ product: prodId, quantity });
        }
        console.log(user.cart)
        await user.save();
        return res.status(200).json("added to cart");
    }catch (error) {
        console.log(error);
  } 
    }

const goToCart = async(req,res)=>{
    const user = await User.findById( req.params.id).populate({
        path: 'cart',
        populate: {
            path: 'product'
        }
    });
    return res.status(200).json(user.cart)

}

const createOrder = async(req , res)=>{

    try{
        const {products , address , customerId} = req.body
    const newOrder = new Order({
        products,
        address,
        customerId
    })

    await newOrder.save()
    return res.status(201).json(newOrder)
    }catch(err){
        console.log("error in createOrder :", err)

    }       
}

const deleteItem= async(req,res)=>{
    try {
        await User.updateOne({_id: req.user.id}, {$pull: {cart: {_id:req.params.id}}});
        console.log("Item removed from cart successfully");
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    
}

const getItemsInCart=async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const cartLength = user.cart.length;
        res.json({ cartLength });
    } catch (err) {
        console.log("error in getItemsInCart:", err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteItems=async(req,res)=>{
    try {
        await User.updateOne({_id: req.user.id}, {$pull: {cart: {}}});
        console.log("Item removed from cart successfully");
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
}
const createRole = async(req,res)=>{
    if(req.body){
        const role = new Role({
            role:req.body.role
        })
        await role.save()
        return res.status(201).json(role)
    }  
}

module.exports = {createRole, addToCart , goToCart, createOrder, deleteItems , deleteItem, getItemsInCart}