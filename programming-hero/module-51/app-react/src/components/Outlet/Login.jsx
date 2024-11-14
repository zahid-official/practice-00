import { Link } from "react-router-dom";

const Login = () => {
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.userEmail.value;
    const password = event.target.userPassword.value;
    console.log(email, password);
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
                  name="userEmail"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="userPassword"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p>
              Dont have an account?
              <span className="underline">
                <Link to='/register'> Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
