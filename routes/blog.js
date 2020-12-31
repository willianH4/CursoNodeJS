//importa express JS
import express from 'express'
// importamos el controlador
import controller from '../controllers/blog.js'
import bodyParser from 'body-parser'
//esta es una ruta va recibir todas las acciones
const router = express.Router();

router.use( bodyParser.urlencoded ({ extended: true}));

//el primer get sera para enviar la primera pagina que se quiere mostrar
//pueden enviarse diferentes metodos
router.get('/', controller.renderBlog);
router.post('/new-post', controller.newPost);
router.get('/new-post', controller.renderNewPost);
router.get("/detail/:id",controller.detail)

export default router