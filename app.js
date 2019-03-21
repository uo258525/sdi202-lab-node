// Módulos
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

//meter body parser dentro de express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Variables
app.set('port', 8081);

//antes de mirar controladores mirar public lo primero
app.use(express.static('public'));

//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app); // (app, param1, param2, etc.)

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
})