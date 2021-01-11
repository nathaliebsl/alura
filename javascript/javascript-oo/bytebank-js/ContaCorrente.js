export class ContaCorrente {
    agencia;
    cliente;
    // #saldo =0 uso de # antes de um atributo, é ainda uma proposta que está sendo feita para uma sintaxe de campos privados dentro do JS. link da proposta: https://github.com/tc39/proposal-class-fields#private-fields

    //_saldo = 0; o "_"(underline) é a convenção de que um atributo é privado e não podemos mexer diretamente nesse atributo. Apenas usando os métodos criado para tal.
    _saldo = 0;

    //método sacar
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
    
    //método depositar
    depositar(valor){
        //colocar o if negativo antes do resultado positivo se chama "early return"
        if(valor <= 0){
            return;
        } 
        this._saldo += valor;
    }

    //método transferir
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
