import { detalhaCliente, editaCliente } from '../../api/cliente.js';
import validaCPF from '../valida/valida-cpf.js';


const eventoForm = form => {

    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get('id');

    const inputCPF = form.querySelector('[data-cpf]');
    const inputNome = form.querySelector('[data-nome]');

    // a funcao detalhaCliente retorna uma promise, e esta, quando resolvida(then..) passamos a arrow function dados
    detalhaCliente(id).then(dados => {
        //aqui pegamos o valor do inputcpf e passamos para a API usando o parametro dados, utilizando um array pois foi dessa maneira que nossa API foi configurada. (primeiro elemento da API posiçao = 0)
        inputCPF.value = dados[0].cpf;
        inputNome.value = dados[0].nome;
    })

    const alerta = (classe, mensagem) => {
        const linha = document.createElement('section');

        const conteudoLinha = `
            <div class="${classe}">${mensagem}</div>
    
        `
        linha.innerHTML = conteudoLinha;
        return linha;
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        //verificar se possivel deixar ambas verificacoes no mesmo if
        if (!validaCPF(inputCPF.value)) {
            alert("ESSE CPF NÃO EXISTE")
            return
        }
//tem algum problema nesse if que etá dando erro na verificaçao


        if (inputCPF.value.length !== 11) {
            alert("ESSE CPF NÃO EXISTE")
            return
        }

        editaCliente(id, inputCPF.value, inputNome.value)
        .then( () => 
            form.appendChild(alerta(
                "alert alert-success",
                "CLIENTE EDITADO COM SUCESSO !"
            ))
        )    
        .catch( () => 
            form.appendChild(alerta(
                "alert alert-warning",
                "O CLIENTE NÃO PODE SER EDITADO !"
            ))
        )

    })

}

export default eventoForm;