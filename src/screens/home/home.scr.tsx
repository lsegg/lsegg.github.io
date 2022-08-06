import { HomeSection } from "../../shared/sections/home/home.sec";
import siteInConstruction from "../../assets/images/site-in-construction.png";
import "./home.scss";

export const HomeScr: any = () => {
  return (
    <>
      <HomeSection />
      <section className="SiteInConstruction" id="SiteInConstruction">
        <img
          src={siteInConstruction}
          className="SiteInConstruction-img"
          alt="site in construction"
        />
        <p className="SiteInConstruction-paragraph paragraph-regular-regular">
          Hi there! My portfolio is currently under construction.
        </p>
        <p className="SiteInConstruction-paragraph paragraph-regular-regular">
          To find out more about my work check{" "}
          <a
            className="SiteInConstruction-paragraph-link"
            href="https://www.linkedin.com/in/lucia-seggiaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            my LinkedIn profile
          </a>
          .
        </p>
      </section>
    </>
  );
};
