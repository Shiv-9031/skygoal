import mongoose from "mongoose";

export const database = async()=>{
 try{

    const conndb =await mongoose.connect(process.env.DB_CONN,
    {
      useUnifiedTopology: true,

      useNewUrlParser: true,
    })
    console.log(`database connected ${conndb.connection.host}`);
 }catch(error){
    console.log(error)
 }
}