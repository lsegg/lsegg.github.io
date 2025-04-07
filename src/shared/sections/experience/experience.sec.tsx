import { TitleCom } from "../../components/title/title.com";
import { PracticeCom } from "../../components/practice/practice.com";
import experienceData from "./experience-data.json";
import "./experience.scss";

export const ExperienceSection: any = () => {
  const { work, academic } = experienceData;

  return (
    <section className="Experience" id="experience">
      <TitleCom content="Experience" sectionClass="Experience-title" />
      <div className="Experience-wrapper">
        <div className="Experience-subsection Experience-subsection-work isCard">
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
        </div>
        <div className="Experience-subsection -academic isCard">
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
        </div>
      </div>
    </section>
  );
};
