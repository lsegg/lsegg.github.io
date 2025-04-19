import { SiteInConstructionSection } from "../../shared/sections/site-in-construction/site-in-construction.sec";
import { HomeSection } from "../../shared/sections/home/home.sec";
import { AboutSection } from "../../shared/sections/about/about.sec";
import { ServicesSection } from "../../shared/sections/services/services.sec";
import { ExperienceSection } from "../../shared/sections/experience/experience.sec";
import { PortfolioSection } from "../../shared/sections/portfolio/portfolio.sec";
import { ReviewsSection } from "../../shared/sections/reviews/reviews.sec";
import { ContactSection } from "../../shared/sections/contact/contact.sec";
import "./home.scss";

export const HomeScr: any = () => {
  const siteInConstruction = false;
  return (
    <div className="HomeScreen">
      {siteInConstruction && <SiteInConstructionSection />}
      {!siteInConstruction && (
        <>
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <PortfolioSection />
          <ReviewsSection />
          <ContactSection />
        </>
      )}
    </div>
  );
};
