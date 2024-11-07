import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faBriefcase,
  faLayerGroup,
  faGraduationCap,
  faComments,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./title.scss";

type TitleComProps = {
  content: string;
  sectionClass: string;
};

export const TitleCom: any = ({ content, sectionClass }: TitleComProps) => {
  const iconSelector = (sectionClass: string) => {
    switch (sectionClass) {
      case "About-title":
        return faUserAlt;
      case "Services-title":
        return faBriefcase;
      case "Portfolio-title":
        return faLayerGroup;
      case "Experience-title":
        return faGraduationCap;
      case "Contact-title":
        return faComments;
      default:
        return faAnglesRight;
    }
  };

  return (
    <div className={`Title ${sectionClass}`}>
      <h2 className="Title-content title-x-large-semibold">{content}</h2>
      <FontAwesomeIcon
        className="Title-icon"
        icon={iconSelector(sectionClass)}
      />
    </div>
  );
};
