import { listarClientes, deletaCliente } from "../../api/cliente.js";
import "../../assets/css/clientes.css";
import inicializaCadastro from '../cadastro/componente-cadastro.js';

const excluirCliente = (id) => {
  if(confirm("Deseja excluir o cliente?")){
    deletaCliente(id);
    window.location.reload();
  }
}

const conteudo = 
` 
<thead class="thead-dark">
    <tr>
      <th scope="col">CPF</th>
      <th scope="col">Nome</th>
      <th scope="col"></th>
      <th scope="col"><a class="btn btn-primary">Novo Cliente</a></th>

    </tr>
  </thead>
  `;

const container = document.querySelector('[data-container]');
const tabela = document.createElement("table");

tabela.innerHTML = conteudo;
tabela.classList.add("table");

container.appendChild(tabela);

const novoCliente = document.querySelector('.btn');

novoCliente.addEventListener('click', () => {
  inicializaCadastro();
});

const corpoTabela = document.createElement('tbody');

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");
  
  const conteudoLinha = `
  <td>${ cpf }</td>
  <td>${ nome }</td>
  
  <button type="button" class="btn btn-danger" onclick="excluirCliente(${id})">Excluir</button>
  
  <a href="./components/edita/edita-clientes.html?id=${id}">
  <button type="button" class="btn btn-info">Editar</button>
  </a>
  `

  linha.innerHTML = conteudoLinha;
  return linha;
  
};

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
  })
});

tabela.appendChild(corpoTabela);


