const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer,{cors:{origin:"*"}});
//this fix is the most important one
let chats=[]
io.on("connection", (socket) => {
  socket.on("message",(data)=>{
    console.log(data.chats);
    chats.push(data.chats);

  io.emit("message",{"chats":chats});
  })
});

httpServer.listen(2000,()=>{
  console.log("created")
});
