import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";

interface UserProfile {
  id: number;
  name: string;
  bio: string;
  token: string;
  email: string;
  password: string;
  birthdate: string;
  occupation: string;
  country: string;
  city: string;
  relationship: string;
}

interface EditProfileFormProps {
  initialData: UserProfile;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ initialData }) => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");
  const [profissao, setProfissao] = useState(initialData.occupation);
  const [nome, setNome] = useState(initialData.name);
  const [cidade, setCidade] = useState(initialData.city);
  const [pais, setPais] = useState(initialData.country);
  const [nascimento, setNascimento] = useState(initialData.birthdate);
  const [senha, setSenha] = useState(initialData.password);
  const [relacionamento, setRelacionamento] = useState(
    initialData.relationship
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(event.target.value);
    setError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedData: UserProfile = {
      ...initialData,
      name: nome,
      password: senha,
      birthdate: nascimento,
      occupation: profissao,
      country: pais,
      city: cidade,
      relationship: relacionamento,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/users/${initialData.id}`,
        {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${initialData.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        navigate("/profile", { state: { user: updatedData } });
      } else {
        setError("Failed to update profile. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={styles.Content}>
      <label className={styles.Label}>Editar informações</label>
      <form className={styles.inputContainer} onSubmit={handleFormSubmit}>
        <input
          type="profissão"
          placeholder="Profissão"
          value={profissao}
          onChange={(e) => handleInputChange(e, setProfissao)}
          className={styles.input}
        />
        <input
          type="nome"
          placeholder="Nome"
          value={nome}
          onChange={(e) => handleInputChange(e, setNome)}
          className={styles.input}
        />
        <input
          type="cidade"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => handleInputChange(e, setCidade)}
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
        <button type="submit" className={styles.button}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
