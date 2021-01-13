import { Cliente } from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

// const cliente1 = new Cliente("Ricardo", 82702845053);
// const cliente2 = new Cliente("Alice", 11122233300);

// const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
// const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);

// const conta2 = new ContaCorrente(cliente2, 1001);

// contaCorrenteRicardo.depositar(500);

// contaCorrenteRicardo.transferir(200, conta2);

// console.log(contaPoupancaRicardo);

// console.log(contaCorrenteRicardo);
// console.log(conta2);

const diretor =  new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente =  new Gerente("Ricardo",  5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78945612379, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);