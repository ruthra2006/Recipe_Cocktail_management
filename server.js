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

app.put("/update/recipe/:id",async (req,res)=>{
    try{
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body,{new:true,runvalidators:true})
        res.status(201).json({
            message:"Recipes of Cocktail",
            recipe
        })
    }catch(err){
        res.status(500).json({
            message: err,
        })
    }
})

app.delete("/del/recipe/:id",async (req,res)=>{
    try{
        const recipe = await Recipe.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message:"Deleted"
        })
    }catch(err){
        res.status(500).json({
            message: err,
        })
    }
})

app.listen(process.env.p,()=>{
    console.log("server .started")
})