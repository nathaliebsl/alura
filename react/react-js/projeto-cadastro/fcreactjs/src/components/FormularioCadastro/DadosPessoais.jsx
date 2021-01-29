import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromo] = useState(true);
  const [novidades, setNews] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
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
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(event) => {
            const validandoCPF = validarCPF(cpf);
            setErros({cpf:validandoCPF})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        required
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromo(event.target.checked);
            }}
            name="promocoes"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="novidades"
          />
        }
      />

      <Button type="submit" variant="contained" color="secondary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
