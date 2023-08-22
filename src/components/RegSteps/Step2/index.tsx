import React, { useState } from "react";
import styles from "./styles.module.css";
import Input from "../../Input";
import Button from "../../ButtonRegister";
import LogoSVG from "../../../assets/logo/logo.svg";

interface Step2Props {
  onPrevious: () => void;
  onComplete: (data: Step2Data) => void;
}

export interface Step2Data {
  selfDescription: string;
  statusRelationship: string;
  hasChildren: string;
  smokes: string;
  drinks: string;
  favoriteSongs: string;
  favoriteMovies: string;
  profilePicture: File | null;
}

const Step2: React.FC<Step2Props> = ({ onPrevious, onComplete }) => {
  const [selfDescription, setSelfDescription] = useState("");
  const [statusRelationship, setStatusRelationship] = useState("");
  const [hasChildren, setHasChildren] = useState("");
  const [smokes, setSmokes] = useState("");
  const [drinks, setDrinks] = useState("");
  const [favoriteSongs, setFavoriteSongs] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [error, setError] = useState("");

  const isValidYesNoResponse = (response: string) => {
    const lowerCaseResponse = response.toLowerCase();
    return lowerCaseResponse === "sim" || lowerCaseResponse === "não";
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleComplete = () => {
    if (
      !selfDescription ||
      !statusRelationship ||
      !hasChildren ||
      !smokes ||
      !drinks ||
      !favoriteSongs ||
      !favoriteMovies ||
      !profilePicture
    ) {
      setError("Preencha todos os campos");
      return;
    }

    if (
      !isValidYesNoResponse(hasChildren) ||
      !isValidYesNoResponse(smokes) ||
      !isValidYesNoResponse(drinks)
    ) {
      setError("Responda 'Sim' ou 'Não' para as perguntas adequadas");
      return;
    }

    setError("");
    onComplete({
      selfDescription,
      statusRelationship,
      hasChildren,
      smokes,
      drinks,
      favoriteSongs,
      favoriteMovies,
      profilePicture,
    });
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Logo}>
          <img src={LogoSVG} alt="Logo" />
        </div>
        <h2 className={styles.Label}>Criação de conta</h2>
        <Input
          type="text"
          placeholder="Fale um pouco sobre você"
          value={selfDescription}
          onChange={(e) => setSelfDescription(e.target.value)}
        />
        <h3 className={styles.LabelReg}>Status de Relacionamento</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Solteiro', 'Casado', 'Namorando'"
          value={statusRelationship}
          onChange={(e) => setStatusRelationship(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você tem filho?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={hasChildren}
          onChange={(e) => setHasChildren(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você fuma?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={smokes}
          onChange={(e) => setSmokes(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Você bebe?</h3>

        <Input
          type="text"
          placeholder="Ex.: 'Sim', 'Não'"
          value={drinks}
          onChange={(e) => setDrinks(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Músicas favoritas</h3>

        <Input
          type="text"
          placeholder="Ex.: Nome das músicas ou bandas favoritas"
          value={favoriteSongs}
          onChange={(e) => setFavoriteSongs(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Filmes favoritos</h3>

        <Input
          type="text"
          placeholder="Ex.: Nome dos filmes favoritos"
          value={favoriteMovies}
          onChange={(e) => setFavoriteMovies(e.target.value)}
        />

        <h3 className={styles.LabelReg}>Faça upload da sua foto de perfil</h3>

        <input type="file" onChange={handleProfilePictureChange} />

        {error && <p className={styles.LabelError}>{error}</p>}
        <Button Text="Anterior" onClick={onPrevious} />
        <Button Text="Concluir" onClick={handleComplete} />
      </div>
    </div>
  );
};

export default Step2;
