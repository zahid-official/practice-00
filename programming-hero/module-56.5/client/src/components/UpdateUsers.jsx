import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import ContexAPI from "./Auth/ContexAPI";
import { toast } from "react-toastify";

const UpdateUsers = () => {
  // useContext
  const { profile, user, setUser, setLoading } = useContext(ContexAPI);
  // useLoaderData
  const { _id: id, name, email } = useLoaderData();
  // useNavigate
  const navigate = useNavigate();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedData = { name, email };

    // update profile
    profile({ displayName: name })
      .then(() => {
        fetch(`http://localhost:5000/updateUsers/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUser({ ...user, displayName: name, email: email });
            setLoading(false);
            toast.success("Data Updated Successfully");
            navigate('/user');
          });
      })
      .catch((error) => toast.error(error.message));
  };

  console.log(name, email, id);
  return (
    <>
      <div className={`bg-[url(/assets/11.bg.png)]`}>
        <div className="py-32 px-3">
          <Link to={"/user"}>
            <h2 className="flex mb-5 sm:ml-16 items-center gap-2 rancho text-4xl font-semibold text-[#372727]">
              <FaArrowLeft size={23} /> Back to users
            </h2>
          </Link>

          <div className="card bg-[#F4F3F0] max-w-lg mx-auto rounded-none py-20 md:px-5">
            <form onSubmit={handleSubmit} className="card-body text-center">
              <h2 className="sm:text-5xl mb-8 text-4xl font-semibold rancho">
                Update Users Data
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
                  defaultValue={name}
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
                  defaultValue={email}
                  className="input rounded-lg"
                  required
                />
              </div>

              {/* submit */}
              <div className="form-control mt-8">
                <button className="btn rancho font-semibold text-2xl h-14 bg-[#d2b48c] hover:bg-[#c2a27a] text-black border-red-950 hover:border-red-950 ">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUsers;
