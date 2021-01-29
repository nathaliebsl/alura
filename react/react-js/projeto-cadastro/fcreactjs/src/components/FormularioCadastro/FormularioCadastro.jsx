import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DadosPessoais, DadosUsuario, DadosDeEntrega } from "./index";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  return <>{formularioAtual(etapaAtual)}</>;

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />;
      case 2:
        return <DadosDeEntrega />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }
}

export default FormularioCadastro;
