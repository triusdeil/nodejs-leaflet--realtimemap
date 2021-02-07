module.exports = io => {
    io.on('connection', (socket) =>{
        console.log('new user connected')
        socket.on('UserCordinates', coords =>{
            socket.broadcast.emit('newUserCoordinates', coords)
        })
    })
}