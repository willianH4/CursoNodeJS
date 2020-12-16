//importa express JS
import express from 'express'
// importamos el controlador
import controller from '../controllers/contact.js'
import bodyParser from 'body-parser'
//esta es una ruta va recibir todas las acciones
const router = express.Router();
router.use( bodyParser.urlencoded ({ extended: true}));
//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderContact);

router.post('/', controller.contact);

export default router