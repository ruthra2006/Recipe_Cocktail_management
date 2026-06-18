const {addRecipe, getall, getbyid, updatebyid, deletebyid} = require('../controller/recipeController')
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
router.get("/get/recipe/:id",auth,getbyid)
router.put("/update/recipe/:id", updatebyid)
router.delete("/del/recipe/:id", deletebyid)
module.exports = router