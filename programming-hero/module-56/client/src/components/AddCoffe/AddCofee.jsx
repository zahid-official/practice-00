const AddCofee = () => {

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {name, chef, price, taste, category, details, photo}

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffee),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div className={`bg-[url(/assets/11.bg.png)]`}>
      <div className="container mx-auto py-32 px-4">
        <div className="card bg-[#F4F3F0] lg:w-11/12 mx-auto rounded-none py-20 md:px-5">
          <form onSubmit={handleSubmit} className="card-body text-center">
            <div className="pb-6 space-y-3">
              <h2 className="sm:text-5xl text-4xl font-semibold rancho">
                Add New Coffee
              </h2>
              <p className="2xl:px-24 md:px-10">
                It is a long established fact that a reader will be distraceted
                by the readable <br className="lg:block hidden" /> content of a
                page when looking at its layout.
              </p>
            </div>

            <div className="space-y-5">
              {/* row-01 */}
              <div className="flex md:flex-row flex-col gap-8">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input rounded-none"
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    placeholder="chef"
                    className="input rounded-none"
                    required
                  />
                </div>
              </div>

              {/* row-02 */}
              <div className="flex md:flex-row flex-col gap-8">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input rounded-none"
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    placeholder="taste"
                    className="input rounded-none"
                    required
                  />
                </div>
              </div>

              {/* row-03 */}
              <div className="flex md:flex-row flex-col gap-8">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="category"
                    className="input rounded-none"
                    required
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text font-semibold">Details</span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    placeholder="details"
                    className="input rounded-none"
                    required
                  />
                </div>
              </div>

              {/* row-04 */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text font-semibold">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo"
                  className="input rounded-none"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-12">
              <button className="btn rancho font-semibold text-2xl h-14 bg-[#d2b48c] hover:bg-[#c2a27a] text-black border-red-950 hover:border-red-950 ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCofee;
