import blogSchema from "../models/blogModel.mjs";

export const blogController =async (req,res,next)=>{
try{
    const blog = await blogSchema(req.body);
    blog.save();
    res.status(201).json({
        success:true,
        message:"blog updated",
        blog
    })

}catch(error){
    console.log(error);
    res.status(500).json({
        message:"something is wron",
        success:false,
        error
    })
}  

}