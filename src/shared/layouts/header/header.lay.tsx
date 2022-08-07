import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./header.scss";

export const HeaderLay: any = () => {
  const [navbarShown, setNavbarShown] = useState<Boolean>(false);
  const currentYear: number = new Date().getFullYear();
  const handleClick = () => {
    setNavbarShown(!navbarShown);
  };
  return (
    <header className="Header paragraph-medium-regular">
      <nav className="Header-nav">
        <button className="Header-nav-button" onClick={handleClick}>
          <FontAwesomeIcon
            icon={navbarShown ? faXmark : faBars}
            className="Header-nav-button-icon"
          />
        </button>
        <ul className={`Header-nav-list ${navbarShown ? "isShown" : ""}`}>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#home" className="Header-nav-list-item-link">
              Home
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#about" className="Header-nav-list-item-link">
              About
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#services" className="Header-nav-list-item-link">
              Services
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#experience" className="Header-nav-list-item-link">
              Experience
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#works" className="Header-nav-list-item-link">
              Portfolio
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#blog" className="Header-nav-list-item-link">
              Blog
            </a>
          </li>
          <li className="Header-nav-list-item" onClick={handleClick}>
            <a href="#contact" className="Header-nav-list-item-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <p className="Header-copyright">&#169; Lucía Seggiaro - {currentYear}</p>
    </header>
  );
};
