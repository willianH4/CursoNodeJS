//importa express JS
import express from 'express'
import controller from '../controllers/auth.js'
import bodyParser from 'body-parser'

//esta ruta va recibir todas las acciones
const router = express.Router();
router.use( bodyParser.urlencoded({ extended: true }) );

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderRegister );
router.get( '/login', controller.renderLogin );
router.get( '/register', controller.renderRegister );

router.post( '/register', controller.register );
router.post('/login', controller.login );

export default router