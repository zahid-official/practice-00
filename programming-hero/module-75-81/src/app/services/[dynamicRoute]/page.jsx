/* note: Improve your English proficiency by taking notes.

"If you need to create a dynamic route, then the folder should be declared inside square brackets[]."

"If you want to get params you can get it by destructuring params inside the component's parentheses()."
"If you want to get params, you can destructure params inside the component's parentheses() to access it."
"next.js retuen params as a promise, so the function must be async/await"

*/

import Link from "next/link";

const DynamicRoute = async ({ params }) => {
  const { dynamicRoute: id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return (
    <div>
      <h2 className="text-4xl py-10 text-center">
        This is a dynamic route. Route Id is : {id}
      </h2>

      {/* hero */}
      <div className="hero bg-base-200 p-8 mb-10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">{data.title}</h1>
            <p className="py-6">{data.body}</p>

            <Link href={"/services"}>
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicRoute;
