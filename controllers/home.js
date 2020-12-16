//aca toda la logica de la renderizacion de esta pagina
export const renderHome = (req, res) => {
    res.render( "index.ejs", { path:"Home" } );
}

// segunda forma de exportar
export default { renderHome }
