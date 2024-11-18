import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import NewsDetails from "../components/NewsDetails";

const News = () => {
    const info = useLoaderData();
    const data = info.data[0]
  return (
    <div>
      <header className="py-8">
        <Header></Header>
      </header>

      <main className="grid grid-cols-12 gap-10 w-11/12 mx-auto pb-16">
        <section className="col-span-9">
            <h2 className="font-semibold text-xl mb-3">Dragon News</h2>
            <NewsDetails data={data}></NewsDetails>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default News;
