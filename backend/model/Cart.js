const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        }
    
})

module.exports = new mongoose.model("Cart" ,cartSchema)