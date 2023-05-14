import express from "express";
import morgan from "morgan";
import {config} from "dotenv"
import {database} from "./config/database.mjs"
import cors from "cors";
import authRoutes from "./Routes/AuthRoutes.mjs"
import blogRoutes from "./Routes/blogRoutes.mjs"
import path from "path"


const app =express();

//config env
config({path:"./config/config.env"})

//database connection
database();

//middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(cors())

//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/blogging",blogRoutes)

//static files
app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
})






app.listen(process.env.PORT,()=>console.log(`server is running on port no.${process.env.PORT}`))