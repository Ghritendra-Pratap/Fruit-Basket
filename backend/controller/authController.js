const User = require("../model/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Role = require("../model/Role")

const signup=async(req,res)=>{
    const {fullname , email ,password, cpassword, address } = req.body

    try{
        const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json("User already exist with this email")    
    }

    if(password != cpassword){
        return res.status(400).json("Invalid data")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    const role = await Role.find({role:"user"})
    

    const newUser = new User({
        fullname,
        email,
        role:role,
        isAdmin:false,
        password:hashedPassword,
        address
    })

    const token = jwt.sign({id:newUser._id} , `${process.env.JWTTOKEN}`,{expiresIn:'15d'})
    await newUser.save()
    return res.status(201).json({id:newUser._id , token:token});

    }
    catch(err){
        res.status(400).json("User creation failed");
        console.log(err)
    }
    
}

const signupAdmin =async(req,res)=>{
    const {fullname , email ,password, cpassword, address } = req.body

    try{
        const userExist = await User.findOne({email})
    if(userExist){
        return res.status(400).json("User already exist with this email")    
    }

    if(password != cpassword){
        return res.status(400).json("Invalid data")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    const role = await Role.find({role:"admin"})
    

    const newUser = new User({
        fullname,
        email,
        role:role,
        isAdmin:true,
        password:hashedPassword,
        address
    })

    const token = jwt.sign({id:newUser._id, isAdmin: user.isAdmin } , `${process.env.JWTKEY}`,{expiresIn:'15d'})
    await newUser.save()
    return res.status(201).json({id:newUser._id, address:address , token:token});

    }
    catch(err){
        res.status(400).json("User creation failed");
        console.log(err)
    }
    
}

const login = async(req,res)=>{
    console.log(req.body)
    const {email , password} = req.body;

    try{
        const user = await User.findOne({email : email})
    if(user){
        const isPassword = await bcrypt.compare( password, user.password )
        if(isPassword){
            const token = jwt.sign({id:user._id , isAdmin: user.isAdmin } , `${process.env.JWTTOKEN}`,{expiresIn:'15d'})
            res.status(200).json({id:user._id ,isAdmin: user.isAdmin,  address:user.address,token:token})
        }

    }
    }catch(err){
        res.json("error in login controller")
        console.log(err)
    }
    
}



module.exports = {signup, login, signupAdmin}