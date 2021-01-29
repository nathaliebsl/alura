import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <FormularioCadastro 
        aoEnviar={aoEnviarForm}
        validarCPF={validarCPF}
         />
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11 ){
    return {valido:false, texto: "O CPF precisa ter 11 dígitos numéricos"} 
  } else {
      return {valido:true, texto: ""}
    }
  }

export default App;
