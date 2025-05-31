import { Link } from "react-router-dom";
import project3 from "/assets/project3.png";
import features from "/assets/star.svg";

const Project3 = () => {
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
                The TrackBook application is designed to help a school manage
                its library system by allowing students and staff to track and
                manage books efficiently. The system will enable users to add,
                view, borrow, and return books while maintaining the
                availability and borrowing status. The application will provide
                a smooth, interactive, and user-friendly interface for seamless
                operation.
              </p>

              <Link to={"https://trackbook-official.vercel.app/"}>
                <button className="btn text-lg mt-10 bg-black hover:bg-gray-300 hover:text-black text-white">
                  Live View
                </button>
              </Link>

              <Link to={"https://github.com/zahid-official/milestone-11"}>
                <button className="btn text-lg mt-10 hover:bg-gray-300 hover:text-black bg-black text-white ml-4">
                  Source Code
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* cover */}
        <div className="flex-1 flex justify-center items-center">
          <img src={project3} className="md:h-[500px] border" alt="" />
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
              <h4 className="list-item text-2xl font-bold">Navbar</h4>
              <p>
                {`The Navbar is the primary navigation element of the TrackBook application. It contains key links to various pages of the website. These include the website name/logo, which represents the brand, and links such as Home, All Books, Add Book, Borrowed Books, and conditional links for Login and Register. If a user is logged in, the navbar will display their profile photo along with their display name when hovered. It will also show a Logout button to allow users to sign out. This allows for smooth navigation and a clear interface.`}
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">Home Page</h4>
              <p>
                {`The Home Page serves as the landing page of the TrackBook application. It includes a banner or slider that highlights important content or announcements, such as featured books or upcoming library events. Additionally, the page showcases book categories in the form of 4 cards. These categories represent different book topics, such as Fiction, Non-fiction, Science, and History. Clicking on a category navigates the user to a page showing books related to that specific category. The home page will also include extra sections, which could be the latest books added or popular books.`}
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Book Details Page
              </h4>
              <p>
                The Book Details Page provides a more comprehensive view of each
                individual book. This page is accessed by clicking on the
                Details button found on the Book Categories section or All Books
                page. The page displays detailed information about the book,
                including the title, author, category, rating, description, and
                cover image. There is also a Borrow Button on this page, which
                opens a modal for the user to input the return date. When a book
                is borrowed, its quantity is decremented by 1, and the book is
                added to the Borrowed Books list of the user. This page is a
                protected route, so only logged-in users can access it.
                Unauthorized users will be redirected to the login page.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Authentication System
              </h4>
              <p>
                The Login Page allows users to sign in using their email and
                password. Additionally, it includes options for social login via
                Google or GitHub. Users can also be redirected to the Register
                Page if they dont have an account. The Register Page collects
                user details such as name, email, password, and photoURL for
                user identification. The password must meet certain requirements
                (e.g., at least one uppercase letter, one lowercase letter, and
                a minimum length of 6 characters). After successful login or
                registration, a toast or alert is shown to indicate success.
                This system utilizes Firebase Authentication for secure login
                and registration.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="space-y-5 flex-1">
            {/* 1 */}
            <div>
              <h4 className="list-item text-2xl font-bold">Private Routes</h4>
              <p>
                TrackBook includes several protected routes that are accessible
                only to authorized users. All Books allows these users to view
                and update details about all books in the library, ensuring
                comprehensive access to library records. The Add Book page is
                reserved for admin users, granting them the ability to add new
                books to the system. Borrowed Books provides users with a list
                of books they have borrowed, showing important details such as
                the borrow and return dates. This route also allows users to
                return borrowed books, automatically updating the librarys
                inventory by increasing the quantity of returned books. These
                private routes ensure a secure and organized experience for
                users with different levels of access.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h4 className="list-item text-2xl font-bold">CRUD operations</h4>
              <p>
                TrackBook supports full CRUD operations (Create, Read, Update,
                Delete) to efficiently manage library books. On the Add Book
                Page, authorized users can input details for new books,
                including title, author, quantity, category, and cover image.
                Upon submission, the book is added to the database, and a
                success toast is displayed to confirm the action. In the All
                Books Page, users can view and update existing book information,
                such as title, author, category, rating, and cover image. Each
                book has an Update Button that allows authorized users to edit
                and submit the updated information. Only logged-in and
                authorized users can perform updates, ensuring secure management
                of library data.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Additional Features
              </h4>
              <p>
                {`TrackBook includes several additional features that improve the overall user experience. The 404 Page is displayed when users try to access a non-existent route, offering a clear and user-friendly error message. A Loading Spinner appears during data fetching from the server or database, keeping users informed while they wait. Toast Notifications provide real-time feedback after key actions, such as adding or borrowing a book or updating a record, ensuring users are promptly notified of their actions. The Dynamic Title feature adjusts the website's title based on the current page, enhancing SEO and improving the navigation experience for users.`}
              </p>
            </div>

            {/* 4 */}
            <div>
              <h4 className="list-item text-2xl font-bold">
                Filter & View Toggle
              </h4>
              <p>
                TrackBook offers enhanced features to improve user navigation
                and book discovery. The Filter Functionality on the All Books
                Page allows users to filter books and display only those that
                are available, meaning books with a quantity greater than 0.
                This feature helps users easily find books they can borrow.
                Additionally, the View Toggle provides a dropdown menu that lets
                users switch between Card View (displaying books as cards) and
                Table View (displaying books in a table format). This
                flexibility ensures users can choose the display format that
                best suits their preferences.
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
              TrackBook offers a comprehensive, user-friendly library management
              system that streamlines the process of adding, borrowing, and
              managing books. With features such as secure authentication,
              private routes for authorized users, CRUD operations, and enhanced
              usability options, TrackBook aims to provide a seamless and
              engaging experience for both students and staff managing a
              school’s library system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
