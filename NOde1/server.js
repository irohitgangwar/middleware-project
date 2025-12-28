const http=require("http");
const fs=require("fs");
const PORT=8080;

const myServe=http.createServer((request,response)=>{
  const readablestream=fs.createReadStream("data.txt");
readablestream.pipe(response);

  

})

myServe.listen(PORT,()=>{
  console.log(`server is connected at ${PORT}`);
})


