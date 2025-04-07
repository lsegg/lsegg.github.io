import { TitleCom } from "../../components/title/title.com";
import { JobCom } from "../../components/job/job.com";
import "./services.scss";

export const ServicesSection: any = () => {
  const webDevDesc: string = "Design, coding, testing, review and launch.";
  const illusDesc: string =
    "Digital and watercolor media. Editorial illustration, personalized commisions, concept art.";

  const handleJobClick = (category: string) => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });

      // Set the filter in the portfolio section
      const event = new CustomEvent("setPortfolioFilter", {
        detail: { category: category.toLowerCase().replace(/\s+/g, "-") },
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <section className="Services" id="services">
      <TitleCom content="Services" sectionClass="Services-title" />
      <div className="Services-types">
        <JobCom
          title="Web Development"
          description={webDevDesc}
          onClick={() => handleJobClick("Web Development")}
        />
        <JobCom
          title="Illustration"
          description={illusDesc}
          onClick={() => handleJobClick("Illustration")}
        />
      </div>
      <div className="Services-custom">
        Looking for a custom job?{" "}
        <a href="#contact" className="Services-custom-link">
          Contact me! 👇
        </a>
      </div>
    </section>
  );
};
