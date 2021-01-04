
public class TesteGerente {
	
	public static void main(String[] args) {
		
	
		
	Gerente g1 = new Gerente();
	g1.setNome("Andressa");
	g1.setCpf("800800800");
	g1.setSalario(5000);
	g1.setSenha(1234);
	
	
	System.out.println(g1.autentica(1234));
	System.out.println(g1.getNome());
	
	System.out.println(g1.getBonificacao());
	
	SistemaInterno si = new SistemaInterno();
	si.autentica(g1);
		
	}

}
