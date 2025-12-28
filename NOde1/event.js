const EventEmitter=require("events");

const emitter=new EventEmitter();

emitter.on("GREET",(args)=>{
  console.log(`username id ${args.username} and id is ${args.id}`)
})
emitter.emit("GREET",{
  username:"Rohit",
  id:"10"
});