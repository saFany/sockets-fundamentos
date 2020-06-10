var socket = io();

//On para escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se ha perdido la conexión con el servidor');
});

//Emit para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fany Sanchez',
    mensaje: 'Hola mundo con sockets'
}, function(resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function(msj) {
    console.log(msj);
});