import express, { Router } from "express";
import { generatetoken } from "../utils/token-utils.js";


const publicroute=Router();

//genrate token
publicroute.get("/generate-token",(req,res)=>{
  const token=generatetoken();
  res.status(200).send({
    message:"token generated",
    token:token
  })
})




//public route
publicroute.get("/",(req,res)=>{
  res.send("welcome to public routes");
})

export default publicroute;