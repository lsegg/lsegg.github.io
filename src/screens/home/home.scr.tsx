import { SiteInConstructionSection } from "../../shared/sections/site-in-construction/site-in-construction.sec";
import { HomeSection } from "../../shared/sections/home/home.sec";
import { AboutSection } from "../../shared/sections/about/about.sec";
import { ContactSection } from "../../shared/sections/contact/contact.sec";
import "./home.scss";

export const HomeScr: any = () => {
  const siteInConstruction = false;
  return (
    <>
      {siteInConstruction && <SiteInConstructionSection />}
      {!siteInConstruction && (
        <>
          <HomeSection />
          <AboutSection />
          <ContactSection />
        </>
      )}
    </>
  );
};
