import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { ProjectCom } from "../../components/project/project.com";
import { TitleCom } from "../../components/title/title.com";
import projectsData from "./projects-data.json";
import "./portfolio.scss";

export const PortfolioSection = forwardRef((_, ref) => {
  const allProjects: any[] = projectsData;

  const [filter, setFilter] = useState<string>("everything");
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

  // Listen for the custom event from ServicesSection
  useEffect(() => {
    const handleSetFilter = (event: CustomEvent) => {
      const { category } = event.detail;
      handleChange(category);
    };

    window.addEventListener(
      "setPortfolioFilter",
      handleSetFilter as EventListener
    );

    return () => {
      window.removeEventListener(
        "setPortfolioFilter",
        handleSetFilter as EventListener
      );
    };
  }, []);

  // Expose the handleChange method to parent components
  useImperativeHandle(ref, () => ({
    setFilter: (value: string) => {
      handleChange(value);
    },
  }));

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
});
