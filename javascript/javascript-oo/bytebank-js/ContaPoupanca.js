import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    //sobreescrevendo o comportamento do método abstato sacar da classe mãe.
    sacar(valor){
        let taxa = 1.05;
        return super._sacar(valor, taxa);
    }
}