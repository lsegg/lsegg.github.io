import { TitleCom } from "../../components/title/title.com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import contacting from "../../../assets/images/contacting.png";
import "./contact.scss";

export const ContactSection: any = () => {
  return (
    <section className="Contact" id="contact">
      <div className="Contact-wash" aria-hidden="true"></div>
      <div className="Contact-grid">
        <div className="Contact-intro">
          <TitleCom
            content="Get in Touch"
            sectionClass="Contact-title"
            eyebrow="Let's talk about everything"
          />
          <p className="Contact-subtitle paragraph-medium-regular">
            Not a fan of social networks? A plain old email works just as well.
          </p>
          <a className="Contact-email" href="mailto:artofluli@gmail.com">
            <span className="Contact-email-address">artofluli@gmail.com</span>
            <FontAwesomeIcon
              className="Contact-email-icon"
              icon={faArrowRight}
            />
          </a>
        </div>
        <img
          src={contacting}
          alt=""
          aria-hidden="true"
          className="Contact-image"
        />
      </div>
    </section>
  );
};
