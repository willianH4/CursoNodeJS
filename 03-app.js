//Tema Modulos en nodeJS
//Ejemplo de modulos

const http = require('http');
// import sumar from './sumar';
//const sumar = require('./sumar'); //importando modulo o fucion

//Este es un paquete filesystem ayuda a trabajar con archivos
const fs = require('fs');

const server = http.createServer((req, res) => {
   if (req.method === "GET" && req.url === "/index.html") {
      return index(req, res)
   }
   if (req.method === "GET" && req.url === "/03-nosotros.html") {
      return nosotros(req, res)
   }
   res.write('Hola');
   res.end(); 
});

function index( req, res ){
   const stat = fs.statSync('./03-index.html');
   res.writeHead(200, {
      'Content-Type':'text/html', 'Content-Lenght':stat.size //devuelve que tan grande es el archivo a enviar
   })
   //Las cabezeras se utilizan constantemente para enviar info.

   const readStream = fs.createReadStream('./03-index.html'); //estudiar readStream
   readStream.pipe(res);
   // res.write('index');
   // res.end();
}

function nosotros( req, res ){
   const stat = fs.statSync('./03-nosotros.html');
   res.writeHead(200, {
      'Content-Type':'text/html', 'Content-Lenght':stat.size //devuelve que tan grande es el archivo a enviar
   })
   //Las cabezeras se utilizan constantemente para enviar info.

   const readStream = fs.createReadStream('./03-nosotros.html'); //estudiar readStream
   readStream.pipe(res);
   // res.write('index');
   // res.end();
}

//sumar( 10, 40 );
//importanto segun objeto
//Object.sumar( 10,40 );
server.listen(8080);