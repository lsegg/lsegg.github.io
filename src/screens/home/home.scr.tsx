import React from "react";
import siteInConstruction from "../../assets/images/site-in-construction.png";
import "./home.scss";

export const HomeScr: any = () => {
return(
  <section className="Home" id="home">
  <img
    src={siteInConstruction}
    className="Home-img"
    alt="site in construction"
  />
  <p className="Home-paragraph paragraph-regular-regular">
    Hi there! My portfolio is currently under construction.
  </p>
  <p className="Home-paragraph paragraph-regular-regular">
    To find out more about my work check{" "}
    <a
      className="Home-paragraph-link"
      href="https://www.linkedin.com/in/lucia-seggiaro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      my LinkedIn profile
    </a>
    .
  </p>
</section>
)
}