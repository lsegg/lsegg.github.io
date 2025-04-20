import { useState, useEffect, useImperativeHandle, forwardRef } from "react";
import { TitleCom } from "../../components/title/title.com";
import { FilterCom } from "../../components/filter/filter.com";
import { ProjectCom } from "../../components/project/project.com";
import projectsData from "./projects-data.json";
import "./portfolio.scss";

export const PortfolioSection = forwardRef((_, ref) => {
  const allProjects: any[] = projectsData;

  const [filter, setFilter] = useState<string>("everything");
  const [displayCount, setDisplayCount] = useState<number>(2);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  const filterOptions = ["everything", "web-development", "illustration"];

  // Update projects whenever filteredProjects or displayCount changes
  useEffect(() => {
    setProjects(filteredProjects.slice(0, displayCount));
  }, [filteredProjects, displayCount]);

  const handleChange = (value: string) => {
    setFilter(value);
    setDisplayCount(2); // Reset display count when filter changes

    if (value !== "everything") {
      const filtered = allProjects.filter(
        (project) => project.category === value
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(allProjects);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 2);
  };

  // Initialize filtered projects
  useEffect(() => {
    setFilteredProjects(allProjects);
  }, []);

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

  useImperativeHandle(ref, () => ({
    setFilter: (value: string) => {
      handleChange(value);
    },
  }));

  const hasMoreProjects = projects.length < filteredProjects.length;

  return (
    <section className="Portfolio" id="portfolio">
      <TitleCom content="Recent Works" sectionClass="Portfolio-title" />
      <FilterCom
        filter={filter}
        onFilterChange={handleChange}
        options={filterOptions}
      />
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
      {hasMoreProjects && (
        <div className="Portfolio-load-more">
          <button
            onClick={handleLoadMore}
            className="Portfolio-load-more-button paragraph-medium-bold isButton"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
});
