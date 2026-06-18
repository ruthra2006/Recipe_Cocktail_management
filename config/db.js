const mongoose = require('mongoose');
const dotenv= require('dotenv').config()
const connectdb = async ()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("Connected to Database")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb