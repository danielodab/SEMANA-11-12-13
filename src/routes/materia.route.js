const { Router } = require('express') 
const { auth } = require('../middleware/auth')

const MateriasController = require('../controllers/MateriasController')

const materiaRoutes = new Router()

materiaRoutes.post('/', auth, MateriasController.cadastrar) 
materiaRoutes.get('/', auth, MateriasController.listar) //chamada da rota listar criada no controller
materiaRoutes.delete('/:id', auth, MateriasController.deletar) //chamada da rota deletar criada no controller
materiaRoutes.put('/:id', auth, MateriasController.alterar) //chamada da rota alterar criada no controller

module.exports = materiaRoutes