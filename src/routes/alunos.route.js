const { Router } = require('express') 
const { auth } = require('../middleware/auth') //requerimento de autenticação

const AlunoController = require('../controllers/AlunoController') //chamada do controller

const alunoRoutes = new Router()

alunoRoutes.post('/', AlunoController.cadastrar) //chamada da rota cadastrar criada no controller
alunoRoutes.get('/', auth, AlunoController.listar) //chamada da rota listar criada no controller
alunoRoutes.get('/:id', auth, AlunoController.listarUm)  //chamada da rota listarUm criada no controller
 
module.exports = alunoRoutes