import React from 'react';
import {DadosPessoais, DadosUsuario, DadosDeEntrega} from "./index"

function FormularioCadastro({aoEnviar, validarCPF}) {
  
  return(
    <>
       <DadosPessoais 
       aoEnviar={aoEnviar}
       validarCPF={validarCPF}/>
       <DadosUsuario />
       <DadosDeEntrega />
    </>
   
  )

}

export default FormularioCadastro;