import express from "express";
import userroute from "./routers/user.routes.js";

const app=express();
const PORT=8080;

app.use("/api/v1/users",userroute);



app.listen(PORT,(req,res)=>{
  console.log("server is running")
})
