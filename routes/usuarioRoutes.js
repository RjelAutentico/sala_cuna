const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const api = express.Router();

api.post('/usuario', usuarioController.createUsuario);

module.exports = api
