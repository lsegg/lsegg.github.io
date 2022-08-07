import { JobCom } from "../../components/job/job.com";
import "./services.scss";

export const ServicesSection: any = () => {
  const webDevDesc: string =
    "Information gathering, planning, design, content writing and assembly, coding, testing, review and launch, maintenance.";
  const illusDesc: string =
    "Digital and watercolor media. Editorial illustration, personalized commisions, fanart, prints, stickers, character design, concept art.";
  return (
    <section className="Services" id="services">
      <h2 className="Services-title title-x-large-semibold">Services</h2>
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
