import { useEffect, useState } from "react";

const Left = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((info) => setCategories(info.data.news_category));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        All Categories ({categories.length})
      </h1>

      <p className="flex flex-col gap-4 mt-8">
        {categories.map((item, idx) => (
          <button key={idx} className="btn text-base font-bold">{item.category_name}</button>
        ))}
      </p>
    </div>
  );
};

export default Left;
