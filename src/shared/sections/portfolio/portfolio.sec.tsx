import { useState } from "react";
import { ProjectCom } from "../../components/project/project.com";
import { TitleCom } from "../../components/title/title.com";
import "./portfolio.scss";

export const PortfolioSection: any = () => {
  const allProjects: any[] = [
    {
      category: "web-development",
      title: "JS endless runner game",
      imgIndex: 4,
      description:
        "Codealong endless runner game from the JavaScript Game Development Course for Beginners by freeCodeCamp..",
      type: {
        name: "website",
        webUrl:
          "https://lsegg.github.io/javascript-game-development-course-for-beginners/",
        repoUrl:
          "https://github.com/lsegg/javascript-game-development-course-for-beginners",
      },
    },
    {
      category: "illustration",
      title: "Won Empowered",
      imgIndex: 3,
      description:
        "Art collaboration for a decision-making game to battle gender microagressions made in Sheroes in Games Jam.",
      type: {
        name: "illustration",
        webUrl: "https://magentawitch.itch.io/won-empowered",
      },
    },
    {
      category: "illustration",
      title: "NO = SÍ (Segundo Experimento Ambiental)",
      imgIndex: 2,
      description:
        "Collaboration with music band Flecha Zen for the cover of their album",
      type: {
        name: "illustration",
        webUrl: "https://open.spotify.com/album/6WaNe2XqGe9I9DqTeitTL0",
      },
    },
    {
      category: "web-development",
      title: "Podcast Channel Landing Page",
      imgIndex: 1,
      description:
        "This is the first project from the Web Full Stack Development intensive programme by Acámica, the goal was to create the layout of the landing page of a Podcast channel, following the visual guides of a provided user interface and developing functionalities of content reproduction, navigation and compatibility with multiple browsers and devices.",
      type: {
        name: "website",
        webUrl: "https://lsegg.github.io/podcast-channel/",
        repoUrl: "https://github.com/lsegg/podcast-channel",
      },
    },
    {
      category: "web-development",
      title: "YelpCamp",
      imgIndex: 0,
      description:
        "This is the final project from The Web Developer Bootcamp 2021 by Colt Steele. It is a site like Yelp for finding, sharing and reviewing campgrounds.",
      type: {
        name: "website",
        webUrl: "https://thawing-sands-22530.herokuapp.com/",
        repoUrl: "https://github.com/lsegg/yelp-camp",
      },
    },
  ];

  const [filter, setFilter] = useState<string>("everthing");
  const [projects, setProjects] = useState<any[]>(allProjects);

  const handleChange = (value: string) => {
    setFilter(value);
    if (value !== "everything") {
      const filteredProjects = allProjects.filter(
        (project) => project.category === value
      );
      setProjects(filteredProjects);
    } else {
      setProjects(allProjects);
    }
  };

  return (
    <section className="Portfolio" id="portfolio">
      <TitleCom content="Recent Works" sectionClass="Portfolio-title" />
      <div
        className="Portfolio-filter title-medium-semibold"
        role="group"
        aria-label="Toggle project filter"
      >
        <label className="Portfolio-filter-label" htmlFor="everything">
          <input
            type="radio"
            className="Portfolio-filter-input"
            value={filter}
            name="everything"
            id="everything"
            checked={filter === "everything"}
            onChange={() => {
              handleChange("everything");
            }}
          />
          Everything
        </label>
        <label className="Portfolio-filter-label" htmlFor="web-development">
          <input
            type="radio"
            className="Portfolio-filter-input"
            value={filter}
            name="web-development"
            id="web-development"
            checked={filter === "web-development"}
            onChange={() => {
              handleChange("web-development");
            }}
          />
          Web Development
        </label>
        <label className="Portfolio-filter-label" htmlFor="illustration">
          <input
            type="radio"
            className="Portfolio-filter-input"
            value={filter}
            name="illustration"
            id="illustration"
            checked={filter === "illustration"}
            onChange={() => {
              handleChange("illustration");
            }}
          />
          Illustration
        </label>
      </div>
      <div className="Portfolio-works">
        {projects.map((project) => {
          return (
            <ProjectCom
              category={project.category}
              title={project.title}
              imgIndex={project.imgIndex}
              description={project.description}
              type={project.type}
              key={project.title.replace(/\s+/g, "-").toLowerCase()}
            />
          );
        })}
      </div>
    </section>
  );
};
