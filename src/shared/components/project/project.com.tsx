import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./project.scss";
import { useState } from "react";

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
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <article
      className={`Project isCard ${category}`}
      onClick={() => handleClick()}
    >
      <div className={`Project-overlay ${isShown && "isShown"}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="Project-overlay-icon"
          onClick={() => handleClick()}
        />
      </div>
      <p className={`Project-category paragraph-small-bold  ${category} `}>
        {category.replace("-", " ").toUpperCase()}
      </p>
      <h3 className="Project-title title-large-semibold">{title}</h3>
      <p className="Project-description">{description}</p>
      <span className="Project-buttons">
        {type.name === "website" && (
          <>
            <a
              href={type.webUrl}
              className={`Project-buttons-link ${category}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
            <a
              href={type.repoUrl}
              className={`Project-buttons-link ${category}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </>
        )}
        {type.name === "illustration" && (
          <a
            href={type.webUrl}
            className={`Project-buttons-link ${category}`}
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
