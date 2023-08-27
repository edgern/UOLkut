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

const generateToken = (email: string): string => {
  const timestamp = new Date().getTime();
  const userIdentifier = email;
  const token = `${userIdentifier}_${timestamp}`;
  return token;
};

const Recovery: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [error, setError] = useState<string>("");
  const [code, setCode] = useState("");
  const [showRecoveryForm, setShowRecoveryForm] = useState(false);

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const recoverAccount = () => {
    setShowRecoveryForm(true);
  };

  const backToLogin = () => {
    navigate("/");
  };

  if (showRecoveryForm) {
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
          <label className={styles.Label}>Nova senha</label>
          <Input
            type="code"
            placeholder="Informe o código"
            value={code}
            onChange={setCode}
          />
          <Input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={setNewPassword}
          />
          <Input
            type="confirmPassword"
            placeholder="Confirmar a senha"
            value={confirmPassword}
            onChange={setConfirmPasword}
          />
          <label className={styles.LabelError}>{error}</label>
          <ButtonLog Text="Salvar" onClick={backToLogin} />
          <label className={styles.Strong}>Lembrou sua senha?</label>
          <ButtonReg Text="Entrar com suas credenciais" onClick={backToLogin} />
          <label className={styles.Strong}></label>
        </div>
      </div>
    );
  }

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
        <label className={styles.Label}>Recupere sua senha</label>
        <Input
          type="email"
          placeholder="E-mail cadastrado"
          value={email}
          onChange={setEmail}
        />
        <label className={styles.LabelError}>{error}</label>
        <ButtonLog Text="Enviar código" onClick={recoverAccount} />
        <label className={styles.Strong}>Lembrou sua senha?</label>
        <ButtonReg Text="Entrar com suas credenciais" onClick={backToLogin} />
        <label className={styles.Strong}></label>
      </div>
    </div>
  );
};

export default Recovery;
