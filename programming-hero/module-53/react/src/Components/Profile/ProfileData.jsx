import { useContext } from "react";
import AuthContext from "../Auth/context";
import { useNavigate } from "react-router-dom";

const ProfileData = () => {
  //useContext
  const { user } = useContext(AuthContext);
  // useNavigate
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-2xl max-w-md flex flex-col items-center mb-32 sm:p-10 p-8
      rounded-2xl space-y-2 justify-center">
        <div className="mb-5">
          <img src={user?.photoURL} className="rounded-full" alt="" />
        </div>
        <h2 className="text-2xl font-bold">{user?.displayName}</h2>
        <p className="text-lg font-semibold">{user?.email}</p>

        <button
          onClick={() => navigate("/updateProfile")}
          className="btn custom-btn sm:px-16 px-8"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileData;
