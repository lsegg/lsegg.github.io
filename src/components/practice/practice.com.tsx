import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
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
  return (
    <div className="Practice" id="practice">
      <div className="Practice-wrapper">
        <FontAwesomeIcon
          className={`Practice-wrapper-icon ${type}`}
          icon={type === "work" ? faBriefcase : faGraduationCap}
        />
      </div>
      <div className="Practice-data">
        <p className="Practice-data-date paragraph-small-regular">
          {startDate} - {endDate}
        </p>
        <h4 className="Practice-data-role title-medium-semibold">{role}</h4>
        <p className="Practice-data-description paragraph-small-regular">
          {description}
        </p>
        <ul className="Practice-data-list paragraph-small-regular">
          {items.map((item) => {
            return (
              <li className="Practice-data-list-item" key={items.indexOf(item)}>
                {item}
              </li>
            );
          })}
        </ul>

        <p className="Practice-data-where paragraph-medium-regular">
          {entity.url ? (
            <a
              href={entity.url}
              className={`Practice-data-where-link ${type}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {entity.name}{" "}
            </a>
          ) : (
            entity.name
          )}
          - {location}
        </p>
      </div>
    </div>
  );
};
