import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosDeEntrega({ aoEnviar }) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form>
      <TextField
        value={cep}
        onChange={(event) => {
          setCEP(event.target.value);
        }}
        required
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        required
        id="endereco"
        label="Endereço"
        type="address"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        required
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        required
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        required
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>

      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
