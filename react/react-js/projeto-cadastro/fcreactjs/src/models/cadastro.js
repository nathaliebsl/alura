function validarCPF(cpf) {
    if (cpf.length !== 11) {
      return { valido: false, texto: "O CPF precisa ter 11 dígitos numéricos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  function validarSenha(senha) {
    if (senha.length < 6 || senha.length > 72) {
      return { valido: false, texto: "A senha deve ter no mínimo 6 e no máximo 72 dígitos" };
    } else {
      return { valido: true, texto: "" };
    }
  }

  export {validarCPF, validarSenha};