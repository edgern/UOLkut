import styles from "./styles.module.css";
import ProfileRatings from "./ProfileRatings";
import ProfileInfo from "./ProfileInfo";
import ProfileInterests from "./ProfileInterests";

interface ProfileBioProps {
  id: number;
  name: string;
  bio: string;
  birthdate: string;
  occupation: string;
  country: string;
  city: string;
  relationship: string;
}

const ProfileBio: React.FC<ProfileBioProps> = ({
  name,
  bio,
  birthdate,
  occupation,
  country,
  city,
  relationship,
}) => {
  return (
    <div className={styles.Content}>
      <h2>Boa tarde, {name}</h2>
      <div className={styles.BioContent}>
        <p>{bio}</p>
      </div>
      <div className={styles.Ratings}>
        <ProfileRatings Title="Fãs" Type="Fan" FanCount={103} />
        <ProfileRatings Title="Confiável" Type="Reliable" />
        <ProfileRatings Title="Legal" Type="Cool" />
        <ProfileRatings Title="Sexy" Type="Sexy" />
      </div>
      <ProfileInfo Title="Relacionamento" Text={relationship} />
      <ProfileInfo Title="Aniversário" Text={birthdate} />
      <ProfileInfo Title="Idade" Text="22" />
      <ProfileInfo Title="Quem sou eu" Text={occupation} />
      <ProfileInfo Title="País" Text={country} />
      <ProfileInfo Title="Cidade natal" Text={city} />
      <ProfileInterests
        Title="Filmes"
        Content={["A rede social", "Meu amigo totoro"]}
      />
    </div>
  );
};

export default ProfileBio;
