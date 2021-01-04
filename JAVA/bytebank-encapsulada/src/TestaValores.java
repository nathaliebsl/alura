
public class TestaValores {

	public static void main(String[] args) {
		Conta conta = new Conta(14, 1407);
		
		System.out.println(conta.getAgencia());
	
		Conta conta1 = new Conta(14, 1234);
		Conta conta2 = new Conta(14, 1945);
		
		System.out.println("o total de Contas é: " + Conta.getTotal());
	}
}
