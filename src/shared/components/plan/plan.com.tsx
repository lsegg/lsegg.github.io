import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBurst,
  faHandshake,
  faTheaterMasks,
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
    <div className={`Plan ${isPopular ? "popular" : ""} isCard isTranslatedY`}>
      {isPopular && <div className="Plan-badge">Most Popular</div>}
      <FontAwesomeIcon className="Plan-icon" icon={iconMap[icon]} />
      <h3 className="Plan-title paragraph-medium-bold">{title}</h3>
      <div className="Plan-price">{price}</div>
      <ul className="Plan-summary">
        {features.map((feature, index) => (
          <li className="Plan-feature" key={index}>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="Plan-button paragraph-medium-bold isButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Started
      </a>
    </div>
  );
};
