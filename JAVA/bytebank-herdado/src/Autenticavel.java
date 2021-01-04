// contrato autenticavel
	//quem "assinar" esse contrato (por meio de 'implements', precisa implementar
		//metodo setSenha
		//metodo autentica
public abstract interface Autenticavel {
	
	public abstract void setSenha(int senha);
	
	//public abstract int getSenha();
	
	public abstract boolean autentica(int senha); 
	
}
