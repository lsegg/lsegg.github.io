import programming from "../../../assets/images/programming.png";
import painting from "../../../assets/images/painting.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./job.scss";

type JobComProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

export const JobCom: any = ({ title, description, onClick }: JobComProps) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const className = `Job Job-${slug} isTranslatedY ${
    onClick ? "isClickable" : ""
  }`;

  const body = (
    <>
      <div className="Job-header">
        <span className="Job-header-kicker micro-label">
          {slug === "web-development" ? "Build" : "Draw"}
        </span>
        <h3 className="Job-header-title title-large-semibold">{title}</h3>
      </div>
      <img
        className="Job-img"
        src={title === "Web Development" ? programming : painting}
        alt=""
        aria-hidden="true"
      />
      <p className="Job-description paragraph-small-regular">{description}</p>
      {onClick && (
        <span className="Job-cta micro-label">
          See work
          <FontAwesomeIcon className="Job-cta-icon" icon={faArrowRight} />
        </span>
      )}
    </>
  );

  // Clickable cards need to be real buttons so keyboard users can reach them.
  return onClick ? (
    <button type="button" className={className} onClick={onClick}>
      {body}
    </button>
  ) : (
    <article className={className}>{body}</article>
  );
};
