import { useContext, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContexAPI from "./ContexAPI";
import { toast } from "react-toastify";

const Login = () => {
  //useContext
  const { login, resetPassword, setUser } = useContext(ContexAPI);
  // useRef
  const emailRef = useRef();
  // useLocation
  const location = useLocation();
  //  useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login
    login(email, password)
      .then((result) => {
        setUser(result.user);
        const loginTime = result.user?.metadata?.lastSignInTime;
        const updateData = {email, loginTime};

        fetch(`https://coffee-espresso-sigma.vercel.app/updateUsers`, {
          method: "PATCH",
          headers: {
            'content-type' : 'application/json',
          },
          body: JSON.stringify(updateData),
        })
        .then(res => res.json())
        .then(data => console.log(data))


        toast.success("Login Successfully");
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => toast.error(error.message));
  };

  // handleForget
  const handleForget = ()=>{
    const email = emailRef.current.value;
    resetPassword(email)
    .then(()=>{
      toast.success('Password reset email sent')
    })
    .catch(error => toast.error(error.message))
  }
  return (
    <>
      <div className={`bg-[url(/assets/11.bg.png)]`}>
        <div className="py-32 px-3">
          <Link to={"/"}>
            <h2 className="flex mb-5 sm:ml-16 items-center gap-2 rancho text-4xl font-semibold text-[#372727]">
              <FaArrowLeft size={23} /> Back to home
            </h2>
          </Link>

          <div className="card bg-[#F4F3F0] max-w-lg mx-auto rounded-none py-20 md:px-5">
            <form onSubmit={handleSubmit} className="card-body text-center">
              <h2 className="sm:text-5xl mb-8 text-4xl font-semibold rancho">
                Login to Espresso
              </h2>

              {/* email */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input rounded-lg"
                  required
                />
              </div>

              {/* password */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input rounded-lg"
                  required
                />
                <label className="label mt-3">
                  <span onClick={handleForget} className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>

              {/* submit */}
              <div className="form-control mt-8">
                <button className="btn rancho font-semibold text-2xl h-14 bg-[#d2b48c] hover:bg-[#c2a27a] text-black border-red-950 hover:border-red-950 ">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center">
              {`Don't have an account? `}
              <Link to={"/register"}>
                <span className="underline font-semibold">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
