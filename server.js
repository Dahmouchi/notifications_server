const { Server } = require("socket.io");
const http = require("http");

const express = require("express");
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your deployed frontend
    methods: ["GET", "POST"]
  },
});

io.on('connection', (socket) => {
  console.log("User connected!");

  socket.on("notifyUser", () => {
    io.emit("notifyUser", "Notification From Admin");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
