import { editaCliente } from "./api/cliente.js";
import inicializaCadastro from "./components/cadastro/componente-cadastro.js";
import inicializaFormEdicao from "./components/edita/form-edicao.js";
import inicializaTabela from "./components/lista/listagem-clientes.js";

const rotas = {
    "/": inicializaTabela,
    "/cadastro": inicializaCadastro,
    "/edita": inicializaFormEdicao
    //"/pets":
}

const rootDiv = document.querySelector('[data-container]');

// funçao responsável pela navegação
const navegacao = pathname => {
    //window.history,pushState() é o método que adiciona o "estado" na sessão de historicos do navegador.
    //recebe o estado que é um objeto vazio {}, pathname que é o titulo que iremos passar, e a URL (window.location.origin) que vai mostar "o endereço original da página (root)".
    window.history.pushState({}, pathname, window.location.origin + pathname );

    rootDiv.innerHTML = "";
    const iniciarRota = rotas[window.location.pathname];

    rootDiv.appendChild(iniciarRota());
}

window.navegacao = navegacao;
window.onpopstate = () => {
    rootDiv.innerHTML = "";
    rootDiv.appendChild(rotas[window.location.pathname]());
}

export { navegacao }