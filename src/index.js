const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const { create } = require('domain');
//Initializations
const app = express();
const server = http.createServer(app)
const io = socketIO(server)

//Settings
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Routes
app.use(require('./routes'))

//Sockets
require('./sockets')(io);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server
server.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})