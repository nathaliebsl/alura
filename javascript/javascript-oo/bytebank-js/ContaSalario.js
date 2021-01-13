export class ContaSalario extends Conta {
       constructor(cliente) {
           super(0, cliente, 1001);
       }
    
    //sobreescrevendo o comportamento do método protegido/abstrato sacar da classe mãe.
    //quando um método é ABSTRATO na classe mãe, ele obriga que todas suas classes filhas sobrescrevam o método com suas regras.

    sacar(valor){
        let taxa = 1.01; //define o valor da taxa
        return super._sacar(valor, taxa); //// retorna utilizando o método protegido junto aos valores aqui estabelecidos.
    }
}