
public class TesteReferencias {

	public static void main(String[] args) {
		
		Gerente g1 = new Gerente();
		g1.setNome("Nathalie");
		g1.setSalario(5000);
		
		EditorVideo e1 = new EditorVideo();
		e1.setSalario(2500);
		
		Designer d1 = new Designer();
		d1.setSalario(2000);
		
		//System.out.println(g1.getNome());
		
		System.out.println(g1.getBonificacao());
		System.out.println(e1.getBonificacao());
		System.out.println(d1.getBonificacao());
		
		
		ControleBonificacao controle = new ControleBonificacao();
		controle.registra(g1);
		controle.registra(e1);
		controle.registra(d1);
		
		System.out.println(controle.getSoma());

	}

}
