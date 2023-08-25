import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../../components/Profile/ProfileCard";
import ButtonEditProfile from "../../components/Profile/ButtonEditProfile";
import ProfileBio from "../../components/Profile/ProfileBio";
import style from "./styles.module.css";
import FriendsCard from "../../components/Profile/FriendsCard/FriendsCard";
import CommunitiesCard from "../../components/Profile/CommunityCard/ComunnitiesCard";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
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
    navigate("/profile/edit", { state: profileInfo }); // Passa as informações do perfil para a página de edição
  };

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name={profileInfo.Name}
          RelationshipStatus={profileInfo.RelationshipStatus}
          Country={profileInfo.Country}
        />
        <ButtonEditProfile Text="Editar meu perfil" onClick={handleEdit} />
      </div>
      <div className={style.ContainerCard}>
        <ProfileBio Name={profileInfo.Name} Bio={profileInfo.Bio} />
      </div>
      <div className={style.ContainerFriendsANDCommunities}>
        <div className={style.ContainerFriends}>
          <FriendsCard />
        </div>
        <div className={style.ContainerCommunities}>
          <CommunitiesCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
