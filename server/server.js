const express = require('express');
//-----------------------
//Incluir Socker y http, ambos son necesarios
const socketIo = require('socket.io');
const http = require('http');
//-----------------------
const path = require('path');
const app = express();

//-----------------------
//Levantar el servidor
let server = http.createServer(app);
//-----------------------

//-----------------------
//Definición de las carpetas y puerto a usar
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
//-----------------------

//Iniciar socket IO

module.exports.io = socketIo(server);

require('./sockets/socket');

//-----------------------
//Aquí debe escuchar el servidor y no express directamente
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

//-----------------------