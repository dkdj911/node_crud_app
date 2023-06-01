const express = require("express");
const router = express.Router();
router.post("/data/add",(req,res)=>{

    res.status(200).json({
        message:"data fetch Successfully",
        data:req.body
    })
})
router.get("/data",(req,res)=>{
    res.status(200).json({
        message:"data fetch Successfully",
        data:"data"
        
    })
})
module .exports =router;