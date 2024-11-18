import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  // context API
  const {setUser, login} = useContext(AuthContext);

  // state for error
  const [error, setError] = useState({});

  //use Location & navigate
  const location = useLocation();
  const direction = useNavigate();

  // handleSubmit
  const handleSubmit = (event)=>{
      event.preventDefault();

      //get input value
      const form = new FormData(event.target);
      const email = form.get('email');
      const password = form.get('password');

      //register account
      login(email, password)
      .then(result => {
          setUser(result.user);
          direction(location?.state ? location.state : '/')
      })
      .catch(err => setError({...error, login: err.message}))

  }

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <div className="card bg-base-100 w-full max-w-md py-14 px-2 text-center rounded-none shrink-0">
        <h2 className="text-3xl font-bold">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            {/* error */}
            {error.login  && <span className="label text-red-500 text-sm">{error.login}</span>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="font-medium">
          Dont’t Have An Account ?
          <Link to="/auth/register" className="text-red-500"> 
             Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
