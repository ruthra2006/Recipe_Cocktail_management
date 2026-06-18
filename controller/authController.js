const User = require('../models/Auth')
const dotenv= require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.register = async(req,res)=>{
    try{
        const existinguser = await  User.findOne({
            email:req.body.email
        })
        if(existinguser){
            return res.status(400).json({
                message:"user already registered"
            })
        }
        const hashpswrd = await bcrypt.hash(req.body.password,10)
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password:hashpswrd
        })
    }catch(err){
        console.log(err)
    }
}

exports.login = async(req,res)=>{
    try{
        const user = await User.findOne({
            email:req.body.email
        })
        if(!user){
            return res.status(400).json({
                message:"user not found"
            })
        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
            return res.status(400).json({
                message:"invalid password"
            })
        }
        const token = jwt.sign(
            {
                id:user._id
            },
            "process.env.t",
            {
                expiresIn: "10d"
            }
        )
        res.json({
            message: "login done...",
            token
        })
    }catch(err){
        console.log(err)
    }
}