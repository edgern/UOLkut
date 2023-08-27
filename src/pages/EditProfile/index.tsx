import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "./styles.module.css";
import EditProfileForm from "../../components/EditProfile/form";

interface UserProfile {
  id: number;
  name: string;
  bio: string;
  token:string;
  email: string;
  password: string;
  birthdate: string;
  occupation: string;
  country: string;
  city: string;
  relationship: string;
}

const EditProfile: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setProfileInfo(location.state);
    }
  }, []);

  const [profileInfo, setProfileInfo] = useState<UserProfile | null>(null);

  if (!profileInfo || !profileInfo.id) {
    return null;
  }

  return (
    <div className={style.Container}>
      <div className={style.ContainerCard}>
        <EditProfileForm initialData={profileInfo} />
      </div>
    </div>
  );
};

export default EditProfile;
