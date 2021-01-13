export class Cliente {

    get cpf() {
        this._cpf;
    }

    //boa prática é sempre declarar os atributos da classe dentro do construtor
    constructor(nome, cpf, senha) {
        this.nome =  nome;
        this._cpf = cpf; 
        this._senha = senha;
    }

    //interface autenticar que permite que o Cliente acesse o SistemaAutenticacao.js e seja autenticável
    autenticar(senha){
        return senha == this._senha;
    }

}