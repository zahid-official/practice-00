import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import PageTitle from "./PageTitle";

const Lesson = () => {
  // loader Data for Lesson page
  const data = useLoaderData();

  const { id } = useParams();
  //state for lesson
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const filtered = [...data].filter(
      (item) => item.lesson_no === parseInt(id)
    );
    setLesson(filtered);
  }, [data, id]);

  return (
    <>
      <PageTitle
        pageTitle={`We're Starting Lesson: ${id}`}
        text={"Read each word with care and perfect it through Practice."}
      ></PageTitle>
      <div className="grid gap-10 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 container sm:mx-auto sm:px-0 px-4 py-28">
        {lesson.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>

      <div className="pb-20 flex justify-center">
        <Link to={"/learn"}>
          <button className="btn text-lg px-16 h-14 custom-btn">
            Back to Lesson
          </button>
        </Link>
      </div>
    </>
  );
};

export default Lesson;
