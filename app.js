// Módulos
var express = require('express');
var app = express();

var expressSession = require('express-session');
app.use(expressSession({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true
}));
var crypto = require('crypto');
var swig = require('swig');
var fileUpload = require('express-fileupload');
app.use(fileUpload());
var mongo = require('mongodb');

var bodyParser = require('body-parser');
//meter body parser dentro de express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);


// Variables
app.set('port', 8081);
app.set('db', 'mongodb://admin:sdi@tiendamusica-shard-00-00-so4wa.mongodb.net:27017,tiendamusica-shard-00-01-so4wa.mongodb.net:27017,tiendamusica-shard-00-02-so4wa.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true');
app.set('clave','abcdefg');
app.set('crypto',crypto);
//antes de mirar controladores mirar public lo primero
app.use(express.static('public'));

//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig,gestorBD); // (app, param1, param2, etc.)
require("./routes/rcanciones.js")(app, swig,gestorBD); // (app, param1, param2, etc.)

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
})