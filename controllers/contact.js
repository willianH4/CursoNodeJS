//aca toda la logica de la renderizacion de esta pagina
export const renderContact = (req, res) => {
    res.render( "contact.ejs", { path:"Contact" } );
}

// segunda forma de exportar
export default { renderContact }