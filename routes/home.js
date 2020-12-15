//importa express JS
const express = require('express');
// importamos el controlador
const controller = require('../controllers/home')
//esta es una ruta va recibir todas las acciones
const router = express.Router();

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderHome);

module.exports = router;