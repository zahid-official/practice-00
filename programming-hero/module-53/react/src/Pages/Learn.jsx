import { useLoaderData } from "react-router-dom";
import PageTitle from "../Components/Learn/PageTitle";
import Category from "../Components/Learn/Category";
import Title from "../Components/Home/Title";
import EmbededSection from "../Components/Learn/EmbededSection";

const Learn = () => {
  // loader Data for learn page
  const categories = useLoaderData();

  return (
    <div>
      {/* Learn Title */}
      <section>
        <PageTitle
          pageTitle={`Let's Learn Japanese`}
          text={`This is where your learning journey Begins!`}
        ></PageTitle>
      </section>

      {/* Category */}
      <section className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 container sm:mx-auto px-4 pt-28 pb-5">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </section>

      {/*  Embeded Section */}
      <Title
        section={"Tutorial Section"}
        heading1={`Learning Japanese Language`}
      ></Title>
      <EmbededSection></EmbededSection>
    </div>
  );
};

export default Learn;
