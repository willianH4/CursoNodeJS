//importa express JS
const express = require('express');
const controller = require('../controllers/auth')
//esta ruta va recibir todas las acciones
const authRouter = express.Router();

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
authRouter.get('/', controller.renderAuth);

module.exports = authRouter;