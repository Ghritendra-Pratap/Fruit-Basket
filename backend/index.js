const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/authRoute')
const productRoute = require('./routes/productRoute')
const cartRoute = require('./routes/cartRoute')
const categoryRoute =require('./routes/categoryRoute')
const userRoute =require('./routes/userRoute')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path');
const connectDB = require('./config/connectDB')

dotenv.config({ path: path.resolve(__dirname, './.env') });


app.use(express.json())

app.use(cors())


app.use("/api/auth" , authRoute)
app.use("/api/product" , productRoute)
app.use("/api/cart" , cartRoute)
app.use("/api/category" , categoryRoute)
app.use("/api/user" , userRoute)

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'frontend', 'index.html'));
});


app.listen(5000 , ()=>{
    console.log("server is running at 5000")
    connectDB()
})