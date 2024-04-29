const { Router } = require("express"); //requisição das rotas
const alunoRoutes = require("./alunos.route");
const cursoRoutes = require("./cursos.route");
const loginRoutes = require("./login.route");
const matriculaRoutes = require("./matricula.route");
const materiaRoutes = require("./materia.route");

const routes = Router()

//utilização das rotas criadas
routes.use('/matriculas', matriculaRoutes) 
routes.use('/alunos', alunoRoutes)
routes.use('/cursos', cursoRoutes)
routes.use('/login', loginRoutes)
routes.use('/materias', materiaRoutes)

module.exports = routes