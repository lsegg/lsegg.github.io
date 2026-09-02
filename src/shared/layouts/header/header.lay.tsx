import signature from "../../../assets/images/signature.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FEATURES } from "../../../features";
import "./header.scss";

type NavItem = {
  id: string;
  label: string;
  to: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/#about" },
  { id: "services", label: "Services", to: "/#services" },
  { id: "experience", label: "Experience", to: "/#experience" },
  { id: "portfolio", label: "Portfolio", to: "/#portfolio" },
  ...(FEATURES.blog
    ? [{ id: "blog", label: "Blog", to: "/#blog" }]
    : []),
  { id: "contact", label: "Contact", to: "/#contact" },
];

export const HeaderLay: any = () => {
  const [navbarShown, setNavbarShown] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("home");
  const { pathname } = useLocation();
  const currentYear: number = new Date().getFullYear();

  const handleMenuClick = () => {
    setNavbarShown(!navbarShown);
  };

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavbarShown(false);
  };

  // Highlight the nav entry for whichever section currently owns the viewport.
  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  // Stop the page behind the mobile drawer from scrolling.
  useEffect(() => {
    document.body.style.overflow = navbarShown ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarShown]);

  return (
    <header className="Header">
      <nav className="Header-nav" aria-label="Main">
        <button
          className="Header-nav-button"
          onClick={handleMenuClick}
          aria-expanded={navbarShown}
          aria-controls="primary-navigation"
          aria-label={navbarShown ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon
            icon={navbarShown ? faXmark : faBars}
            className="Header-nav-button-icon"
          />
        </button>
        <Link
          to="/"
          className="Header-nav-signature-link"
          onClick={() => handleLinkClick("home")}
          aria-label="Lucía Seggiaro — home"
        >
          <img
            src={signature}
            alt="signature art of luli"
            className="Header-nav-signature"
          />
        </Link>
        <ul
          id="primary-navigation"
          className={`Header-nav-list ${navbarShown ? "isShown" : ""}`}
        >
          {NAV_ITEMS.map(({ id, label, to }, index) => (
            <li className="Header-nav-list-row" key={id}>
              <Link
                className={`Header-nav-list-item ${
                  activeId === id ? "isActive" : ""
                }`}
                to={to}
                onClick={() => handleLinkClick(id)}
                aria-current={activeId === id ? "true" : undefined}
                style={{ "--row": index } as React.CSSProperties}
              >
                <span className="Header-nav-list-item-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="Header-nav-list-item-label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="Header-copyright">
        <span className="Header-copyright-mark">&#169;</span> Lucía Seggiaro
        <span className="Header-copyright-year">{currentYear}</span>
      </p>
    </header>
  );
};
