import express from "express";
import data from "./data/data.js";

const app=express();
app.use(express.json())
const PORT=8080;


app.get("/api/v1/users/name/:name", (req, res) => {
  const { name } = req.params;
    const users = data.filter(user => user.name === name);
  
  res.status(200).json(users);
});

app.get("/api/v1/users/:id",(req,res)=>{
  const {id}=req.params;
  const num=parseInt(id);
   const p=data.filter(user=>user.id===num
  )
 res.status(200).send(p);
})




app.post("/api/v1/users",(req,res)=>{
  const {name,displayname}=req.body;

  const newuser={
    id:data.length+1,
    name,
    displayname
  }

  data.push(newuser)
  
  
  res.status(201).send({
    message:"data added",
    newuser
  })
})
app.get("/api/v1/users",(req,res)=>{
  console.log(data);
  res.status(200).json(data);
})

app.listen(PORT,(req,res)=>{
  console.log(`Server is running at PORT ${PORT}`);
})






//putttttt

app.put("/api/v1/users/:id",(req,res)=>{ let found=false;
  const {id}=req.params;
  const body=req.body;
  const num=parseInt(id);
  for(let i=0;i<data.length;i++){
    if(data[i].id==num){
      data[i]={
        id:num,
        ...body
      }
      found=true;
      break;
    }
  }
  res.status(200).send({
    message:"user updated",
    user: data.find(u => u.id === num)
  });




});



