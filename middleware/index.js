exports.crudmiddleware=(req,res,next)=>{
    console.log("hello from middleware");
    next()
}