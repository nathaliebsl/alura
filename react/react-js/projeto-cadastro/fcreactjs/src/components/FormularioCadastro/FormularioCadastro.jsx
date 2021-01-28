import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  //const [cpf,setCPF] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
            let tmpNome = event.target.value;
            if (tmpNome.length >= 3) {
                tmpNome =tmpNome.substr(0, 3);
              }
          setNome(tmpNome);
     
        }}
        required
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        required
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        required
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <FormControlLabel
        label="Promoções"
        control={<Switch name="checkedPromo" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="checkedNews" defaultChecked />}
      />

      <Button type="submit" variant="contained" color="secondary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
