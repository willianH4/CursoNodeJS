//Tema como funciona la web
//Ejemplo de pequenio servidor
const http = require('http');

const server = http.createServer((req, res) => {
   res.writeHead(200,{"Content-Type": "application/json"})
    res.write('{mensaje: "Hola me llamaste?"}');
   res.end(); 
})

server.listen(8080);