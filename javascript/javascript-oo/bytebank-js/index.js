import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 82702845053);
const cliente2 = new Cliente("Alice", 11122233300);


const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

const conta2 = new ContaCorrente(cliente2, 1001);

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

contaCorrenteRicardo.transferir(200, conta2);

console.log(contaPoupancaRicardo);


console.log(contaCorrenteRicardo);
// console.log(conta2);
// console.log(ContaCorrente.numeroDeContas);