var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    //var alvoDoEvento = event.target;
    //var paiDoAlvo = alvoDoEvento.parentNode;
    //paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
      event.target.parentNode.remove();
    },500);

});
