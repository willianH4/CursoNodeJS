//importa express JS
import express from 'express'
import controller from '../controllers/about.js'

//esta ruta va recibir todas las acciones
const router = express.Router();

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderAbout);

export default router