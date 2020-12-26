// Node Server which will handle socket io connections.

// Remember :- Long Polling.
// Usually http requests don't allow 2 way connection between client and server. 

// Web Socket creates a two-way connection between client and server(It usually is one way i.e server can't initiate requests to client in other words client cannot send response to server's request). This is when web sockets come to play and solve this problem to make our lives easier.

// ws - web socket protocol & wss - web socket secured protocol (Like we have http and https protocol)

const io = require('socket.io')(8000);

const users = {};

// Starting Socket Io Server which is an instance of http and attaches itelf to it.(Opened in port 8000) :-
// The server can listen to events and send events too(to the clients connected)
// connection event is initaited as we connect a client with socket.io server
io.on('connection', socket => {
    // Here, socket is a particular connection:-
    socket.on('new-user-joined', name => {
        // console.log("New User:", name);
        users[socket.id] = name; // socket.id is the unique id of evry new socket(connection)
        socket.broadcast.emit('user-joined', name);
        // Above line emits(sends) an event along with the name of the user to all 'other' clients(if any) connected which they can listen and perfer some action.
    });
    
    // Here, we listen to the send event in which any socket(client) sends a message to the server :-
    socket.on('send', message => {
        socket.broadcast.emit('receive', {message : message , name: users[socket.id]});
        // After listening to the send event the server receives the message and emits(sends) the receive event to the 'other' sockets(clients)(if any) which they can listen to and perform actions.
    });

    // Here, the server listens to the disconnect event which is automatically fired when connection between the socket(client) and the server is lost. :-
    socket.on('disconnect', () =>{
        socket.broadcast.emit('leave', users[socket.id]);
        // Above line emits(sends) the leave event along with the socket id(unique) to the clients connected which they can listen to and perform some action.
        delete users[socket.id];
    });
});