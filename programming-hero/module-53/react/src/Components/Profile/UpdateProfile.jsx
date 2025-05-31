import { useContext } from "react";
import AuthContext from "../Auth/context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {

    // useContext
    const {profile, user, setUser} = useContext(AuthContext);

    // useNavigate
    const navigate = useNavigate();

    //handleSubmit
    const handleSubmit = (event)=>{
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;

        // update profile
        profile({displayName:name, photoURL:photo})
        .then(()=>{
            setUser({...user, displayName:name, photoURL:photo});
            toast.success("Profile Update Successful");
            navigate('/profile');
          })
          .catch(error => toast.error(error.message))

    }

  return (
    <div className="flex justify-center py-28">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-12">
        <form onSubmit={handleSubmit} className="card-body">
            <h2 className="text-3xl font-bold mb-5">Update Profile</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn custom-btn text-lg h-14">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
