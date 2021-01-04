
public class TestaGetESet {
	
	public static void main(String[] args) {
		Conta conta = new Conta(14,1407);
		conta.setNumero(1407);
		
		System.out.println("o número da conta é " + conta.getNumero());
		
		Cliente nathalie = new Cliente();
		conta.setTitular(nathalie);
		nathalie.setNome("Nathalie Leal");
		
		System.out.println("O nome do titular é: " + conta.getTitular().getNome());
		conta.getTitular().setProfissao("Programadora");
		System.out.println("Profissão: " + conta.getTitular().getProfissao());
	}

}
