import programming from "../../../assets/images/programming.png";
import painting from "../../../assets/images/painting.png";
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
