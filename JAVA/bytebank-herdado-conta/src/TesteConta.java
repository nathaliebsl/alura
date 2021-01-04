
public class TesteConta {

	public static void main(String[] args) {
		
		ContaCorrente cc = new ContaCorrente(1234, 10001);
		cc.deposita(100);
		
		ContaPoupanca cp = new ContaPoupanca(1234, 100012);
		cp.deposita(200);
		
		cc.transfere(10, cp);
		
		System.out.println("Saldo CC é: " + cc.getSaldo());
		System.out.println("Saldo CP é: " + cp.getSaldo());
		
		cc.saca(10);
		System.out.println("Seu saldo em CC é: " + cc.getSaldo());
	}

}
