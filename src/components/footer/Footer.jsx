import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mincharius</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/phanchau0502"
            className="footer__social-link"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/phan-chau52/"
            className="footer__social-link"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Mincharius"
            className="footer__social-link"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mincharius
        </span>
      </div>
    </footer>
  );
};

export default Footer;
