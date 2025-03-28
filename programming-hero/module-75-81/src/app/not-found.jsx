import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-4xl pb-4">Error Page - 404 Not Found</h2>
      <div className="text-center">
        <Link href={"/"}>
          <button className="btn btn-neutral">Go back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
