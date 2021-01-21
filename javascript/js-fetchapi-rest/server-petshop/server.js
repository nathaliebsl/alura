const customExpress = require('./config/custom-express');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/database/tabelas');

const app = customExpress()

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

app.get('/', (req,res) => {
  res.json({status: "esse teste funcionou!"})
})

app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000')
})