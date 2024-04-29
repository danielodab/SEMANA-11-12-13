const { DataTypes } = require('sequelize') // sequelize para manipulação dos dados
const { connection } = require('../database/connection') // conexão com o banco
const {hash} = require('bcryptjs')

const Aluno = connection.define('alunos', { //Definir os campos da tabela para manipulação
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    nome: {
        type: DataTypes.STRING,
    },
    data_nascimento: {
        type: DataTypes.DATE
    },
    celular: {
        type: DataTypes.STRING,
    }
})

// hooks 
Aluno.beforeSave(async (user) => {
    user.password = await hash(user.password, 8) 
    return user
})

module.exports = Aluno


