import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="e-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="secondary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
