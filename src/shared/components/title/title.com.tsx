import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faBriefcase,
  faLayerGroup,
  faGraduationCap,
  faComments,
  faUsers,
  faBookmark,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import "./title.scss";

type TitleComProps = {
  content: string;
  sectionClass: string;
};

export const TitleCom: any = ({ content, sectionClass }: TitleComProps) => {
  const iconSelection = {
    "About-title": faUserAlt,
    "Services-title": faBriefcase,
    "Portfolio-title": faLayerGroup,
    "Experience-title": faGraduationCap,
    "Reviews-title": faUsers,
    "Contact-title": faComments,
    "Home-title": faAnglesRight,
    "Blog-title": faBookmark,
  };

  return (
    <div className={`Title ${sectionClass}`}>
      <h2 className="Title-content title-x-large-semibold">{content}</h2>
      <FontAwesomeIcon
        className="Title-icon"
        icon={
          iconSelection[sectionClass as keyof typeof iconSelection] ??
          faAnglesRight
        }
      />
    </div>
  );
};
