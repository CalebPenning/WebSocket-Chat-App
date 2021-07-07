const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')
const cors = require("cors")

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

// get port from process, otherwise 3000
const PORT = process.env.PORT || 3001

// enable cors and pass our port to avoid a bajillion console error messages
// I believe this is unnecessary with socketio version < 3
let corsOptions = {
    cors: true,
    origins: [PORT]
}

// create our server and socketio instance, passing our corsOptions into io
const app = express()
const server = http.createServer(app)
const io = socketio(server, corsOptions)

io.on('connection', (socket) => {

    socket.on("login", ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room})

        if (error) return callback(error)

        socket.emit("message", { user: "admin", text: `Welcome to to room ${user.room}, ${user.name}!`})
        socket.broadcast.to(user.room).emit("message", { user: "admin", text: `${user.name} has joined! Say hello!`})

        socket.join(user.room)

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', { user: user.name, text: message })

        callback()
    })

    socket.on('disconnect', () => {
        console.log("User has left.")
    })
})

app.use(router)
app.use(cors())

server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))