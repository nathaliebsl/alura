
public class SistemaInterno {
	
	private int senha = 2222;

	public void autentica(Autenticavel fa) {
		boolean autenticou = fa.autentica(this.senha);
		if(autenticou) {
			System.out.println("acesso liberado!");
		} else {
			System.out.println("acesso negado");
		}
		
	}
}
