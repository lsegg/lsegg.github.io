import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import podcastChannelThumbnail from "../../../assets/images/podcast-channel-thumbnail.png";
import yelpcampThumbnail from "../../../assets/images/yelpcamp-thumbnail.png";
import noSiThumbnail from "../../../assets/images/no-si-thumbnail.png";
import "./project.scss";

export type ProjectComProps = {
  category: "web-development" | "illustration";
  title: string;
  imgIndex: number;
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
  imgIndex,
  type,
  description,
}: ProjectComProps) => {
  const images = [yelpcampThumbnail, podcastChannelThumbnail, noSiThumbnail];
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <article
      className={`Project ${category} url(${images[imgIndex]})`}
      onClick={() => handleClick()}
      style={{
        background: `no-repeat url("../../../assets/images/podcast-channel-thumbnail.png")`,
      }}
    >
      <div className={`Project-overlay ${isShown && "isShown"}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="Project-overlay-icon"
          onClick={() => handleClick()}
        />
        <img
          src={images[imgIndex]}
          className="Project-overlay-preview"
          onClick={() => {
            window.open(type.webUrl, "_blank");
          }}
          alt="Project preview"
        />
        <div className="Project-overlay-description">
          <h3 className="Project-overlay-description-title title-large-semibold">
            {title}
          </h3>
          <p className="Project-overlay-description-text paragraph-small-regular">
            {description}
          </p>
        </div>
      </div>
      <img
        src={images[imgIndex]}
        className="Project-thumbnail"
        alt="Project thumbnail"
      />
      <div className={`Project-hover ${category}`}>
        <p
          className={`Project-hover-category paragraph-small-bold  ${category} `}
        >
          {category.replace("-", " ").toUpperCase()}
        </p>
        <div className="Project-hover-description">
          <h3 className="Project-hover-description-title title-large-semibold">
            {title}
          </h3>
          <p className="Project-hover-description-text paragraph-small-regular">
            {description}
          </p>
        </div>
        <span className="Project-hover-buttons">
          {type.name === "website" && (
            <>
              <a
                href={type.webUrl}
                className={`Project-hover-buttons-link ${category}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
              <a
                href={type.repoUrl}
                className={`Project-hover-buttons-link ${category}`}
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
              className={`Project-hover-buttons-link ${category}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLink} />
            </a>
          )}
        </span>
      </div>
    </article>
  );
};
