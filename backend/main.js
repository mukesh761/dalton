import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();


import connection from './database/db.js';
import userRoute from './routes/userRotue.js'
const app = express();



app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

let corsOptions = {
    origin:process.env.FRONTEND,
   
    credentials: true, 
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use('/api/user',userRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port " + (process.env.PORT || 5000));
});
