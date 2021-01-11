var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }else{
    adicionaPacienteNaTabela(paciente);
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    form.reset();

    }

});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);

  });

}

function obtemPacienteDoFormulario(form){

//paciente abaixo é um objeto
  paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;

}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome", pacienteTr));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso", pacienteTr));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura", pacienteTr));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura", pacienteTr));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc",pacienteTr));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado
  td.classList.add(classe);

  return td;

}

function validaPaciente(paciente){

  var erros = [];

  if(!validaPeso(paciente.peso)){
    erros.push("Peso Inválido");
  }
  if(!validaAltura(paciente.altura)) {
    erros.push("Altura Inválida");
  }
  if(paciente.nome.length == 0){
    erros.push("O nome deve ser preenchido!");
  }
  if(paciente.gordura.length == 0){
    erros.push("A gordura deve ser preenchida!");
  }
  if(paciente.altura.length == 0){
    erros.push("A altura deve ser preenchida!");
  }
  if(paciente.peso.length == 0){
    erros.push("O peso deve ser preenchido!");
  }


  return erros;
}
