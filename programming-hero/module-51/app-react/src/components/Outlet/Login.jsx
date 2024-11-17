import { useContext, useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../ContextProvider";

const Login = () => {
  const {loginUser, socialMedia, googleProvider, twitterProvider, facebookProvider} = useContext(AuthContext);

  // state for success
  const [success, setSuccess] = useState("");
  // state for error
  const [errorMessage, setErrorMessage] = useState("");
  // state for showPassword
  const [showPassword, setShowPassword] = useState(false);
  //ref for reset password
  const emailRef = useRef();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;

    // reset states
    setSuccess("");
    setErrorMessage("");

    // signIn by email based method
    loginUser(email, password)
      .then((result) => {
        if(!result.user.emailVerified){
          setErrorMessage("Verify Email")
          return;
        }
        setSuccess("LogIn Successful")
        event.target.reset();
      })
      .catch((error) => setErrorMessage(error.message));
  };

  // handleReset
  const handleReset = ()=>{
    // reset states
    setErrorMessage("");
    setSuccess("");

    const email = emailRef.current.value;
    if(!email){
      setErrorMessage("Invalid Email")
      return;
    }

    sendPasswordResetEmail(auth, email)
    .then(()=> setSuccess("Reset Email Sent"))
    .catch(error => setErrorMessage(error.message))
  }

  // logIn provider based account
  const handleSocial = (provider) => {
    // reset states
    setSuccess("");
    setErrorMessage("");

    socialMedia(provider)
      .then((result) => {
        console.log(result.user);
        setSuccess("LogIn by Social Successful");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <div className="hero py-16 text-center">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>

          <div className="card w-96 shadow-2xl py-10">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  ref={emailRef}
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
                  className="absolute top-14 right-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

                <label className="label">
                  <button onClick={handleReset} type="button" href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p className="mb-3">
              Dont have an account?
              <span className="underline">
                <Link to="/register"> Sign Up</Link>
              </span>
            </p>

            <div className="divider"></div>
            <div className="mb-5 space-x-4">
              <button onClick={()=> handleSocial(googleProvider)} className="btn">
                Google
              </button>

              <button onClick={()=> handleSocial(facebookProvider)} className="btn">
                Facebook
              </button>
              
              <button onClick={()=> handleSocial(twitterProvider)} className="btn">
                Twitter
              </button>
            </div>

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

export default Login;
