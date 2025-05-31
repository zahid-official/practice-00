import { useContext } from "react";
import AuthContext from "./context";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  // useContext
  const { forget, resetEmail } = useContext(AuthContext);
  // useRef

  // handleResetEmail
  const handleResetEmail = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetEmail(email)
      .then(() => {
        toast.success("Reset Email Sent Successfully");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="py-28 flex justify-center">
      <div className="card bg-base-100 w-full max-w-md py-10 shrink-0 shadow-2xl">
        <form onSubmit={handleResetEmail} className="card-body">
          <h2 className="text-4xl mb-5 font-bold">Reset Password</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={forget}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="btn custom-btn text-lg font-bold h-14"
            >
              Reset Password
            </button>
          </div>

          <p className="mt-6">
            To reset your password, submit your email address below. An email
            will be sent to your email address, with instructions how to get
            access again.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
