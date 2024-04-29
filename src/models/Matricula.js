const { connection } = require("../database/connection"); // conexão com o banco
const { DataTypes } = require('sequelize') // sequelize para manipulação dos dados
//const Aluno = require ('./Aluno')
//const Curso = require ('./Curso')

const Matricula = connection.define("matriculas", { //Definir os campos da tabela para manipulação
    aluno_id: {
        type: DataTypes.INTEGER
    },
    curso_id: {
        type: DataTypes.INTEGER
    }
})

//Matricula.belongsToMany(Aluno)
//Matricula.belongsToMany(Aluno)

module.exports = Matricula