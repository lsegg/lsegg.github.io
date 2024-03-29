import { TitleCom } from "../../components/title/title.com";
import { PracticeCom } from "../../components/practice/practice.com";
import "./experience.scss";

export const ExperienceSection: any = () => {
  const work: any = [
    {
      description:
        "T-shaped developer (frontend specialist) in Stackzone, a secure self-service cloud governance solution for multi-account environments.",
      items: [
        "Frontend: UIs layout and implementation with React, Redux, Redux-Saga, Typescript, and Sass based on Figma mock-ups.",
        "Backend: API services with JavaScript, Node.js, npm, AWS lambda, AWS API Gateway, API Cloudwatch, and PostgreSQL.",
        "QA: end to end testing, Postman testing, Jest testing, and Sonarqube.",
        "Documentation: OpenApi, Postman, and Confluence.",
        "Agile methodologies: Scrum and Kanban.",
        "Soft skills: communication and interest in helping others (trainee onboarding through buddy system), organization (Jira board maintainer).",
      ],
    },
    {
      description: "",
      items: [
        "Teaching both direct and virtual classes.",
        "Participation in lesson and curricula planning.",
        "Participation in grading.",
        "Production of study material.",
        "General assistance to the professor.",
      ],
    },
    {
      description: "",
      items: [
        "In charge of Initial Drawing course for teenagers between 11 and 15 years old.",
        "Class planning according to established curriculum.",
        "Participation in grading.",
        "Substitute teacher in various courses such as Watercolors and Drawing I for adults.",
        "School's stand staff at several congresses and conventions.",
      ],
    },
  ];
  const academic: any = [
    {
      description:
        "The course consist of 3 blocks, which replicate professional environments and incorporate Agile methodologies and ceremonies such as Plannings, Dailys, Demos and Retros. The curricula includes everything from the fundamentals of programming to the launch of complete web applications and solving problems by applying industry best practices.",
      items: [],
    },
    {
      description:
        "The purpose of the profession includes the planning, construction and significance of the human habitat at all its scales, as well as the elements of its equipment. 60% achieved.",
      items: [],
    },
  ];

  return (
    <section className="Experience" id="experience">
      <TitleCom content="Experience" sectionClass="Experience-title" />
      <div className="Experience-wrapper">
        <div className="Experience-subsection Experience-subsection-work isCard">
          <PracticeCom
            type="work"
            startDate="jul 2021"
            endDate="current"
            role="Full Stack Web Developer"
            description={work[0].description}
            entity={{
              name: "StackZone Ltd",
              url: "https://www.stackzone.com/",
            }}
            location="remote"
            items={work[0].items}
          />
          <PracticeCom
            type="work"
            startDate="jun 2019"
            endDate="jun 2021"
            role="Teaching assistant"
            description={work[1].description}
            entity={{
              name: "Universidad Nacional de Rosario",
              url: "https://fapyd.unr.edu.ar/",
            }}
            location="Rosario, Argentina"
            items={work[1].items}
          />
          <PracticeCom
            type="work"
            startDate="nov 2019"
            endDate="apr 2020"
            role="Permanent & Substitute Drawing teacher"
            description={work[2].description}
            entity={{
              name: "Escuela de Dibujo Barocelli",
              url: "https://www.escueladibujo.com/",
            }}
            location="Rosario, Argentina"
            items={work[2].items}
          />
        </div>
        <div className="Experience-subsection -academic isCard">
          <PracticeCom
            type="academic"
            startDate="2020"
            endDate="2021"
            role="Web Development Course"
            description={academic[0].description}
            entity={{
              name: "Acamica",
              url: "https://www.acamica.com/",
            }}
            location="remote"
            items={academic[0].items}
          />
          <PracticeCom
            type="academic"
            startDate="2014"
            endDate="2021"
            role="Architecture Degree (incomplete)"
            description={academic[1].description}
            entity={{
              name: "Universidad Nacional de Rosario",
              url: "https://fapyd.unr.edu.ar/",
            }}
            location="Rosario, Argentina"
            items={academic[1].items}
          />
        </div>
      </div>
    </section>
  );
};
