import Link from "next/link";

const Services = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h2 className="text-3xl text-center pt-20">Which Service you want?</h2>

      <div className="grid grid-cols-3 gap-10 my-28">
        {data?.map((service) => (
          <div key={service.id} className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-3xl pb-5">{service.title}</h2>
              <p>
                {service.body}
              </p>
              <div className="card-actions justify-end">
                <Link href={`/services/${service.id}`}>
                  <button className="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
