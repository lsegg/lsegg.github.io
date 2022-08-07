import { HomeSection } from "../../shared/sections/home/home.sec";
import { SiteInConstructionSection } from "../../shared/sections/site-in-construction/site-in-construction.sec";
import { AboutSection } from "../../shared/sections/about/about.sec";
import "./home.scss";

export const HomeScr: any = () => {
  const siteInConstruction = true;
  return (
    <>
      {siteInConstruction && <SiteInConstructionSection />}
      {!siteInConstruction && (
        <>
          <HomeSection />
          <AboutSection />
        </>
      )}
    </>
  );
};
