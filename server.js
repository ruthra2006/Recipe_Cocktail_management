const express = require('express');
const dotenv= require('dotenv').config()
const app = express()
const Recipe = require('./models/Recipe')
const User = require('./models/Auth')
const connectdb = require('./config/db')
const recipeRouter = require('./router/recipeRouter')
const authroute = require('./router/authRouter')
const { register,login } = require('./controller/authController')
app.use(express.json())
connectdb()
app.use("/api/v1",recipeRouter)
app.use("/auth",authroute)
app.use("uploads",express.static("uploads"))

app.get("/",async (req,res)=>{
    res.send("Server is working")
})

app.listen(process.env.p,()=>{
    console.log("server .started")
})