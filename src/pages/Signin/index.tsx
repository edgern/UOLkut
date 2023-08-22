import React, { useState } from "react";
import Input from "../../components/Input";
import ButtonLog from "../../components/ButtonLogin";
import ButtonReg from "../../components/ButtonRegister";
import styles from "./styles.module.css"
import LogoSVG from "../../assets/logo/logo.svg"; // Importe o arquivo SVG aqui

import { useNavigate } from "react-router-dom";

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>(""); 


  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };


  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
   }else if (!isValidEmail(email)) {
    setError("E-mail inválido");
    return;
  }

    navigate("/profile");
  };

  const handleRegister = () => {   

    navigate("/register");
  };
  
  return (
    <div className={styles.Container}>      
      <div className={styles.CardImg}>
      <div className={styles.TextoNoCantoInferior}>Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas</div>
        <img src="" alt="" />             
      </div>
      <div className={styles.Content}>
      <div className={styles.Logo}>
        {/* Coloque o SVG aqui */}
        <img src={LogoSVG} alt="Logo" />
      </div>
      <label className={styles.Label}>Acesse o Orkut</label>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <div className={styles.RememberPassword}>
          <input            
            type="checkbox" 
          />
          <label>Lembrar da senha</label>
        </div>
        <label className={styles.LabelError}>{error}</label>
        <ButtonLog Text="Entrar na conta" onClick={handleLogin} />       
        <ButtonReg Text="Criar uma conta" onClick={handleRegister} /> 
          <label className={styles.Strong}>
            <a href="/">Esqueci minha Senha</a>
          </label>        
      </div>
    </div>
  );
};

export default Signin;