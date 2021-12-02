import React from "react";
import PropTypes from "prop-types";

import NavBar from "../components/NavBar.js";

const BaseLayout = ({ children }) => {
  return (
    <div className="BaseLayout">
      <NavBar></NavBar>

      {children}

      <footer>Made by John with 🕺🏻</footer>
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseLayout;
