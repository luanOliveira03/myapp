import React from "react";

const Cadastro = () => {
  return (
    <div>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" placeholder="Nome Completo" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" placeholder="nome@site.com.br" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" placeholder="Senha" />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a senha"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
