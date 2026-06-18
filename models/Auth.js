const mongoose = require('mongoose');
const AuthSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model("User",AuthSchema)