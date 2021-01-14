const informacoesClientes = [
    {
      cpf: 82702845053,
      nome: "Nathalie"
    },
    {
      cpf: 12345678900,
      nome: "Mathias"
    },
  ];
  
  const exibeCliente = (cpf, nome) => {
    const linha = document.createElement("tr");
    const conteudoLinha = 
    // ` (crase) é a representação do Template literals
    // ${} essa sintaxe permite que coloquemos uma expressão que tenha valor dentro. neste caso são duas variaveis cpf e nome, sendo uma int e uma string.
    `
    <td>${cpf}</td>
    <td>${nome}</td>
    `;
  
    linha.innerHTML = conteudoLinha;
    return linha;
  };
  
  const corpoTabela = document.querySelector("[data-conteudo-tabela]");
  
  informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
  })
