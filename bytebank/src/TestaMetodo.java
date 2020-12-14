
public class TestaMetodo {
	
	public static void main(String[] args) {
		
		Conta contaNathalie = new Conta();
		contaNathalie.saldo = 100;
		contaNathalie.deposita(50);
		System.out.println(contaNathalie.saldo);
		
		boolean conseguiuRetirar = contaNathalie.saca(20);
        System.out.println(contaNathalie.saldo); 
        System.out.println(conseguiuRetirar);

        Conta contaDaMarcela = new Conta();
        contaDaMarcela.deposita(1000);

        if(contaDaMarcela.transfere(300, contaNathalie)) {
            System.out.println("transferencia com sucesso");
        } else {
            System.out.println("faltou dinheiro");
        }

        System.out.println(contaDaMarcela.saldo);
        System.out.println(contaNathalie.saldo); 
    }
}

