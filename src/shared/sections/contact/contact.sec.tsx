import { TitleCom } from "../../components/title/title.com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArtstation,
  faBehance,
  faDeviantart,
  faDribbble,
  faGithub,
  faHackerrank,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.scss";

export const ContactSection: any = () => {
  return (
    <section className="Contact" id="contact">
      <div className="Contact-intro">
        <TitleCom content="Get in Touch" sectionClass="Contact-title" />
        <p className="Contact-subtitle">Let's talk about everything!</p>
      </div>
      <div className="Contact-network">
        <div className="Contact-network-wrapper isContainer">
          <div className="Contact-network-wrapper-coding">
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.linkedin.com/in/lucia-seggiaro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faLinkedin}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://github.com/lsegg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faGithub}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.hackerrank.com/lu_seggiaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faHackerrank}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://twitter.com/artofluli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faTwitter}
              />
            </a>
          </div>
          <div className="Contact-network-wrapper-drawing">
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.artstation.com/artofluli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faArtstation}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.behance.net/artofluli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faBehance}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.deviantart.com/artofluli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faDeviantart}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://dribbble.com/artofluli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faDribbble}
              />
            </a>
            <a
              className="SiteInConstruction-paragraph-link"
              href="https://www.instagram.com/artofluli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Contact-network-icon"
                icon={faInstagram}
              />
            </a>
          </div>
        </div>
        <div className="Contact-network-email">
          Don't like social networks? Send me an{" "}
          <a
            className="Contact-network-email-link"
            href="mailto:artofluli@gmail.com"
          >
            email
          </a>
          . 👋
        </div>
      </div>
    </section>
  );
};
