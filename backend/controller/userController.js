const { default: mongoose } = require("mongoose")
const Order = require("../model/Order")
const User = require("../model/User")

const getallUsers = async(req,res)=>{
    const users = await User.findAll()
    res.status(200).json(users)
}

const getuser = async(req,res)=>{
    const user = await User.findOne({_id:req.params.id})
    res.status(200).json(user)
}

const updateUser = async(req,res)=>{
    const {fullname , email ,password}= req.body

    try{
        const updateUser = await User.updateOne({_id:req.params.id} , {fullname , email , password})

        res.json({ message: 'User updated successfully' });
    }catch(err){
        console.log("error in updateuser :" , err)
    }
}

const deleteUser = async(req,res)=>{
    try{
        const product = await Product.deleteOne({_id:req.params.id})
        res.json("User deleted Successfully")
    }catch(err){
        console.log("error in delete user :", err)
    }
   
}



const getallOrders = async(req,res)=>{
    const orders = await Order.find({customerId : req.params.id})
    res.status(200).json(orders)
}

const getOrder =  async(req,res)=>{
    const order = await Order.findOne({_id:req.params.id})
    res.status(200).json(order)
}

module.exports = {getallUsers , getuser , getOrder , getallOrders , updateUser, deleteUser }