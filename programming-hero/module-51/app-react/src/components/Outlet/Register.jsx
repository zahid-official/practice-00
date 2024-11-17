import { sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../ContextProvider";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  // state for success
  const [success, setSuccess] = useState("");
  // state for error
  const [errorMessage, setErrorMessage] = useState("");
  // state for showPassword
  const [showPassword, setShowPassword] = useState(false);

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;
    const checkbox = event.target.termsCheckbox.checked;

    // reset states
    setSuccess("");
    setErrorMessage("");

    // strong password
    const strongPasswordRegex =
      /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[\W_])).{6,}$/;
    if (!strongPasswordRegex.test(password)) {
      setErrorMessage("Make Password Strong");
      return;
    }

    // checkbox
    if (!checkbox) {
      setErrorMessage("Check Terms & Conditions");
      return;
    }

    // create email based account
    createUser(email, password)
      .then((result) => {
        console.log(result);
        // verification email send
        sendEmailVerification(auth.currentUser)
          .then(setSuccess("Registration Successful"))
          .catch((error) => setErrorMessage(error.message));

        // profile update
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => console.log("Proflie Updated"))
          .catch(() => console.log("Profile Update Error"));
      })

      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <>
      <div className="hero py-16 text-center">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register Now!</h1>
          </div>

          <div className="card w-96 shadow-2xl py-10">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="userPassword"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-14 right-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-2 mt-4">
                  <input
                    type="checkbox"
                    name="termsCheckbox"
                    className="checkbox"
                  />
                  <span className="label-text">Terms & Conditions</span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            <p className="mb-3">
              Already have an account?
              <span className="underline">
                <Link to="/"> Sign In</Link>
              </span>
            </p>

            {success && (
              <p className="font-semibold text-green-700">{success}</p>
            )}
            {errorMessage && (
              <p className="font-semibold text-red-700">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
