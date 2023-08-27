import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileCard from "../../components/Profile/ProfileCard";
import ButtonEditProfile from "../../components/Profile/ButtonEditProfile";
import ProfileBio from "../../components/Profile/ProfileBio";
import style from "./styles.module.css";
import FriendsCard from "../../components/Profile/FriendsCard/FriendsCard";
import CommunitiesCard from "../../components/Profile/CommunityCard/ComunnitiesCard";

interface UserProfile {
  id: number;
  name: string;
  token: string;
  bio: string;
  email: string;
  password: string;
  birthdate: string;
  occupation: string;
  country: string;
  city: string;
  relationship: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.user) {
      setProfileInfo(location.state.user);
    }
  }, []);

  const [profileInfo, setProfileInfo] = useState<UserProfile | null>(null);

  const handleEdit = () => {
    if (profileInfo) {
      navigate("/profile/edit", { state: profileInfo });
    }
  };

  if (!profileInfo || !profileInfo.id) {
    return null;
  }

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <ProfileCard
          Name={profileInfo.name}
          RelationshipStatus={profileInfo.relationship}
          Country={profileInfo.country}
        />
        <ButtonEditProfile Text="Editar meu perfil" onClick={handleEdit} />
      </div>
      <div className={style.ContainerCard}>
        <ProfileBio
          id={profileInfo.id}
          name={profileInfo.name}
          bio={profileInfo.bio}
          birthdate={profileInfo.birthdate}
          occupation={profileInfo.occupation}
          country={profileInfo.country}
          city={profileInfo.city}
          relationship={profileInfo.relationship}
        />
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
