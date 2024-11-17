import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Dynamic = () => {
  const { data: allNews } = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Dragon News Home {allNews.length}
      </h1>
      <div className="space-y-10 mt-8">
        {allNews.map((news) => (
          <Card key={news._id} news={news}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dynamic;
