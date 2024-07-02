import signature from "../../../assets/images/signature.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./header.scss";

export const HeaderLay: any = () => {
  const [navbarShown, setNavbarShown] = useState<Boolean>(false);
  const pending: boolean = true;
  const currentYear: number = new Date().getFullYear();
  const handleMenuClick = () => {
    setNavbarShown(!navbarShown);
  };

  const handleLinkClick = (id: string) => {
    let section = document.getElementById(id);
    section && section.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavbarShown(false);
  };

  return (
    <header className="Header paragraph-medium-regular">
      <nav className="Header-nav">
        <button className="Header-nav-button" onClick={handleMenuClick}>
          <FontAwesomeIcon
            icon={navbarShown ? faXmark : faBars}
            className="Header-nav-button-icon"
          />
        </button>
        <img
          src={signature}
          alt="signature art of luli"
          className="Header-nav-signature"
        />
        <ul className={`Header-nav-list ${navbarShown ? "isShown" : ""}`}>
          <Link
            className="Header-nav-list-item"
            to="/"
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Link>
          <Link
            className="Header-nav-list-item"
            to="/about"
            onClick={() => handleLinkClick("about")}
          >
            About
          </Link>
          <Link
            className="Header-nav-list-item"
            to="/services"
            onClick={() => handleLinkClick("services")}
          >
            Services
          </Link>
          <Link
            className="Header-nav-list-item"
            to="/experience"
            onClick={() => handleLinkClick("experience")}
          >
            Experience
          </Link>
          <Link
            className="Header-nav-list-item"
            to="/portfolio"
            onClick={() => handleLinkClick("portfolio")}
          >
            Portfolio
          </Link>
          {!pending && (
            <Link
              className="Header-nav-list-item"
              to="/blog"
              onClick={() => handleLinkClick("blog")}
            >
              Blog
            </Link>
          )}
          <Link
            className="Header-nav-list-item"
            to="/contact"
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Link>
        </ul>
      </nav>
      <p className="Header-copyright">&#169; Lucía Seggiaro - {currentYear}</p>
    </header>
  );
};
