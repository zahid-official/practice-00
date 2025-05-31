import { useContext } from "react";
import PageTitle from "../Components/Learn/PageTitle";
import AuthContext from "../Components/Auth/context";
import ProfileData from "../Components/Profile/ProfileData";
import Title from "../Components/Home/Title";

const Profile = () => {
  // useContext
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Profile Title */}
      <section>
        <PageTitle
          pageTitle={`${user?.displayName}'s Profile`}
          text={`Feel free to update your profile if you'd like.`}
        ></PageTitle>
      </section>

      {/*  */}
      <section>
        <Title section={`Profile`} heading1={`Information`}></Title>
        <ProfileData></ProfileData>
      </section>
    </div>
  );
};

export default Profile;
