import "./assets/site-in-construction.scss";

export const SiteInConstructionSection: any = () => {
  return (
    <section className="SiteInConstruction" id="SiteInConstruction">
      <p className="SiteInConstruction-paragraph paragraph-medium-regular">
        Hi there! My portfolio is currently under construction.
      </p>
      <p className="SiteInConstruction-paragraph paragraph-medium-regular">
        To find out more about my work check{" "}
      </p>
      <a
        className="SiteInConstruction-paragraph-link isButton"
        href="https://www.linkedin.com/in/lucia-seggiaro/"
        target="_blank"
        rel="noopener noreferrer"
      >
        my LinkedIn profile
      </a>
    </section>
  );
};
