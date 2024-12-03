import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ContexAPI from "./ContexAPI";
import { toast } from "react-toastify";

const Register = () => {
  // useContext
  const { register, profile, setUser } = useContext(ContexAPI);
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // register
    register(email, password)
      .then((result) => {
        setUser(result.user);

        // update profile
        profile({ displayName: name })
        .then(()=>{
          setUser({...result.user, displayName: name})
          toast.success("Registration Successful");
          navigate('/');
        })
        .catch(error => toast.error(error.message))

      })
      .catch((error) => toast.error(error.message));
  };
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
                Join Us Today!
              </h2>

              {/* name */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input rounded-lg"
                  required
                />
              </div>

              {/* email */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
              </div>

              {/* submit */}
              <div className="form-control mt-8">
                <button className="btn rancho font-semibold text-2xl h-14 bg-[#d2b48c] hover:bg-[#c2a27a] text-black border-red-950 hover:border-red-950 ">
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-center">
              {`Don't have an account? `}{" "}
              <Link to={"/login"}>
                <span className="underline font-semibold">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
