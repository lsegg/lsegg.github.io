import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import podcastChannelThumbnail from "../../../assets/images/podcast-channel-thumbnail.png";
import yelpcampThumbnail from "../../../assets/images/yelpcamp-thumbnail.png";
import noSiThumbnail from "../../../assets/images/no-si-thumbnail.png";
import wonEmpoweredThumbnail from "../../../assets/images/won-empowered-thumbnail.png";
import jsRunnerGameThumbnail from "../../../assets/images/js-runner-game-thumbnail.png";
import "./post.scss";

export type PostComProps = {
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

export const PostCom: any = ({
  category,
  title,
  imgIndex,
  type,
  description,
}: PostComProps) => {
  const images = [
    yelpcampThumbnail,
    podcastChannelThumbnail,
    noSiThumbnail,
    wonEmpoweredThumbnail,
    jsRunnerGameThumbnail,
  ];
  const [isShown, setIsShown] = useState<boolean>(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <article
      className={`Post ${category} url(${images[imgIndex]})`}
      onClick={() => handleClick()}
      style={{
        background: `no-repeat url("../../../assets/images/podcast-channel-thumbnail.png")`,
      }}
    >
      <div className={`Post-overlay ${isShown && "isShown"}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="Post-overlay-icon"
          onClick={() => handleClick()}
        />
        <img
          src={images[imgIndex]}
          className="Post-overlay-preview"
          onClick={() => {
            window.open(type.webUrl, "_blank");
          }}
          alt="Post preview"
        />
        <div className="Post-overlay-description">
          <h3 className="Post-overlay-description-title title-large-semibold">
            {title}
          </h3>
          <p className="Post-overlay-description-text paragraph-small-regular">
            {description}
          </p>
        </div>
      </div>
      <img
        src={images[imgIndex]}
        className="Post-thumbnail"
        alt="Post thumbnail"
      />
      <div className={`Post-hover ${category}`}>
        <p className={`Post-hover-category paragraph-small-bold  ${category} `}>
          {category.replace("-", " ").toUpperCase()}
        </p>
        <div className="Post-hover-description">
          <h3 className="Post-hover-description-title title-large-semibold">
            {title}
          </h3>
          <p className="Post-hover-description-text paragraph-small-regular">
            {description}
          </p>
        </div>
        <span className="Post-hover-buttons">
          {type.name === "website" && (
            <>
              <a
                href={type.webUrl}
                className={`Post-hover-buttons-link ${category}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </>
          )}
          {type.name === "illustration" && (
            <a
              href={type.webUrl}
              className={`Post-hover-buttons-link ${category}`}
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
