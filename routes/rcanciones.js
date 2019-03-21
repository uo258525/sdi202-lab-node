//crea un modulo
module.exports = function (app) {
    //tener claro si hay que usar re.query, reg.params, reg.body
    app.get('/canciones/:id', function (req, res) {
        var respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    });
    app.get('/canciones/:genero/:id', function (req, res) {
        var respuesta = 'id: ' + req.params.id + '<br>'
            + 'Genero: ' + req.params.genero;
        res.send(respuesta);
    });

    app.post("/cancion", function(req, res) {
        res.send("Canción agregada:"+req.body.nombre +"<br>"
            +" genero :" +req.body.genero +"<br>"
            +" precio: "+req.body.precio);
    });


}




