const { Router } = require('express') 
const LoginController = require('../controllers/LoginController') //chamada do controller

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login) //chamada da rota login criada no controller

module.exports = loginRoutes
