import { TitleCom } from "../../components/title/title.com";
import { JobCom } from "../../components/job/job.com";
import "./services.scss";

export const ServicesSection: any = () => {
  const webDevDesc: string = "Design, coding, testing, review and launch.";
  const illusDesc: string =
    "Digital and watercolor media. Editorial illustration, personalized commisions, concept art.";
  return (
    <section className="Services" id="services">
      <TitleCom content="Services" sectionClass="Services-title" />
      <div className="Services-types">
        <JobCom icon="code" title="Web Development" description={webDevDesc} />
        <JobCom icon="brush" title="Illustration" description={illusDesc} />
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
