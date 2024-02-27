interface ProfileCardProps {
  id: string;
  username: string;
  name?: string;
  surname?: string;
  email: string;
  emailVerified: Date;
  image?: string;
  birthDate?: Date;
  puntuation: number;
  country?: string;
  phone?: number;
  createdAt: Date;
  isTwoFactorEnabled: boolean;
  isMyProfile: boolean;
}

const ProfileCard = ({
  id,
  username,
  name,
  surname,
  email,
  emailVerified,
  image,
  birthDate,
  puntuation,
  country,
  phone,
  createdAt,
  isTwoFactorEnabled,
  isMyProfile
}: ProfileCardProps) => {

  return <div>ProfileCard</div>;
};

export default ProfileCard;
