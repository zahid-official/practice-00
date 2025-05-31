import PageTitle from "../AddVisa/PageTitle";
import DisplayVisa from "./DisplayVisa";
import { useEffect, useState } from "react";
import useAxiosProtected from "../Auth/Hooks/useAxiosProtected";

const AllVisas = () => {
  // state for data
  const [data, setData] = useState([]);
  // state for filter
  const [filteredData, setFilteredData] = useState(data);

  // state for pagination
  const [count, setCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [pageItems, setPageItems] = useState(8);

  // useAxiosProtected Hook
  const axiosProtected = useAxiosProtected();

  // get pages
  const totalPages = Math.ceil(count / pageItems);
  const pages = [...Array(totalPages).keys()];

  // handleFilter
  const handleFilter = (visaType) => {
    axiosProtected
      .get(`/filters/${visaType}`)
      .then((res) => setFilteredData(res.data))
      .catch((err) => console.log(err));
  };

  // handlePageItems
  const handlePageItems = (e) => {
    const value = Number(e.target.value);
    setPageItems(value);
    setPageNo(1);
  };

  // handlePrev
  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  // handleNext
  const handleNext = () => {
    if (pageNo < pages.length) {
      setPageNo(pageNo + 1);
    }
  };

  // useEffect for data
  useEffect(() => {
    axiosProtected
      .get(`/visa?pageNo=${pageNo}&pageItems=${pageItems}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [axiosProtected, pageNo, pageItems]);

  // useEffect for filteredData
  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  // useEffect for count
  useEffect(() => {
    axiosProtected.get("/total").then((res) => setCount(res.data.count));
  }, [axiosProtected]);

  return (
    <div className="pt-16  relative mx-3">
      {/* dropdown */}
      <details className="dropdown absolute top-8 left-16">
        <summary className="btn m-1 text-lg font-bold">
          Filter by Visa Type
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-3 space-y-3 shadow">
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Tourist Visa")}
            >
              Tourist Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Student Visa")}
            >
              Student Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Medical Visa")}
            >
              Medical Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Official Visa")}
            >
              Official Visa
            </button>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleFilter("Conference Visa")}
            >
              Conference Visa
            </button>
          </li>
        </ul>
      </details>

      <PageTitle
        heading1={"All"}
        heading2={"Visas"}
        subHeading={"All Visas"}
      ></PageTitle>

      <div className="flex flex-wrap justify-center gap-10 max-w-[90rem] mx-auto mt-8 mb-20 ">
        {filteredData.map((visa, idx) => (
          <DisplayVisa key={visa._id} visa={visa} idx={idx}></DisplayVisa>
        ))}
      </div>

      {/* pagination */}
      <div className="text-center mb-4">Page No: {pageNo}</div>
      <div className="flex justify-center gap-4 mb-20">
        <button onClick={handlePrev} className="btn font-bold">
          Prev
        </button>

        <div className="join flex justify-center">
          {pages.map((page) => (
            <input
              key={page}
              onClick={() => setPageNo(page + 1)}
              className="join-item btn btn-square"
              type="radio"
              name="options"
              aria-label={page + 1}
              checked={page + 1 === pageNo}
            />
          ))}
        </div>

        <button onClick={handleNext} className="btn font-bold">
          Next
        </button>

        {/* pageItems */}
        <div>
          <select
            defaultValue={pageItems}
            onChange={handlePageItems}
            className="select select-bordered"
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllVisas;
