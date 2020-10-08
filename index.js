const express = require('express');
const http = require('http'); //-> modulo nativo de node.js

//path -> para unir directorios
const path = require('path');
const socketIo = require('socket.io');

//Configuracion de webpack
//Esto hace que cada vez que el usuario mande una peticion al servidor va a tomar todo el codigo de src y lo va a transformar por mi y lo coloca en public
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

//express -> manejador de funciones , configura un servidor por nosotros 
const app = express();
const server = http.createServer(app); //-> creamos el servidor
//para hacer una conexion de sockets, los sockets reciben un servidor  
const io = socketIo(server);

//middleware -> se tiene que ejecutar cuando realizamos las peticiones 
app.use(webpackDevMiddleware(webpack(config)));

//uniendo nuestro directiorio con la  carpeta public
app.use(express.static(path.join(__dirname,'public')));

//iniciamos la conexion de sockets 
io.on('connection',socket => {
    console.log('socket connected: ',socket.id);

    //cuando reciba el evento message vamos a recibir datos
    socket.on('message', body => {
        //se lo enviamos a todos los clientes conectados a traves de socket.broadcast.emit 
        socket.broadcast.emit('message',{
            body,
            from: socket.id.slice(8)
        });
    })
});

server.listen(3000, () => {
    console.log('server on port 3000');
});