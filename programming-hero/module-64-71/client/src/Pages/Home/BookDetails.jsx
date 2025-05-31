import { useLoaderData } from "react-router-dom";
import useAuth from "../../Auth/Hook/useAuth";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Navbar from "../../Components/Navbar";

const BookDetails = () => {
  // useLoader
  const loadedData = useLoaderData();
  // state
  const [data, setData] = useState(loadedData);
  const [warning, setWarning] = useState("");
  // contextAPI
  const { users } = useAuth();
  const borrowerName = users?.displayName;
  const borrowerEmail = users?.email;

  const {
    _id: isbn,
    bookName,
    bookImage,
    author,
    category,
    quantity,
    rating,
    bookContent,
    description,
  } = data || {};

  // date formating
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + 6);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const borrowedDate = `${year}-${month}-${day}`;

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const returnDate = event.target.appliedDate.value;

    // validation
    if (returnDate < borrowedDate) {
      return setWarning("Invalid Return Date");
    }

    const borrowedData = {
      isbn,
      bookName,
      bookImage,
      author,
      category,
      returnDate,
      borrowedDate,
      borrowerName,
      borrowerEmail,
    };

    // create applicationsData in mongoDB
    axios
      .post("https://trackbook-server.vercel.app/borrow", borrowedData)
      .then((res) => {
        if (!res.data) {
          return toast.error("This Book already Borrowed");
        }
        toast.success("Book Borrowed Successfully");
        setData(res.data);
      });

    document.getElementById("my_modal_5").close();
  };

  return (
    <>
      {/* details */}
      <div className="relative">
        <Navbar></Navbar>
        <div className="absolute top-25 left-0">
          <img src="/assets/leaf.png" alt="" />
        </div>
      </div>
      <div className="hero bg-[#f4f4ec] dark:bg-[#0e1629] mx-auto sm:pt-28 sm:pb-36 py-12 px-10">
        <div className="hero-content gap-10 flex-col lg:flex-row w-full">
          <div className="flex-1 flex justify-center">
            <img src={bookImage} className="sm:max-w-sm" />
          </div>

          <div className="flex-1 px-4 space-y-1.5">
            {/* heading */}
            <div className="space-y-2">
              <h1 className="sm:text-5xl text-4xl font-bold">{bookName}</h1>
              <p className="font-semibold sm:text-xl">Author: {author}</p>
              <p className="font-semibold sm:text-lg">Category: {category}</p>
            </div>
            <br />

            <p>
              <span className="font-semibold">Rating: </span>
              {rating}
            </p>
            <p>
              <span className="font-semibold">Quantity: </span>
              {quantity}
            </p>

            <p>
              <span className="font-semibold">Book Content: </span>
              {bookContent}
            </p>
            <p className="pb-8">
              <span className="font-semibold">Book Description: </span>
              {description}
            </p>

            <button
              className="btn btn-neutral hover:bg-[#131b25] text-white font-bold px-12 h-14  text-lg"
              disabled={quantity < 1}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Borrow Book
            </button>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box pt-12 px-10 pb-16 sm:rounded-2xl rounded-none">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl mb-4 font-bold">Apply for Visa</h2>
            <div className="space-y-2.5 mb-10">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="applicantEmail"
                  defaultValue={borrowerName}
                  placeholder="Name"
                  className="input input-bordered"
                  disabled
                />
              </div>

              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="applicantEmail"
                  defaultValue={borrowerEmail}
                  placeholder="Email"
                  className="input input-bordered"
                  disabled
                />
              </div>

              {/* date */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Return Date</span>
                </label>
                <input
                  type="date"
                  name="appliedDate"
                  placeholder="Apply Date"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span className="label-text text-red-500 font-semibold">
                    {warning}
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-neutral hover:bg-[#131b25] text-white text-lg font-semibold w-full"
            >
              Borrow Book
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookDetails;
