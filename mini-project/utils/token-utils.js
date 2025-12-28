import crypto from "crypto";

export const generatetoken=()=>{
  return crypto.randomBytes(16).toString("hex")
}

export const validatetoken=(token)=>{
  return token.length===32;
}