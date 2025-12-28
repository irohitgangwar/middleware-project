import express from "express";
import publicroutes from "./routes/public.routes.js";
 import privateroutes from "./routes/private.routes.js";
 import fs from "fs"
 import path from "path";;
 import { fileURLToPath } from "url";
 import logmiddleware from "./middleware/logs.middleware.js";

const app=express();
const PORT=8080;


const __filename=fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);


if(!fs.existsSync(path.join(__dirname,"logs"))){
  fs.mkdirSync(path.join(__dirname,"logs"))
}

app.use(express.json());

app.use(logmiddleware);

//public-generate-token and /
app.use("/public",publicroutes);

//private-dashboard
app.use("/private",privateroutes);



app.listen(PORT,(req,res)=>{
  console.log("server is running");
})

