//aca toda la logica de la renderizacion de esta pagina
exports.renderAuth = (req, res) => {
    res.sendFile( process.cwd() + "/views/auth.html");
}
