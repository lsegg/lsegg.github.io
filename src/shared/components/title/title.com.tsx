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
  eyebrow?: string;
};

export const TitleCom: any = ({
  content,
  sectionClass,
  eyebrow,
}: TitleComProps) => {
  const iconSelection = {
    "About-title": faUserAlt,
    "Services-title": faBriefcase,
    "Portfolio-title": faLayerGroup,
    "Experience-title": faGraduationCap,
    "Reviews-title": faUsers,
    "Contact-title": faComments,
    "Home-title": faAnglesRight,
    "Blog-title": faBookmark,
    "Subscription-title": faBookmark,
  };

  return (
    <div className={`Title ${sectionClass}`} data-reveal>
      <FontAwesomeIcon
        className="Title-icon"
        aria-hidden="true"
        icon={
          iconSelection[sectionClass as keyof typeof iconSelection] ??
          faAnglesRight
        }
      />
      {eyebrow && <p className="Title-eyebrow micro-label">{eyebrow}</p>}
      <div className="Title-headline">
        <h2 className="Title-content title-x-large-semibold">{content}</h2>
        <span className="Title-rule" aria-hidden="true"></span>
      </div>
    </div>
  );
};
