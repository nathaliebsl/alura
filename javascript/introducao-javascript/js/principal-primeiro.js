//console.log("fui carregado de um arquivo externo");


var titulo = document.querySelector(".titulo");
//console.log(titulo);
//console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
//console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

  //console.log(paciente);
  //console.log(tdPeso);
  //console.log("o peso do Paulo é: " + peso + "kg");
  //console.log("a altura do Paulo é: " + altura + " metros");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
      console.log("Peso inválido");
      tdPeso.textContent = "Peso inválido";
      pesoValido = false;
    }

    if(altura <= 0 || altura >= 3){
      console.log("Altura inválida");
      tdAltura.textContent = "Altura inválida";
      alturaValida = false;
    }

    if(pesoValido && alturaValida){
      var imc = peso/(altura*altura);
      //console.log("o IMC do Paulo é: "+ imc);
      tdImc.textContent = imc;
    } else{
        tdImc.textContent = "Altura ou Peso inválidos!";
      }
}
