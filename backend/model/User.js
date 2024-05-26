const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Role"
    },
    isAdmin:{
        type:Boolean,
        required:true
    },
    address:[ {
        type:String,
        required:true
    }],
    orders:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"   
    },
    cart:[{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 }
    }]
    
},{timestamps:true})


module.exports = new mongoose.model("User" , userSchema);