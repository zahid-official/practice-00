import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="py-8">
      <div className="navbar justify-between bg-base-100">
        <div className="starting">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost sm:text-4xl text-2xl">{`Chef's Table`}</a>
        </div>

        <div className="middle hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-base">Home</a>
            </li>
            <li>
              <a className="text-base">Recipes</a>
            </li>
            <li>
              <a className="text-base">About</a>
            </li>
            <li>
              <a className="text-base">Contact</a>
            </li>
          </ul>
        </div>

        <div className="ending">
          <div className="flex gap-2">
            <div className="form-control sm:block hidden">
              <label className="input flex items-center gap-2 w-auto rounded-3xl bg-base-200">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-8 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div className="sm:hidden flex items-center justify-center text-2xl rounded-full text-slate-500">
                <FaSearch></FaSearch>
            </div>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className=" sm:text-4xl text-3xl rounded-full text-slate-500">
                  <CgProfile></CgProfile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
