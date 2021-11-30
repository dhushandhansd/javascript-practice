const express = require('express')
const app = express()
const http = require('http')


const server = http.createServer(app)

const { Server } = require('Socket.io')

const io = new Server(server)

server.listen(4500, () => {
  console.log('Server running on 4500')
})

io.on('connection', (socket) => {

  console.log('A User Connected')

  socket.on('disconnect', () => {
    console.log('User Disconected')
  })

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/chatClient.html')
})