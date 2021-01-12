import {Cliente} from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente; //privado
    _saldo = 0;
    // #saldo =0 uso de # antes de um atributo, é ainda uma proposta que está sendo feita para uma sintaxe de campos privados dentro do JS. link da proposta: https://github.com/tc39/proposal-class-fields#private-fields
    //_saldo = 0; o "_"(underline) é a convenção de que um atributo é privado e não podemos mexer diretamente nesse atributo. Apenas usando os métodos criado para tal.

    //método sacar - altera o saldo
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    
    //método depositar - altera o saldo
    depositar(valor){
        //colocar o if negativo antes do resultado positivo se chama "early return"
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;
    }

    //método transferir - também altera o saldo, usando outros métodos.
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    //método acessor set (define o atributo privado _cliente - que nesse caso é uma classe)
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    //método acessor get(acessa o atributo privado _cliente)
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }

}
