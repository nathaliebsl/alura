
public class TestaBanco {
	
	public static void main(String[] args) {
		Cliente nathalie = new Cliente();
		
		nathalie.nome = "Nathalie Leal";
		nathalie.cpf = "000.000.450-55";
		nathalie.profissao = "programador";
	
		Conta contaNathalie = new Conta(); 
		contaNathalie.deposita(100);
		
		contaNathalie.titular = nathalie;
		System.out.println(contaNathalie.titular.nome);
		System.out.println(contaNathalie.titular);
	} 
		
		
		
}
