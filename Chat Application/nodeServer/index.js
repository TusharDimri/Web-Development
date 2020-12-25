// Node Server whuch will handle socket io connections.

const io = require('socket.io')(8000);

const users = {};

// Starting Socket Io Server which is an instance of http and attaches itelf to it.(Opened in port 8000)
// The server will listen to events and send events too
io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        // console.log("New User:", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', {message : message , name: users[socket.id]});
    });

    socket.on('disconnect', message =>{
        socket.broadcast.emit('leave', users[socket.id]);
        delete users[socket.id];
    });
});