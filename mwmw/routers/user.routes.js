import { Router } from "express";

const userroute= Router();

userroute.get("/createuser",(req,res)=>{
  res.send("user created")
})

userroute.get("/getallusers",(req,res)=>{
  res.send("users list")
})

export default userroute;