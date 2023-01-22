import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:erdem_ay@yahoo.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-envelope-alt"></i>
      </a>


      <a
        href="https://github.com/erdem-ay"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/erdem-ay/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>


    </div>
  );
};

export default Social;
