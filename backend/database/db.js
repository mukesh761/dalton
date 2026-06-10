import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
// console.log(process.env.DB_URI)
 const connection=mongoose.connect("mongodb+srv://mukesh737462:mukesh737462@cluster0.xtd8d.mongodb.net/dalton")
//  
    .then(()=>console.log("MongoDB is connected"))
    .catch((error)=>console.log(error.message));
 
export default connection;
