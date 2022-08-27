import { useState } from "react";
import { ProjectCom } from "../../components/project/project.com";
import { TitleCom } from "../../components/title/title.com";
import "./portfolio.scss";

export const PortfolioSection: any = () => {
  const allProjects: any[] = [
    {
      category: "web-development",
      title: "YelpCamp",
      description:
        "This is the final project from The Web Developer Bootcamp 2021 by Colt Steele. It is a site like Yelp for finding, sharing and reviewing campgrounds.",
      type: {
        name: "website",
        webUrl: "https://thawing-sands-22530.herokuapp.com/",
        repoUrl: "https://github.com/lsegg/yelp-camp",
      },
    },
    {
      category: "web-development",
      title: "Podcast Channel Landing Page",
      description:
        "This is the first project from the Web Full Stack Development intensive programme by Acámica, the goal was to create the layout of the landing page of a Podcast channel, following the visual guides of a provided user interface and developing functionalities of content reproduction, navigation and compatibility with multiple browsers and devices.",
      type: {
        name: "website",
        webUrl: "https://github.com/lsegg/podcast-channel",
        repoUrl: "https://lsegg.github.io/podcast-channel/",
      },
    },
    {
      category: "illustration",
      title: "NO = SÍ (Segundo Experimento Ambiental)",
      description: "Collaboration with music band Flecha Zen for the cover of their album",
      type: {
        name: "illustration",
        webUrl: "https://open.spotify.com/album/6WaNe2XqGe9I9DqTeitTL0",
      }
    }
  ];

  const [filter, setFilter] = useState<string>("everthing");
  const [projects, setProyects] = useState<any[]>(allProjects);

  const handleChange = (value: string) => {
    setFilter(value);
    if (value !== "everything") {
      const filteredProjects = allProjects.filter(
        (project) => project.category === value
      );
      setProyects(filteredProjects);
    } else {
      setProyects(allProjects);
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
              imgPath={project.imgPath}
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
