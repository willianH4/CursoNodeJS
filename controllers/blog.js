import { posts } from '../models/post.js'
//aca toda la logica de la renderizacion de esta pagina
export const renderBlog = (req, res) => {
    res.render( "blog.ejs", { path:"Blog", posts:posts } );
}

// segunda forma de exportar
export default { renderBlog }