const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    products:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    },{ _id: false }],
    address:{
        type:String,
        required:true
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
},{timestamps:true})

module.exports = new mongoose.model("Order" , orderSchema)