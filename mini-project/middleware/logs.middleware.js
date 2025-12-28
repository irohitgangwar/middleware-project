import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)


function logmiddleware(req,res,next){
const log=`[${new Date().toISOString()}] ${req.method} ${req.url}\n`

const logfile=path.join(__dirname,"../logs/request.log");

fs.appendFile(logfile,log,(err)=>{
  if(err) console.log(`failed to log request`,err)
})

  next();
}

export default logmiddleware;