import { ProfileForm } from "components/profileForm";
import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div style={{ paddingTop: 84 }}>
      <ProfileForm />
    </div>
  );
};

export default Profile;
