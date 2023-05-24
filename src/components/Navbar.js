import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Keeps track of the current section that the user is on. This will allow us to highligh the appropriate tab in the navigation bar
  const [activeOption, setActiveOption] = useState("about-me");

  // changes the active option to whichever tab was clicked on
  const handleNavOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 mb-5">
      <div className="container-fluid">
        {/* Link tags are used instead of anchor tags as client side routes. These will take the user to the endpoints defined in App.js */}
        <Link className="navbar-brand" to="/about-me">
          Abed's Portfolio
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className={`nav-link ${
                activeOption === "about-me" ? "active" : ""
              } fs-5 me-4`}
              to="/about-me"
              onClick={() => handleNavOptionClick("about-me")}
            >
              About Me
            </Link>
            <Link
              className={`nav-link ${
                activeOption === "portfolio" ? "active" : ""
              } fs-5 me-4`}
              to="/portfolio"
              onClick={() => handleNavOptionClick("portfolio")}
            >
              Portfolio
            </Link>
            <Link
              className={`nav-link ${
                activeOption === "contact" ? "active" : ""
              } fs-5 me-4`}
              to="/contact"
              onClick={() => handleNavOptionClick("contact")}
            >
              Contact
            </Link>
            <Link
              className={`nav-link ${
                activeOption === "resume" ? "active" : ""
              } fs-5 me-4`}
              to="/resume"
              onClick={() => handleNavOptionClick("resume")}
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
