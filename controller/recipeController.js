const Recipe= require('../models/Recipe')
const dotenv= require('dotenv').config()
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:"process.env.n",
    api_key:"process.env.k",
    api_secret:"process.env.s"
})
exports.addRecipe= async(req,res)=>{
    try{
            const result = await cloudinary.uploader.upload(
                req.file.path,
                {
                folder: "store"
                }
            )
            const recipe = await Recipe.create({
                name:req.body.name,
                ingredients:req.body.ingredients,
                prep_steps:req.body.prep_steps,
                image:result.secure_url
            })
            res.status(201).json({
                message:"Recipe added successfully",
                recipe
            })
        }catch(err){
            res.status(500).json({
                message: err,
            })
        }
}
exports.getall= async (req,res)=>{
    try{
        const recipe = await Recipe.find()
        res.status(201).json({
            message:"Recipe of Cocktail",
            recipe
        })
    }catch(err){
        res.status(500).json({
            message: err,
        })
    }
}

exports.getbyid = async  (req,res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id)
        res.status(201).json({
            message:"Recipe of Cocktails",
            recipe
        })
    }catch(err){
        res.status(500).json({
            message: err,
        })
    }
}

    
    