'use strict'
var express = require('express');
var usuarioControl = require('../control/usuarioControl');
var api = express.Router();


api.post('/registro', usuarioControl.registrarUsuario);
api.post('/login', usuarioControl.accesoUsuario)

module.exports = api;