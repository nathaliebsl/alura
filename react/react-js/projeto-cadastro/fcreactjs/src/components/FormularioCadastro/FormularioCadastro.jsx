import React, { useState } from "react";
import { DadosPessoais, DadosUsuario, DadosDeEntrega } from "./index";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosDeEntrega aoEnviar={aoEnviar} />
  ]

  function proximo() {
    setEtapaAtual(etapaAtual+1);
  }

  return <>{formularios[etapaAtual]}</>;

}

export default FormularioCadastro;
