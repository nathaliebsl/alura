const customExpress = require("./config/custom-express.js");
const Tabelas = require("./infraestrutura/database/tabelas.js");

const app = customExpress();
Tabelas.init();

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
