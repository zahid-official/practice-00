import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "./context";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  // useContext
  const { register, setUser, google, profile } = useContext(AuthContext);
  // useNavigate
  const navigate = useNavigate();

  // state for password
  const [strongPassword, setStrongPassword] = useState("");

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    // get input data
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    setStrongPassword("");
    if (!passwordRegex.test(password)) {
      setStrongPassword(
        "Must have an Uppercase & Lowercase letter and Length must be at least 6 character"
      );
      return;
    }

    // registration
    register(email, password)
      .then((result) => {
        setUser(result.user);
        // update profile
        profile({displayName:name, photoURL:photo})
        .then(()=>{
          setUser({...result.user, displayName:name, photoURL:photo});
          toast.success("Registration Successful");
          navigate("/");
        })
        .catch(error => toast.error(error.message))
      })

      .catch((error) => toast.error(error.message))
  };

    // handleGoogle
    const handleGoogle = ()=>{
        const googleProvider = new GoogleAuthProvider();
        google(googleProvider)
        .then(()=> {
            toast.success("Sign Up with Google Successful");
            navigate("/");
        })
        .catch(error => toast.error(error.message))
    }

  return (
    <div className="py-28 flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-xl shadow-2xl py-8">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-4xl font-bold mb-4">Sign Up to Elex</h2>

          {/* name */}
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

          {/* photo */}
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

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            <label className="label">
              {strongPassword && (
                <span className="label-text mt-3 text-red-600">
                  {strongPassword}
                </span>
              )}
            </label>

          </div>

          <div className="form-control mt-6">
          {/* submit button */}
            <button className="btn custom-btn text-xl font-bold h-14">
              Sign up
            </button>
            
            {/* google sign up */}
            <div className="divider py-5">or sign up with Google</div>
            <button type="button" onClick={handleGoogle} className="btn bg-black text-white text-lg font-bold h-14">
             <FcGoogle size={30} /> <span className="mt-1">Sign Up with Google</span>
            </button>


          </div>
        </form>

        <p className="text-center">
          {`Already have an account? `}
          <Link to={"/login"}>
            <span className="underline">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
