import AboutSection from "../Components/Home/AboutSection";
import FeedbackSection from "../Components/Home/FeedbackSection";
import JoinSection from "../Components/Home/JoinSection";
import PageTitle from "../Components/Learn/PageTitle";

const About = () => {
  return (
    <div>
      <PageTitle
        pageTitle={"About Elex"}
        text={"Why Choose ELEX for Your Learning Journey?"}
      ></PageTitle>

      <section className="py-28 sm:px-5">
        <AboutSection></AboutSection>
      </section>

      
      <FeedbackSection></FeedbackSection>
      <JoinSection></JoinSection>
    </div>
  );
};

export default About;
