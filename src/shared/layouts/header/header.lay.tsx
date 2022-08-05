import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./header.scss";

export const HeaderLay: any = () => {
  const [navbarShown, setNavbarShown] = useState<Boolean>(true);
  const currentYear: number = new Date().getFullYear();
  return (
    <header className="Header paragraph-regular-regular ">
      <nav className="Header-nav">
        <button
          className="Header-nav-button"
          onClick={() => {
            setNavbarShown(!navbarShown);
          }}
        >
          <FontAwesomeIcon
            icon={navbarShown ? faXmark : faBars}
            className="Header-nav-button-icon"
          />
        </button>
        {navbarShown && (
          <ul
            className={`Header-nav-list ${
              navbarShown ? "Header-nav-list--isShown" : ""
            }`}
          >
            <li className="Header-nav-list-item">
              <a href="#home" className="Header-nav-list-item-link">
                Home
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                About
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                Services
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                Experience
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                Works
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                Blog
              </a>
            </li>
            <li className="Header-nav-list-item">
              <a href="#" className="Header-nav-list-item-link">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      <p className="Header-copyright">&#169; Lucía Seggiaro - {currentYear}</p>
    </header>
  );
};
