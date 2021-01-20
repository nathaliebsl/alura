const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'pancho#01BR',
  database: 'agenda-petshop'
})

module.exports = conexao