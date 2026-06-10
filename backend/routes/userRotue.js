
import express from "express";
import { signupUser, loginUser, logoutUser } from "../controller/userController.js";
const router=express.Router();

//importing files
import {googleLogin } from "../controller/userController.js";
import { islogin } from "../middleware/islogin.js";

router.get("/",(req,res)=>{
    return res.send("this is user router")
})
router.post('/auth/google',googleLogin)
router.post("/signup",signupUser)
router.post("/login",loginUser)
router.post("/logout",islogin,logoutUser)


export default router;