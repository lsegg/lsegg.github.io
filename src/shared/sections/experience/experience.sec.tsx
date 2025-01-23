import { TitleCom } from "../../components/title/title.com";
import { PracticeCom } from "../../components/practice/practice.com";
import "./experience.scss";

export const ExperienceSection: any = () => {
  const work: any = [
    {
      items: [
        "Build, maintain, and improve the capacity to fetch and transform data.",
        "Maintain and further develop a large-scale API capable of handling +10k requests per second.",
        "Work closely with cross-functional teams to align data management, API development and business objectives.",
      ],
    },
    {
      items: [
        "Developed and maintained robust full-stack web applications, leveraging React, Redux, Redux-Saga, TypeScript, and Sass on the frontend, and Node.js, AWS Lambda, PostgreSQL, Redis and Docker on the backend.",
        "Architected a dynamic frontend system that enabled React to generate over 300 unique interfaces from JSON input, streamlining development through an 'infrastructure-as-code' approach and empowering non-technical staff to create new UIs independently.",
        "Designed and deployed multi-region, multi-account AWS infrastructure, enabling users to retrieve comprehensive AWS organization data with a single API call, cutting customer IT resource monitoring time by 50%.",
        "Optimized backend performance by implementing Redis caching and replacing real-time requests with data from CRON-scheduled jobs and queue systems, resulting in increased efficiency and significant cost reductions.",
        "Automated customer tagging of AWS resources across multiple regions and accounts, enhancing accuracy in resource tracking and achieving up to a 90% reduction in manual effort for cost optimization.",
        "Collaborated with cross-functional teams in Agile environments (Scrum and Kanban), contributing to sprint planning, reviews, retrospectives, and ensuring alignment with project goals.",
        "Led trainee onboarding through a structured 'buddy' system, providing mentorship and fostering a collaborative, productive team culture.",
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
      items: [
        "The course consist of 3 blocks, which replicate professional environments and incorporate Agile methodologies and ceremonies such as Plannings, Dailys, Demos and Retros.",
        "The curricula includes everything from the fundamentals of programming to the launch of complete web applications and solving problems by applying industry best practices.",
      ],
    },
    {
      description:
        "Transitioned to focus on Web Development and Illustration full-time after completing the majority of the program.",
      items: [
        "The purpose of the profession includes the planning, construction and significance of the human habitat at all its scales, as well as the elements of its equipment.",
        "60% achieved.",
      ],
    },
  ];

  return (
    <section className="Experience" id="experience">
      <TitleCom content="Experience" sectionClass="Experience-title" />
      <div className="Experience-wrapper">
        <div className="Experience-subsection Experience-subsection-work isCard">
          <PracticeCom
            type="work"
            startDate="jan 2025"
            endDate="current"
            role="Full Stack Engineer"
            description={work[0].description}
            entity={{
              name: "Scraper API",
              url: "https://www.scraperapi.com/",
            }}
            location="remote"
            items={work[0].items}
          />
          <PracticeCom
            type="work"
            startDate="jul 2021"
            endDate="dec 2024"
            role="Full Stack Engineer"
            description={work[1].description}
            entity={{
              name: "StackZone Ltd",
              url: "https://www.stackzone.com/",
            }}
            location="remote"
            items={work[1].items}
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
            role="Architecture Degree"
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
