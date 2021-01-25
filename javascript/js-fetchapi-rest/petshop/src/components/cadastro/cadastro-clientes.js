import validaCPF from '../valida/valida-cpf.js';
import { cadastrarClientes } from '../../api/cliente.js'

const eventoEnvia = (form) => {
    // const form = document.querySelector('[data-form]');

    form.addEventListener("submit", event => {
        event.preventDefault();

        const nome = event.target.querySelector('[data-nome]').value;
        const cpf = event.target.querySelector('[data-cpf]').value;

        if (!validaCPF(cpf)) {
            alert("O CPF informado não é válido");
            formCadastraCliente.reset();

        } else {
            cadastrarClientes(nome, cpf);
            formCadastraCliente.reset();
        }

    })
}    

export default eventoEnvia;