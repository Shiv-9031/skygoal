import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    text:{
        type:String
    }
})

export default mongoose.model("blog",blogSchema);