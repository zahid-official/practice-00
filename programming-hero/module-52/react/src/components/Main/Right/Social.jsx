import { FaGithub, FaGoogle } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold"> Login With</h1>
      <div className="*:w-full space-y-3">
        <button className="btn">
          <FaGoogle size={23}></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub size={23}></FaGithub> Login with Google
        </button>
      </div>
    </>
  );
};

export default Social;
