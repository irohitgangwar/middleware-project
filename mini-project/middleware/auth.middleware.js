import { validatetoken } from "../utils/token-utils.js";
function authorizetoken(req,res,next){

  const token=req.headers.authorization;


  if(token&&validatetoken(token)){
    req.user={
      name:"Rohit",
      id:1
    }
    next();
  }
  else{
    res.status(401).send("Unauthorized:INvalid or missing token");
  }
}

export default authorizetoken;