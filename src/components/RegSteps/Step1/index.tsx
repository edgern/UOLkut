import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../../Input";
import Button from "../../ButtonRegister";
import LogoSVG from "../../../assets/logo/logo.svg";

interface Step1Props {
  onNext: (data: Step1Data) => void;
}

export interface Step1Data {
  name: string;
  email: string;
  birthDate: string;
  city: string;
  state: string;
  password: string;
  confirmPassword: string;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const calculateAge = (birthdate: string): number => {
    const today = new Date();
    const birthDateObj = new Date(birthdate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const handleNext = () => {
    if (!name || !email || !birthDate || !city || !state || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    } else if (password !== confirmPassword) {
      setError("As senhas não são iguais");
      return;
    } else if (!isValidEmail(email)) {
      setError("E-mail inválido");
      return;
    }

    const age = calculateAge(birthDate);
    if (age < 10) {
      setError("Você não tem idade suficiente para se cadastrar.");
      return;
    } else if (age > 130) {
      setError("Por favor, insira uma idade válida.");
      return;
    }

    setError("");
    onNext({
      name,
      email,
      birthDate,
      city,
      state,
      password,
      confirmPassword,
    });
  };

  return (
    <div className={styles.Container}>
      <form className={styles.Content}>
        <div className={styles.Logo}>
          <img src={LogoSVG} alt="Logo" />
        </div>
        <h2 className={styles.Label}>Criando a sua conta</h2>        
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />        
        <Input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className={styles.LabelError}>{error}</p>}
        <Button Text="Próximo" onClick={handleNext} />
      </form>
    </div>
  );
};

export default Step1;
