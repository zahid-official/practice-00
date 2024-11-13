import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase";

const Login = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        const email = event.target.userEmail.value;
        const password = event.target.userPassword.value;
        console.log(email, password)

        // auth by email & password
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }


  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-5">Login to your Account</h2>
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
      </div>
    </>
  );
};

export default Login;
