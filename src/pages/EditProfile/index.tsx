import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/Profile/ProfileCard";
import EditProfileForm from "../../components/EditProfile/form";
import style from "./styles.module.css";

const Edit: React.FC = () => {
  const navigate = useNavigate();

  // Estado para armazenar as informações do perfil
  const [profileInfo, setProfileInfo] = useState({
    Name: "Iuri Silva",
    RelationshipStatus: "Solteiro",
    Country: "Brasil",
    Bio: "Programar sem café é igual poeta sem poesia",
  });

  // Função para lidar com a edição do perfil
  const handleEdit = () => {
    navigate("/edit", { state: profileInfo }); // Passa as informações do perfil para a página de edição
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name={profileInfo.Name}
          RelationshipStatus={profileInfo.RelationshipStatus}
          Country={profileInfo.Country}
        />
      </div>
      <div className={style.ContainerCard}>
        <EditProfileForm />
      </div>
    </div>
  );
};

export default Edit;
