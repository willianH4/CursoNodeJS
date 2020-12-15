//Tema rutas usando Express JS y el patron MVC
const http = require('http');
const express = require('express');
const path = require('path');

// const authRouter = require('./routes/auth');

//rutas combinadas
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');

const server = express();
server.use(express.static( path.join(__dirname, 'public') ));

//aqui estoy registrando todas las peticiones no importa el metodo
server.use("/", homeRouter);
server.use('/about', aboutRouter);
server.use('/blog', blogRouter);
server.use('/contact', contactRouter);

//Si quisieramos algun metodo post, get, delete
//podemos definirlo aca y la url
server.listen(8080);