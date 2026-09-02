import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./practice.scss";

type PracticeComProps = {
  type: "work" | "academic";
  startDate: string;
  endDate: string;
  role: string;
  description: string;
  location: string;
  entity: {
    name: string;
    url: string;
  };
  items: string[];
};

export const PracticeCom: any = ({
  type,
  startDate,
  endDate,
  role,
  description,
  location,
  entity,
  items,
}: PracticeComProps) => {
  const [showAll, setShowAll] = useState(false);
  const hasMoreItems = items.length > 2;
  const displayedItems = showAll ? items : items.slice(0, 2);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <li className={`Practice Practice--${type}`}>
      <span className={`Practice-marker ${type}`} aria-hidden="true">
        <FontAwesomeIcon
          className="Practice-marker-icon"
          icon={type === "work" ? faBriefcase : faGraduationCap}
        />
      </span>
      <div className="Practice-data">
        <p className="Practice-data-date micro-label">
          {startDate} <span aria-hidden="true">—</span> {endDate}
        </p>
        <h4 className="Practice-data-role title-medium-semibold">{role}</h4>
        <p className="Practice-data-where paragraph-small-regular">
          {entity.url ? (
            <a
              href={entity.url}
              className={`Practice-data-where-link ${type}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {entity.name}
            </a>
          ) : (
            <span className="Practice-data-where-name">{entity.name}</span>
          )}
          <span className="Practice-data-where-sep" aria-hidden="true">
            ·
          </span>
          {location}
        </p>
        <p className="Practice-data-description paragraph-small-regular">
          {description}
        </p>
        <ul className="Practice-data-list paragraph-small-regular">
          {displayedItems.map((item, index) => (
            <li className="Practice-data-list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {hasMoreItems && (
          <button
            type="button"
            className={`Practice-data-toggle micro-label ${type}`}
            onClick={toggleShowAll}
            aria-expanded={showAll}
          >
            {showAll ? "Show less" : `Show ${items.length - 2} more`}
          </button>
        )}
      </div>
    </li>
  );
};
