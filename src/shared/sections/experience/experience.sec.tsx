import { TitleCom } from "../../components/title/title.com";
import { PracticeCom } from "../../components/practice/practice.com";
import experienceData from "./experience-data.json";
import "./experience.scss";

export const ExperienceSection: any = () => {
  const { work, academic } = experienceData;

  return (
    <section className="Experience" id="experience">
      <TitleCom
        content="Experience"
        sectionClass="Experience-title"
        eyebrow="Where I've been"
      />
      <div className="Experience-wrapper">
        <div className="Experience-subsection" data-reveal>
          <h3 className="Experience-subsection-heading micro-label work">
            Work
          </h3>
          <ul className="Experience-subsection-list">
            {work.map((item, index) => (
              <PracticeCom
                key={`work-${index}`}
                type="work"
                startDate={item.startDate}
                endDate={item.endDate}
                role={item.role}
                description={item.description}
                entity={item.entity}
                location={item.location}
                items={item.items}
              />
            ))}
          </ul>
        </div>
        <div
          className="Experience-subsection"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <h3 className="Experience-subsection-heading micro-label academic">
            Education
          </h3>
          <ul className="Experience-subsection-list">
            {academic.map((item, index) => (
              <PracticeCom
                key={`academic-${index}`}
                type="academic"
                startDate={item.startDate}
                endDate={item.endDate}
                role={item.role}
                description={item.description}
                entity={item.entity}
                location={item.location}
                items={item.items}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
