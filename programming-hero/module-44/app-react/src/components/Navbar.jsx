import PropValidation from "prop-types";
import React from "react";

const Navbar = ({ route }) => {
  const { name, path } = route;
  return (
    <>
      <li className="hover:bg-purple-200 px-8">
        <a href={path}>{name}</a>
      </li>
    </>
  );
};

Navbar.propTypes = {
  route: PropValidation.object,
};
export default Navbar;
