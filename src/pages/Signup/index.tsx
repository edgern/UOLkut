import React, { useState } from "react";
import styles from "./styles.module.css";
import LogoSVG from "../../assets/logo/logo.svg"; // Importe o arquivo SVG aqui

import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");
  const [nascimento, setNascimento] = useState("");
  const [profissao, setProfissao] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [relacionamento, setRelacionamento] = useState("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
    setError("");
  };

  const handleCadastro = () => {
    // Lógica para processar os dados de cadastro
    // Aqui você pode enviar os dados para um servidor, por exemplo
    // E depois navegar para a página de perfil ou outra página
    navigate("/profile");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.CardImg}>
        <div className={styles.TextoNoCantoInferior}>
          Conecta-se aos seus amigos e familiares usando recados e mensagens
          instantâneas
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <img src={LogoSVG} alt="Logo" />
        </div>
        <label className={styles.Label}>Cadastre-se no UOLkut</label>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => handleInputChange(e, setSenha)}
          className={styles.input}
        />
        <div className={styles.doubleInputContainer}>
          <input
            type="text"
            placeholder="Nascimento"
            value={nascimento}
            onChange={(e) => handleInputChange(e, setNascimento)}
            className={`${styles.input} ${styles.doubleInputFirst}`}
          />
          <input
            type="text"
            placeholder="Profissão"
            value={profissao}
            onChange={(e) => handleInputChange(e, setProfissao)}
            className={`${styles.input} ${styles.doubleInputSecond}`}
          />
        </div>
        <div className={styles.doubleInputContainer}>
          <input
            type="text"
            placeholder="País"
            value={pais}
            onChange={(e) => handleInputChange(e, setPais)}
            className={`${styles.input} ${styles.doubleInputFirst}`}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => handleInputChange(e, setCidade)}
            className={`${styles.input} ${styles.doubleInputSecond}`}
          />
        </div>
        <select
          value={relacionamento}
          onChange={(e) => setRelacionamento(e.target.value)}
          className={styles.relationship}
        >
          <option value="">Selecione um relacionamento</option>
          <option value="solteiro">Solteiro</option>
          <option value="namorando">Namorando</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
        </select>
        <label className={styles.LabelError}>{error}</label>
        <button className={styles.Button} onClick={handleCadastro}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Signup;
