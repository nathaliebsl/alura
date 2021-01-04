
public class TesteFuncionario {
	
	public static void main(String[] args) {
		
		Gerente nathalie = new Gerente();
		nathalie.setNome("Nathalie Leal");
		nathalie.setCpf("827.000.000-55");
		nathalie.setSalario(10000);
		
		System.out.println(nathalie.getNome());
		System.out.println(nathalie.getCpf());
		System.out.println(nathalie.getSalario());
		
		System.out.println(nathalie.getBonificacao());
	}

}
