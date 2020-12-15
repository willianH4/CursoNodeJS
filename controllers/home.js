//aca toda la logica de la renderizacion de esta pagina
exports.renderHome = (req, res) => {
    res.sendFile( process.cwd() + "/views/index.html");
}
