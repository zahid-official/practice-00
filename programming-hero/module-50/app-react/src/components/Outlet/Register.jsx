import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  // state for error message
  const [message, setMessage] = useState("");
  // state for success message
  const [success, setSuccess] = useState("");
  // state for show password
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;
    const checkbox = event.target.checkbox.checked;

    // reset  error message
    setMessage("");
    // reset  success message
    setSuccess("");

    // check strong password
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      setMessage("Make Password Strong");
      return;
    }
    // check checkbox
    if(!checkbox){
        setMessage("Check Terms & Conditions")
        return;
    }
    

    // auth by email & password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result)

        // sendEmailVerification
        sendEmailVerification(auth.currentUser)
        .then(()=> setSuccess('Registration Successful, Check Email to Verify'))

      })
      .catch((error) => {
        console.log(error.message);
        setMessage(error.message);
        setSuccess("");
      });
      
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-5">Register Now!</h2>
      <div className="card bg-base-100 w-full max-w-sm mx-auto pb-4 mb-5 shrink-0 shadow-2xl">
        {/* form */}
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="email"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-14"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>

          <div className="form-control">
            <label className="label justify-start gap-2 cursor-pointer">
              <input type="checkbox" name="checkbox" className="checkbox" />
              <span className="label-text">Terms & Conditions</span>
            </label>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>

        <p className="text-center">Already have an account? <span className="underline"><Link to='/'>Sign In</Link></span></p>

        {/* display error message */}
        {message && (
          <p className="text-center text-red-700 font-semibold">{message}</p>
        )}

        {/* display success message */}
        {success && (
          <p className="text-center text-green-700 font-semibold">{success}</p>
        )}
      </div>
    </>
  );
};

export default Register;
