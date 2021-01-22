const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome');

// a funcao detalhaCliente retorna uma promise, e esta, quando resolvida(then..) passamos a arrow function dados
detalhaCliente(id).then( dados => {
    //aqui pegamos o valor do inputcpf e passamos para a API usando o parametro dados, utilizando um array pois foi dessa maneira que nossa API foi configurada. (primeiro elemento da API posiçao = 0)
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
})

const alerta = (classe, mensagem) => { 
    const linha = document.createElement('tr');

    const conteudoLinha = `
    <div class="${classe}">${mensagem}</div>
    
`
  
    linha.innerHTML = conteudoLinha;
    return linha;
} 

const editaForm = document.querySelector('[data-form');

editaForm.addEventListener('submit', event => {
    event.preventDefault();

    if(!validaCPF(inputCPF.value)){
        alert("ESSE CPF NÃO EXISTE")
        return 
    }
    
    if(inputCPF.value.length !== 11){
        alert("ESSE CPF NÃO EXISTE")
        return 
    }
    
    editaCliente(id, inputCPF.value, inputNome.value)
    .then( resposta => { 
        if( resposta.status === 200){
            editaForm.appendChild(alerta(
                "alert alert-success",
                "CLIENTE EDITADO COM SUCESSO !"
            ))
        } else { 
            editaForm.appendChild(alerta(
                "alert alert-warning",
                "O CLIENTE NÃO PODE SER EDITADO !"
            ))
        }
    })

})