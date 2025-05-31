import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  // context API
  const { setUser, register, update } = useContext(AuthContext);

  //use navigate
  const navigate = useNavigate();

  // state for error
  const [error, setError] = useState({});

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    //get input value
    const form = new FormData(event.target);
    const name = form.get("userName");
    const photo = form.get('photo');
    const email = form.get("email");
    const password = form.get("password");


    //error
    setError({...error, name: ''})
    if(name.length < 5){
      setError({...error, name: "Name must be more then 5 letters"});
      return;
    }

    //register account
    register(email, password)
      .then((result) => {
        setUser(result.user);
        update({displayName: name, photoURL: photo})
        .then(()=> navigate('/'))
        .catch(erra => console.log(erra))
        console.log(result)
      })
      .catch(err => console.log(err))
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-[90vh]">
        <div className="card bg-base-100 w-full max-w-lg py-14 px-2 text-center rounded-none shrink-0">
          <h2 className="text-3xl font-bold">Register new account</h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
              <span className="label-text">Name</span>
            </label>

              <input
                type="text"
                name="userName"
                placeholder="name"
                className="input input-bordered"
                required
              />

              {error.name && <label className="label"> <span className="label-text text-red-500">{error.name}</span>
              </label>}
            </div>

            {/* photo-url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo-url"
                className="input input-bordered"
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Register</button>
            </div>
          </form>
          <p className="font-medium">
            Already Have An Account ?
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
