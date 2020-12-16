//Tema rutas usando Express JS y el patron MVC
import express from 'express'
import path from 'path'

//rutas combinadas
import homeRouter from './routes/home.js'
import blogRouter from './routes/blog.js'
import contactRouter from './routes/contact.js'
import aboutRouter from './routes/about.js'

const server = express();
server.use( express.static( path.join( process.cwd(), 'public' )));

// seteamos nuestras vistas
server.set( 'views', path.join( process.cwd(), "views" ));
// le decimos el tipo de motor a usar para renderizar las vistas
server.set( 'view engine', 'ejs' );

//aqui estoy registrando todas las peticiones no importa el metodo
server.use( "/", homeRouter );
server.use( '/about', aboutRouter );
server.use( '/blog', blogRouter );
server.use( '/contact', contactRouter );

//Si quisieramos algun metodo post, get, delete
//podemos definirlo aca y la url
server.listen( 8080 );