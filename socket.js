const IP_ADDRESS = "http://192.168.43.45:4000"
const socket = require('socket.io-client')(IP_ADDRESS);

socket.on('connect', () => {
	console.log("Connected: " + socket.id);
});
socket.on('disconnect', () => { 
	console.log("Disconnected");
});

global.sendData = (data) => {
    socket.emit('Servo', data)
}