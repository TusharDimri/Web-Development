const socket = io('http://localhost:8000');
// Above line gives us the socket instance of the connection with client and server(socket.io server).

const messageContainer = document.querySelector('.container');
const form = document.getElementById('sendContainer');
const messageInput = document.getElementById('messageInp');
var audio = new Audio('ting.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if (position == 'left'){
        audio.play();
    }
};

const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);
// Above line emits the new-user-joined event to the server.

// Here, we listen to the user-joined event emitted by the server:-
socket.on('user-joined', name=>{
    append(`<b>${name}</b> joined the chat`, 'left');
});

// Listening to the submit emit fired when user submits the message:-
form.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    append(`<b>You</b>: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value =   ``;
});

// Listening to the recive event emitted by the user and use the message recived by the server(from ohter client) and sent to the client
socket.on('receive', data => {
    append(`<b>${data.name}</b>: ${data.message}`, 'left');
});

// Listen to leave event wmitted by the server:-
socket.on('leave', name=>{
    append(`<b>${name}</b> left the chat`, 'left');
})