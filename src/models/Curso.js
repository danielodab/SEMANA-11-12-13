const { DataTypes } = require('sequelize') // sequelize para manipulação dos dados
const { connection } = require('../database/connection') // conexão com o banco 

const Curso = connection.define('cursos', { //Definir os campos da tabela para manipulação
    nome: {
        type: DataTypes.STRING,
    },
    duracao_horas: {
        type: DataTypes.INTEGER
    }
})

module.exports = Curso


