import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBrush } from "@fortawesome/free-solid-svg-icons";
import "./job.scss";

type JobComProps = {
  icon: string;
  title: string;
  description: string;
};

export const JobCom: any = ({ icon, title, description }: JobComProps) => {
  return (
    <article
      className={`Job Job-${title
        .toLowerCase()
        .replace(/\s+/g, "-")} isContainer`}
      key={title}
    >
      <div className="Job-header">
        <FontAwesomeIcon
          className="Job-header-icon"
          icon={icon === "code" ? faCode : faBrush}
        />
        <h3 className="Job-title title-large-semibold">{title}</h3>
      </div>
      <p className="Job-description">{description}</p>
    </article>
  );
};
