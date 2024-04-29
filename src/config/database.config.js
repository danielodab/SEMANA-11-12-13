const { config } = require('dotenv')
config()

module.exports = {
  dialect: process.env.DIALECT, //Qual banco de dados está utilizando (POSTGRES)
  host: process.env.HOST, //servidor está utilizando (LOCAL)
  username: process.env.USERNAMEDB, //Qual o nome do usuário no postgres
  password: process.env.PASSWORDDB, //Qual a senha seu usuário no postgres
  database: process.env.DATABASE, //Qual o nome do database no postgres
  port: process.env.PORT //porta do postgres (5432)
};