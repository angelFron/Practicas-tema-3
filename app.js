'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var usuario_ruta = require('./rutas/usuarioRuta.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api', usuario_ruta);

// app.get('/pruebas', function(req, res) {
//     res.status(200).send({ mesage: 'Bienvenido al curso Ivan Azamar' });
// });

module.exports = app;