const express = require('express');
const usuarioController = require('../controllers/usuarioController');
const api = express.Router();

api.post('/usuario', usuarioController.createUsuario);
api.get('/usuarios', usuarioController.getUsuario);
api.put('/usuario/update/:id', usuarioController.updateUsuario);
api.delete('/usuario/delete/:id', usuarioController.deleteUsuario);
api.get('/usuario/search/:id', usuarioController.getUsuario);

module.exports = api
