import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      value={email}
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={senha}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
        id="email"
        label="e-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        required
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
