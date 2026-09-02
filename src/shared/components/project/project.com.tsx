import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import podcastChannelThumbnail from "../../../assets/images/podcast-channel-thumbnail.png";
import yelpcampThumbnail from "../../../assets/images/yelpcamp-thumbnail.png";
import noSiThumbnail from "../../../assets/images/no-si-thumbnail.png";
import wonEmpoweredThumbnail from "../../../assets/images/won-empowered-thumbnail.png";
import jsRunnerGameThumbnail from "../../../assets/images/js-runner-game-thumbnail.png";
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

const IMAGES = [
  yelpcampThumbnail,
  podcastChannelThumbnail,
  noSiThumbnail,
  wonEmpoweredThumbnail,
  jsRunnerGameThumbnail,
];

export const ProjectCom: any = ({
  category,
  title,
  imgIndex,
  type,
  description,
}: ProjectComProps) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const thumbnail = IMAGES[imgIndex];
  const categoryLabel = category.replace(/-/g, " ");

  const open = () => setIsShown(true);
  const close = () => setIsShown(false);

  // Escape closes the preview and the page behind it stays put.
  useEffect(() => {
    if (!isShown) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isShown]);

  return (
    <article className={`Project ${category}`}>
      <button
        type="button"
        className="Project-media"
        onClick={open}
        aria-label={`Enlarge preview of ${title}`}
      >
        <img
          src={thumbnail}
          className="Project-thumbnail"
          alt={`${title} preview`}
          loading="lazy"
        />
        <span className="Project-media-veil" aria-hidden="true">
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </span>
        <span className={`Project-category micro-label ${category}`}>
          {categoryLabel}
        </span>
      </button>

      <div className="Project-body">
        <h3 className="Project-body-title title-medium-semibold">{title}</h3>
        <p className="Project-body-description paragraph-small-regular">
          {description}
        </p>
        <div className="Project-links">
          <a
            href={type.webUrl}
            className={`Project-links-link micro-label ${category}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {type.name === "website" ? "Live site" : "View piece"}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
          {type.name === "website" && type.repoUrl && (
            <a
              href={type.repoUrl}
              className={`Project-links-link micro-label ${category}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      </div>

      {isShown &&
        createPortal(
          <div
            className="Project-overlay isShown"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={close}
          >
            <button
              type="button"
              className="Project-overlay-close"
              onClick={close}
              ref={closeRef}
              aria-label="Close preview"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div
              className="Project-overlay-inner"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={thumbnail}
                className="Project-overlay-preview"
                alt={`${title} preview`}
              />
              <div className="Project-overlay-description">
                <p className="Project-overlay-description-category micro-label">
                  {categoryLabel}
                </p>
                <h3 className="Project-overlay-description-title title-large-semibold">
                  {title}
                </h3>
                <p className="Project-overlay-description-text paragraph-medium-regular">
                  {description}
                </p>
                <a
                  href={type.webUrl}
                  className="Project-overlay-description-cta isButton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {type.name === "website" ? "Open site" : "Open piece"}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </article>
  );
};
