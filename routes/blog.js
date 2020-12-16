//importa express JS
import express from 'express'
// importamos el controlador
import controller from '../controllers/blog.js'
//esta es una ruta va recibir todas las acciones
const router = express.Router();

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderBlog);

export default router