const em=require("events");
const fs=require("fs");
const { json } = require("stream/consumers");
const emitter=new em();
emitter.on("LOGIN",(args)=>{
    eventCounts.login++;
  console.log(`user ${args.username} logged in succesfully`)
  saveCount();

})

emitter.on("LOGOUT",(args)=>{
  eventCounts.logout++;
  console.log(`user ${args.username} logged out succesfully`)
  saveCount();
})

emitter.on("PURCHASE",(args)=>{
  eventCounts.purchase++;
 console.log(`user ${args.username} purchase ${args.item}`)
 saveCount();
})


emitter.on("UPDATEP",(args)=>{
  eventCounts.profileupdae++;
   console.log(`user ${args.username} updated ${args.pf}`)
   saveCount();
})

const eventCounts={
  login:0,
  logout:0,
  purchase:0,
  profileupdae:0
}

const logFile="eventlog.json";

if(fs.existsSync(logFile)){
  const data=fs.readFileSync(logFile,'utf8')
  Object.assign(eventCounts,JSON.parse(data))


}

function saveCount(){
  fs.writeFileSync(logFile, JSON.stringify(eventCounts,null,2))
}



emitter.emit("LOGIN",{
  username:"Rohit",


})
emitter.emit("LOGOUT",{
  username:"Rohit",
  
})
emitter.emit("PURCHASE",{
  username:"Rohit",
  item:"clothes"
  

})
emitter.emit("UPDATEP",{
  username:"Rohit",
  pf:"picture"
})

emitter.on("SUMMARY",()=>{
  console.log("Event Summary:")
  console.log(`Logins: ${eventCounts.login}`)
  console.log(`Logouts: ${eventCounts.logout}`)
  console.log(`Purchases: ${eventCounts.purchase}`)
  console.log(`Updates: ${eventCounts.profileupdae}`)
})

emitter.emit("SUMMARY");

