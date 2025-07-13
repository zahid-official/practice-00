import useFetch from "../Auth/Hook/useFetch";

const AllBooks = () => {
  // useFetch
  const { books } = useFetch('allBooks');
  return (
    <>
      <div>
        <h1>Total Books : {books.length}</h1>
      </div>

      <div className="grid grid-cols-3 w-10/12 mx-auto pt-10 gap-10">
        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-primary text-primary-content"
          >
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllBooks;
