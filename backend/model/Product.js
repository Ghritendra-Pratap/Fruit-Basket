const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        ref:"Category"
    },

    image:{
        type:String,
        default:""
        
    },

    mrprice:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    color:{
        type:String,
        default:""

    },
    discount:{
        type:Number,
        default:0
    },
    review:{
        type:String,
        default:""

    }
},{timestamps:true})

module.exports = new mongoose.model("Product" , productSchema)