import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./project.scss";

export type ProjectComProps = {
  category: "web-development" | "illustration";
  title: string;
  imgPath: string;
  type: {
    name: "website" | "illustration";
    webUrl: string;
    repoUrl: string;
    portfolioUrl: string;
  };
  description: string;
};

export const ProjectCom: any = ({
  category,
  title,
  type,
  description,
}: ProjectComProps) => {
  return (
    <article className="Project isCard">
      <div className="Project-overlay"></div>
      <p className="Project-category paragraph-small-bold">
        {category.replace("-", " ").toUpperCase()}
      </p>
      <h3 className="Project-title title-large-semibold">{title}</h3>
      <p className="Project-description">{description}</p>
      <span className="Project-buttons">
        {type.name === "website" && (
          <>
            <a
              href={type.webUrl}
              className="Project-buttons-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
            <a
              href={type.repoUrl}
              className="Project-buttons-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </>
        )}
        {type.name === "illustration" && (
          <a
            href={type.portfolioUrl}
            className="Project-buttons-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLink} />
          </a>
        )}
      </span>
    </article>
  );
};
