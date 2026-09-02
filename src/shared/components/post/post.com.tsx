import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
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

const IMAGES = [
  yelpcampThumbnail,
  podcastChannelThumbnail,
  noSiThumbnail,
  wonEmpoweredThumbnail,
  jsRunnerGameThumbnail,
];

export const PostCom: any = ({
  category,
  title,
  imgIndex,
  type,
  description,
}: PostComProps) => {
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
    <article className={`Post ${category}`}>
      <button
        type="button"
        className="Post-media"
        onClick={open}
        aria-label={`Enlarge preview of ${title}`}
      >
        <img
          src={thumbnail}
          className="Post-thumbnail"
          alt={`${title} preview`}
          loading="lazy"
        />
        <span className="Post-media-veil" aria-hidden="true">
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
        </span>
        <span className={`Post-category micro-label ${category}`}>
          {categoryLabel}
        </span>
      </button>

      <div className="Post-body">
        <h3 className="Post-body-title title-medium-semibold">{title}</h3>
        <p className="Post-body-description paragraph-small-regular">
          {description}
        </p>
        <div className="Post-links">
          <a
            href={type.webUrl}
            className={`Post-links-link micro-label ${category}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {type.name === "website" ? "Read post" : "View piece"}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>

      {isShown &&
        createPortal(
          <div
            className="Post-overlay isShown"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={close}
          >
            <button
              type="button"
              className="Post-overlay-close"
              onClick={close}
              ref={closeRef}
              aria-label="Close preview"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div
              className="Post-overlay-inner"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={thumbnail}
                className="Post-overlay-preview"
                alt={`${title} preview`}
              />
              <div className="Post-overlay-description">
                <p className="Post-overlay-description-category micro-label">
                  {categoryLabel}
                </p>
                <h3 className="Post-overlay-description-title title-large-semibold">
                  {title}
                </h3>
                <p className="Post-overlay-description-text paragraph-medium-regular">
                  {description}
                </p>
                <a
                  href={type.webUrl}
                  className="Post-overlay-description-cta isButton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {type.name === "website" ? "Open post" : "Open piece"}
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
