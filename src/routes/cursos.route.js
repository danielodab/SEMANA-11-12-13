const { Router} = require('express') 
const { auth } = require('../middleware/auth') //requerimento de autenticação

const CursoController = require('../controllers/CursoController') //chamada do controller


const cursoRoutes = new Router()

cursoRoutes.post('/', CursoController.cadastrar) //chamada da rota cadastrar criada no controller
cursoRoutes.get('/', auth, CursoController.listar) //chamada da rota listar criada no controller
cursoRoutes.delete('/:id', auth, CursoController.deletar) //chamada da rota deletar criada no controller
cursoRoutes.put('/:id', auth, CursoController.alterar) //chamada da rota alterar criada no controller


module.exports = cursoRoutes

