const {addRecipe, getall, getbyid} = require('../controller/recipeController')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const auth = require('../middleware/authmiddleware')
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
})
const upload = multer({storage})
router.post("/add/recipe", upload.single("image"),addRecipe)
router.get("/get/recipe",auth,getall)
router.get("/get/recipe/:id", getbyid)
module.exports = router