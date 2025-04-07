import programming from "../../../assets/images/programming.png";
import painting from "../../../assets/images/painting.png";
import "./job.scss";

type JobComProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export const JobCom: any = ({
  title,
  description,
  onClick: onClick,
}: JobComProps) => {
  return (
    <article
      className={`Job Job-${title
        .toLowerCase()
        .replace(/\s+/g, "-")} isCard isTranslatedY`}
      key={title}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <h3 className="Job-header-title title-large-semibold">{title}</h3>
      <img
        className="Job-img"
        src={title === "Web Development" ? programming : painting}
        alt={title}
      />
      <p className="Job-description">{description}</p>
    </article>
  );
};
