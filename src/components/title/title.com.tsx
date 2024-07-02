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
  let icon;
  const iconSelector = (sectionClass: string) => {
    switch (sectionClass) {
      case "About-title":
        return (icon = faUserAlt);
      case "Services-title":
        return (icon = faBriefcase);
      case "Portfolio-title":
        return (icon = faLayerGroup);
      case "Experience-title":
        return (icon = faGraduationCap);
      case "Contact-title":
        return (icon = faComments);
      default:
        return (icon = faAnglesRight);
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
