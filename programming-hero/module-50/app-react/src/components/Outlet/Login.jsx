import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  // state  for error message
  const [message, setMessage] = useState(null);
  // state  for success message
  const [success, setSuccess] = useState(null);
  // state  for success message
  const [showPassword, setShowPassword] = useState(false);
  // ref for reset password
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;
    console.log(email, password);

    // reset error message
    setMessage("");
    // reset success message
    setSuccess("");

    // auth by email & password
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        //verify email
        if (!result.user.emailVerified) {
          setMessage("Verify You Email");
          return;
        }
        setSuccess("Login Successful");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.message);
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      setMessage("Invalid Email");
      return;
    }
    // reset error message
    setMessage("");
    // reset success message
    setSuccess("");

    sendPasswordResetEmail(auth, email)
      .then(() => setSuccess("Reset Email Sent"))
      .catch((error) => setMessage(error.message));
  };

  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-5">
        Login to your Account
      </h2>
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
              ref={emailRef}
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

            {/* show password */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-14 right-3 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

            <label className="label">
              <button
                onClick={handleReset}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </button>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="text-center">
          Dont have an account?{" "}
          <span className="underline">
            <Link to="/register">Sign up</Link>
          </span>
        </p>

        {message && (
          <p className="text-center text-red-700 font-semibold">{message}</p>
        )}
        {success && (
          <p className="text-center text-green-700 font-semibold">{success}</p>
        )}
      </div>
    </>
  );
};

export default Login;
