const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const PORT = 8080;

io.on("connect", (socket) => {
  console.log("client connected");

  socket.on("playerControls", (action) => {
    io.emit("playerAction", action);
  });

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});

server.listen(process.env.PORT || PORT, () => console.log(`server is running on port ${PORT}`));
