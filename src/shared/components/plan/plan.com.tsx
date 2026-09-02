import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBurst,
  faHandshake,
  faTheaterMasks,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./plan.scss";

export interface PlanProps {
  title: string;
  price: string;
  features: string[];
  link: string;
  isPopular?: boolean;
  icon: "explorer" | "supporter" | "commissioner";
}

export const PlanCom: React.FC<PlanProps> = ({
  title,
  price,
  features,
  link,
  icon,
  isPopular = false,
}) => {
  const iconMap = {
    explorer: faPersonBurst,
    supporter: faHandshake,
    commissioner: faTheaterMasks,
  };

  return (
    <div className={`Plan ${isPopular ? "isPopular" : ""} isTranslatedY`}>
      {isPopular && <p className="Plan-badge micro-label">Most popular</p>}
      <div className="Plan-head">
        <FontAwesomeIcon
          className="Plan-icon"
          icon={iconMap[icon]}
          aria-hidden="true"
        />
        <h3 className="Plan-title title-medium-semibold">{title}</h3>
        <p className="Plan-price">{price}</p>
      </div>
      <ul className="Plan-summary">
        {features.map((feature, index) => (
          <li className="Plan-feature paragraph-small-regular" key={index}>
            <FontAwesomeIcon
              className="Plan-feature-tick"
              icon={faCheck}
              aria-hidden="true"
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="Plan-button isButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get started
      </a>
    </div>
  );
};
