const express = require('express')
const http = require('http')
const app = express()

const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)
const PORT = 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connect', socket => {
  console.log('client connected')
  io.emit('welcome')

  socket.on('hi', () => {
    console.log('controls says hi to server')
    io.emit('hiPlayer')
  })

  socket.on('playerControls', action => {
    io.emit('playerAction', action)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
})

server.listen(PORT, () => console.log(`server is running on port ${PORT}`))