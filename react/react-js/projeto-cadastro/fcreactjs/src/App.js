import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
