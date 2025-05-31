import { Link } from "react-router-dom";
import project2 from "/assets/project2.png";
import features from "/assets/star.svg";

const Project2 = () => {
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
                Viso is a user-friendly and dynamic Visa Navigator Portal
                designed to simplify the process of checking visa requirements,
                applying for visas online, and tracking visa applications. The
                platform provides a seamless user experience through an
                intuitive design and robust functionality, making it easy for
                users to access visa-related information, submit applications,
                and manage their visa details in one place.
              </p>

              <Link to={"https://viso-official.surge.sh/"}>
                <button className="btn text-lg mt-10 bg-black hover:bg-gray-300 hover:text-black text-white">
                  Live View
                </button>
              </Link>

              <Link to={"https://github.com/zahid-official/milestone-10"}>
                <button className="btn text-lg mt-10 hover:bg-gray-300 hover:text-black bg-black text-white ml-4">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* cover */}
        <div className="flex-1 flex justify-center items-center">
          <img src={project2} className="md:h-[500px] border" alt="" />
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
              <h4 className="list-item text-2xl font-bold">Visa Information</h4>
              <p>
                {`The visa information includes essential country-specific details such as the visa type (Tourist, Student, Official, etc.), processing time, required documents (e.g., "Valid passport", "Visa application form"), and description. It also covers age restrictions, visa fees, validity period, and the application method, offering a comprehensive overview of the visa requirements for each country.`}
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                User Authentication
              </h4>
              <p>
                {`The user authentication system is secured with Firebase, allowing users to log in via email/password or Google social login. Private routes, including "Add Visa", "My Added Visas", and "My Visa Applications", are protected and accessible exclusively to logged-in users, ensuring a secure and personalized experience.`}
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Dynamic Visa Dashboard
              </h4>
              <p>
                The dynamic visa dashboard features interactive visa cards that
                display key details like country, visa type, processing time,
                fee, and application method. It includes search functionality
                and filtering options, allowing users to easily find visa types
                by country or category. A Latest Visas section highlights newly
                added visas, with an option to view all available visas.
                Additionally, visa application management is integrated,
                enabling users to efficiently track and manage their visa
                applications.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Visa Application Management
              </h4>
              <p>
                Visa Application Management allows users to add, update, and
                delete visa entries through a dynamic form that includes
                essential fields such as country image, visa type, processing
                time, required documents, and more. Users can track the progress
                of their visa applications, receiving real-time status updates
                to stay informed on the latest developments.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="space-y-5 flex-1">
            {/* 1 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Interactive Features
              </h4>
              <p>
                The platform offers interactive features such as a user-friendly
                dark/light theme toggle, allowing users to switch between modes
                easily. A loading spinner is displayed to indicate data loading
                states across different pages. Additionally, the interface is
                enhanced with dynamic UI/UX elements like Lottie animations,
                React tooltips, and typewriter effects, creating an engaging and
                interactive experience for users.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Custom Pages and Routin
              </h4>
              <p>
                The platform includes custom pages with easy navigation: the
                Home Page with a navbar, banner slider, and latest visas
                section; the Add Visa Page for submitting visa details; the Visa
                Details Page with application options; My Added Visas for
                managing added visas; and My Visa Applications for tracking
                submitted applications. Private pages are accessible only to
                logged-in users.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Additional Functionalities
              </h4>
              <p>
                {`The platform offers additional functionalities including a search feature on the "My Visa Applications" page to search applications by country name. It supports full CRUD operations (Create, Read, Update, Delete) for visa management, with toast notifications or sweet alerts for user feedback. Additionally, there is a custom 404 page to handle errors when users access non-existent routes.`}
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Other Requirements
              </h4>
              <p>
                The platform meets additional requirements by implementing a
                search feature on the My Visa Applications page for easy
                application look-up. A theme toggle for dark/light mode is
                included for user preference. Error handling is optimized with
                toast notifications or alerts to provide meaningful feedback.
                Additionally, the website is fully responsive, ensuring an
                optimal experience across mobile, tablet, and desktop views.
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
              Viso offers a streamlined, interactive, and easy-to-use platform
              designed to simplify the management of visa information,
              applications, and progress tracking. By combining a user-centric
              design with seamless functionality, Viso provides a comprehensive
              solution for users navigating the often complex and time-consuming
              visa process. The platform ensures that users can effortlessly
              access and manage visa details, track their application status in
              real-time, and make informed decisions throughout their journey.
              With its dynamic features, such as interactive visa cards, search
              and filter options, and secure user authentication, Viso offers an
              intuitive experience for both beginners and frequent travelers.
              The platforms responsiveness across mobile, tablet, and desktop
              devices ensures accessibility from any device, while its
              dark/light theme toggle enhances usability. Through clear feedback
              mechanisms like toast notifications and alerts, users are kept
              informed every step of the way. Viso truly stands as the ultimate
              visa navigator, making the visa process more accessible,
              organized, and efficient for users around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
