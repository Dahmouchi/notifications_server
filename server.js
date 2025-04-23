// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
        "http://localhost:3000",              // Local frontend
        "https://alerte-project.vercel.app"    // Production frontend
      ],// allow from all origins or specify your Next.js domain
    methods: ['GET', 'POST']
  }
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on("notifyUser", () => {
    // Broadcast a 'notifyUser' event to all connected clients with a message
         io.emit("notifyUser", "Notification From Admin")
     })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server is running on port 3001');
});
