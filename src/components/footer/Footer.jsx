import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Erdem AY</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a
              href="https://www.github.com/erdem-ay/"
              target="_blank"
              rel="noreferrer"
              className="footer_link"
            >
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>


        <span className="footer__copy">
          &#169; Erdemay. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
