const { Router } = require('express') 
const { auth } = require('../middleware/auth') //requerimento de autenticação

const MatriculaController = require('../controllers/MatriculaController') //chamada do controller

const matriculaRoutes = new Router()

matriculaRoutes.post('/', auth, MatriculaController.cadastrar) //chamada da rota cadastrar criada no controller

module.exports = matriculaRoutes