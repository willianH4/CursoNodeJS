//importa express JS
const express = require('express');
const controller = require('../controllers/about')
//esta ruta va recibir todas las acciones
const router = express.Router();

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderAbout);

module.exports = router;