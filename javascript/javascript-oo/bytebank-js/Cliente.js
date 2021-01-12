export class Cliente {

    get cpf() {
        this._cpf;
    }

    //boa prática é sempre declarar os atributos da classe dentro do construtor
    constructor(nome, cpf) {
        this.nome =  nome;
        this._cpf = cpf; 
    }

}