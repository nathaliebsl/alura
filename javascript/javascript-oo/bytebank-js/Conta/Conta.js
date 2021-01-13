//classe abstrata(não pode ser instanciada diretamente)

//no JS para definir uma classe abstrata é necessário criar uma regra dentro do construtor que não permita que essa classe mãe seja instanciada.

import { Cliente } from "./Cliente.js";

export class Conta{
    
    //*boa prática: declarar todas as propriedades da classe no construtor, e inicializar as variáveis com algum valor
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto tipo Conta pois essa é uma classe abstrata"); 
            //regra que não permite que a classe Conta seja instanciada diretamente. Na tentativa de instanciar um objeto tipo Conta, o erro é lançado.
        }

        this._cliente = cliente; 
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }
    
    // OBS.: #saldo =0; uso de # antes de um atributo, é ainda uma proposta que está sendo feita para uma sintaxe de campos privados dentro do JS. link da proposta: https://github.com/tc39/proposal-class-fields#private-fields
    // OBS2.: _saldo =0; o "_"(underline) é a convenção de que um atributo é privado e não podemos mexer diretamente nesse atributo. Apenas usando os métodos criado para tal.

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

    //método sacar - "acessa o método privado _saldo"
    sacar(valor){
        //ao deixar um método vazio na classe mãe, ele classifica como um método ABSTRATO. O que quer dizer que suas classes filhas serão obrigadas a sobrescreve-lo utilizando seus diferentes critérios. EX.: na subclasse ContaCorrente a taxa é 10% e na ContaPoupanca 5%.
        
    }
    
    // OBS.: A lógica da diferença entre private e protected é basicamente a presença ou não de herança, então se uma classe tem uma função "_sacar()" e uma classe filha utiliza esse método, então esse modificador é protected. E, como de fato não há nenhuma definição oficial, muitas vezes veremos que ele nasce como private, mas dado que uma classe filha necessita dessa função, acaba se tornando protected.
    
    //método *protegido* sacar - altera o saldo
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
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
        const taxaDoBanco = valorSacado - valor;
        const valorTransferido = valorSacado - taxaDoBanco;
        conta.depositar(valorTransferido);
    }

}