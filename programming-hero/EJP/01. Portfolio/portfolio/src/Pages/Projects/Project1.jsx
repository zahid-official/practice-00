import { Link } from "react-router-dom";
import project1 from "/assets/project1.png";
import features from "/assets/star.svg";

const Project1 = () => {
  return (
    <div className="container mx-auto px-6 pb-36 pt-16">
      {/* overview */}
      <div className="flex md:flex-row flex-col-reverse gap-10">
        {/* text */}
        <div className="flex-1 flex justify-center items-center">
          <div>
            <h4 className="uppercase sm:text-base text-sm text-[#606060]">
              <span className="h-3 w-3 mr-1.5 ml-2.5 bg-black inline-block rounded-full"></span>
              Project
            </h4>
            <h3 className="sm:text-5xl text-4xl title-font mt-1.5">
              <span className="font-bold">Overview</span>
            </h3>

            <div className=" mt-10">
              <p>
                Elex is a fun and interactive language learning application
                built to help users expand their vocabulary and improve their
                communication skills in the Japanese language. The website
                leverages a simple and intuitive design to make learning easy,
                fun, and effective. By incorporating a wide range of vocabulary
                lessons, quizzes, and interactive exercises, users can learn
                Japanese words, their meanings, pronunciations, and usage in a
                clear and engaging manner.
              </p>

              <Link to={"http://elex.surge.sh/"}>
                <button className="btn text-lg mt-10 bg-black hover:bg-gray-300 hover:text-black text-white">
                  Live View
                </button>
              </Link>

              <Link to={'https://github.com/zahid-official/milestone-09'}>
                <button className="btn text-lg mt-10 hover:bg-gray-300 hover:text-black bg-black text-white ml-4">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* cover */}
        <div className="flex-1 flex justify-center items-center">
          <img src={project1} className="md:h-[500px] border" alt="" />
        </div>
      </div>

      {/* Key Features */}
      <div className="highlight-font py-28">
        <div className=" text-center">
          <h4 className="uppercase sm:text-base text-sm text-[#606060]">
            <img src={features} className="h-7 mx-auto" alt="" />
            Projects
          </h4>
          <h3 className="sm:text-5xl text-4xl title-font mt-1.5">
            <span className="font-bold">Key Features</span>
          </h3>
        </div>

        <div className="pt-16 flex gap-24">
          {/* left */}
          <div className="space-y-5 flex-1">
            {/* 1 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Language-Specific Data
              </h4>
              <p>
                The website supports Japanese vocabulary data and enables users
                to learn Japanese words, pronunciations, and meanings, all in an
                engaging and interactive way. Each word is carefully selected
                and displayed with details like pronunciation, meaning, example
                usage, and part of speech.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Progressive Learning
              </h4>
              <p>
                Users can start learning immediately with just a click. The
                vocabulary lessons are structured progressively, starting from
                basic words to more complex ones. The lessons are categorized
                into different difficulty levels (easy, medium, difficult) to
                help learners at all levels.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Interactive Cards
              </h4>
              <p>
                Each vocabulary word is presented on interactive cards. Clicking
                on a word shows the pronunciation, meaning, part of speech, and
                an example sentence. Users can also listen to the pronunciation
                of each word through the Speak Up Your Vocabularies feature.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Lesson and Tutorial Integration
              </h4>
              <p>
                The platform offers 10 lessons with clickable cards for each
                lesson. Users can navigate through each lesson and access
                related tutorials. A YouTube tutorial section is also included,
                where users can learn the basics of Japanese pronunciation and
                writing systems like Hiragana and Katakana.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="space-y-5 flex-1">
            {/* 1 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                User Authentication
              </h4>
              <p>
                Users must log in to access the vocabulary lessons.
                Authentication is handled by Firebase, ensuring secure and
                reliable login functionality. The site supports both
                email/password login and Google social login for seamless
                access.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Multi-Page Application (SPA)
              </h4>
              <p>
                The website is designed as a single-page application (SPA) to
                ensure a smooth user experience. It incorporates routing to
                different pages like Home, Start Learning, Tutorials, and
                Profile, without the need for reloading the page.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Firebase Integration
              </h4>
              <p>
                The entire website is connected to Firebase for data management
                and user authentication. Firebase ensures the security and
                real-time update of user data and lesson progress.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Responsive Design
              </h4>
              <p>
                The website is fully responsive and works seamlessly on mobile,
                tablet, and desktop. The design adjusts based on screen size,
                providing users with an optimal experience across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="highlight-font max-w-5xl mx-auto py-10">
        <div>
          <h4 className="uppercase sm:text-base text-sm text-[#606060]">
            <span className="h-3 w-3 mr-1.5 ml-2.5 bg-black inline-block rounded-full"></span>
            Project
          </h4>
          <h3 className="sm:text-5xl text-4xl title-font mt-1.5">
            <span className="font-bold">Conclusion</span>
          </h3>

          <div className=" mt-10">
            <p>
              Elex is more than just a Japanese language learning tool; it’s a
              complete language learning experience that’s interactive,
              engaging, and easy to navigate. By leveraging advanced web
              technologies and Firebase for authentication and data management,
              Elex ensures a smooth learning journey for anyone looking to
              master Japanese. Whether you are a beginner or looking to expand
              your vocabulary, Elex is your ideal companion for learning
              Japanese.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
