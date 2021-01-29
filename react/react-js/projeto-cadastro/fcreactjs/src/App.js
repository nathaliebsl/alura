import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import React, { Component } from "react";
import "./App.css";
import { validarCPF, validarSenha } from "./models/cadastro";
import { FormularioCadastro } from "./components/FormularioCadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
