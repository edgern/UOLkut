import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importe o useNavigate
import styles from "./header.module.css";
import SearchBox from "./searchbox";
import ProfileInfoBox from "./profileinfobox";

interface GetUserName {
  name: string;
}

const HeaderProfile: React.FC = () => {
  const navigate = useNavigate(); // Inicialize o useNavigate
  const location = useLocation();
  
  useEffect(() => {
    if (location.state && location.state.user) {
      setProfileName(location.state.user);
    }
  }, []);

  const [profileName, setProfileName] = useState<GetUserName | null>(null);


  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a className={styles.logo} href="/" onClick={() => navigate("/")}>
          UOLkut
        </a>
        <nav className={styles.links}>
          <a href="/" onClick={() => navigate("/")}>
            Início
          </a>
          <a href="/profile" onClick={() => navigate("/profile")}>
            Perfil
          </a>
          <a href="/" onClick={() => navigate("/")}>
            Comunidades
          </a>
          <a href="/" onClick={() => navigate("/")}>
            Jogos
          </a>
        </nav>
        <SearchBox />
        <ProfileInfoBox text={profileName ? profileName.name : ''} />
      </div>
    </header>
  );
};

export default HeaderProfile;
