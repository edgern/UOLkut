import React, { useState } from "react";
import axios from "axios";
import ButtonLog from "../../components/ButtonLogin";
import ButtonReg from "../../components/ButtonRegister";
import styles from "./styles.module.css";
import LogoSVG from "../../assets/logo/logo.svg";

import { useNavigate } from "react-router-dom";

const Input: React.FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={styles.input}
  />
);

const Signin: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (!isValidEmail(email)) {
      setError("E-mail inválido");
      return;
    }
  
    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data
  
      const user = users.find((user: any) => user.email === email && user.password === senha);
      if (user) {
        navigate("/profile", { state: { user: user } });
      } else {
        setError("Credenciais inválidas");
      }
    } catch (error) {
      setError("Erro ao realizar login");
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.CardImg}>
        <div className={styles.TextoNoCantoInferior}>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </div>
        <img src="" alt="" />
      </div>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <img src={LogoSVG} alt="Logo" />
        </div>
        <label className={styles.Label}>Acesse o UOLkut</label>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={setEmail}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={setSenha}
        />
        <div className={styles.RememberPassword}>
          <input type="checkbox" />
          <label>Lembrar minha senha</label>
        </div>
        <label className={styles.LabelError}>{error}</label>
        <ButtonLog Text="Entrar na conta" onClick={handleLogin} />
        <ButtonReg Text="Criar uma conta" onClick={handleRegister} />
        <label className={styles.Strong}>
          <a href="/">Esqueci a minha Senha</a>
        </label>
      </div>
    </div>
  );
};

export default Signin;
