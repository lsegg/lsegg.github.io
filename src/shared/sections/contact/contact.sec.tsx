import { TitleCom } from "../../components/title/title.com";
import contacting from "../../../assets/images/contacting.png";
import "./contact.scss";

export const ContactSection: any = () => {
  return (
    <section className="Contact" id="contact">
      <div className="Contact-intro">
        <TitleCom content="Get in Touch" sectionClass="Contact-title" />
        <p className="Contact-subtitle">Let's talk about everything!</p>
      </div>
      <img src={contacting} alt="contact me" className="Contact-image" />
      <div className="Contact-email">
        Don't like social networks? Send me an{" "}
        <a className="Contact-email-link" href="mailto:artofluli@gmail.com">
          email
        </a>
        . 👋
      </div>
    </section>
  );
};
