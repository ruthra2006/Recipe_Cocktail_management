const mongoose = require("mongoose")

const Recipeschema = new mongoose.Schema({

    name:{
        type:String,
    },
    ingredients:{
        type:String,
    },
    prep_steps:{
        type:String,
    },
    image:{
        type:String
    }

    
})

module.exports = mongoose.model("Recipe",Recipeschema)