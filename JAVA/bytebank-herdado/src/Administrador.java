
public class Administrador extends Funcionario implements Autenticavel{

	private Autenticacao autenticador;
	
	public Administrador() {
		this.autenticador = new Autenticacao();
	}
	
	@Override
	public void setSenha(int senha) {
		this.autenticador.setSenha(senha);
	}

	@Override
	public boolean autentica(int senha) {
		return this.autenticador.autentica(senha);
		//boolean autenticou = this.autentica(senha);
		//return autenticou;	
		}
	
	@Override
	public double getBonificacao() {
		return 50;
	}

	
}
