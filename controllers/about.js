//aca toda la logica de la renderizacion de esta pagina
export const renderAbout = (req, res) => {
    res.render( "about.ejs", { path:"About" } );
}

// segunda forma de exportar
export default { renderAbout }