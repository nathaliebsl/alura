const formCadastraCliente = document.querySelector('[data-form]');

formCadastraCliente.addEventListener("submit", event => {
    event.preventDefault();

    const nome = event.target.querySelector('[data-nome]');
    const cpf = event.target.querySelector('[data-cpf]');

    cadastrarClientes(nome.value, cpf.value);

    formCadastraCliente.reset();

})

