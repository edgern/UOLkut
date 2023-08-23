import React, { useState } from "react";
import styles from "./form.module.css";

const EditProfileForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");
  const [nascimento, setNascimento] = useState("");
  const [profissao, setProfissao] = useState("");
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [relacionamento, setRelacionamento] = useState("");

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
    setError("");
  };

  return (
    <div className={styles.Content}>
      <div className={styles.inputContainer}>
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
        <input
          type="text"
          placeholder="Nascimento"
          value={nascimento}
          onChange={(e) => handleInputChange(e, setNascimento)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Profissão"
          value={profissao}
          onChange={(e) => handleInputChange(e, setProfissao)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="País"
          value={pais}
          onChange={(e) => handleInputChange(e, setPais)}
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => handleInputChange(e, setCidade)}
          className={styles.input}
        />
      </div>
      <select
        value={relacionamento}
        onChange={(e) => setRelacionamento(e.target.value)}
        className={styles.relationship}
      >
        <option value="">Relacionamento</option>
        <option value="solteiro">Solteiro</option>
        <option value="namorando">Namorando</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="viuvo">Viúvo</option>
      </select>
      <button className={styles.button}>Salvar</button>
    </div>
  );
};

export default EditProfileForm;
