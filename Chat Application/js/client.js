const socket = io('http://localhost:8000');

const form = document.getElementById('sendContainer');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
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

socket.on('user-joined', name=>{
    append(`<b>${name}</b> joined the chat`, 'left');
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    append(`<b>You</b>: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value =   ``;
});

socket.on('receive', data => {
    append(`<b>${data.name}</b>: ${data.message}`, 'left');
});

socket.on('leave', name=>{
    append(`<b>${name}</b> left the chat`, 'left');
})