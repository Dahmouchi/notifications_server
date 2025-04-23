const io = require("socket.io")(3001, {
    cors: {
        // Allow requests from this origin
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    },
})

// Set up an event listener for new client connections
io.on('connection', (socket) => {
    console.log("User connected!");

    socket.on("notifyUser", () => {
   // Broadcast a 'notifyUser' event to all connected clients with a message
        io.emit("notifyUser", "Notification From Admin")
    })
})