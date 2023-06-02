const { validationResult } = require("express-validator");

exports .addData=(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
     res.status(200).json({
        message:"data fetch Successfully",
        data:req.body
    })
}
exports.fetchdata=(req,res)=>{
    res.status(200).json({
        message:"data fetch Successfully",
        data:"data"
        
    })
}