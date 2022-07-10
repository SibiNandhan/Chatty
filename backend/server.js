const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("socket", socket);
  console.log("Socket is active");

  socket.on("chat", (payload) => {
    console.log("payload:", payload);
    io.emit("chat", payload);
  });
});

server.listen(4000, () => {
  console.log("server is listening");
});
