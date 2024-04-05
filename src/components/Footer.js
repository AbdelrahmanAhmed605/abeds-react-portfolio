import React from "react";

function Footer() {
  return (
    <ul className="my-4 list-inline list-social-icons mb-0 d-flex justify-content-center pb-3">
      <li className="list-inline-item">
        {/* link to my twitter, using the font-awesome twitter icon */}
        <a
          href="https://twitter.com/AbedDoesCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
      <li className="list-inline-item">
        {/* link to my linkedin, using the font-awesome linkedin icon */}
        <a
          href="https://www.linkedin.com/in/abdelrahman-ahmed605/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
      <li className="list-inline-item">
        {/* link to my github, using the font-awesome github icon */}
        <a
          href="https://github.com/AbdelrahmanAhmed605"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa-stack fa-lg">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
