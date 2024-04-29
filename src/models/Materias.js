const { connection } = require("../database/connection"); // conexão com o banco
const { DataTypes } = require('sequelize') // sequelize para manipulação dos dados
//const Aluno = require ('./Aluno')
//const Curso = require ('./Curso')

const Materia = connection.define("materias", { //Definir os campos da tabela para manipulação
    materia: {
        type: DataTypes.STRING,
    },
    id_curso: {
        type: DataTypes.INTEGER
    }
})

//Matricula.belongsToMany(Aluno)
//Matricula.belongsToMany(Aluno)

module.exports = Materia