export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
    }

    adicionarNota(titulo, texto, categoria){
        const nota = new Nota(titulo, texto, categoria);
        this.notas.push(nota);
    }

    apagarNota(indice){
        this.notas.splice(indice, 1);
    }

}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = "";
        this.texto = "";
        this.categoria = "";
    }
}