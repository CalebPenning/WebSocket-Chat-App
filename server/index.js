const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')

// get port from process, otherwise 3000
const PORT = process.env.PORT || 3001

// create our server and socketio instance
const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

server.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))