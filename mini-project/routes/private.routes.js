import express, { Router } from "express";
import authorizetoken from "../middleware/auth.middleware.js"



const privateroute=Router();



//dashboard
privateroute.get("/dashboard",authorizetoken,(req,res)=>{
  res.status(200).send({
    message:`Welcome to dashboard ${req.user.name}`
  })

})

export default privateroute;