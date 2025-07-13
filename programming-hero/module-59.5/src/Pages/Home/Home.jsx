const Home = () => {
    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const {min, max, currency, ...newData} = data;
        newData.salary = {min, max, currency};
        console.log(newData)
    }
  return (
    <div className="card bg-base-100 w-full max-w-2xl mx-auto my-20 py-10 shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-4xl font-bold mb-3">Get Input Value</h2>

        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        {/* field */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Field</span>
          </label>

          <select name="field" className="select select-bordered w-full">
            <option value="" disabled selected>
              Job Field
            </option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="marketer">Marketer</option>
          </select>
        </div>

        {/* salary */}
        <div  className="form-control">
          <label className="label">
            <span className="label-text">Salary</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              name="min"
              placeholder="min"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="max"
              placeholder="max"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="currency"
              placeholder="currency"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        
        {/* description */}
        <label className="label">
            <span className="label-text">Descriptcion</span>
          </label>
        <textarea
          name="descriptcion"
          placeholder="Descriptcion"
          className="textarea textarea-bordered textarea-lg w-full"
        ></textarea>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
