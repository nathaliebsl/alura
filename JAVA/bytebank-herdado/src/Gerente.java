
public class Gerente extends Funcionario implements Autenticavel {

	private Autenticacao autenticador;
	
	public Gerente() {
		this.autenticador = new Autenticacao();
	}
	 	
	public double getBonificacao() {
		System.out.println("Chamando o método de bonificacao do Gerente");
		//return super.getBonificacao() + super.getSalario();
		return super.getSalario();
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
	}

	//@Override
	//public int getSenha() {
	//	return this.senha;
	//}